import React, {Component} from 'react';
import DateTime from 'react-datetime';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import moment from 'moment';

import  { formater } from 'util/text';
import  { KeyCode } from '../util/common';
import  { ObjUtil, IDTracker } from 'util/common';
import  { Validator, BGValidator, ValidateCallback} from '../util/validator';
import { ICONS } from "./icons";
import { DialogContext, showDialog } from "./layout";

import 'react-datetime/css/react-datetime.css'
import './stylesheet.scss';

const COMPACT_DATETIME_FORMAT = "DD/MM/YYYY@HH:mm:ssZ";

function isNormalInteger(value: any): boolean {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

function isDecimal(str: string): boolean {
  return str.match(/^[-+]?[0-9]+(\.[0-9]+)?$/) != null;
}

type ELEProps = { mobile?: boolean, children?: any, className?: string, style?: any };

export class ErrorCollector {
  errors: any;
  count:  number;

  constructor() {
    this.errors = {};
    this.count = 0;
  }

  getCount() { return this.count; }

  getErrors() { return this.errors; }

  collect(name: string, error: string) {
    if(!this.errors[name]) {
      this.errors[name] = error;
      this.count++;
    }
  }

  remove(name: string) {
    if(this.errors[name]) {
      this.errors[name] = null;
      this.count--;
    }
  }

  dump() {
    console.log('ErrorCollector:');
    console.log('  count = ' + this.count);
    for(let name in this.errors) {
      console.log(`  ${name} = ${this.errors[name]}`);
    }
  }
}

export interface WInputProps extends ELEProps  {
  name: string, value: any, placeholder: any, disable?: boolean, focus?: boolean,
  validators?: Array<Validator>,
  bgValidator?: BGValidator,
  errorCollector?: ErrorCollector,
  onChange?: (oldVal: any, newVal: any) => void,
  onInputChange?: (oldVal: any, newVal: any) => void,
  onKeyDown?: (winput: WInput, event: any, keyCode: number, currInput: any) => void
};
export interface WInputState  { message: null|string, value: any, inputValue: any };
export class WInput extends Component<WInputProps, WInputState> {
  customClass: null|string;
  message:     null|string;

  constructor(props: WInputProps) {
    super(props);
    this.customClass = null;
    this.onFocus = this.onFocus.bind(this);
    this.onFocusLost = this.onFocusLost.bind(this);
    this.onChange = this.onChange.bind(this);

    this.message = null;
    this.state = this.createInitState(this.props);
  }

  componentWillMount() {
    this.onPostReceiveProps(this.props, this.state);
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(props: WInputProps) {
    let state: WInputState = this.createInitState(props);
    this.onPostReceiveProps(props, state);
    this.setState(state);
  }

  createInitState(props: WInputProps) {
    let { name, value, errorCollector, validators, disable } = props;
    let inputValue = value ? value : '';
    let state: WInputState = { message: null, value: value,  inputValue: inputValue};
    if(!disable && validators) {
      try {
        this.runValidation(value, value);
      } catch(err) {
        if(errorCollector) errorCollector.collect(name, err.message);
        state.message = err.message;
      }
    }
    return state;
  }

  getMessage() { return this.message;  }

  onPostReceiveProps(_props: WInputProps, _state: WInputState) { }

  onFocus(evt: any) {
    if(this.props.disable) return;
    evt.target.select();
    if(this.state.message) this.setState({ message: null });
  }

  onFocusLost(evt: any) {
    if(this.props.disable) return;
    this.updateValue(evt.target.value);
  }

  updateValue(newVal: any) {
    const {name, errorCollector, onInputChange} = this.props;
    let oldVal = this.state.value;
    try {
      if(newVal && newVal.trim) newVal = newVal.trim();
      let val = this.convert(newVal);
      this.message = null;
      this.setState({ message: null, value: val, inputValue: val });
      this.runValidation(oldVal, val);
      if(onInputChange) onInputChange(oldVal, val);
      this.runBGValidation(oldVal, newVal);
    } catch(err) {
      let errMsg = err.message;
      if(errorCollector) errorCollector.collect(name, errMsg);
      this.setState({ message: errMsg, inputValue: oldVal });
      this.message = errMsg;
    }
  }

  runValidation(_oldVal: any, newVal: any) {
    const {name, validators, errorCollector} = this.props;
    if(errorCollector) errorCollector.remove(name);
    if(validators != null) {
      for(let i = 0; i < validators.length; i++) {
        validators[i].validate(newVal);
      }
    }
  }

  runBGValidation(oldVal: any, newVal: any) {
    if(newVal === oldVal) return;
    const {name, bgValidator, errorCollector} = this.props;
    if(!bgValidator) return;
    let WInput = this;
    let validateCB: ValidateCallback = (validate: boolean, mesg: string) => {
      if(!validate) {
        if(errorCollector) errorCollector.collect(name, mesg);
        WInput.setState({ message: mesg, value: oldVal, inputValue: oldVal });
      }
    };
    bgValidator.validate(oldVal, newVal, validateCB);
  }

  convert(_newVal: string) { throw new Error('this method need to be implemented'); }

  onChange(e: any) {
    let oldVal = this.state.inputValue;
    let {onChange} = this.props;
    this.setState({ inputValue: e.target.value });
    if(onChange) onChange(oldVal, e.target.value);
  }

  onKeyDown(e: any) {
    let {onKeyDown} = this.props;
    if(onKeyDown) {
      let  currInput = this.state.inputValue;
      onKeyDown(this, e, e.keyCode, currInput);
    }
  }

  toDisplayValue(value: any) {
    if(!value) return '';
    return value;
  }

  _getInputType() { return 'text' ;}

  _getCustomClass() { return null; }

  render() {
    let{ style, className, name, placeholder, disable, focus} = this.props;
    let inputValue = this.state.inputValue;
    let displayValue = this.toDisplayValue(inputValue);
    let classes = className ? `form-control ${className}` : 'form-control';
    if(this.state.message) {
      displayValue = this.state.message;
      classes = classes + ' form-control-error';
    }
    if(this.customClass) classes = classes + ' ' + this.customClass;
    let type = this._getInputType();
    return (
      <input style={style} className={classes} autoFocus={focus ? true : false} type={type}
        name={name} value={displayValue} placeholder={placeholder} readOnly={disable} autoComplete="off"
        onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onFocusLost} onKeyDown={(e) => this.onKeyDown(e)}/>
    );
  }
}

export class WStringInput extends WInput {
  convert(newVal: string) { return newVal ; }
}

export class WPasswordInput extends WStringInput {
  _getInputType() { return 'password' ;}
}

export class WTextInput extends WStringInput {
  render() {
    let { style, className, name, placeholder, disable} = this.props;
    let inputValue = this.state.inputValue;
    let displayValue = this.toDisplayValue(inputValue);
    if(this.state.message) displayValue = this.state.message;
    className = className ? `${className} form-control` : 'form-control';
    let html = (
      <textarea style={style} className={className} name={name}  placeholder={placeholder} readOnly={disable}
        onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onFocusLost} value={displayValue}></textarea>
    );
    return html;
  }
}

