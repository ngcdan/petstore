import { Component } from "react";
interface UIBeanEditorState {
    renderUpdate: number;
    disable: boolean;
    bean: any;
}
export default class UIBeanEditor extends Component<{}, UIBeanEditorState> {
    componentWillMount(): void;
    onInputChange(_bean: any, _field: string, _oldVal: any, _newVal: any): void;
    autoCompleteOnInputChange(_bean: any, _field: string, _selectOpt: any, _oldVal: any, _newVal: any): void;
    render(): JSX.Element;
}
export {};
