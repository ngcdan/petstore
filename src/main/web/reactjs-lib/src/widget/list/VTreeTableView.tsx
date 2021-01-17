import React from "react";
import { Button } from "reactstrap";
import { ICONS } from "widget/icons";
import { TableCell } from "./common";
import { VTableView } from "./VTableView";

export class VTreeTableView extends VTableView {
  _renderTreeCell(key: any, style: any, cssClass: string, rowData: any) {
    let deep = rowData.deep;
    let treeStyle = { paddingLeft: 15 * deep };
    if (rowData.bucket) {
      let bucket = rowData.bucket;
      let toggleBtnClass = `${ICONS.webapp.caretDown}`;
      if (bucket.collapse) toggleBtnClass = `${ICONS.webapp.caretRight}`;
      const { vtable } = this.props;

      return (
        <div key={key} className={`${cssClass} tree-cell`} style={{ ...style, ...treeStyle }}>
          <Button color='link' onClick={() => vtable.onToggleBucket(bucket)}>
            <span className={toggleBtnClass} />
          </Button>
          <strong>{bucket.label}</strong>
          <span>[{bucket.getNumOfRecords()}]</span>
        </div>
      );
    }
    if (rowData.aggRecord) {
      let label = rowData.aggRecord.treeNodeLabel;
      treeStyle.paddingLeft = treeStyle.paddingLeft + 25;
      return (
        <div key={key} className='tree-cell' style={{ ...style, ...treeStyle }}>{label}</div>
      );
    }
    return <div key={key} className='tree-cell' style={{ ...style, ...treeStyle }} />
  }

  _renderCell(params: { columnIndex: number, key: any, rowIndex: number, style: any }) {
    let { vtable } = this.props;
    let model = vtable.getTreeTableModel();
    let row = params.rowIndex;
    let column = this._getColumn(params.columnIndex);
    let tableRows = model.getTableRows();
    let className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';

    let rowData = tableRows[row];

    if (column.name == '_tree') {
      return this._renderTreeCell(params.key, params.style, className, rowData);
    }

    let record = rowData.record;
    if (column.actions) {
      if (!record) {
        return (<div key={params.key} className={className} style={params.style} />);
      }
      let actions = [];
      for (let i = 0; i < column.actions.length; i++) {
        let action = column.actions[i];
        actions.push(
          <Button key={i} className={'px-1'} color='link' onClick={() => action.onClick(vtable, row, record)}>
            {action.label}
          </Button>
        );
      }
      return (<div key={params.key} className={className} style={params.style}> {actions} </div>);
    }

    if (!record) record = rowData.aggRecord;
    if (!record) {
      return (<div key={params.key} className={className} style={params.style} />);
    }
    return (<TableCell key={params.key} style={params.style} table={vtable} row={row} fieldConfig={column} record={record} />);
  }

  _getRowCount() {
    const { vtable } = this.props;
    let model = vtable.getTreeTableModel();
    return model.getTableRows().length;
  }
}
