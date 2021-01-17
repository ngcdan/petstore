import React from "react";
import {Component} from "react";

import { Row, ColumnLayout, Column } from "../widget/layout";
import { FormContainer, FormGroup, FormGroupCol, } from '../widget/layout'

import {
  BBStringField, BBStringArrayField, BBTextField,
  BBIntField, BBIntArrayField,
  BBLongField,
  BBFloatField,
  BBDoubleField, BBDoubleArrayField,
  BBRadioInputField,
  BBDateTimeField,
  BBSelectField,
  BBBeanSelectField,
  BBCheckboxField,
  BBAutoComplete
} from "../widget/input";


interface UIBeanInfoProps {
  bean: any
}
class UIBeanInfo extends Component<UIBeanInfoProps,{}> {
  render() {
    let { bean } = this.props;
    var html = (
      <div style={{flexGrow: 'initial', width: 400, paddingLeft: 15}}>
        <pre>{JSON.stringify(bean, null, '  ')}</pre>
      </div>
    );
    return html;
  };
}

interface UIBeanEditorState { renderUpdate: number, disable: boolean, bean: any }
export default class UIBeanEditor extends Component<{},UIBeanEditorState> {
  componentWillMount() {
    this.setState({
      disable: false,
      bean: {
        string: 'a string',
        stringArray: ['string 1', 'string 2'],
        text: 'this is a sample text',
        integer: 12,
        integerArray: [1, 2],
        long:    1000,
        float:   1.23,
        double:  10.234,
        doubleArray:  [1.0, 2.0],
        select:  'male', numSelect:  3,
        dropdownSelect: 'female',
        numDropdownSelect: 3,
        checkbox: 'test',
        itemSelect:  'vn',
        primitiveAutoComplete: 'option 2',
        beanAutoComplete: 'tuan',
        datetime: '5/4/2018@14:00:00',
        renderUpdate: 0,
        cron: ''
      }
    });
    this.onInputChange = this.onInputChange.bind(this);
    this.autoCompleteOnInputChange = this.autoCompleteOnInputChange.bind(this);
  }

  onInputChange(_bean: any, _field: string, _oldVal: any, _newVal: any) {
    let update = this.state.renderUpdate + 1;
    this.setState({renderUpdate: update});
  }

  autoCompleteOnInputChange(_bean: any, _field: string, _selectOpt: any, _oldVal: any, _newVal: any) {
    let update = this.state.renderUpdate + 1;
    this.setState({renderUpdate: update});
  }

  render() {
    let { bean, disable} = this.state;
    let onInputChange = this.onInputChange;

    let selectOpts = ['male', 'female', 'none', 'undefined'];
    let numSelectOpts = [1, 2, 3, 4, 5];
    let languageItems = [
      {language: 'vn', label: "Viet nam"},
      {language: 'en', label: "English"}
    ];

    let beanAutoCompleteOpts = [
      { name: 'tuan',  fullName: 'Tuan Nguyen'},
      { name: 'hieu',  fullName: 'Hieu Nguyen'},
      { name: 'lam',   fullName: 'Lam Nguyen'}
    ]
    let primitiveAutoComOpts = [
      'option 1', 'option 2', 'option 3', 'option 4', 'option 5'
    ]
    var html = (
      <ColumnLayout>
        <Column growth={1}>
          <h4>Bean Editor Sample</h4>
          <FormContainer fluid>
            <Row>
              <FormGroupCol type='md' span={6}>
                <label>String:</label>
                <BBStringField bean={bean} field={'string'} disable={disable} onInputChange={onInputChange}/>
              </FormGroupCol>

              <FormGroupCol type='md' span={6}>
                <label>String Array</label>
                <BBStringArrayField bean={bean} field={'stringArray'} disable={disable} onInputChange={onInputChange}/>
              </FormGroupCol>
            </Row>

            <Row>
              <FormGroupCol type='md' span={12}>
                <FormGroup>
                  <label>Text</label>
                  <BBTextField bean={bean} field={'text'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>
              </FormGroupCol>
            </Row>

            <Row>
              <FormGroupCol type='md' span={6}>
                <FormGroup>
                  <label>Integer</label>
                  <BBIntField bean={bean} field={'integer'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>
              </FormGroupCol>

              <FormGroupCol type='md' span={6}>
                <FormGroup>
                  <label>Integer Array</label>
                  <BBIntArrayField bean={bean} field={'integerArray'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>
              </FormGroupCol>
            </Row>

            <Row>
              <FormGroupCol type='md' span={12}>
                <FormGroup>
                  <label>Long</label>
                  <BBLongField bean={bean} field={'long'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Float</label>
                  <BBFloatField bean={bean} field={'float'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Double</label>
                  <BBDoubleField bean={bean} field={'double'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Double Array</label>
                  <BBDoubleArrayField bean={bean} field={'doubleArray'} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Radio Select</label>
                  <BBRadioInputField bean={bean} field={'select'} options={selectOpts} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Radio Number Select</label>
                  <BBRadioInputField bean={bean} field={'numSelect'} options={numSelectOpts} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Date Time</label>
                  <BBDateTimeField bean={bean} field={'datetime'} timeFormat={'HH:mm:ss'} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Dropdown Select</label>
                  <BBSelectField bean={bean} field={'dropdownSelect'} options={selectOpts}
                    disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Dropdown Select Num</label>
                  <BBSelectField bean={bean} field={'numDropdownSelect'} options={numSelectOpts} disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Autocomplete</label>
                  <BBAutoComplete bean={bean} field={'primitiveAutoComplete'} options={primitiveAutoComOpts} onInputChange={ this.autoCompleteOnInputChange } />
                </FormGroup>

                <FormGroup>
                  <label>Autocomplete Complex Bean</label>
                  <BBAutoComplete bean={bean} field={'beanAutoComplete'} options={beanAutoCompleteOpts}
                    inputField={'name'} descriptionField={'fullName'} onInputChange={this.autoCompleteOnInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Dropdown Item</label>
                  <BBBeanSelectField bean={bean} field={'itemSelect'} options={languageItems}
                    fieldCheck={'language'} fieldLabel={'label'}
                    disable={disable} onInputChange={onInputChange}/>
                </FormGroup>

                <FormGroup>
                  <label>Check Box</label>
                  <BBCheckboxField bean={bean} field={'checkbox'} value={'test'} label="Test Checkbox" disable={disable} onInputChange={onInputChange}/>
                </FormGroup>
              </FormGroupCol>
            </Row>
          </FormContainer>
        </Column>

        <Column width={450}>
          <UIBeanInfo bean={bean} />
        </Column>
      </ColumnLayout>
    );
    return html;
  };
}
