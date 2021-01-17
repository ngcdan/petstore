import React from 'react';
import {Component} from 'react';

import {
  Button, ButtonGroup,
  Navbar, Nav,
  InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import { List, AutoSizer } from 'react-virtualized';
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import {IDTracker} from "util/common"
import { DropdownSelectComplexItemButton } from "../element";
import { DropdownSelectItemButton } from "../element";
import { WStringInput } from "../input";

import { ListModel }    from './ListModel';
import { PageIterator } from "./common";

import 'react-virtualized/styles.css';
import "./stylesheet.scss" ;

export interface VListActionConfig {
  name: string, label?: string, icon?: string, hint?: string,
  createComponent?: (list: VList) => any,
  onClick?: (list: VList) => void
}

export interface ToolbarConfig { hide: boolean }

export interface VListConfig {
  toolbar?: ToolbarConfig,
  rowHeight: number,
  renderItem: (list: VList, page: number, row: number, rowInPage: number, item: any) => any,
  onSelect?: (list: VList, page: number, row: number, rowInPage: number, item: any) => void,
  actions: Array<VListActionConfig>,
}
export interface ColumnToggleButtonProps {table: any}
export class ColumnToggleButton extends Component<ColumnToggleButtonProps, {}> {
  render() {
    const { table } = this.props;
    let config = table.getConfig();
    let columns = [  ];
    columns.push(...config.columns);
    var onSelect = (column: any) => table.onToggleColumn(column);
    var html = (
      <DropdownSelectComplexItemButton label={'Cols'} items={columns} fieldLabel={'label'} fieldCheck={'visible'} onSelect={onSelect} />
    );
    return html;
  }
}

export interface VListToolbarProps {list: VList, config: VListConfig, model: ListModel}
class VListToolbar extends Component<VListToolbarProps, {}> {
  render() {
    const { list, config, model } = this.props;
    let pageSize = model.getPageList().getPageSize();
    let arrPageSize = ['50', '500', '5000', '50000', '100000'];
    let htmlTemplate =  (
      <Navbar color="secondary" dark expand="md">
        <Nav>
          <ButtonGroup>
            <DropdownSelectItemButton items={arrPageSize} selectItem={pageSize} onSelect={(value) => list.onSelectPageSize(value)} />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Filter</InputGroupText>
              </InputGroupAddon>
              <WStringInput name='search' value={ model.getFilterExp() } placeholder='filter expression'
                onChange={(_oldVal, newVal) => list.onFilter(newVal)} />
            </InputGroup>
          </ButtonGroup>
        </Nav>

        <Nav className="ml-auto">
          {
            config.actions.map((action, _idx) => {
              if(action.createComponent) {
                return action.createComponent(list);
              } else {
                return this.renderAction(list, action);
              }
            })
          }
        </Nav>
      </Navbar>
    );
    return htmlTemplate;
  }

  renderAction(list: VList, action: any) {
    let iconEle = null;
    if(action.icon) iconEle = (<span className={action.icon} title={action.hint} />);
    return (
      <Button key={action.name} onClick={()=>list.onAction(action)}>
        {iconEle}{action.label}
      </Button>
    )
  }
}

export interface VListViewProps { vlist: VList, model: ListModel, config: VListConfig }
export interface VListViewState {  }
class VListView extends Component<VListViewProps, VListViewState> {
  ref: any;
  constructor(props:VListViewProps) {
    super(props);
    this.ref = React.createRef();
    this.rowRenderer = this.rowRenderer.bind(this);
    this.noRowsRenderer = this.noRowsRenderer.bind(this);
  }

  componentWillReceiveProps(_props: VListViewProps) {
    this.forceUpdate();
  }

  rowRenderer(_ref: any) {
    let { key, index, style } = _ref;
    const { vlist, model, config } = this.props;
    let pageList = model.getPageList();
    let page = pageList.getCurrentPage();
    let row  = pageList.getFrom() + index;
    let records = pageList.currentPageItems();
    let rec = records[index];

    let onSelect = (_evt: any) => {
      if(config.onSelect) {
        config.onSelect(vlist, page, row, index, rec);
      }
    }

    return (
      <div key={key} style={style} className='list-row' onClick={ onSelect }>
        { config.renderItem(vlist, page, row, index, rec) }
      </div>
    );
  }

  noRowsRenderer() {
    return (<div className='no-rows'>{'No rows'}</div>)
  }

  render()  {
    const { model, config } = this.props;
    let pageList = model.getPageList();
    let records = pageList.currentPageItems();

    let html = (
      <AutoSizer key={IDTracker.next()}>
        {({ height, width }) => (
          <List ref={this.ref} width={width} height={height} className={'List'}
            overscanRowCount={10} rowCount={records.length} rowHeight={config.rowHeight}
            rowRenderer={this.rowRenderer} noRowsRenderer={this.noRowsRenderer} scrollToIndex={0}
          />
        )}
      </AutoSizer>
    );
    return html;
  }
}

export interface VListProps {
  className?: string, model: ListModel, config: VListConfig, context?: any
}
export interface VListState {dialog: any }
class VList extends Component<VListProps, VListState> {

  constructor(props:VListProps) {
    super(props);
    this.state = { dialog: {} };
  }

  componentWillReceiveProps(_props: VListProps) {
    this.forceUpdate();
  }

  getModel() { return this.props.model; }

  getConfig() { return this.props.config; }

  getContext() { return this.props.context; }

  onSelectPageSize(pageSize: number) {
    let model = this.props.model;
    model.changePageSize(pageSize);
    this.forceUpdate();
  }

  onSelectPage(page: number) {
    var model = this.props.model;
    model.selectPage(page);
    this.forceUpdate();
  }

  onFilter(exp: string) {
    let  { model } = this.props;
    model.filter(exp);
    this.forceUpdate();
  }

  onAction(action: VListActionConfig) {
    if(action.onClick) action.onClick(this);
  }

  showDialog(dialog: {title: string, content: any, openDialog?: boolean}) {
    dialog.openDialog = true;
    this.setState({dialog: dialog});
  }

  hideDialog() { this.setState({dialog: {openDialog: false}}); }

  render() {
    const { className, model, config } = this.props;

    let pageList = model.getPageList();
    let pageIteratorBlock = null;
    if(pageList.getPageSize() < pageList.getAvailable()) {
      let onSelectPage = (page: number) => { this.onSelectPage(page); }
      pageIteratorBlock = ( <PageIterator pageList={pageList} onSelectPage={onSelectPage}/> );
    }

    let toolbarEle = null;
    if(!config.toolbar || !config.toolbar.hide) {
      toolbarEle = ( <VListToolbar list={this} config={config} model={model}/> );
    }
    let html = (
      <div className={ className ? `ui-vlist ${className}`: 'ui-vlist'}>
        {toolbarEle}
        <div className='list-view'>
          <VListView vlist={this} config={config} model={model} />
        </div>
        {pageIteratorBlock}
        {this.renderDialog()}
      </div>
    );
    return html;
  }

  renderDialog() {
    const { dialog } = this.state;
    if(!dialog.openDialog) return null;
    let html = (
      <Modal isOpen={dialog.openDialog} toggle={() => this.hideDialog()}>
        <ModalHeader toggle={() => this.hideDialog()}>{dialog.title}</ModalHeader>
        <ModalBody>
          {dialog.content}
        </ModalBody>
      </Modal>
   ) ;
    return html;
  }
}

export { VList, ListModel }
