import {formater} from "util/text";
import { ListModel } from './ListModel'
import { VList, VListConfig } from './VList'

export { ListModel, VList, VListConfig }

export * from './vtree'

export { VTable as VGridTable } from './VTable'
export { VTableConfig as VGridTableConfig } from './IVTable'
export { VTable  } from './VTable'
export { VTableTool } from './VTableTool' 
export { VTableConfig, VTableKabanViewConfig, VTableActionConfig, VTableColumnConfig, IVTable} from './IVTable'
export * from './WTable'

export { DNDBoardColumnConfig } from '../dnd/DNDBoard'

export { TreeTableModel, SumAggregationFunction, DateValueAggregation, ValueAggregation } from "./TreeTableModel";

export const ENTITY_COLUMNS = [
  { name: 'modifiedBy', label: 'Modified By', width: 100 },
  { name: 'modifiedTime', label: 'Modified Time', width: 180, format: formater.compactDateTime},
  { name: 'entityState', label: 'State', width: 100, editor: { type: 'string' }, cellStyle: { textAlign: 'center' } },

  { name: 'companyId', label: 'Company Id', visible: false, width: 100, cellStyle: { textAlign: 'right' } },
  { name: 'createdBy', label: 'Created By', visible: false, width: 100 },
  { name: 'createdTime', label: 'Created Time', visible: false, width: 180, format: formater.compactDateTime },
  { name: 'editState', label: 'EditState', visible: false, width: 100 },
]