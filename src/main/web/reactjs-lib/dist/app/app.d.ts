import { Component } from 'react';
import { Rest } from '../server/rest';
import { Breadcumbs, DialogContext } from 'widget/layout';
import { IAppRegistry } from './AppRegistry';
export declare class ServerContext {
    hostname: string;
    rest: Rest;
    constructor(hostname: string, serverUrl: string, restUrl: string);
    getRestClient(): Rest;
}
export declare class OSEvent {
    source: string;
    name: string;
    data: any;
    osContext: null | OSContext;
    constructor(source: string, name: string, data: any, osContext: null | OSContext);
    isTarget(pattern: string): boolean;
}
export declare class OSContext {
    appName: string;
    appLabel: string;
    serverCtx: ServerContext;
    servers: {
        [hostname: string]: ServerContext;
    };
    event: null | OSEvent;
    uiOS: Component;
    constructor(uiOS: Component, ctx: ServerContext);
    getServerContext(): ServerContext;
    getEvent(): OSEvent | null;
    consumeEvent(): OSEvent | null;
    setEvent(event: OSEvent): void;
    broadcast(event: OSEvent): void;
}
export interface OSProps {
    osContext: OSContext;
}
export declare class AppEvent {
    source: string;
    name: string;
    data: any;
    appContext: null | AppContext;
    constructor(source: string, name: string, data: any, appContext: null | AppContext);
}
export declare class AppContext {
    appRegistry: IAppRegistry | null;
    osContext: OSContext;
    serverContext: ServerContext;
    event: null | AppEvent;
    uiApplication: Component;
    constructor(uiApp: Component, osContext: OSContext, serverCtx?: null | ServerContext);
    getAppRegistry(): any;
    setAppRegistry(registry: IAppRegistry): void;
    getOSContext(): OSContext;
    getServerContext(): ServerContext;
    getEvent(): AppEvent | null;
    consumeEvent(): AppEvent | null;
    setEvent(event: AppEvent): void;
    broadcast(event: AppEvent): void;
    hasUserReadCapability(): boolean;
    hasUserWriteCapability(): boolean;
    hasUserAdminCapability(): boolean;
    addOSNotification(type: "success" | "info" | "warning" | "danger", label: string, detail?: string | null, cause?: any): void;
}
export declare class PageContext {
    dialogContext: null | DialogContext;
    breadcumbs: null | Breadcumbs;
    constructor(env: null | Breadcumbs | DialogContext);
    setBreadcumbs(breadcumbs: Breadcumbs): void;
    getDialogContext(): DialogContext | null;
    /**@deprecated */
    setDialogContext(ctx: DialogContext): void;
    /**@deprecated */
    closeDialogContext(): void;
    onBack(): void;
    onAdd(name: string, label: string, ui: any): void;
}
export interface ApplicationProps {
    appContext: AppContext;
}
export declare class UIBaseApplication extends Component<OSProps, {}> {
    state: {
        osEvent: null;
    };
    constructor(props: any);
}
