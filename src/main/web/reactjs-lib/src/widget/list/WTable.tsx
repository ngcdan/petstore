import React, {Component} from 'react';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap'
import {InputGroup, InputGroupAddon } from 'reactstrap';

import { WStringInput } from 'widget/input';
import { ButtonActionModel, DropdownActionButton } from 'widget/element';
import { BBRadioInputField } from 'widget/input';
import { VTable } from 'widget/list/VTable';

export interface WTableProps { table: VTable }

export class WTableFilter extends Component<WTableProps> {
  render() {
    let {table} = this.props;
    let model = table.getModel();
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <WStringInput name='search' value={model.getFilterExp()} placeholder={'filter expression'}
            onChange={(_oldVal, newVal) => table.onFilter(newVal)} />
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export class WTableStateFilter extends Component<WTableProps> {
  constructor(props: WTableProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(_bean: any, _field: string, _oldVal: any, newVal: any) {
    console.log('on select ' + newVal);
    let {table} = this.props;
    let model = table.getModel();
    model.filterByState(newVal);
    table.forceUpdate();
  }

  render() {
    let {table} = this.props;
    let model = table.getModel();
    let opts = [null, 'ACTIVE', 'ARCHIVED'];
    let optLabels = ['All', 'Active', 'Archive'];
    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>State Filter</DropdownToggle>
        <DropdownMenu right>
          <BBRadioInputField style={{ display: 'block', padding: '5px 10px' }}
            bean={model} field={'filterState'} options={opts} optionLabels={optLabels} onInputChange={this.onInputChange} />
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export interface WTableChangeStateProps { 
  table: VTable ;
  actions: Array<string>;
}
export class WTableChangeState extends Component<WTableChangeStateProps> {
  actions: Array<ButtonActionModel> ;

  constructor(props: WTableChangeStateProps) {
    super(props);
    let thisUI = this;
    let {actions} = props;
    this.actions = [];
    for(let i = 0; i < actions.length; i++) {
      if('ACTIVE' == actions[i]) {
        this.actions.push(
          { name: 'activate', label: 'Activate', onSelect: function () { thisUI.onChangeStorageState('ACTIVE'); } },
        );
      } else if('INACTIVE' == actions[i]) {
        this.actions.push(
          { name: 'inactive', label: 'Inactive', onSelect: function () { thisUI.onChangeStorageState('INACTIVE'); } },
        );
      } else if('ARCHIVED' == actions[i]) {
        this.actions.push(
          { name: 'archive', label: 'Archive', onSelect: function () { thisUI.onChangeStorageState('ARCHIVED'); } },
        );
      } else if('DEPRECATED' == actions[i]) {
        this.actions.push(
          { name: 'deprecated', label: 'Deprecated', onSelect: function () { thisUI.onChangeStorageState('DEPRECATED'); } }
        );
      }
    }
  }

  onChangeStorageState(newState: 'ACTIVE'|'INACTIVE'|'ARCHIVED'|'DEPRECATED') {
    let {table} = this.props;
    let model = table.getModel();
    let selRecords = model.getSelectedRecords();
    for(let i = 0; i < selRecords.length; i++) {
      let record = selRecords[i];
      record.entityState = newState;
    }
    model.refresh();
    table.forceUpdate();
  }

  render() {
    let html = (<DropdownActionButton label="States" items={this.actions} />)
    return html;
  }
}