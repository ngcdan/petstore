export declare class Bucket {
    name: string;
    label: string;
    buckets: Array<Bucket> | null;
    records: Array<any>;
    aggregatedRecords: null | Array<any>;
    collapse: boolean;
    constructor(name: string, label: string, records: Array<any>, collapse?: boolean);
    setRecords(records: Array<any>): void;
    getNumOfRecords(): number;
    getChildrenBuckets(): Bucket[] | null;
    addRecord(record: any): void;
    traverse(visit: any): void;
    findBucketsByName(name: string): any[];
    findLeafBucket(): Bucket[];
}
export declare class SumAggregationFunction {
    name: string;
    calculateFields: Array<any>;
    constructor(name: string, sumFields: Array<any>);
    invoke(records: Array<any>): any;
    calculateAggregationValue(field: string, records: Array<any>): number;
}
export declare class AvgAggregationFunction extends SumAggregationFunction {
    invoke(records: Array<any>): any;
}
declare class Aggregation {
    name: string;
    field: string;
    active: boolean;
    getFieldData: null | ((record: any) => any);
    constructor(name: string, field: string, active?: boolean);
    withFieldGetter(getter: (record: any) => any): this;
    mapToBucket(_bucketMap: any, _record: any): void;
    sortBuckets(buckets: Array<Bucket>): Bucket[];
}
export declare class ValueAggregation extends Aggregation {
    mapToBucket(bucketMap: any, record: any): void;
}
export declare class DateValueAggregation extends Aggregation {
    format: string;
    constructor(name: string, field: string, format: string);
    mapToBucket(bucketMap: any, record: any): void;
    sortBuckets(buckets: Array<Bucket>): Bucket[];
}
export declare class SingleAggregationModel {
    rootBucket: Bucket;
    constructor(rootBucket: Bucket);
    getCountChartData(): any[];
    createCountChart(type: string, yAxis: number): {
        key: string;
        type: string;
        yAxis: number;
        values: any[];
    };
    getSumFieldChartData(field: string, xyTransformer?: ((xy: any) => void)): any[];
    createSumFieldChart(field: string, type: string, yAxis: number, xyTransformer?: ((xy: any) => void)): {
        key: string;
        type: string;
        yAxis: number;
        values: any[];
    };
}
export declare class DoubleAggregationModel {
    aggregations: Array<any> | null;
    rootBucket: Bucket;
    constructor(rootBucket: Bucket);
    getAggCountChartData(chartConfig: any): any[];
    createAggCountChart(chartHolder: Array<any>, type: string, yAxis: number): void;
    getAggSumFieldChartData(name: string, field: string, chartConfig: any, xyTransformer?: ((xy: any) => void)): any[];
    createAggSumFieldChart(chartHolder: Array<any>, name: string, field: string, type: string, yAxis: number, xyTransformer?: ((xy: any) => void)): void;
    _getSubBucketNames(buckets: Array<any>): any;
}
export declare class TreeTableModel {
    rootLabel: string;
    records: Array<any>;
    filterExp: null | string;
    filterBeans: Array<any>;
    tableRows: Array<any>;
    aggregations: Array<any>;
    aggregationFunction: Array<any>;
    rootBucket: Bucket;
    constructor(rootLabel: string, records: Array<any>, collapse?: boolean);
    getFilterExp(): string | null;
    getRootBucket(): Bucket;
    update(records: Array<any>): void;
    addAggregation(aggregation: any, active?: boolean): void;
    setActivateAggregation(name: string, active: boolean): void;
    addAggregationFunction(func: any): void;
    runAggregation(): void;
    runAggregationWith(aggregations: Array<any>, forceActive: boolean): Bucket;
    getTableRows(): any[];
    buildTableRows(): void;
    addTableRow(tableRowHolder: Array<any>, bucket: Bucket, deep: number): void;
    _aggregate(parentBucket: any, aggregation: Aggregation): void;
    _computeAggregatedRecords(bucket: any): void;
    filter(exp: null | string): void;
    /*************************************************************************************************************/
    /*************************************************************************************************************/
    getXYCoordinate(xField: string, yField: string): Array<any>;
    createDoubleAggregationModel(aggs: Array<any>): DoubleAggregationModel;
    createSingleAggregationModel(agg: any): SingleAggregationModel;
}
export {};
