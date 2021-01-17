/// <reference types="react" />
import { VTableView } from "./VTableView";
export declare class VTreeTableView extends VTableView {
    _renderTreeCell(key: any, style: any, cssClass: string, rowData: any): JSX.Element;
    _renderCell(params: {
        columnIndex: number;
        key: any;
        rowIndex: number;
        style: any;
    }): JSX.Element;
    _getRowCount(): number;
}