export class WIntInput extends WInput {
  onPostReceiveProps(_props: WInputProps, _state: WInputState) { this.customClass = 'input-number'; }

  convert(newVal: string) {
    if(isNormalInteger(newVal)) return parseInt(newVal, 10);
    throw new Error(newVal + ' is not a number');
  }
}

export class WLongInput extends WInput {
  onPostReceiveProps(_props: WInputProps, _state: WInputState) { this.customClass = 'input-number'; }

  convert(value: string) {
    if(isNormalInteger(value)) return parseInt(value, 10);
    throw new Error(value + ' is not a long number');
  }
}


export class WFloatInput extends WInput {
  onPostReceiveProps(_props: WInputProps, _state: WInputState) { this.customClass = 'input-number'; }

  convert(value: string) {
    if(!value) return '';
    if(isDecimal(value)) return parseFloat(value);
    throw new Error(value + ' is not a float number');
  }
}

export class WDoubleInput extends WInput {
  onPostReceiveProps(_props: WInputProps, _state: WInputState) { this.customClass = 'input-number'; }

  convert(value: string) {
    value = value.replace(/,/g, '');
    if(isDecimal(value)) return parseFloat(value);
    throw new Error(`${value} is not a double number`);
  }

  toDisplayValue(value: any) {
    if(!value) return '0';
    if(!value || typeof value === 'string' || value instanceof String)  return value;
    return formater.number(value);
  }
}

export class WNumberInput extends WDoubleInput {
  toDisplayValue(value: any) {
    if(!value) return '0';
    if(!value || typeof value === 'string' || value instanceof String)  return value;
    return formater.number(value);
  }
}

export class WPercentInput extends WInput {
  onPostReceiveProps(_props: WInputProps, _state: WInputState) { this.customClass = 'input-number'; }

  convert(value: string) {
    value = value.replace(/%/g, '');
    value = value.replace(/,/g, '');
    if(isDecimal(value)) return parseFloat(value) / 100;
    throw new Error(value +  ' is not a double number');
  }

  toDisplayValue(value: any) {
    if(!value) return '0';
    if(!value || typeof value === 'string' || value instanceof String)  return value;
    return formater.percent(value);
  }
}


export interface WArrayInputProps  {
  name: string, value: any, placeholder: any, disable?: boolean, disableAdd?: boolean,
  validators?: Array<Validator>,
  errorCollector?: ErrorCollector,
  onChange?: any,
  onInputChange: any,
  onKeyDown?: any
};
export interface WArrayInputState {
  inputValues: Array<any>,
  oldValues: Array<any>
};
class WArrayInput extends Component<WArrayInputProps, WArrayInputState> {
  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps: WArrayInputProps) {
    let values = nextProps.value;
    let inputValues = [];
    if(values != null && values.length > 0) {
      for(let i = 0; i < values.length; i++) {
        inputValues.push({ message: null, value: values[i], inputValue: values[i]});
      }
    }
    let newState: WArrayInputState = { inputValues: inputValues, oldValues: values };
    this.setState(newState);
  }

  onFocus(idx: number, _evt: any) {
    let inputValues = this.state.inputValues;
    inputValues[idx].message = null;
    this.setState({inputValues: inputValues});
    this.forceUpdate();
  }

  onFocusLost(idx: number, evt: any) {
    const {name, validators, errorCollector, onInputChange} = this.props;
    let {inputValues} = this.state;
    let newVal = this.convert(evt.target.value.trim());

    try {
      if(validators != null) {
        for(let i = 0; i < validators.length; i++) {
          validators[i].validate(newVal);
        }
      }
      if(errorCollector) errorCollector.remove(name);

      inputValues[idx].value = newVal;

      if(onInputChange) {
        var values = [];
        for(let i = 0; i < inputValues.length; i++) {
          values.push(inputValues[i].value);
        }
        onInputChange(this.state.oldValues, values);
        this.setState({ oldValues: values });
      }
    } catch(err) {
      let inputValues = this.state.inputValues;
      inputValues[idx].message = err.toString();
      this.setState({inputValues: inputValues});
    }
  }

  convert(newVal : string): any { return newVal; }

  onChange(idx: number, e: any) {
    let inputValues = this.state.inputValues;
    inputValues[idx].inputValue = e.target.value;
    this.setState({inputValues: inputValues});
  }

  onRemove(idx: number) {
    let { inputValues } = this.state;
    inputValues.splice(idx, 1);

    const {onInputChange} = this.props;
    if(onInputChange) {
      var values = [];
      for(let i = 0; i < inputValues.length; i++) {
        values.push(inputValues[i].value);
      }
      onInputChange(this.state.oldValues, values);
    }
    this.setState({inputValues: inputValues});
  }

  onAddNew() {
    let { inputValues } = this.state;
    inputValues.push({ message: null, value: '', inputValue: ''});
    this.setState({inputValues: inputValues});
  }

  isFieldEditable() { return true; }

  render() {
    const { placeholder, disable, onKeyDown} = this.props;
    let readOnly = !this.isFieldEditable() || disable ? true: false ;
    let inputValues = this.state.inputValues;
    let inputs = [];
    let renderDelete = null;
    for(let i = 0; i < inputValues.length; i++) {
      let ivalue = inputValues[i];
      let inputValue = ivalue.inputValue;
      if(ivalue.message) inputValue = ivalue.message;
      if(!readOnly) {
        renderDelete = (
          <div className="input-group-prepend">
            <Button color='link' onClick={(_evt) => this.onRemove(i)}>
              <span className={ICONS.editor.minus} />
            </Button>
          </div>
        );
      }
      inputs.push((
        <div key={i} className='input-group mb-1'>
          <input className='form-control' type={'text'}  name={`name${i}`} value={inputValue} placeholder={placeholder}
            readOnly={readOnly} onChange={(e) => this.onChange(i, e)} onFocus={(e) => this.onFocus(i, e)}
            onBlur={(e) => this.onFocusLost(i, e)} onKeyDown={onKeyDown} autoComplete='off'/>
            {renderDelete}
        </div>
      ));
    }
    let html = (
     <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
       {inputs}
       {this.renderAdd(readOnly)}
     </div>
    );
    return html;
  }

  renderAdd(readOnly: boolean) {
    if(readOnly) return null;
    const { disableAdd } = this.props;
    if(disableAdd) return null;
    let html = (
      <div>
        <Button color='link' onClick={(_evt) => this.onAddNew()}>
          <span className={ICONS.editor.plus} />
        </Button>
      </div>
    );
    return html;
  }
}

