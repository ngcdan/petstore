import * as React from "react";
import { ListModel } from "./list/ListModel";
import { VTableConfig } from './list';
export interface ArrayEditorProps {
    beans: Array<any>;
    dialogEditor: boolean;
    style?: any;
    className?: string;
    editorTitle: string;
    collapseEditor?: boolean;
    closeOnLostFocus?: boolean;
    context?: any;
    onChange?: (beans: Array<any>) => void;
}
interface ArrayEditorState {
    beans?: Array<any>;
    selectBean: any;
    dialogEditor: boolean;
    openDialog: boolean;
}
declare class ArrayEditor<T extends ArrayEditorProps, S extends ArrayEditorState> extends React.Component<T, S> {
    createTableConfig(): any;
    renderBeanEditor(): void;
    isEditable(): boolean;
    createNewBean(): {};
    getModifiedBean(): any;
    setModifiedBean(modifiedBean: any): void;
    onSelect(_row: number, bean: any): void;
    onNewAction(): void;
    onSaveAction(): void;
    hideDialog(): void;
    renderDialogEditor(): JSX.Element;
    renderFooterAction(selectBean: any): JSX.Element | null;
    renderEditor(): JSX.Element;
}
export interface BeanListEditorProps extends ArrayEditorProps {
}
interface ListEditorState extends ArrayEditorState {
}
declare class ListEditor<T extends BeanListEditorProps> extends ArrayEditor<T, ListEditorState> {
    tableModel: ListModel;
    constructor(props: T);
    getSelectedBeans(): Array<any>;
    onSaveAction(): void;
    onDeleteAction(): void;
    onChangeState(newState: 'ACTIVE' | 'ARCHIVED'): void;
}
export declare class UIBeanGridTableEditor<T extends ArrayEditorProps> extends ListEditor<T> {
    config: VTableConfig;
    constructor(props: T);
    render(): JSX.Element;
}
export declare class UILazyLoad<P, S> extends React.Component<P, S> {
    loading: boolean;
    isLoading(): boolean;
    markLoading(loading: boolean): void;
    renderLoading(): JSX.Element;
}
export {};
