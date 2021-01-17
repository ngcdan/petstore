import { VTableActionConfig, VTableColumnConfig, VTableConfig } from ".";

export class VTableTool {
  static removeAction(config: VTableConfig, actionName: string) {
    let actions = config.actions;
    if (!actions) return;
    for (let i = 0; i < actions.length; i++) {
      if (actionName == actions[i].name) {
        actions.splice(i, 1);
        return;
      }
    }
  }

  static removeFilter(config: VTableConfig, filterName: string) {
    let filters = config.filters;
    if (!filters)
      return;
    for (let i = 0; i < filters.length; i++) {
      if (filterName == filters[i].name) {
        filters.splice(i, 1);
        return;
      }
    }
  };

  static addAction(config: VTableConfig, actionConfig: VTableActionConfig) {
    if (!config.actions) config.actions = [];
    config.actions.push(actionConfig);
  }

  static addFixedColumn(config: VTableConfig, colConfig: VTableColumnConfig, atIdx: number) {
    let columns = config.fixedColumns;
    if (!columns) {
      throw new Error("Fixed Columns are not defined");
    }
    columns.splice(atIdx, 0, colConfig);
  }

  static addColumn(config: VTableConfig, colConfig: VTableColumnConfig, atIdx: number) {
    let columns = config.columns;
    if (!columns) {
      throw new Error("Fixed Columns are not defined");
    }
    columns.splice(atIdx, 0, colConfig);
  }

  static removeColumn(config: VTableConfig, name: string) {
    if (this.removeFrom(name, config.fixedColumns)) return;
    this.removeFrom(name, config.columns);
  }

  static removeColumns(config: VTableConfig, names: Array<string>) {
    for (let i = 0; i < names.length; i++) {
      this.removeColumn(config, names[i]);
    }
  }

  static removeFrom(name: string, columns?: Array<any>) {
    if (columns) {
      for (let i = 0; i < columns.length; i++) {
        if (name == columns[i].name) {
          columns.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}
