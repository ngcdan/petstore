import React from "react";
import { Component } from "react";

import { Button, ButtonGroup } from 'reactstrap';

import {formater} from "util/text";
import  PageList  from "util/PageList";

import { showNotification, NotificationMessage } from "widget/util";
import { ICONS } from "widget/icons";
import { Form } from "widget/layout" 
import { WInput, BBStringField, BBIntField, BBLongField, BBDoubleField, BBNumberField, BBCurrencyField } from "widget/input";

export function formatCellValue(field: any, val: any) : any {
  if(val == null) return null;
  if(field.format) return field.format(val);

  if(typeof val.getMonth === 'function') return formater.dateTime(val);
  else if(typeof val     === 'number')   return formater.number(val);

  return val;
}

function getCellType(_field: any, val: any) : any {
  if(val == null) return '';
  if(typeof val.getMonth === 'function') return 'date';
  else if(typeof val     === 'number')   return 'number';
  return 'text';
}

export interface TableRowProps { table: any, _ref: any }
export interface TableRowState { }
export class TableRow extends Component<TableRowProps, TableRowState> {
  constructor(props: TableRowProps) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);

    let { table, _ref } = this.props;
    let row = _ref.index;
    if(table.isFocusRow(row)) {
      table.setFocusRow(null);
    }
  }

  onBlur(_evt: any) {
    let { table } = this.props;
    table.setFocusRow(null);
    this.forceUpdate();
  }

  onClick(_evt: any) {
    let { table, _ref } = this.props;
    let row = _ref.index;
    table.setFocusRow(row);
    this.forceUpdate();
  }

  render() {
    let { table, _ref } = this.props;
    let { className, style, columns } = _ref;
    let row = _ref.index;

    if(table.isFocusRow(row)) className = `${className} focus-row`;
    let html = (
      <div className={className} role={'row'} style={style} tabIndex={0} onClick={this.onClick} onBlur={this.onBlur}>
        {columns}
      </div>
    );

    return html;
  }
}

export interface TableCellProps { 
  style?: any,
  table: any, row: number, fieldConfig: any, record: any 
}
export interface TableCellState { editMode: boolean, select: boolean}
export class TableCell extends Component<TableCellProps, TableCellState> {
  message: null|NotificationMessage ;

  constructor(props: TableCellProps) {
    super(props);
    const { fieldConfig } = this.props;
    if(fieldConfig.editor) {
      this.onInputChange = this.onInputChange.bind(this);
    }
    this.state = { editMode: false, select: false };
    this.message = null;
  }

  onEdit(field: any, record: any): void {
    if(field.editor.isEditable) {
      if(!field.editor.isEditable(field, record)) return ;
    }
    this.setState({ editMode: true });
  }

  onInputChange(_bean: any, _fieldName: string, oldVal: any, newVal: any): void {
    const { table, fieldConfig, record } = this.props;
    if(fieldConfig.editor.onInputChange) {
      fieldConfig.editor.onInputChange(table, record, oldVal, newVal);
    }
    this.setState({editMode: false, select: false});
  }

  onEditKeyDown(winput: WInput, _evt: any, keyCode: number, currInput: any): void {
    if(keyCode === 13) {
      winput.updateValue('' + currInput);
      let errMessage = winput.getMessage();
      if(errMessage) {
        this.message = { type: 'warning', label: errMessage };
      } else {
      }
      this.setState({editMode: false});
    } else if(keyCode === 27) {
      this.setState({editMode: false});
    }
  }

  renderCustomCell(field: any, record: any, className: string) {
    const { style, row, table } = this.props;
    return (
      <div className={className} style={{...style, ...field.cellStyle}}>{field.customRender(table, field, row, record)}</div>
    );
  }

  renderOnClickCell(field: any, record: any, className: string) {
    const { row, table, style } = this.props;
    let cellValue = null;
    if(field.customRender) {
      cellValue = field.customRender(table, field, row, record);
    } else if(field.cellDataGetter) {
      cellValue = field.cellDataGetter(record);
    } else {
      cellValue = formatCellValue(field, record[field.name]);
    }
    let cellType = getCellType(field, record[field.name]);
    className = `${className} cell-${cellType}`
    return (
      <div className={className} style={{...style, ...field.cellStyle}}>
        <Button color='link' onClick={() => table.onCellAction(field, row, record)}>{cellValue}</Button>
      </div>
    );
  }


