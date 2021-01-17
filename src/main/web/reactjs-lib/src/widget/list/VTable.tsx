import React from 'react';

import {IDTracker} from "util/common";
import { util as TextUtil } from "util/text";
import { DialogContext, showDialog } from 'widget/layout';

import { TreeTableModel } from './TreeTableModel';
import { PageIterator } from './common';
import { 
  IVTable, VTableConfig, VTableActionConfig, VTableColumnConfig ,
  VTableCommonProps
} from './IVTable';

import { VTableToolbar } from './VTableToolbar';
import { VTableView } from './VTableView';
import { VTableGridView } from './VTableGridView';
import { VTableTool } from './VTableTool';
import { VKanbanView } from './VKanbanView';
import { VTreeTableView } from './VTreeTableView';

import 'react-virtualized/styles.css';
import './stylesheet.scss';

export interface VTableProps extends VTableCommonProps {
  context?: any;
}
export interface VTableState { updateView: boolean }
export class VTable extends React.Component<VTableProps, VTableState> implements IVTable {
  view: any;
  visibleColumns: Array<VTableColumnConfig>  = [];
  dialogContext: DialogContext | null = null;

  constructor(props: VTableProps) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = { updateView: true }
    let { config } = props;
    this._updateVisibleColumns(config);
    if (!config.viewMode) config.viewMode = 'table';
    this.onViewMode(config.viewMode);
  }


  getModel() { return this.props.model; }

  getTreeTableModel(): TreeTableModel {
    if (this.props.model.treeTableModel == null) {
      throw Error("TreeTableModel is null");
    }
    return this.props.model.treeTableModel;
  }

  getConfig() { return this.props.config; }

  getContext() { return this.props.context; }

  onToggleColumn(_column: VTableColumnConfig) {
    //column.visible = !column.visible; //no need
    this._updateVisibleColumns(this.props.config);
    this.setState({ updateView: true });
  }

  setColumnVisible(visible: boolean, names: Array<string>) {
    let { config } = this.props;
    for (let i = 0; i < config.columns.length; i++) {
      let column = config.columns[i];
      if (TextUtil.isIn(column.name, names)) {
        column.visible = visible;
      }
    }
    this._updateVisibleColumns(config);
    this.setState({ updateView: true });
  }

  setOnlyColumnVisible(names: Array<string>) {
    let { config } = this.props;
    for (let i = 0; i < config.columns.length; i++) {
      let column = config.columns[i];
      if (TextUtil.isIn(column.name, names)) {
        column.visible = true;
      } else {
        column.visible = false;
      }
    }
    this._updateVisibleColumns(config);
    this.setState({ updateView: true });
  }

  setAllColumnVisible(visible: boolean) {
    let { config } = this.props;
    for (let i = 0; i < config.columns.length; i++) {
      let column = config.columns[i];
      column.visible = visible;
    }
    this._updateVisibleColumns(config);
    this.setState({ updateView: true });
  }

  _updateVisibleColumns(config: VTableConfig) {
    this.visibleColumns = [];
    for (let i = 0; i < config.columns.length; i++) {
      let column = config.columns[i];
      if (column.visible == undefined) column.visible = true;
      if (column.visible) {
        this.visibleColumns.push(column);
      }
    }
  }


  updateAggregation() {
    let model = this.getTreeTableModel();
    model.runAggregation();
    model.buildTableRows();
    this.setState({ updateView: true });
  }


  onSelectPageSize(pageSize: number) {
    let model = this.props.model;
    model.changePageSize(pageSize);
    this.setState({ updateView: true });
  }

  onSelectPage(page: number) {
    var model = this.props.model;
    model.selectPage(page);
    this.setState({ updateView: true });
  }

  onSelectRowInPage(page: number, row: number) {
    let { model } = this.props;
    model.toggleSelectRowInPage(page, row);
    this.setState({ updateView: true });
  }

  onToggleBucket(bucket: any) {
    let model = this.getTreeTableModel();
    bucket.collapse = !bucket.collapse;
    model.buildTableRows();
    this.setState({ updateView: true });
  }

  isFocusRow(row: number) {
    let model = this.props.model;
    return row === model.getFocusRowInPage();
  }

  onFocusRow(row: number) {
    let model = this.props.model;
    if (row === model.getFocusRowInPage()) return;
    model.setFocusRowInPage(row);
    this.setState({ updateView: true });
  }

  setFocusRow(row: number) {
    let model = this.props.model;
    if (row === model.getFocusRowInPage()) return;
    model.setFocusRowInPage(row);
  }

  onFilter(exp: string) {
    let { config, model } = this.props;
    model.filter(exp);
    if (config.viewMode == 'tree' && config.treeView) {
      let treeNodeLabel = this.getTreeTableModel();
      treeNodeLabel.update(model.getFilterRecords());
    }
    this.setState({ updateView: true });
  }

  onCellAction(colConfig: VTableColumnConfig, row: number, rec: any) {
    if (!colConfig.onClick) return;
    colConfig.onClick(this, row, rec);
  }

  onAction(action: VTableActionConfig) {
    if (action.onClick) action.onClick(this);
  }

  onViewMode(mode: 'table' | 'tree' | 'grid' | 'kanban') {
    let { config, model } = this.props;
    config.viewMode = mode;
    if('tree' == mode) {
      if (config.treeView) {
        let treeColWidth = config.treeView.treeColumnWidth;
        if(!treeColWidth) treeColWidth = 200;
        let treeTableModel = config.treeView.createTreeTableModel(model.getFilterRecords());
        model.setTreeTableModel(treeTableModel);
        VTableTool.addFixedColumn(config, { name: '_tree', label: 'Tree', width: treeColWidth }, 0);
        this.setColumnVisible(false, ['_index']);
      } else {
        throw new Error('Tree View Config is not defined');
      }
    } else {
      model.setTreeTableModel(null);
      VTableTool.removeColumn(config, "_tree");
    }
    this.forceUpdate();
  }

  onKeyDown(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    let { model, config } = this.props;
    let currRowFocus = model.getFocusRowInPage();
    if (currRowFocus == null) return false;

    let keyCode = evt.keyCode;
    if (keyCode == 38) { // key up
      //model.setFocusRowInPage(currRowFocus - 1);
      //this.setState({updateView: true});
      return false;
    } else if (keyCode == 40) { // key down
      //model.setFocusRowInPage(currRowFocus + 1);
      //this.setState({updateView: true});
      return false;
    } else if (config.onFocusRowKeyDown) {
      let onFocusRowKeyDown = config.onFocusRowKeyDown;
      onFocusRowKeyDown(evt, this, currRowFocus, model.getRecordInPage(currRowFocus));
      this.setState({ updateView: true });
    }
    return true;
  }

  dialogShow(title: string, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', ui: any) {
    this.dialogContext = new DialogContext();
    showDialog(title, size, ui, this.dialogContext);
  }

  dialogClose() {
    if (this.dialogContext) {
      this.dialogContext.getDialog().doClose();
      this.dialogContext = null;
    }
  }

  render() {
    let { config, model, className, style } = this.props;
    let { viewMode } = config;
    if (!viewMode) viewMode = 'table';
    let renderId = IDTracker.next();

    let viewHeight = 'calc(100% - 40px)';
    let pageIteratorBlock = null;
    let pageList = model.getPageList();
    if (pageList.getPageSize() < pageList.getAvailable()) {
      viewHeight = 'calc(100% - 65px)';
      let onSelectPage = (page: number) => {
        this.onSelectPage(page);
      }
      pageIteratorBlock = (<PageIterator pageList={pageList} onSelectPage={onSelectPage} />);
    }

    let tableView = null;
    if (viewMode == 'grid') {
      tableView = (
        <VTableGridView
          key={renderId}
          ref={(view) => { this.view = view; }} style={{ height: viewHeight, minHeight: '100px' }}
          vtable={this} model={model} config={config} />
      );
    } else if (viewMode == 'kanban') {
      tableView = (
        <VKanbanView key={renderId} style={{ height: viewHeight, minHeight: 100 }} vtable={this} config={config} model={model} />
      )
      pageIteratorBlock = null;
    } else if (viewMode == 'tree') {
      tableView = (
        <VTreeTableView key={renderId} style={{ height: viewHeight, minHeight: 100 }} vtable={this} config={config} model={model} />
      );
      pageIteratorBlock = null;
    } else {
      tableView = (
        <VTableView key={renderId} style={{ height: viewHeight, minHeight: 100 }} vtable={this} config={config} model={model} />
      );
    }
    if(!className) className='full-height-box' 
    className = `ui-table ${className}`;
    let html = (
      <div className={className} style={style}>
        <VTableToolbar table={this} config={config} model={model} />
        {tableView}
        {pageIteratorBlock}
      </div>
    );
    return html;
  }
}