import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import { ICONS } from 'widget/icons';
import { DropdownSelectItemButton, DropdownSelectComplexItemButton } from 'widget/element';

import { ListModel } from './ListModel';
import { IVTable, VTableConfig, VTableActionConfig, VTableFilterConfig} from './IVTable';

import 'react-virtualized/styles.css';
import './stylesheet.scss';

const PAGE_SIZES = [100, 500, 1000, 10000];

type ColumnToggleButtonProps = { table: IVTable }
class ColumnToggleButton extends Component<ColumnToggleButtonProps, {}> {
  render() {
    const { table } = this.props;
    let config : VTableConfig = table.getConfig();
    let onSelect = (column: any) => table.onToggleColumn(column);
    let html = (
      <DropdownSelectComplexItemButton 
        label={'Cols'} items={config.columns} fieldLabel={'label'} fieldCheck={'visible'} onSelect={onSelect} />
    );
    return html;
  }
}

interface AggregationControlProps { table: IVTable }
class AggregationControl extends Component<AggregationControlProps, {}> {
  render() {
    const { table } = this.props;
    let model = table.getTreeTableModel();
    let aggregations = model.aggregations;
    let html = (
      <DropdownSelectComplexItemButton label={'Aggregations'} items={aggregations} fieldLabel={'name'}
        fieldCheck={'active'} onSelect={() => table.updateAggregation()} />
    );
    return html;
  }
}

export interface VTableToolbarProps { table: IVTable, model: ListModel, config: VTableConfig }
export class VTableToolbar extends Component<VTableToolbarProps, {}> {
  render() {
    const { table, config } = this.props;
    let { viewMode } = config;
    if (!viewMode) viewMode = 'table';
    if (viewMode == 'grid' && config.gridView && config.gridView.renderToolbar) {
      return config.gridView.renderToolbar(table);
    }
    if (viewMode == 'kanban' && config.kanbanView && config.kanbanView.renderToolbar) {
      return config.kanbanView.renderToolbar(table);
    }
    return this.renderDefault();
  }

  renderDefault() {
    const { table, config, model } = this.props;
    let { title, viewMode } = config;
    if (!viewMode) viewMode = 'table';
    let titleUI = null;
    if (title) {
      titleUI = (<Button className='px-0' disabled={true}>[{title}]</Button>)
    }
    let html = (
      <div className={`toolbar toolbar-${viewMode} d-flex`}>
        <div className='d-flex'>
          {titleUI}
          {this.createGridControls(table, config, model)}
          {this.renderActions(table, config.actions)}
        </div>
        <div className="d-flex ml-auto">
          {this.renderFilters(table, config)}
        </div>
      </div>
    );
    return html;
  }

  renderActions(table: IVTable, actions?: Array<VTableActionConfig>) {
    if (!actions || actions.length == 0) return null;
    let html = (
      <div className="d-flex">
        {
          actions.map((action: any, _idx: number) => {
            if (action.createComponent) {
              return action.createComponent(table);
            } else {
              let iconEle = null;
              if (action.icon) iconEle = (<span className={action.icon} title={action.hint} />);
              return (<Button key={action.name} onClick={() => table.onAction(action)}> {iconEle}{action.label} </Button>)
            }
          })
        }
      </div>
    );
    return html;
  }

  setActiveFilter(idx: number, filters: Array<VTableFilterConfig>) {
    for (let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      if (i == idx) filter.active = true;
      else filter.active = false;
    }
    this.forceUpdate();
  }

  renderFilters(table: IVTable, config: VTableConfig) {
    let filters = config.filters;
    if (!filters || filters.length == 0) return null;
    let definedFilters = filters;
    let uiButtons = [];
    let activeFilter = definedFilters[0];
    for (let i = 0; i < definedFilters.length; i++) {
      let filter = definedFilters[i];
      let iconEle = filter.icon ? (<span className={filter.icon} title={filter.hint} />) : null;
      uiButtons.push(<Button onClick={() => this.setActiveFilter(i, definedFilters)} active={filter.active}>{iconEle}{filter.label}</Button>);
      if (filter.active) activeFilter = filter;
    }
    let filterUI = activeFilter.createComponent(table);
    let html = (
      <div className="d-flex">
        <ButtonGroup>{uiButtons}</ButtonGroup>
        {filterUI}
      </div>
    );
    return html;
  }

  createGridControls(table: IVTable, config: VTableConfig, model: ListModel) {
    const { viewMode } = config;
    let buttons = [];

    if (config.gridView && viewMode !== 'grid') {
      buttons.push(
        <Button key='grid' onClick={() => table.onViewMode('grid')}>
          <span className={ICONS.editor.th} title='Grid' />
        </Button>
      );
    }
    if (config.kanbanView && viewMode !== 'kanban') {
      buttons.push(
        <Button key='kanban' onClick={() => table.onViewMode('kanban')}>
          <span className={ICONS.editor.tasks} title='Kanban' />
        </Button>
      )
    }
    if (config.treeView && viewMode !== 'tree') {
      buttons.push(
        <Button key='tree' onClick={() => table.onViewMode('tree')}>
          <span className={ICONS.editor.table} title='Tree' />
        </Button>
      );
    }
    if (viewMode && viewMode !== 'table') {
      buttons.push(
        <Button key='table' onClick={() => table.onViewMode('table')}>
          <span className={ICONS.editor.table} title='Table' />
        </Button>
      )
    }

    if (!viewMode || viewMode == 'table') {
      let pageSize = model.getPageList().getPageSize();
      let arrPageSize = PAGE_SIZES;
      if (config.pageSizes) arrPageSize = config.pageSizes;
      buttons.push(<ColumnToggleButton key='column-toggle-button' table={table} />);
      buttons.push(
        <DropdownSelectItemButton key='select-page' items={arrPageSize} selectItem={pageSize} onSelect={(value) => table.onSelectPageSize(value)} />
      );
    }
    if (viewMode && viewMode == 'tree') {
      buttons.push(<AggregationControl key='aggregation' table={table} />);
    }
    return buttons;
  }
}