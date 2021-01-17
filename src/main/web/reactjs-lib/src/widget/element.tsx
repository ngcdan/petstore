import React from 'react';
import { Component } from 'react';

import {
  Button, ButtonProps, ButtonGroup,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledPopover, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import {IDTracker} from "util/common";

import 'bootstrap/dist/css/bootstrap.css';

export interface ButtonActionModel {
  name: string, icon?: string, 
  label: string, color?: string, outline?: boolean, size?: string,
  onSelect: (item: ButtonActionModel, context?: any) => void;
  divider?: boolean
};

export interface WButtonProps extends ButtonProps {
  remove?: any;
}
export class WButton extends Component<WButtonProps> {
  render() {
    let {remove} = this.props;
    if(remove == true || remove == 'true') return null;
    return <Button {...this.props}/>
  }
}

export interface GroupButtonActionModel {
  label: string,
  actions: Array<ButtonActionModel>
};

export interface PopoverButtonProps {
  id: string,
  className?: string,
  label?: any,
  icon?:  string,
  outline?: boolean,
  color?:   string,
  style?: any,
  popover: { title?: string, placement?: string, open?: boolean},
  children: any
}
export class PopoverButton extends Component<PopoverButtonProps, {}> {
  toggle() {
    let {popover} = this.props;
    popover.open = !popover.open;
    this.forceUpdate();
  }

  render() {
    let {id, className, label, icon, outline, color, popover, children, style} = this.props;
    let popupTitleEle = null;
    if(popover.title) {
      popupTitleEle = ( <PopoverHeader>{popover.title}</PopoverHeader> );
    }
    let iconEle = null;
    if(icon) iconEle = (<span className={icon} />);
    let placement: any = 'bottom';
    if(popover.placement) placement = popover.placement;
    let html = (
      <ButtonGroup className={className}>
        <Button id={id} outline={outline} color={color} onClick={() => this.toggle()}>
          {iconEle} {label ? label: null}
        </Button>
        <UncontrolledPopover placement={placement} trigger="legacy" target={id} isOpen={popover.open} toggle={() => this.toggle()}>
          {popupTitleEle}
          <PopoverBody style={style} className='d-flex'>{children}</PopoverBody>
        </UncontrolledPopover>
      </ButtonGroup>
    );
    return html;
  }
}

export interface ButtonWithDropdownProps {
  icon?: string,
  label: string;
  id: string,
  color?: string,
  popover: {title?: string, onClose?: () => void},
  onClick: () => void,
  children: any
};
export interface ButtonWithDropdownState { popoverOpen: boolean };
export class ButtonWithDropdown extends Component<ButtonWithDropdownProps, ButtonWithDropdownState> {
  constructor(props: ButtonWithDropdownProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { popoverOpen: false };
  }

  componentWillReceiveProps(_nextProps: ButtonWithDropdownProps) {
    this.setState({popoverOpen: false})
  }

  toggle() {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }

  render() {
    let {id, icon, label, popover, onClick, children, color} = this.props;
    let popupTitleEle = null;
    if(popover.title) {
      popupTitleEle = ( <PopoverHeader>{popover.title}</PopoverHeader> );
    }
    let uiLabel = label ? <Button color={color} onClick={onClick} style={{whiteSpace: 'nowrap'}} >{label}</Button> : null;
    let html = (
      <ButtonGroup>
        {uiLabel}
        <Button color={color} id={id} onClick={this.toggle}>{icon ? (<span className={icon} />) : '▼' }</Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={id}
          toggle={popover.onClose ? popover.onClose : this.toggle}>
          {popupTitleEle}
          <PopoverBody className='d-flex'>{children}</PopoverBody>
        </Popover>
      </ButtonGroup>
    );
    return html;
  }
}

export interface AutoRefreshButtonProps {
  id: string,
  onRefresh?: () => void,
  defaultPeriod: 10 | 30 | 60 | 300
};
export interface AutoRefreshButtonState { selectPeriod: number };
export class AutoRefreshButton extends Component<AutoRefreshButtonProps, AutoRefreshButtonState> {
  timerId: any;

  constructor(props: AutoRefreshButtonProps) {
    super(props)
    this.state = {selectPeriod: props.defaultPeriod};
    this.timerId = null;
  }

  componentDidMount() {
    let { selectPeriod } = this.state;
    this.autoRefresh(selectPeriod);
  }

  onSelectPeriod(period: number) {
    this.setState({ selectPeriod: period });
    this.autoRefresh(period);
  }

  onRefresh() {
    let { onRefresh } = this.props;
    if(onRefresh) onRefresh();
  }

  autoRefresh(period: number) {
    let { onRefresh } = this.props;
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    if(onRefresh && period > 0) {
      this.timerId = setInterval(onRefresh, period * 1000);
    }
  }

  componentWillUnmount() {
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render() {
    let {id} = this.props;
    let options = [
      { label: "None", period: -1 },
      { label: "5s",   period:  5 },
      { label: "10s",  period: 10 },
      { label: "30s",  period: 30 },
      { label: "1min", period: 60 },
      { label: "5min", period: 300 },
    ];
    let { selectPeriod } = this.state;
    let optionEles = [];
    for(let i = 0; i < options.length; i++) {
      let opt = options[i];
      optionEles.push((
        <div key={i} className='mx-1'>
          <input type={'radio'} name={'opt' + i}
            checked={opt.period === selectPeriod} onChange={() => this.onSelectPeriod(opt.period)} />
          <label className='ml-1'>{opt.label}</label>
        </div>
      ));
    }
    let label = 'Refresh' ;
    if(selectPeriod > 0) label = label + ` [${selectPeriod}s]`
    let html = (
      <ButtonWithDropdown id={`${id}-${IDTracker.next()}`} label={label}
        popover={{title: 'Select Refresh Period'}} onClick={() => this.onRefresh()}>
        {optionEles}
      </ButtonWithDropdown>
    );
    return html;
  }
}

export interface DropdownActionButtonProps {
  label?: string;
  icon?: string;
  hint?: string;
  items: Array<ButtonActionModel>;
  align?: string;
  color?: string;
};
export interface DropdownActionButtonState { open: boolean };
export class DropdownActionButton extends Component<DropdownActionButtonProps, DropdownActionButtonState> {

  constructor(props: DropdownActionButtonProps) {
    super(props);
    this.state = { open: false };
  }

  toggle() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  onSelectItem(item: ButtonActionModel) {
    if(item.onSelect) item.onSelect(item);
  }

  render() {
    let {label, icon, hint, items, align, color} = this.props;
    let right = align === 'right';
    let itemEles = [];
    for(let i = 0; i < items.length; i++) {
      let item = items[i];
      if(item.divider) {
        itemEles.push(( <DropdownItem key={i} divider /> ));
      } else {
        itemEles.push(( <DropdownItem key={i} onClick={() => this.onSelectItem(item)}>{item.label}</DropdownItem> ));
      }
    }
    let iconUI = null;
    if(icon) {
      iconUI = (<span className={icon} title={hint}/>)
    }
    let html = (
      <Dropdown isOpen={this.state.open} toggle={() => this.toggle()}>
        <DropdownToggle caret color={color}>{iconUI}{label}</DropdownToggle>
        <DropdownMenu right={right}>{itemEles}</DropdownMenu>
      </Dropdown>
    );
    return html;
  }
}

export interface DropdownSelectItemButtonProps {
  items: Array<any>,
  selectItem?: any,
  onSelect?: (item: any) => void;
};
export interface DropdownSelectItemButtonState { open: boolean, selectItem: any };
export class DropdownSelectItemButton extends Component<DropdownSelectItemButtonProps, DropdownSelectItemButtonState> {
  constructor(props: DropdownSelectItemButtonProps) {
    super(props);
    let { items, selectItem } = props;
    if(!selectItem) selectItem = items[0];
    this.state = { open: false, selectItem: selectItem };
  }

  toggle() { this.setState(prevState => ({ open: !prevState.open })); }

  onSelectItem(item: any) {
    this.setState({selectItem: item});
    let {onSelect} = this.props;
    if(onSelect) onSelect(item);
  }

  render() {
    let {items} = this.props;
    let {selectItem} = this.state;
    let itemEles = [];
    for(let i = 0; i < items.length; i++) {
      let item = items[i];
      itemEles.push((
        <DropdownItem key={i} onClick={() => this.onSelectItem(item)}>
          <input type="checkbox" checked={item === selectItem} readOnly={true} /> { item }
        </DropdownItem>
      ));
    }
    let html = (
      <Dropdown isOpen={this.state.open} toggle={() => this.toggle()}>
        <DropdownToggle caret>{selectItem}</DropdownToggle>
        <DropdownMenu>{itemEles}</DropdownMenu>
      </Dropdown>
    );
    return html;
  }
}

export interface DropdownSelectComplexItemButtonProps {
  label: string,
  items: Array<any>,
  fieldLabel: string,
  fieldCheck: string,
  onSelect?: (item: any) => void;
};
export interface DropdownSelectComplexItemButtonState { open: boolean };
export class DropdownSelectComplexItemButton
  extends Component<DropdownSelectComplexItemButtonProps, DropdownSelectComplexItemButtonState> {

  keepOpen: boolean;

  constructor(props: DropdownSelectComplexItemButtonProps) {
    super(props);
    this.keepOpen = false;
    this.state = { open: false };
  }

  toggle() {
    if(this.keepOpen) {
      this.keepOpen = false;
      this.forceUpdate();
    } else {
      this.setState(prevState => ({ open: !prevState.open }));
    }
  }

  onSelect(item: any) {
    let {onSelect, fieldCheck} = this.props;
    item[fieldCheck] = !item[fieldCheck];
    if(onSelect) onSelect(item);
    this.keepOpen = true;
  }

  render() {
    let {label, items, fieldLabel, fieldCheck} = this.props;
    let itemEles = [];
    for(let i = 0; i < items.length; i++) {
      let item = items[i];
      let checkedVal = item[fieldCheck] ? item[fieldCheck] : false;
      itemEles.push((
        <DropdownItem key={i} onClick={() => this.onSelect(item)}>
          <input type="checkbox" name={fieldCheck} value={checkedVal} checked={checkedVal} readOnly={true} /> { item[fieldLabel] }
        </DropdownItem>
      ));
    }
    let html = (
      <Dropdown isOpen={this.state.open} toggle={() => this.toggle()}>
        <DropdownToggle caret>{label}</DropdownToggle>
        <DropdownMenu>{itemEles}</DropdownMenu>
      </Dropdown>
    );
    return html;
  }
}

export interface ProgressBarProps { progress: number, duration: number };
export interface ProgressBarState { progress: number };
export class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
  constructor(props: ProgressBarProps) {
    super(props);
    this.state = { progress:  1 };
    this.state = this.initState(props);
  }

  componentWillReceiveProps(nextProps: ProgressBarProps) {
    let state = this.initState(nextProps);
    this.setState(state);
  }

  componentWillMount () { }

  initState(props: ProgressBarProps) {
    let { progress, duration } = props;
    let state = { progress: progress ? progress : 1 };
    if(!duration) duration = 1000;
    let period = duration/100;
    let ProgressBar = this;

    let frame = function() {
      if (progress >= 100) {
        clearInterval(id);
      } else {
        progress += period;
        let state: ProgressBarState  = { progress: progress } ;
        ProgressBar.setState(state);
      }
    }
    let id = setInterval(frame, period);
    return state;
  }

  render() {
    const {progress} = this.state;
    var html = (
      <div className="progress" style={{height: 20}}>
        <div className="progress-bar bg-info" role="progressbar" style={{width: progress +'%'}}
          aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
    );
    return html;
  }
}
