import moment from 'moment';
import { ObjUtil } from "util/common";

const SORT_FUNC = function(rec1: any, rec2: any) {
  let x1 = rec1.x;
  let x2 = rec2.x;
  if (x1 === x2 ) return 0;
  return (x1 > x2 ) ? 1 : -1;
};

export class Bucket {
  name: string;
  label: string;
  buckets: Array<Bucket> | null = null ;
  records: Array<any>;
  aggregatedRecords: null|Array<any> = null;
  collapse: boolean;

  constructor(name: string, label: string, records: Array<any>, collapse: boolean = false) {
    this.name = name;
    this.label = label;
    this.records = records;
    this.collapse = collapse;
  }

  setRecords(records: Array<any>) {
    this.records = records; 
    this.buckets = [];
  }

  getNumOfRecords() {
    if(this.buckets != null && this.buckets.length > 0) {
      let numOfRecords = 0;
      for(let i = 0; i < this.buckets.length; i++) {
        numOfRecords += this.buckets[i].getNumOfRecords();
      }
      return numOfRecords;
    } else {
      if(!this.records) return 0;
      return this.records.length;
    }
  }

  getChildrenBuckets() { return this.buckets; }

  addRecord(record: any) {
    if(this.records == null) this.records = [];
    this.records.push(record);
  }

  traverse(visit: any) {
    visit(this);
    let buckets = this.getChildrenBuckets();
    if(buckets == null) return ;
    for(let i = 0; i < buckets.length; i++) {
      buckets[i].traverse(visit);
    }
  }

  findBucketsByName(name: string) {
    let holder: Array<any> = [];
    let visitor = (bucket: Bucket) => {
      if(bucket.name === name) holder.push(bucket);
    };
    this.traverse(visitor);
    return holder;
  }

  findLeafBucket() {
    let holder: Array<Bucket> = [];
    let visitor = (bucket: Bucket) => {
      if(!bucket.buckets) holder.push(bucket);
    };
    this.traverse(visitor);
    return holder;
  }

}

export class SumAggregationFunction {
  name: string;
  calculateFields: Array<any>

  constructor(name: string, sumFields: Array<any>) {
    this.name = name;
    this.calculateFields = sumFields;
  }

  invoke(records: Array<any>) {
    let aggRec : any = { treeNodeLabel: this.name };
    for(let i = 0; i < this.calculateFields.length; i++) {
      let field = this.calculateFields[i];
      let sum = this.calculateAggregationValue(field, records);
      aggRec[field] =  sum;
    }
    return aggRec;
  }

  calculateAggregationValue(field: string, records: Array<any>) {
    let sum = 0;
    for(let i = 0; i < records.length; i++) {
      let rec = records[i];
      sum += rec[field];
    }
    return sum ;
  }
}

export class AvgAggregationFunction extends SumAggregationFunction {
  invoke(records: Array<any>) {
    let aggRec : any = { treeNodeLabel: this.name };
    for(let i = 0; i < this.calculateFields.length; i++) {
      let field = this.calculateFields[i];
      let avg = super.calculateAggregationValue(field, records) / records.length;
      aggRec[field] = avg;
    }
    return aggRec;
  }

}

class Aggregation {
  name: string;
  field: string;
  active: boolean;
  getFieldData: null | ((record: any) => any) = null;

  constructor(name: string, field: string, active: boolean = false) {
    this.name = name;
    this.field = field;
    this.active = active;
  }

  withFieldGetter(getter: (record: any) => any) {
    this.getFieldData = getter;
    return this;
  }

  mapToBucket(_bucketMap: any, _record: any) { throw new Error("This method need to be implemented"); }

  sortBuckets(buckets: Array<Bucket>) { return buckets; }
}

export class ValueAggregation extends Aggregation {
  mapToBucket(bucketMap: any, record: any) {
    let field = this.field;
    let fieldValue = null;
    if(this.getFieldData) {
      fieldValue = this.getFieldData(record);
    } else {
      fieldValue = record[field];
    }
    let selBucket = bucketMap[fieldValue];
    if(!selBucket) {
      selBucket = new Bucket(this.name, fieldValue,[]);
      bucketMap[fieldValue] = selBucket;
    }
    selBucket.addRecord(record);
  }
}

