import { Component, Props } from 'react';
export declare class WebsocketClient {
    wsUri: string;
    websocket: WebSocket | null;
    constructor(wsUri: string, open: boolean);
    open(): void;
    onOpen(_evt: any): void;
    onClose(_evt: any): void;
    onError(_evt: any): void;
    onMessage(_evt: any): void;
    send(message: string): void;
    sendObject(object: any): void;
    close(): void;
}
export interface UIWebsocketEchoProps extends Props<any> {
    serverUrl: string;
    wsPath: string;
}
export declare class UIWebsocketEcho extends Component<UIWebsocketEchoProps, {}> {
    screen: string;
    wsClient: WebsocketClient | null;
    componentWillReceiveProps(_nextProps: any): void;
    initWebsocket(): void;
    closeWebsocket(): void;
    pingWebsocket(): void;
    writeToScreen(message: string): void;
    render(): JSX.Element;
}
