import React from 'react';
import { DialogContext } from 'widget/layout';
import { TreeTableModel } from './TreeTableModel';
import { IVTable, VTableConfig, VTableActionConfig, VTableColumnConfig, VTableCommonProps } from './IVTable';
import 'react-virtualized/styles.css';
import './stylesheet.scss';
export interface VTableProps extends VTableCommonProps {
    context?: any;
}
export interface VTableState {
    updateView: boolean;
}
export declare class VTable extends React.Component<VTableProps, VTableState> implements IVTable {
    view: any;
    visibleColumns: Array<VTableColumnConfig>;
    dialogContext: DialogContext | null;
    constructor(props: VTableProps);
    getModel(): import("widget/list/ListModel").ListModel;
    getTreeTableModel(): TreeTableModel;
    getConfig(): VTableConfig;
    getContext(): any;
    onToggleColumn(_column: VTableColumnConfig): void;
    setColumnVisible(visible: boolean, names: Array<string>): void;
    setOnlyColumnVisible(names: Array<string>): void;
    setAllColumnVisible(visible: boolean): void;
    _updateVisibleColumns(config: VTableConfig): void;
    updateAggregation(): void;
    onSelectPageSize(pageSize: number): void;
    onSelectPage(page: number): void;
    onSelectRowInPage(page: number, row: number): void;
    onToggleBucket(bucket: any): void;
    isFocusRow(row: number): boolean;
    onFocusRow(row: number): void;
    setFocusRow(row: number): void;
    onFilter(exp: string): void;
    onCellAction(colConfig: VTableColumnConfig, row: number, rec: any): void;
    onAction(action: VTableActionConfig): void;
    onViewMode(mode: 'table' | 'tree' | 'grid' | 'kanban'): void;
    onKeyDown(evt: any): boolean;
    dialogShow(title: string, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', ui: any): void;
    dialogClose(): void;
    render(): JSX.Element;
}
