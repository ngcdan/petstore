import { ListModel } from './ListModel';
import { VList, VListConfig } from './VList';
export { ListModel, VList, VListConfig };
export * from './vtree';
export { VTable as VGridTable } from './VTable';
export { VTableConfig as VGridTableConfig } from './IVTable';
export { VTable } from './VTable';
export { VTableTool } from './VTableTool';
export { VTableConfig, VTableKabanViewConfig, VTableActionConfig, VTableColumnConfig, IVTable } from './IVTable';
export * from './WTable';
export { DNDBoardColumnConfig } from '../dnd/DNDBoard';
export { TreeTableModel, SumAggregationFunction, DateValueAggregation, ValueAggregation } from "./TreeTableModel";
export declare const ENTITY_COLUMNS: ({
    name: string;
    label: string;
    width: number;
    format?: undefined;
    editor?: undefined;
    cellStyle?: undefined;
    visible?: undefined;
} | {
    name: string;
    label: string;
    width: number;
    format: (val: string) => string;
    editor?: undefined;
    cellStyle?: undefined;
    visible?: undefined;
} | {
    name: string;
    label: string;
    width: number;
    editor: {
        type: string;
    };
    cellStyle: {
        textAlign: string;
    };
    format?: undefined;
    visible?: undefined;
} | {
    name: string;
    label: string;
    visible: boolean;
    width: number;
    cellStyle: {
        textAlign: string;
    };
    format?: undefined;
    editor?: undefined;
} | {
    name: string;
    label: string;
    visible: boolean;
    width: number;
    format?: undefined;
    editor?: undefined;
    cellStyle?: undefined;
} | {
    name: string;
    label: string;
    visible: boolean;
    width: number;
    format: (val: string) => string;
    editor?: undefined;
    cellStyle?: undefined;
})[];
