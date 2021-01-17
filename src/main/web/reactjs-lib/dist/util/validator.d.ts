export interface Validator {
    validate(val: any): void;
}
export declare type ValidateCallback = (validate: boolean, message: string) => void;
export interface BGValidator {
    validate(olVal: any, newVal: any, cb: ValidateCallback): void;
}
export declare class EmptyValidator implements Validator {
    message: string;
    allowEmpty: boolean;
    constructor(message: string, allowEmpty?: boolean);
    validate(val: any): void;
}
export declare class PatternValidator implements Validator {
    pattern: RegExp;
    allowEmpty: boolean;
    message?: string;
    constructor(pattern: RegExp, allowEmpty?: boolean, message?: string);
    validate(val: any): void;
}
export declare class NumberRangeValidator {
    min: number;
    max: number;
    constructor(min: number, max: number);
    validate(val: any): void;
}
export declare const EMPTY_VALIDATOR: Validator;
export declare const EMAIL_VALIDATOR: Validator;
export declare const NAME_VALIDATOR: Validator;
export declare const POSITIVE_NUMBER_VALIDATOR: Validator;
export declare const ZERO_AND_GREATER_VALIDATOR: Validator;
