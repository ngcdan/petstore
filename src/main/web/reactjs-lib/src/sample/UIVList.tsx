import React from 'react';
import {Component} from 'react';
import {Button} from 'reactstrap';

import { VListConfig } from '../widget/list/VList';
import { VList, ListModel } from '../widget/list/VList';

const records : Array<any> = [];
for(let i = 0; i < 1500; i++) {
  let date = new Date();
  date.setDate(date.getDate() + i);

  let type = 'type-' + (i % 5);
  let randQty = Math.floor(Math.random() * 100);
  let record = {
     string: 'string: row = ' + i,
     type: type,
     date: date,
     integer: 123, long: 123, float: 1.23, double: 1.234, boolean: true,
     saleQuantity: randQty,
     saleRevenue: randQty * 50000
  };
  records.push(record);
}

export default class UIVList extends Component<{}, {}> {
  model: ListModel;

  config: VListConfig = {
    rowHeight: 60,

    renderItem: function(_list: VList, _page: number, row: number, _rowInPage: number, item: any) {
      let html = (
        <div>
          <div>
            <span style={{display: 'inline-block', width: 35}}>{row}.</span>
            <strong>
              {item.string} - {item.type}
            </strong>
          </div>
          <div>integer = {item.integer}, long = {item.long}, float = {item.float}, double = {item.double}</div>
        </div>
      );
      return html;
    },

    actions: [
      {
        name: 'chart', label: 'Chart',
        createComponent: function(_vlist: VList) {
          return ( <Button key={'chart'} onClick={() => console.log('TODO...')}>Chart</Button> );
        }
      },
      {
        name: 'add', label: 'Add', icon: 'icon-add',
        onClick: function(vlist: VList) {
          const  model  = vlist.getModel();
          model.addRecord(
            { string: 'string row ?', type: 'add', date: new Date() }
          );
          vlist.forceUpdate();
        }
      },
      {
        name: 'delete', label: 'Del', icon: 'icon-del' ,
        onClick: function(vlist: VList) {
          console.log("Click delete.....");
          let model : ListModel = vlist.getModel();
          let selectedRows = model.getSelectedRows();
          console.log("Selected Rows: ");
          console.log(selectedRows);
          model.removeSelectedRows();
          vlist.forceUpdate();
        }
      }
    ]
  }

  constructor(props: any) {
    super(props);

    this.model = new ListModel(5000, records);
  }

  render() {
    let html = (
      <VList className='h-100' config={this.config} model={this.model} />
    );
    return html;
  }
}