export class DateValueAggregation extends Aggregation {
  format: string;

  constructor(name: string, field: string, format: string) {
    super(name, field);
    this.format = format ? format : 'YYYY-MM-DD';
  }

  mapToBucket(bucketMap: any, record: any) {
    let field = this.field;
    let fieldValue = record[field];
    let mapValue = moment(fieldValue).format(this.format);
    let selBucket = bucketMap[mapValue];
    if(!selBucket) {
      selBucket = new Bucket(this.name, mapValue,[]);
      bucketMap[mapValue] = selBucket;
    }
    selBucket.addRecord(record);
  }

  sortBuckets(buckets: Array<Bucket>) {
    const SORT_FUNC = function(b1: Bucket, b2: Bucket) {
      let l1 = b1.label;
      let l2 = b2.label;
      if (l1 === l2 ) return 0;
      return (l1 > l2 ) ? 1 : -1;
    };
    return buckets.sort(SORT_FUNC);
  }
}

export class SingleAggregationModel {
  rootBucket: Bucket;

  constructor(rootBucket: Bucket) {
    this.rootBucket = rootBucket;
  }

  getCountChartData() {
    let values : Array<any> = [];
    let buckets = this.rootBucket.getChildrenBuckets();
    if(buckets == null) return values;
    for(let i = 0; i < buckets.length; i++) {
      let bucket = buckets[i];
      let xValue = bucket.label;
      let count = 0;
      if(bucket.records) count = bucket.records.length;
      values.push({x: xValue, y: count}) ;
    }
    return values ;
  }

  createCountChart(type: string, yAxis: number) {
    return { key: 'Count', type: type, yAxis: yAxis, values: this.getCountChartData() } ;
  }

  getSumFieldChartData(field: string, xyTransformer?:((xy: any) => void)) {
    let values : Array<any> = [];
    let buckets = this.rootBucket.getChildrenBuckets();
    if(buckets == null) return values;
    for(let i = 0; i < buckets.length; i++) {
      let bucket = buckets[i];
      let xValue = bucket.label;
      let sum = 0;
      if(bucket.records) {
        let records = bucket.records;
        for(let i = 0; i < records.length; i++) {
          sum += records[i][field];
        }
      }
      let xy = {x: xValue, y: sum};
      if(xyTransformer) xyTransformer(xy);
      values.push(xy) ;
    }
    return values  ;
  }

  createSumFieldChart(field: string, type: string, yAxis: number, xyTransformer?:((xy: any) => void)) {
    return { key: 'Sum ' + field, type: type, yAxis: yAxis, values: this.getSumFieldChartData(field, xyTransformer) } ;
  }
}

export class DoubleAggregationModel {
  aggregations: Array<any> | null = null;
  rootBucket: Bucket;

  constructor(rootBucket: Bucket) {
    this.rootBucket = rootBucket;
  }

  getAggCountChartData(chartConfig: any) {
    let chartMap : any = {};
    let buckets = this.rootBucket.getChildrenBuckets();
    if(buckets == null) return [];
    let subBucketNames = this._getSubBucketNames(buckets);
    for(let i = 0; i < buckets.length; i++) {
      let bucket = buckets[i];
      let xValue = bucket.label;
      let entries : any = {};
      for(let subBucketName in subBucketNames) {
        let entry = { x: xValue, y: 0 } ;
        if(!chartMap[subBucketName]) {
          chartMap[subBucketName] = {key: 'Count ' + subBucketName, ...chartConfig, values: []}
        }
        chartMap[subBucketName].values.push(entry);
        entries[subBucketName] = entry ;
      }
      let subBuckets = bucket.buckets;
      if(!subBuckets) continue;
      for(let j = 0; j < subBuckets.length; j++) {
        let selBucket = subBuckets[j];
        let count = 0;
        if(selBucket.records) count = selBucket.records.length;
        let subBucketName = selBucket.label;
        entries[subBucketName].y = count ;
      }
    }
    let chartHolder = [];
    for(let key in chartMap) {
      let chart = chartMap[key];
      chart.values.sort(SORT_FUNC);
      chartHolder.push(chart);
    }
    return chartHolder;
  }

