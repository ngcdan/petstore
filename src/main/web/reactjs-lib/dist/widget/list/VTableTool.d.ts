import { VTableActionConfig, VTableColumnConfig, VTableConfig } from ".";
export declare class VTableTool {
    static removeAction(config: VTableConfig, actionName: string): void;
    static removeFilter(config: VTableConfig, filterName: string): void;
    static addAction(config: VTableConfig, actionConfig: VTableActionConfig): void;
    static addFixedColumn(config: VTableConfig, colConfig: VTableColumnConfig, atIdx: number): void;
    static addColumn(config: VTableConfig, colConfig: VTableColumnConfig, atIdx: number): void;
    static removeColumn(config: VTableConfig, name: string): void;
    static removeColumns(config: VTableConfig, names: Array<string>): void;
    static removeFrom(name: string, columns?: Array<any>): boolean;
}
