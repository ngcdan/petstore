import React from "react";
import moment from 'moment';
import { Button, InputGroup, InputGroupAddon, Badge} from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import { SqlSearchParams, Filter, OptionFilter, RangeFilter, OrderBy } from "./type";

import { ICONS } from "../icons";
import { BBStringField, BBRadioInputField, BBMultiCheckboxInputField, BBDateTimeField, WInput } from "../input";
import { Form, FormGroup } from "../layout";

import { IDTracker } from "util/common";
import {formater} from "util/text";

import './stylesheet.scss'

interface UISearchParamsProps { 
  searchParams: SqlSearchParams, defaultField?: string, onSubmit: (searchParams: any) => void 
}
interface UISearchParamsState { }
export class UISearchParams extends React.Component<UISearchParamsProps, UISearchParamsState> {
  popoverId: string = `ui-sqlquery-popover-${IDTracker.next()}`;

  constructor(props: UISearchParamsProps) {
    super(props);
    this.state = { showFilter: false };
  }

  onKeyDown(winput: WInput, _evt: any, keyCode: number, currInput: any): void {
    if(keyCode === 13) {
      let {searchParams, onSubmit} = this.props;
      winput.updateValue(currInput);
      onSubmit(searchParams);
    }
  }

  onDeleteMaxReturn() {
    let { searchParams, onSubmit } = this.props;
    searchParams.maxReturn = 1000;
    onSubmit(searchParams);
  }

  onDeleteOrderBy() {
    let { searchParams, onSubmit } = this.props;
    if(searchParams.orderBy) {
      delete searchParams.orderBy.selectFields;
      onSubmit(searchParams);
    }
  }

  onDeleteOptionFilter(filter: OptionFilter) {
    let { searchParams, onSubmit } = this.props;
    filter.selectOption = '';
    onSubmit(searchParams);
  }

  setDateTimeRangeFilter(filter: RangeFilter, dayRange: number) {
    let time = moment();
    filter.toValue = time.format('DD/MM/YYYY@23:59:59 +0700');
    time = time.subtract(dayRange, 'days');
    filter.fromValue = time.format('DD/MM/YYYY@00:00:00 +0700');
    this.forceUpdate();
  }

  clearDateTimeRangeFilter(filter: RangeFilter) {
    filter.toValue = '';
    filter.fromValue = '';
    this.forceUpdate();
  }

