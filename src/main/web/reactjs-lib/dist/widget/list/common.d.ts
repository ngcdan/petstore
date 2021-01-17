import { Component } from "react";
import PageList from "util/PageList";
import { NotificationMessage } from "widget/util";
import { WInput } from "widget/input";
export declare function formatCellValue(field: any, val: any): any;
export interface TableRowProps {
    table: any;
    _ref: any;
}
export interface TableRowState {
}
export declare class TableRow extends Component<TableRowProps, TableRowState> {
    constructor(props: TableRowProps);
    onBlur(_evt: any): void;
    onClick(_evt: any): void;
    render(): JSX.Element;
}
export interface TableCellProps {
    style?: any;
    table: any;
    row: number;
    fieldConfig: any;
    record: any;
}
export interface TableCellState {
    editMode: boolean;
    select: boolean;
}
export declare class TableCell extends Component<TableCellProps, TableCellState> {
    message: null | NotificationMessage;
    constructor(props: TableCellProps);
    onEdit(field: any, record: any): void;
    onInputChange(_bean: any, _fieldName: string, oldVal: any, newVal: any): void;
    onEditKeyDown(winput: WInput, _evt: any, keyCode: number, currInput: any): void;
    renderCustomCell(field: any, record: any, className: string): JSX.Element;
    renderOnClickCell(field: any, record: any, className: string): JSX.Element;
    renderCellEditor(field: any, record: any, className: string): JSX.Element;
    renderCell(fieldConfig: any, record: any, className: string): JSX.Element;
    render(): JSX.Element;
    componentDidUpdate(): void;
}
export interface PageIteratorProps {
    pageList: PageList;
    onSelectPage: (page: number) => void;
}
export declare class PageIterator extends Component<PageIteratorProps, {}> {
    render(): JSX.Element;
}
