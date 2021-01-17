import PageList from "util/PageList";
import { ObjUtil } from "util/common";
import { TreeTableModel } from "./TreeTableModel";

const SORT_FUNC = function(rec1:any, rec2:any) {
  let x1: number = rec1.x;
  let x2: number = rec2.x;
  if (x1 === x2 ) return 0;
  return (x1 > x2 ) ? 1 : -1;
};

export class ListModel {
  records:      Array<any> = [];
  filterExp:    null|string = null;
  filterState:  null|'ACTIVE'|'ARCHIVED'|'DEPRECATED'|'JUNK'|'INACTIVE' = null;
  filterRecords: Array<any> = [];

  pageSize:    number;
  pageList:    PageList ;

  selectedRows: Set<number> = new Set([]);
  focusRowInPage: null|number = null;

  treeTableModel: TreeTableModel | null = null;

  constructor(pageSize: number, records: Array<any>) {
    this.pageSize    = pageSize;
    this.pageList    = new PageList(pageSize, []);
    this.update(records);
  }

  update(records: Array<any>) {
    if(this.records === records) return;

    this.records     = records;
    this.filterExp   = '';
    this.filter(this.filterExp);
    if(this.treeTableModel != null) {
      this.treeTableModel.update(this.filterRecords);
    }
  }

  refresh() {
    this.filter(this.filterExp);
  }

  getRecords(): Array<any> { return this.records; }

  getFilterRecords(): Array<any> { return this.filterRecords; }

  getTreeTableModel() { return this.treeTableModel; }

  setTreeTableModel(treeModel: TreeTableModel|null) { this.treeTableModel =  treeModel; } 

  getPageList(): PageList { return this.pageList; }

  getRecordInPage(idx: number) { return this.pageList.getItemInPage(idx); }

  getCurrentPage() { return this.pageList.getCurrentPage(); }

  getFocusRowInPage() : null| number {
    return this.focusRowInPage;
  }

  setFocusRowInPage(row: number)  {
    let numOfItemInPage = this.pageList.currentPageItems().length;
    if(row < 0) row = 0;
    if(row >= numOfItemInPage) row = numOfItemInPage - 1;
    this.focusRowInPage = row;
  }

  clearFocusRowInPage()  { this.focusRowInPage = null; }

  getFilterExp() { return this.filterExp ; }

  addRecord(record: any): void {
    this.records.push(record);
    this.pageList.setList(this.records);
  }

  hasSelectedRows() { return this.selectedRows.size > 0; }

  clearSelectedRows() { this.selectedRows = new Set([]); }

  selectRow(row: number) { this.selectedRows.add(row); }

  toggleSelectRow(row: number) {
    if(this.selectedRows.has(row)) this.selectedRows.delete(row);
    else this.selectedRows.add(row);
  }

  toggleSelectRows() {
    if(this.hasSelectedRows()) {
      this.clearSelectedRows();
    } else {
      for(let i = 0; i < this.records.length; i++) {
        this.selectedRows.add(i);
      }
    }
  }

  getSelectedRows() { return this.selectedRows; }

  getSelectedRecords() {
    let filterBeans: Array<any> = this.filterRecords;
    let selRecords: Array<any>  = [];
    this.selectedRows.forEach((row) => {
      selRecords.push(filterBeans[row]);
    });
    return selRecords;
  }

  getSelectedRecordIds() {
    let filterBeans: Array<any> = this.filterRecords;
    let ids: Array<any>  = [];
    this.selectedRows.forEach((row) => {
      ids.push(filterBeans[row].id);
    });
    return ids;
  }

  removeSelectedRows() {
    let selectedBeans = [];
    for(let i = 0; i < this.filterRecords.length; i++) {
      if(this.selectedRows.has(i)) {
        selectedBeans.push(this.filterRecords[i]);
      }
    }

    let holder = [];
    for(let i = 0; i < this.records.length; i++) {
      let isRemove = false;
      for(let j = 0; j < selectedBeans.length; j++) {
        if (this.records[i] === selectedBeans[j]) {
          isRemove = true;
          break;
        }
      }
      if(!isRemove) holder.push(this.records[i]);
    }
    this.records.length = 0;
    this.records.push(...holder);
    this.pageList.setList(this.records);
    this.clearSelectedRows();
    this.filter(this.filterExp);
  }

  toggleSelectRowInPage(page: number, rowInPage: number) {
    let row = this.pageList.computeRowIndexOf(page, rowInPage);
    this.toggleSelectRow(row);
  }

  isSelectedRowInPage(page: number, rowInPage: number) {
    let row = this.pageList.computeRowIndexOf(page, rowInPage);
    return this.selectedRows.has(row);
  }

  selectPage(page: number) {
    this.focusRowInPage = null;
    this.getPageList().getPage(page);
  }

  changePageSize(pageSize: number) {
    this.focusRowInPage = null;
    this.getPageList().setPageSize(pageSize);
  }

  filterByState(state:  null|'ACTIVE'|'ARCHIVED'|'DEPRECATED'|'JUNK'|'INACTIVE') {
    this.filterState = state;
    this.filter(this.filterExp) ;
  }

  filter(exp: null|string) {
    this.filterExp = exp;
    let records = null;
    if(this.filterState == null) {
      records = this.records;
    } else {
      records = [];
      for(let i = 0; i < this.records.length; i++) {
        let record = this.records[i];
        if(record.entityState == this.filterState) {
          records.push(record);
        }
      }
    }

    if(!exp || exp.length === 0) {
      this.filterRecords = records;
    } else {
      this.filterRecords = [];
      for(let i = 0; i < records.length; i++) {
        let record = records[i];
        if(ObjUtil.recordHasExpression(record, exp)) {
          this.filterRecords.push(record);
        }
      }
    }
    if(!this.pageList) {
      this.pageList = new PageList(this.pageSize, this.filterRecords);
    } else {
      this.pageList.setList(this.filterRecords);
    }

    this.clearSelectedRows();
  }

  sort(field: string, _method: string) {
    let ascSortFunc = function(rec1: any, rec2: any) {
      let val1 = rec1[field];
      let val2 = rec2[field];
      if (val1 === val2 ) return 0;
      return (val1 > val2 ) ? 1 : -1;
    };
    this.records.sort(ascSortFunc);
    this.pageList = new PageList(this.pageList.getPageSize(), this.records);
  }

  /*************************************************************************************************************/
  /* Chart methods                                                                                             */
  /*************************************************************************************************************/
  getXYCoordinate(xField: string, yField: string) {
    let values = [ ];
    let recs: Array<any> = this.records
    for(let i = 0; i < recs.length; i++) {
      let rec = recs[i];
      values.push({x: rec[xField], y: rec[yField] }) ;
    }
    //resort data by x
    values.sort(SORT_FUNC);
    return values;
  }

  collectXYCoordinate(xyCollector:(rec: any) => {x: any, y: any}) {
    let values = [ ];
    let recs: Array<any> = this.records
    for(let i = 0; i < recs.length; i++) {
      let rec = recs[i];
      values.push(xyCollector(rec));
    }
    //resort data by x
    values.sort(SORT_FUNC);
    return values;
  }
}
