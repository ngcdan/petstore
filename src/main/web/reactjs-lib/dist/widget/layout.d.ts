import React from "react";
import { Component } from "react";
import { NotificationMessage } from 'widget/util';
import { ButtonActionModel, GroupButtonActionModel } from './element';
import './stylesheet.scss';
declare type ELEProps = {
    mobile?: boolean;
    children?: any;
    className?: string;
    style?: any;
};
declare type ContainerProps = ELEProps & {
    fluid?: boolean;
};
export declare class Container extends Component<ContainerProps, {}> {
    render(): JSX.Element;
}
export declare class Row extends Component<ELEProps, {}> {
    render(): JSX.Element;
}
declare type ColProps = ELEProps & {
    type?: 'sm' | 'md' | 'lg' | 'xl';
    span: number;
};
export declare class Col extends Component<ColProps, {}> {
    render(): JSX.Element;
}
export declare class Form extends Component<ELEProps, {}> {
    render(): JSX.Element;
}
export interface FormContainerProps {
    className?: string;
    fluid?: boolean;
    children: any;
}
export interface FormContainerState {
}
export declare class FormContainer extends Component<FormContainerProps, FormContainerState> {
    render(): JSX.Element;
}
interface FormGroupProps extends ELEProps {
    inline?: boolean;
}
declare type FormGroupState = {};
export declare class FormGroup extends Component<FormGroupProps, FormGroupState> {
    render(): JSX.Element;
}
interface FormGroupColProps {
    children: any;
    inline?: boolean;
    className?: string;
    type?: 'sm' | 'md' | 'lg' | 'xl';
    span: number;
}
declare type FormGroupColState = {};
export declare class FormGroupCol extends Component<FormGroupColProps, FormGroupColState> {
    render(): JSX.Element;
}
export declare class WS extends Component<ELEProps> {
    key: string;
    constructor(props: ELEProps);
    render(): JSX.Element;
}
export declare class WSHeader extends Component<ELEProps> {
    render(): JSX.Element;
}
export declare class WSBody extends Component<ELEProps> {
    render(): JSX.Element;
}
export declare class WSFooter extends Component<ELEProps> {
    render(): JSX.Element;
}
export declare class Panel extends Component<ELEProps> {
    render(): JSX.Element;
}
export declare class PanelHeader extends Component<ELEProps> {
    render(): JSX.Element;
}
declare type PanelBodyProps = ELEProps & {};
export declare class PanelBody extends Component<PanelBodyProps> {
    render(): JSX.Element;
}
export declare class PanelFooter extends Component<ELEProps> {
    render(): JSX.Element;
}
declare type FlexBoxProps = ELEProps & {};
export declare class FlexBox extends Component<FlexBoxProps> {
    render(): JSX.Element;
}
export interface Breadcumbs {
    push: (name: string, label: string, ui: any) => void;
    onBack: () => void;
}
export interface BreadcumbsPageProps extends ELEProps {
    scroll?: boolean;
}
export interface BreadcumbsPageState {
    path: Array<any>;
}
export declare class BreadcumbsPage<T extends BreadcumbsPageProps> extends Component<T, BreadcumbsPageState> implements Breadcumbs {
    dropdownActions?: Array<GroupButtonActionModel>;
    actions?: Array<ButtonActionModel>;
    constructor(props: any);
    clear(): void;
    isScrollable(): boolean;
    push(name: string, label: string, ui: any): void;
    add(name: string, label: string, ui: any): void;
    onSelectPath(name: string): void;
    onBack(): void;
    renderActions(): JSX.Element[] | null;
    renderDropdownActions(): JSX.Element[] | null;
    createBreadcumbPaths(): JSX.Element[];
    createBreadcumbContents(): JSX.Element[];
    render(): JSX.Element;
}
export interface TabModel {
    name: string;
    label: string;
    active?: boolean;
    closable?: boolean;
    ui: any;
}
declare type TabProps = {
    name: string;
    label: string;
    style?: any;
    active?: boolean;
    children: any;
};
declare type TabState = {};
export declare class Tab extends Component<TabProps, TabState> {
    render(): JSX.Element;
}
interface TabPaneProps extends ELEProps {
    lookAndFeel?: 'outline';
    onCreateTab?: () => TabModel;
    customActions?: Array<ButtonActionModel>;
}
declare type TabPaneState = {
    selectTab: string;
};
export declare class TabPane extends Component<TabPaneProps, TabPaneState> {
    dynamicTabs: Array<any>;
    constructor(props: TabPaneProps);
    onSelectTab(tabName: string): void;
    onClose(tabName: string): void;
    onAdd(): void;
    addTab(tab: TabModel): void;
    render(): JSX.Element;
}
export interface ColumnProps extends ELEProps {
    width?: any;
    height?: any;
    growth?: number;
}
export declare class Column extends Component<ColumnProps> {
    render(): JSX.Element;
}
export interface ColumnLayoutProps extends ELEProps {
}
export declare class ColumnLayout extends Component<ColumnLayoutProps> {
    render(): JSX.Element;
}
export interface SectionProps extends ELEProps {
    title: string;
    collapse?: boolean;
    actions?: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare type SectionState = {
    collapse?: boolean;
};
export declare class Section extends React.Component<SectionProps, SectionState> {
    componentWillMount(): void;
    onToggle(): void;
    render(): JSX.Element;
}
export interface UINotificationMessageProps extends ELEProps {
    msg: NotificationMessage;
}
export declare class UINotificationMessage extends React.Component<UINotificationMessageProps> {
    render(): JSX.Element;
}
export declare class DialogContext {
    dialog?: Dialog;
    getDialog(): Dialog;
    setDialog(dialog: Dialog): void;
}
declare type DialogProps = {
    parentDomId: string;
    title: string;
    content: any;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    context?: DialogContext;
    actions?: Array<ButtonActionModel>;
    onClose?: (uiDialog: Dialog) => void;
};
declare type DialogState = {
    show: boolean;
};
export declare class Dialog extends React.Component<DialogProps, DialogState> {
    constructor(props: DialogProps);
    hide(): void;
    doClose(): void;
    render(): JSX.Element;
}
export declare function showDialog(title: string, size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', content: any, ctx?: DialogContext): void;
export declare function showNotification(type: 'success' | 'info' | 'warning' | 'danger', label: string, detail?: string | null, cause?: any): void;
export {};
