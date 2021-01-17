import { Component } from 'react';
import { Validator, BGValidator } from '../util/validator';
import { DialogContext } from "./layout";
import 'react-datetime/css/react-datetime.css';
import './stylesheet.scss';
declare type ELEProps = {
    mobile?: boolean;
    children?: any;
    className?: string;
    style?: any;
};
export declare class ErrorCollector {
    errors: any;
    count: number;
    constructor();
    getCount(): number;
    getErrors(): any;
    collect(name: string, error: string): void;
    remove(name: string): void;
    dump(): void;
}
export interface WInputProps extends ELEProps {
    name: string;
    value: any;
    placeholder: any;
    disable?: boolean;
    focus?: boolean;
    validators?: Array<Validator>;
    bgValidator?: BGValidator;
    errorCollector?: ErrorCollector;
    onChange?: (oldVal: any, newVal: any) => void;
    onInputChange?: (oldVal: any, newVal: any) => void;
    onKeyDown?: (winput: WInput, event: any, keyCode: number, currInput: any) => void;
}
export interface WInputState {
    message: null | string;
    value: any;
    inputValue: any;
}
export declare class WInput extends Component<WInputProps, WInputState> {
    customClass: null | string;
    message: null | string;
    constructor(props: WInputProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(props: WInputProps): void;
    createInitState(props: WInputProps): WInputState;
    getMessage(): string | null;
    onPostReceiveProps(_props: WInputProps, _state: WInputState): void;
    onFocus(evt: any): void;
    onFocusLost(evt: any): void;
    updateValue(newVal: any): void;
    runValidation(_oldVal: any, newVal: any): void;
    runBGValidation(oldVal: any, newVal: any): void;
    convert(_newVal: string): void;
    onChange(e: any): void;
    onKeyDown(e: any): void;
    toDisplayValue(value: any): any;
    _getInputType(): string;
    _getCustomClass(): null;
    render(): JSX.Element;
}
export declare class WStringInput extends WInput {
    convert(newVal: string): string;
}
export declare class WPasswordInput extends WStringInput {
    _getInputType(): string;
}
export declare class WTextInput extends WStringInput {
    render(): JSX.Element;
}
export declare class WIntInput extends WInput {
    onPostReceiveProps(_props: WInputProps, _state: WInputState): void;
    convert(newVal: string): number;
}
export declare class WLongInput extends WInput {
    onPostReceiveProps(_props: WInputProps, _state: WInputState): void;
    convert(value: string): number;
}
export declare class WFloatInput extends WInput {
    onPostReceiveProps(_props: WInputProps, _state: WInputState): void;
    convert(value: string): number | "";
}
export declare class WDoubleInput extends WInput {
    onPostReceiveProps(_props: WInputProps, _state: WInputState): void;
    convert(value: string): number;
    toDisplayValue(value: any): any;
}
export declare class WNumberInput extends WDoubleInput {
    toDisplayValue(value: any): any;
}
export declare class WPercentInput extends WInput {
    onPostReceiveProps(_props: WInputProps, _state: WInputState): void;
    convert(value: string): number;
    toDisplayValue(value: any): any;
}
export interface WArrayInputProps {
    name: string;
    value: any;
    placeholder: any;
    disable?: boolean;
    disableAdd?: boolean;
    validators?: Array<Validator>;
    errorCollector?: ErrorCollector;
    onChange?: any;
    onInputChange: any;
    onKeyDown?: any;
}
export interface WArrayInputState {
    inputValues: Array<any>;
    oldValues: Array<any>;
}
declare class WArrayInput extends Component<WArrayInputProps, WArrayInputState> {
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: WArrayInputProps): void;
    onFocus(idx: number, _evt: any): void;
    onFocusLost(idx: number, evt: any): void;
    convert(newVal: string): any;
    onChange(idx: number, e: any): void;
    onRemove(idx: number): void;
    onAddNew(): void;
    isFieldEditable(): boolean;
    render(): JSX.Element;
    renderAdd(readOnly: boolean): JSX.Element | null;
}
export declare class WStringArrayInput extends WArrayInput {
    convert(newVal: string): string;
}
export declare class WIntArrayInput extends WArrayInput {
    convert(newVal: string): any;
}
export declare class WLongArrayInput extends WArrayInput {
    convert(value: string): any;
}
export declare class WFloatArrayInput extends WArrayInput {
    convert(value: string): any;
}
export declare class WDoubleArrayInput extends WArrayInput {
    convert(value: string): any;
}
export interface WRadioInputProps extends ELEProps {
    name: string;
    select: any;
    options: Array<any>;
    optionLabels?: Array<string>;
    disable?: boolean;
    onInputChange: (oldVal: string, newVal: string) => void;
}
export interface WRadioInputState {
    select: string;
}
export declare class WRadioInput extends Component<WRadioInputProps, WRadioInputState> {
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: WRadioInputProps): void;
    onSelect(idx: number): void;
    render(): JSX.Element;
}
export interface WCheckboxInputProps {
    name: string;
    label?: string;
    checked: boolean;
    disable?: boolean;
    onInputChange: (checked: boolean) => void;
}
export interface WCheckboxInputState {
    checked: boolean;
}
export declare class WCheckboxInput extends Component<WCheckboxInputProps, WCheckboxInputState> {
    constructor(props: WCheckboxInputProps);
    componentWillReceiveProps(nextProps: WCheckboxInputProps): void;
    onSelect(): void;
    render(): JSX.Element;
}
export interface WMultiCheckboxInputProps {
    name: string;
    select: Array<string>;
    options: Array<any>;
    optionLabels?: Array<string>;
    disable?: boolean;
    onInputChange: (oldVal: Array<string>, newVal: Array<string>) => void;
}
export interface WMultiCheckboxInputState {
    select: Array<string>;
    checked: Array<boolean>;
}
export declare class WMultiCheckboxInput extends Component<WMultiCheckboxInputProps, WMultiCheckboxInputState> {
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: WMultiCheckboxInputProps): void;
    onSelect(idx: number): void;
    render(): JSX.Element;
}
export interface WSelectProps {
    options: Array<any>;
    optionLabels?: Array<any>;
    select: any;
    disable?: boolean;
    style?: any;
    onSelect: (option: any) => void;
}
export interface WSelectState {
    select: null | any;
}
export declare class WSelect extends Component<WSelectProps, WSelectState> {
    constructor(props: WSelectProps);
    componentWillReceiveProps(nextProps: WSelectProps): void;
    onChange(event: any): void;
    render(): JSX.Element;
}
export interface WBeanSelectProps {
    fieldLabel: string;
    fieldCheck: string;
    select: any;
    options: Array<any>;
    disable?: boolean;
    style?: string;
    onSelect: (value: number) => void;
}
export interface WBeanSelectState {
    select: any;
}
export declare class WBeanSelect extends Component<WBeanSelectProps, WBeanSelectState> {
    open: boolean;
    constructor(props: WBeanSelectProps);
    onSelect(idx: number): void;
    toggle(): void;
    render(): JSX.Element;
}
export interface WDateTimeProps {
    value: any;
    dateFormat?: string;
    timeFormat: any;
    disable?: boolean;
    onCommitChange?: (moment: any) => void;
}
export interface WDateTimeState {
    value: '' | Date;
}
export declare class WDateTime extends Component<WDateTimeProps, WDateTimeState> {
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: WDateTimeProps): void;
    onChange(value: any): void;
    onBlur(datetime: any): void;
    render(): JSX.Element;
}
interface WAutoCompleteProps {
    value: any;
    inputField?: string;
    descriptionField?: string;
    autofocus?: boolean;
    disable?: boolean;
    style?: any;
    validators?: Array<Validator>;
    onInputChange: (selectBean: null | any, oldVal: string, newVal: string) => void;
    onCreateNew?: (WAutoComplete: WAutoComplete) => void;
    filter: (exp: string, onChangeCallback: (options: Array<any>) => void) => void;
}
interface WAutoCompleteState {
    input: any;
    dropdown: boolean;
    options: Array<any>;
    currSelect: number;
    focus: boolean;
    validated: boolean;
}
export declare class WAutoComplete extends Component<WAutoCompleteProps, WAutoCompleteState> {
    autoCompleteInput: any;
    inputWidth: number;
    errorMessage: null | string;
    constructor(props: WAutoCompleteProps);
    componentWillReceiveProps(nextProps: WAutoCompleteProps): void;
    componentDidMount(): void;
    autofocus(props: WAutoCompleteProps): void;
    onFocus(evt: any): void;
    onFocusLost(_evt: any): void;
    runInitValidation(_bean: any, _oldVal: any, newVal: any): void;
    runValidation(_bean: any, _oldVal: any, newVal: any): boolean;
    updateValue(bean: null | any, newVal: any): void;
    /**
     * 1. onKeyDown is called before onChange
     * 2. onChange won't be called for certain key such ENTER, ESC...
     */
    onKeyDown(e: any): void;
    onChange(e: any): void;
    onSelectOption(idx: number): void;
    primitiveOptionRender(options: Array<any>, _selIndex: number): JSX.Element[];
    optionRender(options: Array<any>, inputField: string, descriptionField: string, _selIndex: number): JSX.Element[];
    toggle(): void;
    render(): JSX.Element;
}
export interface BBFieldProps extends ELEProps {
    bean: any;
    field: string;
    placeholder?: string;
    disable?: boolean;
    focus?: boolean;
    validators?: Array<Validator>;
    bgValidator?: BGValidator;
    errorCollector?: ErrorCollector;
    onKeyDown?: (winput: WInput, event: any, keyCode: number, currInput: any) => void;
    onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBField extends Component<BBFieldProps, {}> {
    getWInput(): null | WInput;
    onWInputChange(oldVal: any, newVal: any): void;
    createWInput(): JSX.Element;
    render(): JSX.Element;
}
export declare class BBStringField extends BBField {
    getWInput(): any;
}
export declare class BBStringArrayField extends BBField {
    getWInput(): any;
}
export declare class BBTextField extends BBField {
    createWInput(): JSX.Element;
}
export declare class BBPasswordField extends BBField {
    getWInput(): any;
}
export declare class BBIntField extends BBField {
    getWInput(): any;
}
export declare class BBIntArrayField extends BBField {
    getWInput(): any;
}
export declare class BBLongField extends BBField {
    getWInput(): any;
}
export declare class BBLongArrayField extends BBField {
    getWInput(): any;
}
export declare class BBFloatField extends BBField {
    getWInput(): any;
}
export declare class BBFloatArrayField extends BBField {
    getWInput(): any;
}
export declare class BBDoubleField extends BBField {
    getWInput(): any;
}
export declare class BBNumberField extends BBField {
    getWInput(): any;
}
export declare class BBCurrencyField extends BBField {
    getWInput(): any;
}
export declare class BBPercentField extends BBField {
    getWInput(): any;
}
export declare class BBDoubleArrayField extends BBField {
    getWInput(): any;
}
export interface BBRadioInputFieldProps extends ELEProps {
    bean: any;
    field: string;
    options: Array<any>;
    optionLabels?: Array<string>;
    disable?: boolean;
    onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBRadioInputField extends Component<BBRadioInputFieldProps, {}> {
    onWInputChange(oldVal: any, newVal: any): void;
    render(): JSX.Element;
}
export interface BBCheckboxFieldProps {
    bean: any;
    field: string;
    value: any;
    label?: string;
    disable?: boolean;
    onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBCheckboxField extends Component<BBCheckboxFieldProps, {}> {
    onWInputChange(checked: boolean): void;
    render(): JSX.Element;
}
export interface BBMultiCheckboxInputFieldProps {
    bean: any;
    field: string;
    options: Array<any>;
    optionLabels?: Array<string>;
    disable?: boolean;
    onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBMultiCheckboxInputField extends Component<BBMultiCheckboxInputFieldProps, {}> {
    onWInputChange(oldVal: any, newVal: any): void;
    render(): JSX.Element;
}
export interface BBSelectFieldProps {
    bean: any;
    field: string;
    options: Array<any>;
    optionLabels?: Array<any>;
    disable?: boolean;
    style?: any;
    onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBSelectField extends Component<BBSelectFieldProps, {}> {
    constructor(props: BBSelectFieldProps);
    componentWillReceiveProps(nextProps: BBSelectFieldProps): void;
    onSelect(newVal: any): void;
    render(): JSX.Element;
}
export interface BBBeanSelectFieldProps {
    bean: any;
    field: string;
    fieldCheck: string;
    fieldLabel: string;
    disable?: boolean;
    options: Array<any>;
    onInputChange: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBBeanSelectField extends Component<BBBeanSelectFieldProps, {}> {
    onSelect(opt: any): void;
    render(): JSX.Element;
}
export interface BBDateTimeFieldProps {
    bean: any;
    field: string;
    commitFormat?: 'date' | string;
    dateFormat?: any;
    timeFormat: any;
    disable?: boolean;
    onInputChange?: (bean: any, field: string, oldVal: any, newVal: any) => void;
}
export declare class BBDateTimeField extends Component<BBDateTimeFieldProps, {}> {
    onInputChange(moment: any): void;
    render(): JSX.Element;
}
export interface BBMultiLabelSelectorProps {
    className?: string;
    style?: any;
    labelBeans: Array<any>;
    labelField: string;
    onLabelClick?: (bean: any) => void;
    context?: any;
    disable?: boolean;
}
export declare class BBMultiLabelSelector<T extends BBMultiLabelSelectorProps> extends Component<T, {}> {
    dialogContext: DialogContext | null;
    onCustomSelect(): void;
    dialogShow(title: string, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', ui: any): void;
    dialogClose(): void;
    onRemove(idx: number): void;
    onLabelClick(bean: any): void;
    render(): JSX.Element;
}
export interface BBReferenceProps {
    className?: string;
    style?: any;
    bean: any;
    field: string;
    disable?: boolean;
    onInfo: () => void;
}
export declare class BBReference<T extends BBReferenceProps> extends Component<T, {}> {
    render(): JSX.Element;
}
export interface BBStringFieldCallableServerProps extends BBFieldProps {
    onCallServer: () => void;
}
export declare class BBStringFieldCallableServer extends Component<BBStringFieldCallableServerProps> {
    render(): JSX.Element;
}
export interface BBAutoCompleteProps {
    options: Array<any>;
    bean: any;
    field: string;
    inputField?: string;
    descriptionField?: string;
    validators?: Array<Validator>;
    autofocus?: boolean;
    context?: any;
    disable?: boolean;
    style?: any;
    hideMoreInfo?: boolean;
    onInputChange?: (bean: any, field: string, selectOpt: any, oldVal: any, newVal: any) => void;
}
export declare class BBAutoComplete<T extends BBAutoCompleteProps> extends Component<T, {}> {
    dialogContext: DialogContext | null;
    filter(exp: string, onChangeCallback: (selOptions: Array<any>) => void): void;
    doFilter(exp: string, records: Array<any>): any[];
    onCreateNew?: (WAutoComplete: WAutoComplete) => void;
    getContext(): T["context"];
    onInputChange(selectOpt: null | any, oldVal: any, newVal: any): void;
    onShowMoreInfo(value: any): void;
    onCustomSelect(): void;
    dialogShow(title: string, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', ui: any): void;
    dialogClose(): void;
    render(): JSX.Element;
    renderControl(): JSX.Element | null;
}
export {};
