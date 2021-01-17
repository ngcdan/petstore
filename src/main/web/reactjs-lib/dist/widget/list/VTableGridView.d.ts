import { Component } from 'react';
import { IVTable, VTableCommonProps } from './IVTable';
export interface VTableViewProps extends VTableCommonProps {
    vtable: IVTable;
}
export declare class VTableGridView extends Component<VTableViewProps, {}> {
    ref: any;
    constructor(props: VTableViewProps);
    noRowsRenderer(): JSX.Element;
    rowRenderer(_ref: any): JSX.Element | null;
    render(): JSX.Element | null;
}
