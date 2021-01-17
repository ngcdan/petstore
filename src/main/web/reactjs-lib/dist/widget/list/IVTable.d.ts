import { Validator } from 'util/validator';
import { ListModel } from './ListModel';
import { TreeTableModel } from './TreeTableModel';
import { DNDBoardConfig } from '../dnd/DNDBoard';
import 'react-virtualized/styles.css';
import './stylesheet.scss';
export declare const DEFAULT_COLUMN_WIDTH = 150;
export declare const DEFAULT_ROW_HEIGHT = 25;
export declare const DEFAULT_HEADER_ROW_HEIGHT = 30;
export declare const PAGE_SIZES: number[];
export interface VTableActionConfig {
    name: string;
    label?: string;
    icon?: string;
    hint?: string;
    createComponent?: (table: IVTable) => any;
    onClick?: (table: IVTable) => any;
}
export interface VTableFilterConfig {
    name: string;
    label?: string;
    icon?: string;
    hint?: string;
    active?: boolean;
    createComponent: (table: IVTable) => any;
}
export interface VTableColumnConfig {
    name: string;
    label: string;
    visible?: boolean;
    width?: number;
    actions?: Array<{
        name: string;
        label?: string;
        icon?: string;
        hint?: string;
        onClick: (table: IVTable, row: number, bean: any) => any;
    }>;
    cellStyle?: any;
    disableSort?: boolean;
    editor?: {
        type: string;
        validators?: Array<Validator>;
        onInputChange?: (vtable: IVTable, bean: any, oldVal: any, newVal: any) => void;
    };
    onClick?: (table: IVTable, row: number, bean: any) => void;
    onKeyDown?: (evt: any, table: IVTable, row: number, bean: any) => void;
    format?: (val: any) => any;
    customRender?: (table: IVTable, colConfig: VTableColumnConfig, row: number, bean: any) => any;
    cellDataGetter?: (bean: any) => any;
}
export interface VTableGridViewConfig {
    column?: number;
    rowHeight?: number;
    renderToolbar?: (vtable: IVTable) => any;
    renderItem: (vtable: IVTable, page: number, row: number, rowInPage: number, item: any) => any;
}
export interface VTableKabanViewConfig {
    renderToolbar?: (vtable: IVTable) => any;
    dndBoard: DNDBoardConfig;
}
export interface VTableTreeViewConfig {
    treeColumnWidth?: number;
    createTreeTableModel(records: Array<any>): TreeTableModel;
}
export interface VTableConfig {
    title?: string;
    viewMode?: 'table' | 'tree' | 'grid' | 'kanban';
    pageSizes?: Array<number>;
    headerRowHeight?: number;
    rowHeight?: number;
    fixedColumns?: Array<VTableColumnConfig>;
    columns: Array<VTableColumnConfig>;
    actions?: Array<VTableActionConfig>;
    filters?: Array<VTableFilterConfig>;
    treeView?: VTableTreeViewConfig;
    gridView?: VTableGridViewConfig;
    kanbanView?: VTableKabanViewConfig;
    onFocusRowKeyDown?: (evt: any, table: IVTable, row: number, bean: any) => void;
}
export interface VTableCommonProps {
    className?: string;
    style?: any;
    config: VTableConfig;
    model: ListModel;
}
export interface IVTable {
    visibleColumns: Array<VTableColumnConfig>;
    getModel: () => ListModel;
    getTreeTableModel: () => TreeTableModel;
    getConfig: () => VTableConfig;
    getContext: () => any;
    onToggleColumn: (column: VTableColumnConfig) => void;
    setColumnVisible: (visible: boolean, names: Array<string>) => void;
    setOnlyColumnVisible: (names: Array<string>) => void;
    setAllColumnVisible: (visible: boolean) => void;
    updateAggregation: () => void;
    onSelectPageSize: (pageSize: number) => void;
    onSelectPage: (page: number) => void;
    onSelectRowInPage: (page: number, row: number) => void;
    onToggleBucket: (bucket: any) => void;
    isFocusRow: (row: number) => boolean;
    onFocusRow: (row: number) => void;
    setFocusRow: (row: number) => void;
    onFilter: (exp: string) => void;
    onCellAction: (colConfig: VTableColumnConfig, row: number, rec: any) => void;
    onAction: (action: VTableActionConfig) => void;
    onViewMode: (mode: 'table' | 'tree' | 'grid' | 'kanban') => void;
    onKeyDown: (evt: any) => void;
    dialogShow: (title: string, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', ui: any) => void;
    dialogClose: () => void;
    forceUpdate: () => void;
}
