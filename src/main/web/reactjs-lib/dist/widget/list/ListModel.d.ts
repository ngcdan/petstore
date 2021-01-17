import PageList from "util/PageList";
import { TreeTableModel } from "./TreeTableModel";
export declare class ListModel {
    records: Array<any>;
    filterExp: null | string;
    filterState: null | 'ACTIVE' | 'ARCHIVED' | 'DEPRECATED' | 'JUNK' | 'INACTIVE';
    filterRecords: Array<any>;
    pageSize: number;
    pageList: PageList;
    selectedRows: Set<number>;
    focusRowInPage: null | number;
    treeTableModel: TreeTableModel | null;
    constructor(pageSize: number, records: Array<any>);
    update(records: Array<any>): void;
    refresh(): void;
    getRecords(): Array<any>;
    getFilterRecords(): Array<any>;
    getTreeTableModel(): TreeTableModel | null;
    setTreeTableModel(treeModel: TreeTableModel | null): void;
    getPageList(): PageList;
    getRecordInPage(idx: number): any;
    getCurrentPage(): number;
    getFocusRowInPage(): null | number;
    setFocusRowInPage(row: number): void;
    clearFocusRowInPage(): void;
    getFilterExp(): string | null;
    addRecord(record: any): void;
    hasSelectedRows(): boolean;
    clearSelectedRows(): void;
    selectRow(row: number): void;
    toggleSelectRow(row: number): void;
    toggleSelectRows(): void;
    getSelectedRows(): Set<number>;
    getSelectedRecords(): any[];
    getSelectedRecordIds(): any[];
    removeSelectedRows(): void;
    toggleSelectRowInPage(page: number, rowInPage: number): void;
    isSelectedRowInPage(page: number, rowInPage: number): boolean;
    selectPage(page: number): void;
    changePageSize(pageSize: number): void;
    filterByState(state: null | 'ACTIVE' | 'ARCHIVED' | 'DEPRECATED' | 'JUNK' | 'INACTIVE'): void;
    filter(exp: null | string): void;
    sort(field: string, _method: string): void;
    /*************************************************************************************************************/
    /*************************************************************************************************************/
    getXYCoordinate(xField: string, yField: string): {
        x: any;
        y: any;
    }[];
    collectXYCoordinate(xyCollector: (rec: any) => {
        x: any;
        y: any;
    }): {
        x: any;
        y: any;
    }[];
}