  createAggCountChart(chartHolder: Array<any>, type: string, yAxis: number) {
    let charts = this.getAggCountChartData({ type: type, yAxis: yAxis });
    for(let i = 0; i < charts.length; i++) {
      chartHolder.push(charts[i]);
    }
  }

  getAggSumFieldChartData(name: string, field: string, chartConfig: any, xyTransformer?:((xy: any) => void)) {
    let charts : any = {};
    let buckets = this.rootBucket.getChildrenBuckets();
    if(buckets == null) return [];
    let subBucketNames = this._getSubBucketNames(buckets);
    for(let i = 0; i < buckets.length; i++) {
      let bucket = buckets[i];
      let xValue = bucket.label;
      let entries : any = {};
      for(let subBucketName in subBucketNames) {
        let entry = {x: xValue, y: 0} ;
        if(!charts[subBucketName]) {
          charts[subBucketName] = {key: name + ' ' + subBucketName, ...chartConfig, values: []}
        }
        charts[subBucketName].values.push(entry);
        entries[subBucketName] = entry ;
      }

      let subBuckets = bucket.buckets;
      if(!subBuckets) continue;
      for(let j = 0; j < subBuckets.length; j++) {
        let selBucket = subBuckets[j];
        let sum = 0;
        let subBucketName = selBucket.label;
        if(selBucket.records) {
          let records = selBucket.records;
          for(let i = 0; i < records.length; i++) {
            sum += records[i][field];
          }
        }
        entries[subBucketName].y = sum ;
        if(xyTransformer) xyTransformer(entries[subBucketName]);
      }
    }

    let chartHolder = [];
    for(let key in charts) {
      let chart = charts[key];
      chart.values.sort(SORT_FUNC);
      chartHolder.push(chart);
    }
    return chartHolder;
  }

  createAggSumFieldChart(chartHolder: Array<any>, name: string, field: string, type: string, yAxis: number, xyTransformer?:((xy: any) => void)) {
    let charts = this.getAggSumFieldChartData(name, field, {type: type, yAxis: yAxis}, xyTransformer);
    for(let i = 0; i < charts.length; i++) {
      chartHolder.push(charts[i]);
    }
  }

  _getSubBucketNames(buckets: Array<any>) {
    let bucketNames : any = {};
    for(let i = 0; i < buckets.length; i++) {
      let subBuckets =  buckets[i].buckets;
      for(let j = 0; j < subBuckets.length; j++) {
        let bucketName = subBuckets[j].label;
        bucketNames[bucketName] = bucketName;
      }
    }
    return bucketNames;
  }
}

export class TreeTableModel {
  rootLabel: string;

  records: Array<any>;
  filterExp:   null|string;
  filterBeans: Array<any>;

  tableRows: Array<any> = [];

  aggregations: Array<any>;
  aggregationFunction: Array<any>;
  rootBucket: Bucket;

  constructor(rootLabel: string, records: Array<any>, collapse: boolean = true) {
    this.rootLabel = rootLabel;

    this.records = records;
    this.filterBeans = records;
    this.filterExp   = '';

    this.aggregations = [] ;
    this.aggregationFunction = [];
    
    this.rootBucket = new Bucket('root', rootLabel, this.filterBeans, collapse);
  }

  getFilterExp() { return this.filterExp ; }

  getRootBucket() { return this.rootBucket; };

  update(records: Array<any>) {
    this.records = records;
    this.filter(this.filterExp);
    this.runAggregation();
  }

  addAggregation(aggregation: any, active: boolean = false) {
    this.aggregations.push(aggregation);
    if(active) aggregation.active = true;
  }

  setActivateAggregation(name: string, active: boolean) {
    for(let i = 0; i < this.aggregations.length; i++) {
      if(this.aggregations[i].name === name) {
        this.aggregations[i].active = active;
        return;
      }
    }
  }

  addAggregationFunction(func: any) { this.aggregationFunction.push(func); }