export class WStringArrayInput extends WArrayInput { convert(newVal: string) { return newVal ; } }

export class WIntArrayInput extends WArrayInput {
  convert(newVal: string) : any {
    if(isNormalInteger(newVal)) return parseInt(newVal, 10);
    throw new Error(newVal + ' is not a number');
  }
}

export class WLongArrayInput extends WArrayInput {
  convert(value: string) : any {
    if(isNormalInteger(value)) return parseInt(value, 10);
    throw new Error(value + ' is not a long number');
  }
}

export class WFloatArrayInput extends WArrayInput {
  convert(value: string) : any{
    if(isDecimal(value)) return parseFloat(value);
    throw new Error(value + ' is not a float number');
  }
}

export class WDoubleArrayInput extends WArrayInput {
  convert(value: string) : any {
    if(isDecimal(value)) return parseFloat(value);
    throw new Error(value +  ' is not a double number');
  }
}

export interface WRadioInputProps extends ELEProps {
  name: string,
  select: any,
  options: Array<any>,
  optionLabels?: Array<string>,
  disable?: boolean,
  onInputChange: (oldVal: string, newVal: string) => void
}
export interface WRadioInputState { select: string }
export class WRadioInput extends Component<WRadioInputProps, WRadioInputState> {
  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps: WRadioInputProps) {
    const { select } = nextProps;
    this.setState({ select: select  });
  }

  onSelect(idx: number) {
    const { onInputChange, options} = this.props;
    let oldVal = this.state.select;
    let newVal = options[idx];
    if(onInputChange) onInputChange(oldVal, newVal);
    this.setState({select: newVal});
  }

  render() {
    let { name,  options, optionLabels, disable, style} = this.props;
    let { select } = this.state;
    if(!optionLabels) optionLabels = options;
    let inputBlocks = [];
    for(let i = 0; i < options.length; i++) {
      let option = options[i];
      inputBlocks.push(
        <div key={i} style={{display: 'flex', flexFlow: 'row nowrap'}}>
          <input type={'radio'} name={ name } value={ option } disabled={ disable }
            checked={option === select} onChange={() => this.onSelect(i)} />
          <span className='ml-1 mr-2' style={{display: 'inline-block'}}>{optionLabels[i]}</span>
        </div>
      );
    }
    if(!style) style = { display: 'flex', flexFlow: 'row wrap', width: '100%'}
    let html = (
      <div style={style}> {inputBlocks} </div>
    );
    return html;
  }
}

export interface WCheckboxInputProps {
  name: string, label?: string, checked: boolean, disable?: boolean,
  onInputChange: (checked: boolean) => void
}
export interface WCheckboxInputState {checked: boolean}
export class WCheckboxInput extends Component<WCheckboxInputProps, WCheckboxInputState> {
  constructor(props: WCheckboxInputProps) {
    super(props);
    this.state = { checked: props.checked };
  }

  componentWillReceiveProps(nextProps: WCheckboxInputProps) {
    this.setState({ checked: nextProps.checked });
  }

  onSelect() {
    const { onInputChange } = this.props;
    let checked = !this.state.checked;
    if(onInputChange) onInputChange(checked);
    this.setState({ checked: checked});
  }

  render() {
    let { name, label, disable } = this.props;
    const { checked } = this.state;
    if(!label) {
      return (
        <input type='checkbox' name={name} value={name} disabled={disable} checked={checked} onChange={() => this.onSelect()} />
      );
    }
    let html = (
      <div style={{ display: 'flex', flexFlow: 'row wrap', width: '100%'}}>
        <input type='checkbox' name={name} value={name} disabled={disable}
          checked={checked} onChange={() => this.onSelect()} />
        <span className='ml-1 mr-2' style={{display: 'inline-block'}}>{label}</span>
      </div>
    );
    return html;
  }
}

export interface WMultiCheckboxInputProps {
  name: string,
  select:  Array<string>,
  options: Array<any>,
  optionLabels?: Array<string>,
  disable?: boolean,
  onInputChange: (oldVal: Array<string>, newVal: Array<string>) => void
}
export interface WMultiCheckboxInputState {
  select: Array<string>
  checked: Array<boolean>
}
export class WMultiCheckboxInput extends Component<WMultiCheckboxInputProps, WMultiCheckboxInputState> {
  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps: WMultiCheckboxInputProps) {
    const { select, options } = nextProps;
    let checked = [];
    for(let i = 0; i < options.length; i++) {
      checked[i] = false;
      if (select) {
        for (let j = 0; j < select.length; j++) {
          if (options[i] == select[j]) {
            checked[i] = true;
            break;
          }
        }
      }
    }
    this.setState({ select: select, checked: checked  });
  }

  onSelect(idx: number) {
    const { onInputChange, options} = this.props;
    let oldVal = this.state.select;
    this.state.checked[idx] = !this.state.checked[idx];
    let newVal = [];
    for(let i = 0; i < options.length; i++) {
      if(this.state.checked[i]) {
        newVal.push(options[i]);
      }
    }
    if(onInputChange) onInputChange(oldVal, newVal);
    this.setState({select: newVal});
  }

  render() {
    let { name,  options, optionLabels, disable } = this.props;
    let { checked } = this.state;
    if(!optionLabels) optionLabels = options;
    let inputBlocks = [];
    for(let i = 0; i < options.length; i++) {
      let option = options[i];
      inputBlocks.push(
        <div key={i} style={{display: 'flex', flexFlow: 'row nowrap'}}>
          <input type={'checkbox'} name={ name } value={ option } disabled={ disable }
            checked={checked[i]} onChange={() => this.onSelect(i)} />
          <span className='ml-1 mr-2' style={{display: 'inline-block'}}>{optionLabels[i]}</span>
        </div>
      );
    }
    let html = (
      <div style={{ display: 'flex', flexFlow: 'row wrap', width: '100%'}}>
        {inputBlocks}
      </div>
    );
    return html;
  }
}