  renderCellEditor(field: any, record: any, className: string) {
    const { style } = this.props;
    let BBTypeField: any = null;
    if(field.editor.type === 'int')         BBTypeField = BBIntField ;
    else if(field.editor.type === 'long')   BBTypeField = BBLongField ;
    else if(field.editor.type === 'double') BBTypeField = BBDoubleField ;
    else if(field.editor.type === 'number')  BBTypeField = BBNumberField ;
    else if(field.editor.type === 'currency') BBTypeField = BBCurrencyField ;
    else if(field.editor.type === 'string') BBTypeField   = BBStringField ;
    return (
      <Form className={className} style={{...style, ...field.cellStyle}}>
        <BBTypeField  bean={record} field={field.name} focus={true} validators={ field.editor.validators }
          onInputChange={ this.onInputChange }
          onKeyDown={(winput: WInput, evt:any, keyCode:number, currInput: any) => this.onEditKeyDown(winput, evt, keyCode, currInput)}/>
      </Form>
    );
  }

  renderCell(fieldConfig: any, record: any, className: string) {
    let onDoubleClick = undefined, onBlur = undefined, onClick = undefined, onKeyDown = undefined;
    let tabIndex = 0;

    if(fieldConfig.editor) onDoubleClick = () => this.onEdit(fieldConfig, record) ;

    if(fieldConfig.onKeyDown) {
      const { table, row } = this.props;
      onBlur = (_evt: any) =>  {
        this.setState({select: false});
      }
      onClick = (_evt: any) =>  {
        this.setState({select: true});
        table.setFocusRow(row);
      }
      onKeyDown = (evt: any) => {
        fieldConfig.onKeyDown(evt, table, row, record);
      };
      tabIndex = 0;
    }

    let cellData = null;
    if(fieldConfig.cellDataGetter) cellData = fieldConfig.cellDataGetter(record);
    else cellData = formatCellValue(fieldConfig, record[fieldConfig.name]);

    let cellType = getCellType(fieldConfig, record[fieldConfig.name]);
    className = `${className} cell-${cellType}`
    const {style} = this.props;
    return (
      <div tabIndex={tabIndex} className={className} style={{...style, ...fieldConfig.cellStyle}}
        onClick={onClick} onBlur={onBlur} onKeyDown={onKeyDown} onDoubleClick={onDoubleClick}>
        {cellData}
      </div>
    );
  }

  render() {
    const { fieldConfig, record, row } = this.props;
    const { editMode } = this.state;
    let className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
    if(this.state.select) className += ' select-cell';

    if(fieldConfig.onClick) return this.renderOnClickCell(fieldConfig, record, className);
    else if(fieldConfig.customRender) return this.renderCustomCell(fieldConfig, record, className);
    else if(editMode)      return this.renderCellEditor(fieldConfig, record, className);
    else                   return this.renderCell(fieldConfig, record, className);
  }

  componentDidUpdate() {
    showNotification(this.message);
    this.message = null;
  }
}

export interface PageIteratorProps { pageList: PageList, onSelectPage: (page: number) => void }
export class PageIterator extends Component<PageIteratorProps, {}> {
  render() {
    const {pageList, onSelectPage } = this.props;
    let buttons = [];
    let cpage = pageList.getCurrentPage();
    let range = pageList.getSubRange(cpage, 10);

    if(pageList.getCurrentPage() > 1) {
      buttons.push((
        <Button key='first' onClick={() => onSelectPage(1)}>
          <span className={ICONS.editor.angleDoubleLeft} title='first'/>
        </Button>
      ));
      buttons.push((
        <Button key='prev'onClick={() =>  onSelectPage(cpage - 1)} >
          <span className={ICONS.editor.angleLeft} title='prev'/>
        </Button>
      ));
    } else {
      buttons.push((
        <Button key='first' disabled={true}>
          <span className={ICONS.editor.angleDoubleLeft} title='first'/>
        </Button>
      ));
      buttons.push((
        <Button key='prev' disabled={true} >
          <span className={ICONS.editor.angleLeft} title='prev'/>
        </Button>
      ));
    }

    for(let i = range[0]; i <= range[1] ; i++) {
      if(i === cpage) {
        buttons.push((<Button key={'p' + i} disabled={true}>{i}</Button>));
      } else {
        buttons.push((<Button key={'p' + i} onClick={() => onSelectPage(i)}>{i}</Button>));
      }
    }
    let lastPage =  pageList.getAvailablePage();

    if(pageList.getCurrentPage() < lastPage) {
      buttons.push((
        <Button key='next' onClick={() => onSelectPage(cpage + 1)}>
          <span className={ICONS.editor.angleRight} title='next'/>
        </Button>
      ));
      buttons.push((
        <Button key='last' onClick={() => onSelectPage(lastPage)}>
          <span className={ICONS.editor.angleDoubleRight} title='last'/>
        </Button>
      ));
    } else {
      buttons.push((
        <Button key='next' disabled={true}><span className={ICONS.editor.angleRight} title='next'/></Button>
      ));
      buttons.push((
        <Button key='last' disabled={true} ><span className={ICONS.editor.angleDoubleRight} title='last'/></Button>
      ));
    }

    let html = (
      <div className='page-iterator'>
        <ButtonGroup size='sm'> {buttons} </ButtonGroup>
      </div>
    );
    return html;
  }
}