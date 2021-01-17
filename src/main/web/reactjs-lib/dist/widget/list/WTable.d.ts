import { Component } from 'react';
import { ButtonActionModel } from 'widget/element';
import { VTable } from 'widget/list/VTable';
export interface WTableProps {
    table: VTable;
}
export declare class WTableFilter extends Component<WTableProps> {
    render(): JSX.Element;
}
export declare class WTableStateFilter extends Component<WTableProps> {
    constructor(props: WTableProps);
    onInputChange(_bean: any, _field: string, _oldVal: any, newVal: any): void;
    render(): JSX.Element;
}
export interface WTableChangeStateProps {
    table: VTable;
    actions: Array<string>;
}
export declare class WTableChangeState extends Component<WTableChangeStateProps> {
    actions: Array<ButtonActionModel>;
    constructor(props: WTableChangeStateProps);
    onChangeStorageState(newState: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED' | 'DEPRECATED'): void;
    render(): JSX.Element;
}
