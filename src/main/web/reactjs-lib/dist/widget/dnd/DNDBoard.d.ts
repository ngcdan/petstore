import { Component } from "react";
import './stylesheet.scss';
export interface DNDBoardColumnConfig {
    name: string;
    label: string;
    width?: number;
    items: Array<any>;
}
export interface DNDBoardConfig {
    columns: Array<DNDBoardColumnConfig>;
    height?: number;
    columnWidth: number;
    itemHeight: number;
    inColumn: (name: string, item: any, ctx?: any) => boolean;
    onDrop: (sourceCol: DNDBoardColumnConfig, descCol: DNDBoardColumnConfig, item: any, ctx?: any) => void;
    getItemId: (item: any, columnName: string, index: number, ctx?: any) => any;
    renderItem: (col: DNDBoardColumnConfig, item: any, ctx?: any) => any;
    renderItemDetail: (col: DNDBoardColumnConfig, item: any, ctx?: any) => any;
}
declare type DNDBoardProps = {
    context?: any;
    config: DNDBoardConfig;
    items: Array<any>;
};
declare type DNDBoardState = {
    height: number;
    width: number;
};
export declare class DNDBoard extends Component<DNDBoardProps, DNDBoardState> {
    divElement: HTMLElement | null;
    constructor(props: DNDBoardProps);
    componentDidMount(): void;
    findColumn(name: string): DNDBoardColumnConfig;
    onDragEnd(result: any): void;
    render(): JSX.Element;
}
export declare class DNDBoardDemo extends Component {
    render(): JSX.Element;
}
export {};