export interface WSelectProps  {
  options: Array<any>, optionLabels?: Array<any>, select: any, disable?: boolean, style?: any,
  onSelect: (option: any) => void
};
export interface WSelectState  { select: null|any };
export class WSelect extends Component<WSelectProps, WSelectState> {
  constructor(props: WSelectProps) {
    super(props);
    this.state = { select: props.select };
  }

  componentWillReceiveProps(nextProps: WSelectProps) {
    const { select } = nextProps;
    this.setState({select: select});
  }

  onChange(event: any){
    const {options} = this.props;
    let value = event.target.value;
    for (let i = 0; i < options.length; i++) {
      if (options[i] == value) {
        if(this.props.onSelect)  this.props.onSelect(options[i]);
        break;
      }
    }
    this.setState({select: value});
  }

  render() {
    const {options, style, disable, optionLabels} = this.props;
    const {select} = this.state;
    let optionHtml = [];

    for(let i = 0; i < options.length; i++) {
      let label = options[i];
      if(optionLabels) { label = optionLabels[i]; }
      optionHtml.push((<option key={i} value={options[i]}>{label}</option>));
    }
    let html = (
      <select className='form-control' style={style}  disabled={disable}
        onChange={evt => this.onChange(evt)} value={select}>
        {optionHtml}
      </select>
    );
    return html;
  }
}


export interface WBeanSelectProps {
  fieldLabel: string, fieldCheck: string, select: any, options: Array<any>,
  disable?: boolean, style?: string,
  onSelect: (value: number) => void
};
export interface WBeanSelectState { select: any };
export class WBeanSelect extends Component<WBeanSelectProps, WBeanSelectState> {
  open: boolean;

  constructor(props: WBeanSelectProps) {
    super(props);
    this.open = false;
    this.state = { select: this.props.select };
  }

  onSelect(idx: number) {
    let {options, fieldCheck, onSelect} = this.props;
    let newOpt = options[idx];
    if(onSelect) onSelect(newOpt);
    this.setState({select: newOpt[fieldCheck]});
  }

  toggle() {
    this.open = !this.open;
    this.forceUpdate();
  }

  render() {
    const { options, fieldLabel, fieldCheck } = this.props;
    let {select} = this.state;
    let optHtml = [];
    let selectLabel = select;
    for(let i = 0; i < options.length; i++) {
      let opt = options[i];
      let checked = opt[fieldCheck] === select;
      if(checked) selectLabel = opt[fieldLabel];
      optHtml.push((
        <DropdownItem key={i} onClick={() => this.onSelect(i)}>
          <input type="checkbox" defaultChecked={checked} />
          <label className='pl-2'>{opt[fieldLabel]}</label>
        </DropdownItem>
      ));
    }
    var htmlTemplate = (
      <Dropdown isOpen={this.open} toggle={() => this.toggle()}>
        <DropdownToggle caret>{selectLabel}</DropdownToggle>
        <DropdownMenu>{optHtml}</DropdownMenu>
      </Dropdown>
    );
    return htmlTemplate;
  }
}

export interface WDateTimeProps {
  value: any,
  dateFormat?: string,
  timeFormat: any,
  disable?: boolean,
  onCommitChange?: (moment: any) => void
};
export interface WDateTimeState { value: ''|Date};
export class WDateTime extends Component<WDateTimeProps, WDateTimeState> {
  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps: WDateTimeProps) {
    const { value } = nextProps;
    this.setState({value: value});
  }

  onChange(value: any) {
    this.setState({value: value});
    if(value === '') {
      let {onCommitChange} = this.props;
      if(onCommitChange) onCommitChange(null);
    }
  }

  onBlur(datetime: any) {
    if (typeof datetime === 'string' || datetime instanceof String) {
      if(!datetime) datetime = '';
      else datetime = this.props.value
    }
    this.setState({ value: datetime });
    let { onCommitChange } = this.props;
    if(onCommitChange) onCommitChange(datetime);
  }

  render() {
    let {dateFormat, timeFormat, disable} = this.props;
    const {value} = this.state;

    if(!dateFormat) dateFormat = 'DD-MM-YYYY';
    if(!timeFormat) timeFormat = false;
    return (
      <div className='d-flex justify-content-end bg-light'>
        <DateTime value={value} dateFormat={dateFormat} timeFormat={timeFormat}
                  inputProps={{disabled: disable}} closeOnSelect={true}
                  onChange={(value) => this.onChange(value)}
                  onBlur={(moment)  =>  this.onBlur(moment) } />
      </div>
    );
  }
}

interface WAutoCompleteProps {
  value: any, inputField?: string, descriptionField?: string, autofocus?: boolean, disable?: boolean, style?: any,
  validators?: Array<Validator>,
  onInputChange: (selectBean: null|any, oldVal: string, newVal: string) => void,
  onCreateNew?: (WAutoComplete: WAutoComplete) => void;
  filter: (exp: string, onChangeCallback: (options: Array<any>) => void) => void,
};
interface WAutoCompleteState {
   input: any, dropdown: boolean, options: Array<any>, currSelect: number, 
   focus: boolean, validated: boolean
};
export class WAutoComplete extends Component<WAutoCompleteProps, WAutoCompleteState> {
  autoCompleteInput: any;
  inputWidth: number = 200;
  errorMessage: null|string = null;

