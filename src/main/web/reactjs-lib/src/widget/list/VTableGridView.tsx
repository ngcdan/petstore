import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';

import {IDTracker} from "util/common";

import { 
  IVTable, VTableCommonProps
} from './IVTable';

export interface VTableViewProps extends VTableCommonProps { 
  vtable: IVTable 
}
export class VTableGridView extends Component<VTableViewProps, {}> {
  ref: any;

  constructor(props: VTableViewProps) {
    super(props);
    this.ref = React.createRef();
    this.rowRenderer = this.rowRenderer.bind(this);
    this.noRowsRenderer = this.noRowsRenderer.bind(this);
  }

  noRowsRenderer() {
    return (<div className='no-rows'>{'No rows'}</div>)
  }

  rowRenderer(_ref: any) {
    let { key, index, style } = _ref;
    const { vtable, model, config } = this.props;
    const gridView = config.gridView;
    if (!gridView) return null;

    let maxColumn = gridView.column ? gridView.column : 4;
    let columnWidth = 100 / maxColumn;

    let pageList = model.getPageList();
    let from = pageList.getFrom();
    let page = pageList.getCurrentPage();
    let items = pageList.currentPageItems();
    let start = index * maxColumn;
    let limit = start + maxColumn;
    if (items.length < limit) limit = items.length;
    let cells = [];
    for (let i = start; i < limit; i++) {
      let item = items[i];
      cells.push(
        <div key={i} className='item' style={{ width: `${columnWidth}%` }}>
          {gridView.renderItem(vtable, page, from + i, i, item)}
        </div>
      );
    }
    return (<div key={key} className={`d-flex py-1`} style={style}>{cells}</div>);
  }

  render() {
    const { config, model, style, className } = this.props;
    const gridView = config.gridView;
    if (!gridView) return null;

    let maxColumn = gridView.column ? gridView.column : 4;
    let rowHeight = gridView.rowHeight ? gridView.rowHeight : 100;
    let cssClass = className ? `grid-view ${className}` : 'grid-view';

    let pageList = model.getPageList();
    let items = pageList.currentPageItems();

    let html = (
      <div className={cssClass} style={style}>
        <AutoSizer key={IDTracker.next()}>
          {({ height, width }) => (
            <List ref={this.ref} width={width} height={height}
              overscanRowCount={10} rowCount={items.length / maxColumn + 1} rowHeight={rowHeight}
              rowRenderer={this.rowRenderer} noRowsRenderer={this.noRowsRenderer} scrollToIndex={0}
            />
          )}
        </AutoSizer>
      </div>
    );
    return html;
  }
}
