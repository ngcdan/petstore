import * as app from './app';
export declare class AppCapability {
    capability: 'None' | 'Read' | 'Write' | 'Admin';
    order: number;
    constructor(cap: 'None' | 'Read' | 'Write' | 'Admin');
    hasCapability(other: AppCapability): boolean;
}
declare const NONE: AppCapability;
declare const READ: AppCapability;
declare const WRITE: AppCapability;
declare const ADMIN: AppCapability;
export { NONE, READ, WRITE, ADMIN };
export interface IAppPlugin {
    targetModule: string;
    targetAppName: string;
    pluginType?: string;
    pluginName: string;
    pluginLabel: string;
    pluginDescription: string;
}
export interface IAppRegistry {
    module: string;
    name: string;
    label: string;
    description: string;
    createUI: (ctx: app.OSContext) => any;
    getExportPlugins?: () => Array<IAppPlugin>;
    addPlugin?: (plugin: IAppPlugin) => void;
    getRequiredAppCapability: () => AppCapability;
    setRequiredAppCapability: (permission: AppCapability) => void;
    getUserAppCapability: () => AppCapability;
    setUserAppCapability: (permission: AppCapability) => void;
}
export declare class AppRegistryGroup {
    name: string;
    label: string;
    visible: boolean;
    registries: any;
    constructor(name: string, label: string);
    get(name: string): null | IAppRegistry;
    add(registry: IAppRegistry): void;
}
export declare class AppRegistryManager {
    appRegistryNav: any;
    appRegistries: any;
    defaultAppRegistry: null | IAppRegistry;
    get(name: string, retDefault: boolean): null | IAppRegistry;
    add(registry: IAppRegistry): void;
    addGroup(group: AppRegistryGroup): void;
    wirePlugins(): void;
}
