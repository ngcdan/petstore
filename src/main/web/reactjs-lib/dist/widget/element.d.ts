import { Component } from 'react';
import { ButtonProps } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export interface ButtonActionModel {
    name: string;
    icon?: string;
    label: string;
    color?: string;
    outline?: boolean;
    size?: string;
    onSelect: (item: ButtonActionModel, context?: any) => void;
    divider?: boolean;
}
export interface WButtonProps extends ButtonProps {
    remove?: any;
}
export declare class WButton extends Component<WButtonProps> {
    render(): JSX.Element | null;
}
export interface GroupButtonActionModel {
    label: string;
    actions: Array<ButtonActionModel>;
}
export interface PopoverButtonProps {
    id: string;
    className?: string;
    label?: any;
    icon?: string;
    outline?: boolean;
    color?: string;
    style?: any;
    popover: {
        title?: string;
        placement?: string;
        open?: boolean;
    };
    children: any;
}
export declare class PopoverButton extends Component<PopoverButtonProps, {}> {
    toggle(): void;
    render(): JSX.Element;
}
export interface ButtonWithDropdownProps {
    icon?: string;
    label: string;
    id: string;
    color?: string;
    popover: {
        title?: string;
        onClose?: () => void;
    };
    onClick: () => void;
    children: any;
}
export interface ButtonWithDropdownState {
    popoverOpen: boolean;
}
export declare class ButtonWithDropdown extends Component<ButtonWithDropdownProps, ButtonWithDropdownState> {
    constructor(props: ButtonWithDropdownProps);
    componentWillReceiveProps(_nextProps: ButtonWithDropdownProps): void;
    toggle(): void;
    render(): JSX.Element;
}
export interface AutoRefreshButtonProps {
    id: string;
    onRefresh?: () => void;
    defaultPeriod: 10 | 30 | 60 | 300;
}
export interface AutoRefreshButtonState {
    selectPeriod: number;
}
export declare class AutoRefreshButton extends Component<AutoRefreshButtonProps, AutoRefreshButtonState> {
    timerId: any;
    constructor(props: AutoRefreshButtonProps);
    componentDidMount(): void;
    onSelectPeriod(period: number): void;
    onRefresh(): void;
    autoRefresh(period: number): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export interface DropdownActionButtonProps {
    label?: string;
    icon?: string;
    hint?: string;
    items: Array<ButtonActionModel>;
    align?: string;
    color?: string;
}
export interface DropdownActionButtonState {
    open: boolean;
}
export declare class DropdownActionButton extends Component<DropdownActionButtonProps, DropdownActionButtonState> {
    constructor(props: DropdownActionButtonProps);
    toggle(): void;
    onSelectItem(item: ButtonActionModel): void;
    render(): JSX.Element;
}
export interface DropdownSelectItemButtonProps {
    items: Array<any>;
    selectItem?: any;
    onSelect?: (item: any) => void;
}
export interface DropdownSelectItemButtonState {
    open: boolean;
    selectItem: any;
}
export declare class DropdownSelectItemButton extends Component<DropdownSelectItemButtonProps, DropdownSelectItemButtonState> {
    constructor(props: DropdownSelectItemButtonProps);
    toggle(): void;
    onSelectItem(item: any): void;
    render(): JSX.Element;
}
export interface DropdownSelectComplexItemButtonProps {
    label: string;
    items: Array<any>;
    fieldLabel: string;
    fieldCheck: string;
    onSelect?: (item: any) => void;
}
export interface DropdownSelectComplexItemButtonState {
    open: boolean;
}
export declare class DropdownSelectComplexItemButton extends Component<DropdownSelectComplexItemButtonProps, DropdownSelectComplexItemButtonState> {
    keepOpen: boolean;
    constructor(props: DropdownSelectComplexItemButtonProps);
    toggle(): void;
    onSelect(item: any): void;
    render(): JSX.Element;
}
export interface ProgressBarProps {
    progress: number;
    duration: number;
}
export interface ProgressBarState {
    progress: number;
}
export declare class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
    constructor(props: ProgressBarProps);
    componentWillReceiveProps(nextProps: ProgressBarProps): void;
    componentWillMount(): void;
    initState(props: ProgressBarProps): {
        progress: number;
    };
    render(): JSX.Element;
}
