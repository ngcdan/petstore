export declare class IDTracker {
    static idTracker: number;
    static next(): number;
}
export declare class TimeUtil {
    static getCompactDateTimeFormat(): string;
    static javaCompactDateTimeFormat(d: Date): string;
    static createToday(time: 'begin' | 'current' | 'end', roll?: number): Date;
    static toDateIdFormat(date: Date): string;
    static toDateTimeIdFormat(date: Date): string;
    static toCompactDateTimeFormat(date: Date): string;
    static compareDate(datetime1: string, datetime2: string, _format: 'compact'): boolean;
}
export declare class ObjUtil {
    static isPrimitive(obj: any): boolean;
    static isArray(obj: any): boolean;
    static recordHasExpression(record: any, exp: string): boolean;
    static copyFields(dest: any, src: any): void;
    static replaceProperties(dest: any, src: any): void;
    static hasRecordWith(records: Array<any>, field: string, value: any): boolean;
}
export declare const KeyCode: {
    ADD: number;
    SUB_ADD: number;
    SUBTRACT: number;
    SUB_SUBTRACT: number;
    DELETE: number;
    SUB_DELETE: number;
    F1: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    C: number;
    V: number;
    ARROW_UP: number;
    ARROW_DOWN: number;
    ESC: number;
    ENTER: number;
};
export declare const system: {};