  constructor(props: WAutoCompleteProps) {
    super(props);
    let { value } = props;
    this.autoCompleteInput = React.createRef()
    this.onFocus = this.onFocus.bind(this);
    this.onFocusLost = this.onFocusLost.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    let validated = value ? true : false ;
    this.state = { 
      input: value ? value: '', dropdown: false, options: [], currSelect: -1, 
      focus: false, validated: validated 
    };
    if(!validated) this.runInitValidation(null ,value, value);
  }

  componentWillReceiveProps(nextProps: WAutoCompleteProps) {
    this.autofocus(nextProps);
    let { value } = nextProps;
    if(value === undefined) value = ''
    let validated = value ? true : false ;
    this.setState({ input: value, dropdown: false, options: [], currSelect: -1, validated: validated });
    if(!validated) this.runValidation(null ,value, value);
  }

  componentDidMount() {
    this.inputWidth = this.autoCompleteInput.current.offsetWidth
  }

  autofocus(props: WAutoCompleteProps) {
    if (props.autofocus) {
      this.inputWidth = this.autoCompleteInput.current.offsetWidth
      this.autoCompleteInput.current.focus();
    }
  }

  onFocus(evt: any) {
    if(this.props.disable) return;
    evt.target.select();
    this.setState({focus: true})
  }

  onFocusLost(_evt: any) {
    let thisUI = this;
    setTimeout(function() {
      if(!thisUI.state.validated) {
        thisUI.updateValue(null, '');
        thisUI.setState({ focus: false })
      } else {
        thisUI.setState({ focus: false, dropdown: false, currSelect: -1 }) 
      } 
    }, 200);
  }

