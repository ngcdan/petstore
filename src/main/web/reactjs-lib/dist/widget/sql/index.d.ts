export * from './type';
export * from './UISearchParams';
/**
 * @deprecated The method should not be used
 */
export declare const SEARCH_FILTER: {
    "name": string;
    "type": string;
    "required": boolean;
    "filterValue": string;
}[];
export declare function createSearchFilter(): {
    "name": string;
    "type": string;
    "required": boolean;
    "filterValue": string;
}[];
/**
 * @deprecated The method should not be used
 */
export declare const ENTITY_STATE_FILTER: {
    "name": string;
    "label": string;
    "type": string;
    "required": boolean;
    "options": string[];
    "optionLabels": string[];
    "selectOption": string;
}[];
export declare function createEntityStateFilter(): {
    "name": string;
    "label": string;
    "type": string;
    "required": boolean;
    "options": string[];
    "optionLabels": string[];
    "selectOption": string;
}[];
/**
 * @deprecated The method should not be used
 */
export declare const MODIFIED_TIME_FILTER: {
    "name": string;
    "label": string;
    "type": string;
    "required": boolean;
    "fromValue": null;
    "toValue": null;
}[];
export declare function createModifiedTimeFilter(): {
    "name": string;
    "label": string;
    "type": string;
    "required": boolean;
    "fromValue": null;
    "toValue": null;
}[];
export declare function createCreatedTimeFilter(): {
    "name": string;
    "label": string;
    "type": string;
    "required": boolean;
    "fromValue": null;
    "toValue": null;
}[];
/**
 * @deprecated The method should not be used
 */
export declare const CREATED_TIME_FILTER: {
    "name": string;
    "label": string;
    "type": string;
    "required": boolean;
    "fromValue": null;
    "toValue": null;
}[];
/**
 * @deprecated The method should not be used
 */
export declare const ORDER_BY: {
    fields: string[];
    fieldLabels: string[];
    selectFields: null;
    sort: string;
};
export declare function createDefaultOrderBy(): {
    fields: string[];
    fieldLabels: string[];
    selectFields: null;
    sort: string;
};
export declare function createOrderBy(fields: Array<string>, labels?: Array<string>): {
    fields: string[];
    fieldLabels: string[] | undefined;
    selectFields: null;
    sort: string;
};
export declare function createStateFilter(states: Array<"ACTIVE" | "INACTIVE" | "ARCHIVED" | "JUNK" | "DEPRECATED">): {
    name: string;
    label: string;
    type: string;
    required: boolean;
    options: string[];
    optionLabels: string[];
    selectOption: "ACTIVE" | "INACTIVE" | "ARCHIVED" | "JUNK" | "DEPRECATED";
};
export declare function createEditModeFilter(modes: Array<"DRAFT" | "VALIDATED" | "LOCKED">): {
    name: string;
    label: string;
    type: string;
    required: boolean;
    options: string[];
    optionLabels: string[];
    selectOption: string;
};