  runAggregation() { 
    this.rootBucket = this.runAggregationWith(this.aggregations, false); 
    this.buildTableRows();
  }

  runAggregationWith(aggregations: Array<any>, forceActive: boolean) {
    let rootBucket = new Bucket('root', this.rootLabel, this.filterBeans);
    this._computeAggregatedRecords(rootBucket);

    for(let i = 0; i < aggregations.length; i++) {
      let agg = aggregations[i];
      if(!forceActive && !agg.active) continue;
      this._aggregate(rootBucket, agg);
    }
    return rootBucket;
  }

  getTableRows() { return this.tableRows ; }

  buildTableRows() {
    this.tableRows = [];
    this.addTableRow(this.tableRows, this.rootBucket, 0);
  }

  addTableRow(tableRowHolder: Array<any>, bucket: Bucket, deep: number) {
    tableRowHolder.push({ deep: deep, bucket: bucket})
    if(!bucket.collapse) {
      let children = bucket.buckets;
      if(children != null) {
        for(let i = 0; i < children.length; i++) {
          this.addTableRow(tableRowHolder, children[i], deep + 1);
        }
      }
      let records = bucket.records;
      if(records) {
        for(let i = 0; i < records.length; i++) {
          let rec = records[i];
          tableRowHolder.push({ deep: deep, record: rec})
        }
      }
    }
    let aggRecords = bucket.aggregatedRecords;
    if(aggRecords) {
      for(let i = 0; i < aggRecords.length; i++) {
        let rec = aggRecords[i];
        tableRowHolder.push({ deep: deep, aggRecord: rec})
      }
    }
  }

  _aggregate(parentBucket: any, aggregation: Aggregation) {
    let childrenBuckets = parentBucket.buckets;
    if(childrenBuckets != null) {
      for(let j = 0; j < childrenBuckets.length; j++) {
        this._aggregate(childrenBuckets[j], aggregation);
      }
      return;
    }

    let records = parentBucket.records;
    let bucketMap : any = {};
    for(let i = 0; i < records.length; i++) {
      aggregation.mapToBucket(bucketMap, records[i]);
    }
    let buckets = [];
    for (let key in bucketMap) {
      if (bucketMap.hasOwnProperty(key)) {
        let bucket = bucketMap[key];
        this._computeAggregatedRecords(bucket);
        buckets.push(bucket);
      }
    }

    parentBucket.buckets = aggregation.sortBuckets(buckets);
    parentBucket.records = null;
    parentBucket.collapse = false;
  }

  _computeAggregatedRecords(bucket: any) {
    let aggRecords = [];
    for(let i = 0; i < this.aggregationFunction.length; i++) {
      let func = this.aggregationFunction[i];
      let aggRecord = func.invoke(bucket.records);
      aggRecords.push(aggRecord);
    }
    bucket.aggregatedRecords = aggRecords;
  }

  filter(exp: null|string) {
    this.filterExp = exp;
    if(!exp || exp.length === 0) {
      this.filterBeans = this.records;
    } else {
      this.filterBeans = [];
      for(let i = 0; i < this.records.length; i++) {
        let record = this.records[i];
        if(ObjUtil.recordHasExpression(record, exp)) {
          this.filterBeans.push(record);
        }
      }
    }
  }

  /*************************************************************************************************************/
  /* Chart methods                                                                                             */
  /*************************************************************************************************************/
  getXYCoordinate(xField: string, yField: string): Array<any> {
    let values = [ ];
    for(let i = 0; i < this.records.length; i++) {
      let rec = this.records[i];
      let entry = {x: rec[xField], y: rec[yField] } ;
      values.push(entry);
    }
    values.sort(SORT_FUNC);
    return values;
  }

  createDoubleAggregationModel(aggs: Array<any>) {
    let rootBucket = this.runAggregationWith(aggs, true);
    return new DoubleAggregationModel(rootBucket);
  }

  createSingleAggregationModel(agg: any) {
    let rootBucket = this.runAggregationWith([agg], true);
    return new SingleAggregationModel(rootBucket);
  }
}