  render() {
    let {searchParams, defaultField} = this.props;
    if(!defaultField) defaultField = 'search';
    let defaultFilter = this._getFilter(defaultField, searchParams.filters);
    let html = (
      <div className='ui-search-params'>
        <InputGroup>
          {/*this._renderCriteriaBadge(searchParams)*/}
          <InputGroupAddon addonType="prepend">
            <BBStringField style={{ width: 200 }} bean={defaultFilter} field={'filterValue'} placeholder={'filter value'}
              onKeyDown={(winput: WInput, evt: any, keyCode: number, currInput: any) => this.onKeyDown(winput, evt, keyCode, currInput)} />
          </InputGroupAddon>
          <InputGroupAddon addonType="prepend">
            {this._renderDropdownCriteria(searchParams)}
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
    return html;
  }

  _renderDropdownCriteria(searchParams: SqlSearchParams) {
    let {onSubmit} = this.props;
    let html = (
      <UncontrolledDropdown placement={'auto-end'}>
        <DropdownToggle nav caret>
          <span className={ICONS.editor.reorder} title={'Filter'} />
        </DropdownToggle>
        <DropdownMenu style={{ left: -325 }}>
          <Form className='ui-sqlquery'>
            {this._renderDateRangeFilters(searchParams.rangeFilters)}
            {this._renderOptionFilters(searchParams.optionFilters)}
            {this._renderOrderBy(searchParams.orderBy)}
            {this._renderMaxReturn(searchParams)}
            <div className='border-top pt-2'>
              <Button className='d-block m-auto' onClick={() => onSubmit(searchParams)}>
                <span className={ICONS.editor.search} title={'Search'} /> Search
              </Button>
            </div>
          </Form>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
    return html;
  }

  _renderCriteriaBadge(searchParams: SqlSearchParams) {
    let orderByBadge = null;
    let optionFilterBadges = null;
    let orderBy = searchParams.orderBy;
    let optionFilters = searchParams.optionFilters;
    if(orderBy && orderBy.selectFields && orderBy.selectFields.length > 0) {
      orderByBadge = (
        <Badge key='orderBy'>
          Order By: [{formater.text.arrayToString(orderBy.selectFields)}] DESC
          <Button outline size='sm' onClick={() => this.onDeleteOrderBy()}>x</Button>
        </Badge>
      );
    }
    if(optionFilters && optionFilters.length > 0) {
      optionFilterBadges = [];
      for(let i = 0; i < optionFilters.length; i++) {
        let filter = optionFilters[i];
        if(!filter.selectOption) continue;
        optionFilterBadges.push (
          <Badge key={i}>
            {filter.label}: {filter.selectOption}
              <Button outline size='sm' onClick={() => this.onDeleteOptionFilter(filter)}>x</Button>
          </Badge>
        );
      }
    }
    let html = (
      <InputGroupAddon addonType="prepend">
        <Badge key='limit'>
          Limit: {searchParams.maxReturn}
          <Button disabled outline size='sm' onClick={() => this.onDeleteMaxReturn()}>x</Button>
        </Badge>
        {optionFilterBadges}
        {orderByBadge}
      </InputGroupAddon>
    );
    return html;
  }

  _renderMaxReturn(searchParams: SqlSearchParams) {
    let opts = [1000, 5000, 10000, 30000, 50000, 100000];
    let html = (
      <div>
        <h5 className='border-bottom'>Max Return</h5>
        <FormGroup>
          <BBRadioInputField bean={searchParams} field={'maxReturn'} options={opts}
            disable={false} onInputChange={() => console.log('todo..')} />
        </FormGroup>
      </div>
    )
    return html;
  }

  _renderOrderBy(orderBy?: OrderBy): any {
    if(!orderBy) return [];
    let orderSort = ['ASC', 'DESC'];
    let orderSortLabel = ['ASC', 'DESC'];
    let fields: Array<any> = orderBy.fields;
    let fieldLabels: Array<any> = fields;
    if(orderBy.fieldLabels) fieldLabels = orderBy.fieldLabels;
    let html = (
      <div>
        <h5 className='border-bottom'>Order By</h5>
        <FormGroup>
          <div className='d-flex'>
            <div>
              <label>{'Field'}:</label>
              <BBMultiCheckboxInputField bean={orderBy} field={'selectFields'} options={fields} optionLabels={fieldLabels} disable={false} />
            </div>

            <div className="ml-2" style={{ minWidth: 100 }}>
              <label>{'Sort'}:</label>
              <BBRadioInputField bean={orderBy} field={'sort'} options={orderSort} optionLabels={orderSortLabel}
                disable={false}  />
            </div>
          </div>
        </FormGroup>
      </div>
    )
    return html;
  }

  _getFilter(field: string, filters?: Array<Filter>) : any {
    if(filters == null) return null;
    for(let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      if(filter.name === field) return filter;
    }
    return null;
  }

  _renderFilters(defaultField: string, filters?: Array<Filter>) : any {
    if(!filters) return [];
    let rows = [];
    for(let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      if(filter.name === defaultField) continue;
      let label  = filter.label;
      if(!label) label = filter.name;
      let html = (
        <FormGroup key={i}>
          <label>{label}</label>
          <BBStringField bean={filter} field={'filterValue'} placeholder="filter value"/>
        </FormGroup>
      );
      rows.push(html);
    }
    return rows;
  }

  _renderOptionFilters(filters?: Array<OptionFilter>) : any {
    if(!filters) return [];
    let optionEles = [];
    for(let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      let optionLabels = filter.optionLabels ? filter.optionLabels : filter.options;
      optionEles.push(
        <FormGroup className='py-0' key={i}>
          <label>{filter.label ? filter.label : filter.name}</label>
          <BBRadioInputField key={i} bean={filter} field={'selectOption'} options={filter.options} optionLabels={optionLabels}
            disable={false} onInputChange={() => console.log('todo ' + filter.name)}/>
        </FormGroup>
      );
    }
    return (
      <div>
        <h5 className='border-bottom'>Filters</h5>
        <div className='py-1'>
          {optionEles}
        </div>
      </div>
    );
  }

  _renderDateRangeFilters(filters?: Array<RangeFilter>): any {
    if(!filters) return [];
    let rows = [];
    for(let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      let html = (
        <FormGroup className='py-0' key={i}>
          <label>{filter.label ? filter.label : filter.name}</label>
          <div className='d-inline-block'>
            [
            <span>Last:</span>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 7)}>7D</Button>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 30)}>1M</Button>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 92)}>3M</Button>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 183)}>6M</Button>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 365)}>1Y</Button>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 730)}>2Y</Button>
            <Button className='px-1' color='link' onClick={() => this.setDateTimeRangeFilter(filter, 1095)}>3Y</Button>
            <Button className='px-1' color='link' onClick={() => this.clearDateTimeRangeFilter(filter)}>
              <span className={ICONS.editor.trash} />
            </Button>
            ]
          </div>
          <div className='d-flex py-1'>
            <BBDateTimeField  bean={filter} field={'fromValue'} timeFormat={false}/>
            <span className='d-inline px-2'>..</span>
            <BBDateTimeField  bean={filter} field={'toValue'} timeFormat={false}/>
          </div>
        </FormGroup>
      );
      rows.push(html);
    }
    let html = (
      <div>
        <h5 className='border-bottom'>Range Filters</h5>
        {rows}
      </div>
    );
    return html ;
  }
}