  runInitValidation(_bean: any, _oldVal: any, newVal: any) {
    const { validators } = this.props;
    if (!validators)  return;
    try {
      for (let i = 0; i < validators.length; i++) {
        validators[i].validate(newVal);
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  runValidation(_bean: any, _oldVal: any, newVal: any) {
    const { validators } = this.props;
    if (!validators) return true;
    try {
      for (let i = 0; i < validators.length; i++) {
        validators[i].validate(newVal);
      }
    } catch (err) {
      this.errorMessage = err.message;
      this.setState({ dropdown: false, input: '', currSelect: -1, validated: false });
      return false;
    }
    this.errorMessage = null;
    this.setState({ validated: true });
    return true;
  }

  updateValue(bean: null | any, newVal: any) {
    const { onInputChange } = this.props;
    let oldVal = this.state.input;
    if (newVal && newVal.trim) newVal = newVal.trim();
    let validate = this.runValidation(bean, oldVal, newVal);
    if(validate) {
      this.setState({ dropdown: false, input: newVal, currSelect: -1 });
      if (onInputChange) onInputChange(bean, oldVal, newVal);
    }
  }

  /** 
   * 1. onKeyDown is called before onChange  
   * 2. onChange won't be called for certain key such ENTER, ESC...
   */
  onKeyDown(e: any) {
    const {onCreateNew} = this.props ;
    let keyCode = e.keyCode;
    let {options, currSelect} = this.state;

    let WAutoComplete = this;
    setTimeout(function() {
      if(keyCode === KeyCode.ENTER) {
        WAutoComplete.onSelectOption(WAutoComplete.state.currSelect);
      }
    }, 200);
    if(keyCode === KeyCode.ARROW_UP) {
      if(currSelect - 1 >= 0) {
        this.setState({currSelect: currSelect - 1});
      }
    } else if(keyCode === KeyCode.ARROW_DOWN) {
      if(currSelect + 1 < options.length) {
        this.setState({currSelect: currSelect + 1});
      } else if(currSelect + 1 == options.length && onCreateNew) {
        this.setState({currSelect: currSelect + 1});
      }
    } else if(keyCode === KeyCode.ESC) {
      this.setState({dropdown: false, input: '', currSelect: -1, validated: false});
    }
  }

  onChange(e: any ) {
    let value = e.target.value;
    let {filter } = this.props;
    this.setState({input: value, validated: false});
    if (filter) {
      let onChangeCallback = (options: Array<any>) => {
        let currSelect = options.length > 0 ? 0 : -1;
        let state: any = { options: options, dropdown: true, currSelect: currSelect };
        this.setState(state);
      }
      filter(value, onChangeCallback);
    }
  }

  onSelectOption(idx: number) {
    let {options} = this.state;
    let { onCreateNew, inputField} = this.props;
    if(idx == options.length && onCreateNew) {
      onCreateNew(this);
      this.setState({ input: '', options: [], dropdown: false });
      return;
    }
    let selectOpt = options[idx];
    let newVal = null;
    if(inputField) {
      newVal = selectOpt[inputField];
    } else {
      newVal = selectOpt;
    }
    this.updateValue(selectOpt, newVal);
  }

  primitiveOptionRender(options: Array<any>, _selIndex: number) {
    let optionHtml = [];
    let max = options.length;
    if(max > 15) max = 15;
    for(let i = 0; i < max; i++) {
      let className = i === this.state.currSelect ? 'option-selected' : 'option';
      let active = false;
      let {currSelect} = this.state;
      if(currSelect === i) active = true;
      optionHtml.push((
        <DropdownItem key={i} active={active} style={{width: '99%'}}>
          <div key={i} className={className} onClick={() => this.onSelectOption(i)}>
            {options[i]}
          </div>
        </DropdownItem>
      ));
    }
    if(options.length > max) {
      optionHtml.push((
        <div key='more' className='more'>...</div>
      ));
    }
    return optionHtml;
  }

  optionRender(options: Array<any>, inputField: string, descriptionField: string, _selIndex: number) {
    let optionHtml = [];
    let max = options.length;
    let { currSelect } = this.state;
    if(max > 15) max = 15;
    for(let i = 0; i < max; i++) {
      let opt = options[i];
      let active = false;
      if(currSelect === i) active = true;
      optionHtml.push((
        <DropdownItem key={i} active={active} style={{width: 'calc(100% - 5px)'}}>
          <div className='d-flex justify-content-between' key={i} onClick={() => this.onSelectOption(i)}>
            <div>{opt[inputField]}</div>
            <div>{opt[descriptionField]}</div>
          </div>
        </DropdownItem>
      ));
    }
    if(options.length > max) {
      optionHtml.push((
        <div key='more' className='more'>...</div>
      ));
    }
    const { onCreateNew } = this.props;
    if(onCreateNew) {
      optionHtml.push(
        <DropdownItem key={'new'} active={currSelect == options.length} style={{width: 'calc(100% - 5px)'}}>
          <div className='btn-link' onClick={(_evt) => this.onSelectOption(options.length)}>Create New</div>
        </DropdownItem>
      );
    }

    return optionHtml;
  }

  toggle() { }

  render() {
    let { dropdown, options, focus } = this.state;
    let { inputField, descriptionField, disable, autofocus} = this.props;

    let dropdownContent = null;
    if(dropdown) {
      let optionHtml = null;
      if(inputField && descriptionField) {
        optionHtml = this.optionRender(options, inputField, descriptionField, 0);
      } else {
        optionHtml = this.primitiveOptionRender(options, 0);
      }
      dropdownContent = (
        <DropdownMenu style={{width: '100%', minHeight: '20px'}}>
          {optionHtml}
        </DropdownMenu>
      )
    }

    let displayValue = this.state.input;
    let classes = 'form-control';
    if(this.errorMessage && !focus) {
      displayValue = this.errorMessage;
      classes = classes + ' form-control-error';
    }
    let html = (
      <div className='w-autocomplete' style={{flex: '1 0 auto'}}>
        <Dropdown isOpen={this.state.dropdown} toggle={this.toggle}>
          <DropdownToggle style={{background: 'none', border: 'none', padding: '0px', width: '100%'}}>
            <input className={classes} ref={this.autoCompleteInput} value={displayValue} 
              readOnly={disable} autoComplete="off" type={'text'} autoFocus={autofocus}
              onKeyDown={this.onKeyDown} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onFocusLost} />
          </DropdownToggle>
          {dropdownContent}
        </Dropdown>
      </div>
    );
    return html;
  }
}

export interface BBFieldProps extends ELEProps {
  bean: any, field: string, placeholder?: string, disable?: boolean, focus?: boolean,
  validators?: Array<Validator>,
  bgValidator?: BGValidator,
  errorCollector?: ErrorCollector,
  onKeyDown?: (winput: WInput, event: any, keyCode: number, currInput: any) => void,
  onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBField extends Component<BBFieldProps, {}> {
  getWInput(): null|WInput { return null; }

  onWInputChange(oldVal: any, newVal: any) {
    const {bean, field, onInputChange} = this.props;
    bean[field] = newVal;
    if(onInputChange) onInputChange(bean, field, oldVal, newVal);
  }

  createWInput() {
    const {bean, field, validators, bgValidator, errorCollector, focus, placeholder,style, className, disable, onKeyDown} = this.props;
    let WInput: any = this.getWInput();
    let html = (
      <WInput style={style} className={className} name={field} value={bean[field]} placeholder={placeholder} 
        disable={disable} focus={focus} onKeyDown={onKeyDown} validators={validators} bgValidator={bgValidator}
        errorCollector={errorCollector} onInputChange={(oldVal: any, newVal: any) => this.onWInputChange(oldVal, newVal)} />
    );
    return html;
  }

  render() { return this.createWInput(); }
}

export class BBStringField extends BBField { getWInput() : any { return WStringInput; } }

export class BBStringArrayField extends BBField { getWInput(): any { return WStringArrayInput; } }

export class BBTextField extends BBField {
  createWInput() {
    const {style, className, bean, field, placeholder, disable, onKeyDown} = this.props;
    let html = (
      <WTextInput style={style} className={className} name={field} value={bean[field]} placeholder={placeholder} disable={disable}
        onKeyDown={onKeyDown} onInputChange={(oldVal, newVal) => this.onWInputChange(oldVal, newVal)}/>
    );
    return html;
  }
}

export class BBPasswordField extends BBField { getWInput() : any { return WPasswordInput;} }

export class BBIntField extends BBField { getWInput(): any { return WIntInput; } }
export class BBIntArrayField extends BBField { getWInput(): any { return WIntArrayInput; } }

export class BBLongField extends BBField { getWInput(): any { return WLongInput; } }
export class BBLongArrayField extends BBField { getWInput(): any { return WLongArrayInput; } }

export class BBFloatField extends BBField { getWInput(): any { return WFloatInput; } }
export class BBFloatArrayField extends BBField { getWInput(): any { return WFloatArrayInput; } }

export class BBDoubleField extends BBField { getWInput(): any { return WDoubleInput; } }

export class BBNumberField extends BBField { getWInput(): any { return WNumberInput; } }

export class BBCurrencyField extends BBField { getWInput(): any { return WNumberInput; } }

export class BBPercentField extends BBField { getWInput(): any { return WPercentInput; } }

export class BBDoubleArrayField extends BBField { getWInput(): any { return WDoubleArrayInput; } }

export interface BBRadioInputFieldProps extends ELEProps {
  bean: any,
  field: string,
  options: Array<any>,
  optionLabels?: Array<string>,
  disable?: boolean,
  onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBRadioInputField extends Component<BBRadioInputFieldProps, {}> {
  onWInputChange(oldVal: any, newVal: any) {
    const {bean, field, onInputChange} = this.props;
    bean[field] = newVal;
    if(onInputChange) onInputChange(bean, field, oldVal, newVal);
  }

  render() {
    const {bean, field, options, optionLabels, disable, style, className} = this.props;
    let id = IDTracker.next();
    let html = (
      <WRadioInput style={style} className={className} disable={disable}
        name={`field_${id}`} options={options} optionLabels={optionLabels} select={bean[field]} 
        onInputChange={(oldVal, newVal) => this.onWInputChange(oldVal, newVal)}/>
    );
    return html;
  }
}

export interface BBCheckboxFieldProps {
  bean: any, field: string, value: any, label?: string, disable?: boolean,
  onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBCheckboxField extends Component<BBCheckboxFieldProps, {}> {
  onWInputChange(checked: boolean) {
    const {bean, field, value, onInputChange} = this.props;
    if(typeof value === "boolean") bean[field] = checked;
    else bean[field] = checked ? value : null;
    if(onInputChange) onInputChange(bean, field, !checked, checked);
  }

  render() {
    const {bean, field, label, disable} = this.props;
    let checked = bean[field] ? true : false;
    let html = (
      <WCheckboxInput label={label} name={field} checked={checked} disable={disable}
        onInputChange={(checked: boolean) => this.onWInputChange(checked)}/>
    );
    return html;
  }
}

export interface BBMultiCheckboxInputFieldProps {
  bean: any,
  field: string,
  options: Array<any>,
  optionLabels?: Array<string>,
  disable?: boolean,
  onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBMultiCheckboxInputField extends Component<BBMultiCheckboxInputFieldProps, {}> {
  onWInputChange(oldVal: any, newVal: any) {
    const {bean, field, onInputChange} = this.props;
    bean[field] = newVal;
    if(onInputChange) onInputChange(bean, field, oldVal, newVal);
  }

  render() {
    const {bean, field, options, optionLabels, disable} = this.props;
    let html = (
      <WMultiCheckboxInput name={field} options={options} optionLabels={optionLabels} select={bean[field]} disable={disable}
        onInputChange={(oldVal, newVal) => this.onWInputChange(oldVal, newVal)}/>
    );
    return html;
  }
}

export interface BBSelectFieldProps {
  bean: any, field: string, options: Array<any>, optionLabels?: Array<any>, disable?: boolean, style?: any,
  onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBSelectField extends Component<BBSelectFieldProps, {}> {

  constructor(props: BBSelectFieldProps) {
    super(props);
    const {bean, field, options} = this.props;
    if (options.length > 0 && bean[field] == null) { bean[field] = options[0]; }
  }

  componentWillReceiveProps(nextProps: BBSelectFieldProps) {
    const {bean, field, options} = nextProps;
    if (options.length > 0 && bean[field] == null) { bean[field] = options[0]; }
  }

  onSelect(newVal: any) {
    const {bean, field, onInputChange} = this.props;
    let oldVal = bean[field];
    bean[field] = newVal;
    if(onInputChange) onInputChange(bean, field, oldVal, newVal);
  }

  render() {
    const {bean, field, options, style, disable, optionLabels} = this.props;
    let html = (
      <WSelect style={style} options={options} optionLabels={optionLabels} select={bean[field]}
        disable={disable} onSelect={(value) => this.onSelect(value)}/>
    );
    return html;
  }
}

export interface BBBeanSelectFieldProps {
  bean: any, field: string, fieldCheck: string, fieldLabel: string, disable?: boolean, options: Array<any>,
  onInputChange: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBBeanSelectField extends Component<BBBeanSelectFieldProps,{}> {
  onSelect(opt: any) {
    const {bean, field, fieldCheck, onInputChange} = this.props;
    let oldVal = bean[field];
    bean[field] = opt[fieldCheck];
    if(onInputChange) {
      onInputChange(bean, field, oldVal, opt);
    }
  }

  render() {
    const {bean, field, options, fieldLabel, fieldCheck, disable} = this.props;
    let html = (
      <WBeanSelect options={options} fieldLabel={fieldLabel} fieldCheck={fieldCheck} select={bean[field]}
        disable={disable} onSelect={(opt) => this.onSelect(opt)}/>
    );
    return html;
  }
}

export interface BBDateTimeFieldProps {
  bean: any, field: string, commitFormat?: 'date'|string,
  dateFormat?: any, timeFormat: any, disable?: boolean,
  onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void
};
export class BBDateTimeField extends Component<BBDateTimeFieldProps, {}> {
  onInputChange(moment: any) {
    let {bean, field, commitFormat, onInputChange} = this.props;
    if(!commitFormat) commitFormat = COMPACT_DATETIME_FORMAT;
    let oldVal = bean[field];
    let value = null;

    if(moment) {
      value  = moment.format(commitFormat);
      //moment format time zone as DD/MM/YYYY@HH:mm:ss+HH:mm while java format DD/MM/YYYY@HH:mm:ss+HHmm
      //Need to remove ':' character in timezone
      value = value.slice(0, value.length - 3) + value.slice(value.length - 2);
    }
    bean[field] = value;

    if(onInputChange) onInputChange(bean, field, oldVal, bean[field]);
  }

  render() {
    let {bean, field, commitFormat, dateFormat, timeFormat, disable} = this.props;
    if(timeFormat === true) timeFormat = 'HH:mm';
    if(!commitFormat) commitFormat = COMPACT_DATETIME_FORMAT;

    let value = bean[field];
    if('date' === commitFormat) {
    } else {
      if(value) {
        value = moment(value, commitFormat);
      } else {
        value = '';
      }
    }
    let html = (
      <WDateTime value={value} dateFormat={dateFormat} timeFormat={timeFormat} disable = {disable}
        onCommitChange={(moment) => this.onInputChange(moment)}/>
    );
    return html;
  }
}

export interface BBMultiLabelSelectorProps {
  className?: string, style?: any,
  labelBeans: Array<any>, labelField: string,
  onLabelClick?: (bean: any) => void;
  context?: any, disable?: boolean;
};
export class BBMultiLabelSelector<T extends BBMultiLabelSelectorProps> extends Component<T, {}> {
  dialogContext: DialogContext|null = null;

  onCustomSelect() {
    let ui = ( <div style={{height: 300}}>Custom Select</div> )
    this.dialogShow('Custom Select', 'md', ui);
  }

  dialogShow(title: string, size: 'xs'|'sm'|'md'|'lg'|'xl', ui: any) {
    this.dialogContext = new DialogContext();
    showDialog(title, size, ui, this.dialogContext);
  }

  dialogClose() {
    if(this.dialogContext) {
      this.dialogContext.getDialog().doClose();
      this.dialogContext = null;
    }
  }

  onRemove(idx: number) {
    let { labelBeans } = this.props ;
    labelBeans.splice(idx, 1);
    this.forceUpdate();
  }

  onLabelClick(bean: any) {
    let { onLabelClick} = this.props ;
    if(onLabelClick) onLabelClick(bean);
  }

  render() {
    let { className, style, labelBeans, labelField } = this.props ;
    let labelWidgets = [];

    for(let i = 0; i < labelBeans.length; i++) {
      let bean = labelBeans[i];
      let label = bean[labelField];
      let widget = (
        <div className='d-inline border p-1 mr-1'>
          <Button className='p-0' color='outline' size='small' onClick={ () => this.onLabelClick(bean) }>{label}</Button>
          <Button color="link" onClick={() => this.onRemove(i) }>
            <span className={`${ICONS.editor.remove} ml-1`} />
          </Button>
        </div>
      );
      labelWidgets.push(widget);
    }
    let html = (
      <div className={`py-1 ${className}`} style={style}>
        {labelWidgets}
        <Button color='link' onClick={() => this.onCustomSelect()}>
          <span className={ICONS.editor.plus} />
        </Button>
      </div>
    );
    return html;
  }
}

export interface BBReferenceProps {
  className?: string, style?: any,
  bean: any, field: string,
  disable?: boolean;
  onInfo: () => void;
};
export class BBReference<T extends BBReferenceProps> extends Component<T, {}> {
  render() {
    let { className, style, bean, field, onInfo } = this.props ;
    let value = bean[field];
    let refBtn = null;
    if(value) {
      refBtn = (
        <Button color='link' onClick={() => onInfo()}>
          <span className={ICONS.editor.info} />
        </Button>
      );
    }
    let html = (
      <div className={`d-flex ${className}`} style={style}>
        <input className={'form-control'} name={field} value={value} disabled/>
        {refBtn}
      </div>
    );
    return html;
  }
}

export interface BBStringFieldCallableServerProps extends BBFieldProps {
  onCallServer: () => void
}
export class BBStringFieldCallableServer extends Component<BBStringFieldCallableServerProps> {
  render() {
    let { bean, field, placeholder, disable, focus, validators, bgValidator, errorCollector } = this.props;
    let { onKeyDown, onInputChange, onCallServer } = this.props;
    let callServerBtn = null;
    if(!disable) {
      callServerBtn = ( <Button color='link' onClick={onCallServer}><span className={ICONS.editor.refresh}/></Button> );
    }
    let html = (
      <div className='d-flex'>
        <BBStringField key={IDTracker.next()} 
          bean={bean} field={field} placeholder={placeholder} disable={disable} errorCollector={errorCollector} 
          focus={focus} validators={validators} bgValidator={bgValidator} onKeyDown={onKeyDown} onInputChange={onInputChange}/>
        {callServerBtn}
      </div>
    );
    return html;
  }
}

export interface BBAutoCompleteProps {
  options: Array<any>, bean: any, field: string,
  inputField?: string, descriptionField?: string, /*for complex input bean*/
  validators?: Array<Validator>,
  autofocus?: boolean,
  context?: any, disable?: boolean, style?: any, hideMoreInfo?: boolean;
  onInputChange?: (bean: any, field: string, selectOpt: any, oldVal: any, newVal: any) => void
};
export class BBAutoComplete<T extends BBAutoCompleteProps> extends Component<T, {}> {
  dialogContext: DialogContext|null = null;

  filter(exp: string, onChangeCallback: (selOptions: Array<any>) => void) : void {
    const { options } = this.props;
    let selOptions = this.doFilter(exp, options);
    onChangeCallback(selOptions);
  }

  doFilter(exp: string, records: Array<any>) {
    let selRecords = [];
    for (let i = 0; i < records.length; i++) {
      let record = records[i];
      if (ObjUtil.recordHasExpression(record, exp)) {
        selRecords.push(record);
      }
    }
    return selRecords;
  }

  onCreateNew?: (WAutoComplete: WAutoComplete) => void;

  getContext() { return this.props.context; }

  onInputChange(selectOpt: null | any, oldVal: any, newVal: any) {
    const { bean, field, inputField, onInputChange } = this.props;
    if (onInputChange) {
      onInputChange(bean, field, selectOpt, oldVal, newVal);
    } else {
      if (inputField) {
        //option is a bean
        bean[field] = newVal[inputField];
      } else {
        bean[field] = newVal;
      }
      this.forceUpdate();
    }
  }

  onShowMoreInfo(value: any) {
    let ui = ( <pre style={{height: 500}}>Custom More Info {JSON.stringify(value, null, '  ')}</pre> )
    this.dialogShow('More Info', 'md', ui);
  }

  onCustomSelect() {
    let ui = ( <div style={{height: 300}}>Custom Select</div> )
    this.dialogShow('Custom Select', 'md', ui);
  }

  dialogShow(title: string, size: 'xs'|'sm'|'md'|'lg'|'xl', ui: any) {
    this.dialogContext = new DialogContext();
    showDialog(title, size, ui, this.dialogContext);
  }

  dialogClose() {
    if(this.dialogContext) {
      this.dialogContext.getDialog().doClose();
      this.dialogContext = null;
    }
  }

  render() {
    const {bean, field, inputField, descriptionField, validators, disable, style, autofocus} = this.props;
    let onCreateNew = undefined;
    if(this.onCreateNew) onCreateNew = this.onCreateNew

    let inputValue = bean[field];
    let html = (
      <div className='input-group'>
        <WAutoComplete key={IDTracker.next()} style={style} value={inputValue} autofocus={autofocus}
          inputField={inputField} descriptionField={descriptionField} validators={validators} disable={disable}
          filter={(val, onChangeCallback) => this.filter(val, onChangeCallback)}
          onInputChange={(selectBean, oldVal, newVal) => this.onInputChange(selectBean, oldVal, newVal)} onCreateNew={onCreateNew}/>
        {this.renderControl()}
      </div>
    );
    return html;
  }

  renderControl() {
    const {bean, disable, hideMoreInfo} = this.props;
    if(disable) return null;
    let moreInfoBtn = null ;
    if(!hideMoreInfo) {
      moreInfoBtn = (
        <Button color='link' onClick={() => this.onShowMoreInfo(bean)}>
          <span className={ICONS.editor.info} />
        </Button>
      );
    }
    let html = (
      <div className="input-group-prepend">
        { moreInfoBtn }
        <Button color='link' onClick={() => this.onCustomSelect()}>
          <span className={ICONS.editor.search} />
        </Button>
      </div>
    );
    return html;
  }
}