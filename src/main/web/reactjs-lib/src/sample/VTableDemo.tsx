/** @flow */
import * as React from 'react';

import {formater} from  "util/text";
import {ListModel} from 'widget/list/ListModel';
import {VTable} from 'widget/list/VTable'
import {VTableConfig, IVTable } from 'widget/list/IVTable'
import { DNDBoardColumnConfig } from 'widget/dnd/DNDBoard'

function createConfig() {
  let CONFIG: VTableConfig = {
    fixedColumns: [
      { name: '_selector', label: 'Sel', width: 25 },
      { name: '_index', label: '#', width: 35 },
      {
        name: 'left', label: 'left column', visible: true, width: 150, cellStyle: { textAlign: 'left' },
        onClick: function(_table: IVTable, _row: number, bean: any) {
          console.log('on click row');
          console.log(bean);
        }
      },
      {
        name: 'actions', label: 'Actions', visible: true, width: 100,
        actions: [
          {
            name: 'del', label: 'Del',
            onClick: function (_table: IVTable, _row: number, bean: any) {
              console.log('on click Del');
              console.log(bean);
            }
          },
          {
            name: 'add', label: 'Add',
            onClick: function (_table: IVTable, _row: number, bean: any) {
              console.log('on click Add');
              console.log(bean);
            }
          }
        ]
      }
    ],
    columns: [
      {
        name: 'string', label: 'string column', visible: true, width: 150, cellStyle: {textAlign: 'left'},
        onClick: function(_table: IVTable, _row: number, bean: any) {
          console.log('on click row');
          console.log(bean);
        }
      },
      { name: 'type', label: 'Type', visible: true, cellStyle: {textAlign: 'center'}, },
      { name: 'integer', label: 'Integer', visible: true },
      { name: 'long', label: 'Long', visible: true, editor: {type: 'long'} },
      { name: 'float', label: 'Float', visible: true },
      { name: 'double', label: 'Double', visible: true, editor: {type: 'double'}},
      { name: 'boolean', label: 'Boolean', visible: true },
      { name: 'saleQuantity', label: 'Sale Qty', visible: true, format: formater.integer },
      { name: 'saleRevenue', label: 'Sale Revenue', visible: true, format: formater.currency  },

      { name: 'type', label: 'Type', visible: true, cellStyle: {textAlign: 'center'}, },
      { name: 'integer', label: 'Integer', visible: true },
      { name: 'long', label: 'Long', visible: true, editor: {type: 'long'} },
      { name: 'float', label: 'Float', visible: true },
      { name: 'double', label: 'Double', visible: true, editor: {type: 'double'}},
      { name: 'boolean', label: 'Boolean', visible: true },
      { name: 'saleQuantity', label: 'Sale Qty', visible: true, format: formater.integer },
      { name: 'saleRevenue', label: 'Sale Revenue', visible: true, format: formater.currency  },
      //{ name: 'date', label: 'Date', visible: true, format: formater.date }
    ],

    gridView: {
      renderItem: function (_vtable: IVTable, _page: number, _row: number, _rowInPage: number, bean: any) {
        let html = (
          <div className='border m-2' style={{ minHeight: '100px' }}>
            {bean.string}
          </div>
        )
        return html;
      }
    },

    kanbanView: {
      dndBoard: {
        columns: [
          { name: "step-1", label: 'Step 1', items: [] },
          { name: "step-2", label: 'Step 2', items: [] },
          { name: "step-3", label: 'Step 3', items: [] },
          { name: "step-4", label: 'Step 4', items: [] },
          { name: "step-5", label: 'Step 5', items: [] },
        ],
        columnWidth: 0,
        itemHeight: 100,

        inColumn: (name: string, item: any) => {
          return name == item.step;
        },

        onDrop: (sourceCol: DNDBoardColumnConfig, destCol: DNDBoardColumnConfig, item: any) => {
          item.state = destCol.name;
          console.log(`Drag Item ${item.string} from ${sourceCol.name} to ${destCol.name}`)
        },

        getItemId: (_item: any, columnName: string, index: number) => { return `${columnName}-item-${index}`; },

        renderItem: (_col: DNDBoardColumnConfig, item: any) => {
          return (<h5 className='border-bottom'>{item.string}</h5>);
        },

        renderItemDetail: (_col: DNDBoardColumnConfig, item: any) => {
          return (<div>{item.string}</div>);
        }
      }
    },

    actions: [
      {
        name: 'add', label: 'Add', icon: 'icon-add',
        onClick: function(table: IVTable) {
          const model = table.getModel();
          model.addRecord(
            { string: 'string row ?', type: 'add', date: new Date() }
          );
          table.forceUpdate();
        }
      },
      {
        name: 'delete', label: 'Del', icon: 'icon-del' ,
        onClick: function(table: IVTable) {
          console.log("Click delete.....");
          let model : ListModel = table.getModel();
          let selectedRows = model.getSelectedRows();
          console.log("Selected Rows: ");
          console.log(selectedRows);
          model.removeSelectedRows();
          table.forceUpdate();
        }
      }
    ]
  }
  return CONFIG;
}

const records: Array<any> = [];
for(let i = 0; i < 1500; i++) {
  let date = new Date();
  date.setDate(date.getDate() + i);

  let type = 'type-' + (i % 5);
  let randQty = Math.floor(Math.random() * 100);
  let step = i%5 + 1;
  let record = {
     left:   'left: row = '   + i,
     step:   'step-' + step,
     string: 'string: row = ' + i,
     type: type,
     date: date,
     integer: 123, long: 123, float: 1.23, double: 1.234, boolean: true,
     saleQuantity: randQty,
     saleRevenue: randQty * 50000
  };
  records.push(record);
}

export class VTableDemo extends React.Component<{}, {}> {
  render() {
    let model = new ListModel(1000, records);
    let html = (
      <VTable config={createConfig()} model={model} style={{height: '100%'}}/>
    );
    return html;
  }
}