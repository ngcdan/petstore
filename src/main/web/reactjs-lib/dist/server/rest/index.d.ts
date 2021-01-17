import * as React from 'react';
import { Component } from 'react';
interface UIRestPingProps extends React.Props<any> {
    serverUrl: string;
    restPath: string;
}
export declare class UIRestPing extends Component<UIRestPingProps, {}> {
    screen: string;
    restContext: {
        serverUrl: string;
        restPath: string;
    };
    constructor(props: UIRestPingProps);
    ping(): void;
    clear(): void;
    render(): JSX.Element;
}
export * from './type';
export * from './rest';
