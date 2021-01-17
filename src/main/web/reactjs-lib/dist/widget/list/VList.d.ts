import { Component } from 'react';
import { ListModel } from './ListModel';
import 'react-virtualized/styles.css';
import "./stylesheet.scss";
export interface VListActionConfig {
    name: string;
    label?: string;
    icon?: string;
    hint?: string;
    createComponent?: (list: VList) => any;
    onClick?: (list: VList) => void;
}
export interface ToolbarConfig {
    hide: boolean;
}
export interface VListConfig {
    toolbar?: ToolbarConfig;
    rowHeight: number;
    renderItem: (list: VList, page: number, row: number, rowInPage: number, item: any) => any;
    onSelect?: (list: VList, page: number, row: number, rowInPage: number, item: any) => void;
    actions: Array<VListActionConfig>;
}
export interface ColumnToggleButtonProps {
    table: any;
}
export declare class ColumnToggleButton extends Component<ColumnToggleButtonProps, {}> {
    render(): JSX.Element;
}
export interface VListToolbarProps {
    list: VList;
    config: VListConfig;
    model: ListModel;
}
export interface VListViewProps {
    vlist: VList;
    model: ListModel;
    config: VListConfig;
}
export interface VListViewState {
}
export interface VListProps {
    className?: string;
    model: ListModel;
    config: VListConfig;
    context?: any;
}
export interface VListState {
    dialog: any;
}
declare class VList extends Component<VListProps, VListState> {
    constructor(props: VListProps);
    componentWillReceiveProps(_props: VListProps): void;
    getModel(): ListModel;
    getConfig(): VListConfig;
    getContext(): any;
    onSelectPageSize(pageSize: number): void;
    onSelectPage(page: number): void;
    onFilter(exp: string): void;
    onAction(action: VListActionConfig): void;
    showDialog(dialog: {
        title: string;
        content: any;
        openDialog?: boolean;
    }): void;
    hideDialog(): void;
    render(): JSX.Element;
    renderDialog(): JSX.Element | null;
}
export { VList, ListModel };
