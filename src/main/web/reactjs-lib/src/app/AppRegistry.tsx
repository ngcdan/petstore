import * as app  from './app'

export class AppCapability {
  capability:  'None' | 'Read' | 'Write' | 'Admin'  = 'Read';
  order: number;

  constructor(cap: 'None' | 'Read' | 'Write' | 'Admin') {
    this.capability = cap;
    if(cap === 'None')       this.order = 0;
    else if(cap === 'Read')  this.order = 1;
    else if(cap === 'Write') this.order = 2;
    else                     this.order = 3;
  }

  hasCapability(other: AppCapability)  {
    return this.order >= other.order ;
  }
}

const NONE  = new AppCapability('None');
const READ  = new AppCapability('Read');
const WRITE = new AppCapability('Write');
const ADMIN = new AppCapability('Admin');

export { NONE, READ, WRITE, ADMIN }

export interface IAppPlugin {
  targetModule:        string;
  targetAppName:       string;
  pluginType?:         string;

  pluginName:          string;
  pluginLabel:         string;
  pluginDescription:   string;
}

export interface IAppRegistry {
  module:        string;
  name:          string;
  label:         string;
  description:   string;
  createUI: (ctx: app.OSContext) => any;
  getExportPlugins?: () => Array<IAppPlugin> ;
  addPlugin?: (plugin: IAppPlugin) => void ;

  getRequiredAppCapability: () => AppCapability ;
  setRequiredAppCapability: (permission: AppCapability) => void;

  getUserAppCapability: () => AppCapability ;
  setUserAppCapability: (permission: AppCapability) => void;
}

export class AppRegistryGroup {
  name: string ;
  label: string ;
  visible: boolean = false;
  registries: any = {};

  constructor(name: string, label: string) {
    this.name  = name; 
    this.label = label ;
  }

  get(name: string) : null | IAppRegistry {
    if(this.registries[name]) return this.registries[name];
    else return null;
  }

  add(registry: IAppRegistry) {
    this.registries[registry.name] = registry;
  }
}

export class AppRegistryManager {
  appRegistryNav: any = {};
  appRegistries:  any = {};
  defaultAppRegistry: null | IAppRegistry = null;

  get(name: string, retDefault: boolean) : null | IAppRegistry {
    if(this.appRegistries[name]) return this.appRegistries[name];
    else if(retDefault) return this.defaultAppRegistry;
    else return null;
  }

  add(registry: IAppRegistry) {
    this.appRegistryNav[registry.name] = registry;
    this.appRegistries[registry.name]  = registry;
    if(!this.defaultAppRegistry) this.defaultAppRegistry = registry; 
  }

  addGroup(group: AppRegistryGroup) {
    this.appRegistryNav[group.name] = group;
    for(let name in group.registries) {
      let registry = group.registries[name];
      this.appRegistries[registry.name] = registry;
    }
  }

  wirePlugins() {
    let exportPlugins = [];
    for(let key in this.appRegistries) {
      let app : IAppRegistry = this.appRegistries[key];
      if(!app.getExportPlugins) continue;
      exportPlugins.push(...app.getExportPlugins());
    }

    for(let i = 0; i < exportPlugins.length; i++) {
      let plugin = exportPlugins[i];
      let targetApp = this.get(plugin.targetAppName, false) ;
      if(targetApp == null) {
        console.error(`Cannot find the app ${plugin.targetAppName}`);
        continue;
      } 
      if(!targetApp.addPlugin) {
        console.error(`App ${plugin.targetAppName} does not implement addPlugin method`);
        continue;
      } 
      targetApp.addPlugin(plugin);
    }
  }
}