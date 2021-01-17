export declare function ftDate(val: Date): string;
export declare const util: {
    isIn: (val: string, array: string[]) => boolean;
};
export declare const formater: {
    text: {
        arrayToString(array: any[]): string;
    };
    compactDateTime: (val: string) => string;
    compactDate: (val: string) => string;
    date: (val: Date) => string;
    dateTime: (val: Date) => string;
    shortDateTime: (val: Date) => string;
    yyyymmddTime: (val: Date) => string;
    yyyymmddHHmmss: (val: Date) => string;
    number: (val: number) => string;
    idNumber: (val: number) => string;
    integer: (val: number) => string;
    currency: (val: number) => string;
    percent: (val: number) => string;
};
