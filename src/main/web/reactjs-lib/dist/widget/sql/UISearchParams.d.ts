import React from "react";
import { SqlSearchParams, Filter, OptionFilter, RangeFilter, OrderBy } from "./type";
import { WInput } from "../input";
import './stylesheet.scss';
interface UISearchParamsProps {
    searchParams: SqlSearchParams;
    defaultField?: string;
    onSubmit: (searchParams: any) => void;
}
interface UISearchParamsState {
}
export declare class UISearchParams extends React.Component<UISearchParamsProps, UISearchParamsState> {
    popoverId: string;
    constructor(props: UISearchParamsProps);
    onKeyDown(winput: WInput, _evt: any, keyCode: number, currInput: any): void;
    onDeleteMaxReturn(): void;
    onDeleteOrderBy(): void;
    onDeleteOptionFilter(filter: OptionFilter): void;
    setDateTimeRangeFilter(filter: RangeFilter, dayRange: number): void;
    clearDateTimeRangeFilter(filter: RangeFilter): void;
    render(): JSX.Element;
    _renderDropdownCriteria(searchParams: SqlSearchParams): JSX.Element;
    _renderCriteriaBadge(searchParams: SqlSearchParams): JSX.Element;
    _renderMaxReturn(searchParams: SqlSearchParams): JSX.Element;
    _renderOrderBy(orderBy?: OrderBy): any;
    _getFilter(field: string, filters?: Array<Filter>): any;
    _renderFilters(defaultField: string, filters?: Array<Filter>): any;
    _renderOptionFilters(filters?: Array<OptionFilter>): any;
    _renderDateRangeFilters(filters?: Array<RangeFilter>): any;
}
export {};
