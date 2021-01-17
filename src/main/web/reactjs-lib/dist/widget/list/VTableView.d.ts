import React from 'react';
import { IVTable, VTableColumnConfig, VTableCommonProps } from './IVTable';
import 'react-virtualized/styles.css';
import './stylesheet.scss';
export interface VTableViewProps extends VTableCommonProps {
    vtable: IVTable;
}
export declare class VTableView extends React.PureComponent<VTableViewProps, {}> {
    constructor(props: any);
    _getColumn(idx: number): VTableColumnConfig;
    _renderHeader(params: {
        columnIndex: number;
        key: any;
        rowIndex: number;
        style: any;
    }): JSX.Element;
    _renderCell(params: {
        columnIndex: number;
        key: any;
        rowIndex: number;
        style: any;
    }): JSX.Element;
    _colWidth(params: {
        index: number;
    }): number;
    _gridWidth(columns: Array<VTableColumnConfig>): number;
    renderFixedColumns(scrollTop: number, headerRowHeight: number, rowHeight: number): JSX.Element | null;
    _getRowCount(): number;
    render(): JSX.Element;
}
