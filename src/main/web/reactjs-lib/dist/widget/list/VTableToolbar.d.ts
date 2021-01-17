import { Component } from 'react';
import { ListModel } from './ListModel';
import { IVTable, VTableConfig, VTableActionConfig, VTableFilterConfig } from './IVTable';
import 'react-virtualized/styles.css';
import './stylesheet.scss';
export interface VTableToolbarProps {
    table: IVTable;
    model: ListModel;
    config: VTableConfig;
}
export declare class VTableToolbar extends Component<VTableToolbarProps, {}> {
    render(): any;
    renderDefault(): JSX.Element;
    renderActions(table: IVTable, actions?: Array<VTableActionConfig>): JSX.Element | null;
    setActiveFilter(idx: number, filters: Array<VTableFilterConfig>): void;
    renderFilters(table: IVTable, config: VTableConfig): JSX.Element | null;
    createGridControls(table: IVTable, config: VTableConfig, model: ListModel): JSX.Element[];
}
