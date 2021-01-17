import React from 'react';
import { AutoSizer, Grid, ScrollSync } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/scrollbarSize';
import { Button } from 'reactstrap';

import { TableCell } from './common';
import { 
  IVTable, VTableColumnConfig,
  VTableCommonProps,
  DEFAULT_COLUMN_WIDTH, DEFAULT_ROW_HEIGHT, DEFAULT_HEADER_ROW_HEIGHT
} from './IVTable';

import 'react-virtualized/styles.css';
import './stylesheet.scss';

export interface VTableViewProps extends VTableCommonProps { 
  vtable: IVTable 
}
export class VTableView extends React.PureComponent<VTableViewProps, {}> {
  constructor(props: any) {
    super(props);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderCell = this._renderCell.bind(this);
    this._colWidth = this._colWidth.bind(this);
  }

  _getColumn(idx: number) {
    let { vtable, config } = this.props;
    let fixedColumns = config.fixedColumns;
    let columns = vtable.visibleColumns;
    if (fixedColumns) {
      if (idx < fixedColumns.length) return fixedColumns[idx];
      return columns[idx - fixedColumns.length];
    } else {
      return columns[idx];
    }
  }

  _renderHeader(params: { columnIndex: number, key: any, rowIndex: number, style: any }) {
    let column = this._getColumn(params.columnIndex);
    return (
      <div className={'header-cell'} key={params.key} style={{ ...column.cellStyle, ...params.style }}>
        {column.label}
      </div>
    );
  }

  _renderCell(params: { columnIndex: number, key: any, rowIndex: number, style: any }) {
    let { vtable, model } = this.props;
    let row = params.rowIndex;
    let column = this._getColumn(params.columnIndex);
    let record = model.getRecordInPage(row);
    if (column.name == '_index') {
      let className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
      return (
        <div key={params.key} style={params.style} className={className}>
          {model.getPageList().getFrom() + row + 1}
        </div>
      );
    } else if (column.name == '_selector') {
      let page = model.getPageList().getCurrentPage();
      let selected = model.isSelectedRowInPage(page, row);
      let className = row % 2 == 0 ? 'cell-even-row cell row-selector-cell' : 'cell-odd-row cell row-selector-cell';
      let html = (
        <div key={params.key} className={className} style={params.style}>
          <input type="checkbox" name={'row_selector'} value={'true'} checked={selected ? true : false} onChange={(_evt: any) => vtable.onSelectRowInPage(page, row)} />
        </div>
      );
      return html;
    } else if (column.actions) {
      let className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
      let actions = [];
      for (let i = 0; i < column.actions.length; i++) {
        let action = column.actions[i];
        actions.push(
          <Button key={i} className={'px-1'} color='link' onClick={() => action.onClick(vtable, row, record)}>
            {action.label}
          </Button>
        );
      }
      let html = (<div key={params.key} className={className} style={params.style}> {actions} </div>);
      return html;
    }
    return (<TableCell key={params.key} style={params.style} table={vtable} row={row} fieldConfig={column} record={record} />);
  }

  _colWidth(params: { index: number }) {
    let column = this._getColumn(params.index);
    return column.width ? column.width : DEFAULT_COLUMN_WIDTH;
  }

  _gridWidth(columns: Array<VTableColumnConfig>) {
    let width = 0;
    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      if (column.width) width += column.width;
      else width += DEFAULT_COLUMN_WIDTH;
    }
    return width;
  }

  renderFixedColumns(scrollTop: number, headerRowHeight: number, rowHeight: number) {
    const { config } = this.props;
    const fixedColumns = config.fixedColumns;
    if (!fixedColumns) return null;
    let fixedGridWidth = this._gridWidth(fixedColumns);
    let customStyle: any = { position: "absolute", left: 0, top: 0, zIndex: 10 };
    let html = (
      <AutoSizer className={'fixed-column-container'} style={customStyle}>
        {({ height }) => (
          <div>
            <Grid
              className={'header-grid'}
              height={headerRowHeight} width={fixedGridWidth}
              columnWidth={this._colWidth} columnCount={fixedColumns.length}
              rowHeight={headerRowHeight} rowCount={1}
              cellRenderer={this._renderHeader}
            />
            <Grid
              className={'fixed-column-grid'}
              columnCount={fixedColumns.length} columnWidth={this._colWidth}
              height={height - headerRowHeight + scrollbarSize()} width={fixedGridWidth}
              rowHeight={rowHeight} rowCount={this._getRowCount()}
              scrollTop={scrollTop} cellRenderer={this._renderCell}
            />
          </div>
        )}
      </AutoSizer>
    );
    return html;
  }

  _getRowCount() {
    let { model } = this.props;
    return model.getPageList().currentPageItems().length;
  }

  render() {
    let { vtable, config, className, style } = this.props;

    let fixedColumns = config.fixedColumns;
    let columns = vtable.visibleColumns;
    let totalColumn = columns.length;
    if (fixedColumns) totalColumn += fixedColumns.length;

    let headerRowHeight = config.headerRowHeight ? config.headerRowHeight : DEFAULT_HEADER_ROW_HEIGHT;
    let rowHeight = config.rowHeight ? config.rowHeight : DEFAULT_ROW_HEIGHT;
    let cssClass = className ? `view ${className}` : 'view';
    return (
      <ScrollSync>
        {({ onScroll, scrollLeft, scrollTop }) => {
          return (
            <div className={cssClass} style={style}>
              {this.renderFixedColumns(scrollTop, headerRowHeight, rowHeight)}
              <AutoSizer className={'column-container'}>
                {({ height, width }) => (
                  <div>
                    <Grid
                      className={'header-grid'}
                      columnWidth={this._colWidth} columnCount={totalColumn}
                      height={headerRowHeight} width={width /*- scrollbarSize()*/}
                      rowHeight={headerRowHeight} rowCount={1}
                      scrollLeft={scrollLeft} cellRenderer={this._renderHeader}
                    />
                    <Grid
                      className={'column-grid'}
                      columnWidth={this._colWidth} columnCount={totalColumn}
                      height={height - headerRowHeight + scrollbarSize()} width={width /*- scrollbarSize()*/}
                      rowHeight={rowHeight} rowCount={this._getRowCount()}
                      onScroll={onScroll} cellRenderer={this._renderCell}>
                    </Grid>
                  </div>
                )}
              </AutoSizer>
            </div>
          );
        }}
      </ScrollSync>
    );
  }
}