import { Component } from "react";
import { TreeNode, TreeModel } from "../widget/list/vtree";
declare class DemoTreeModel extends TreeModel {
    constructor(showRoot: boolean);
    loadChildren(node: TreeNode, postLoadCallback?: (node: TreeNode) => void): any;
}
declare type UITreeDemoProps = {};
declare type UITreeDemoState = {
    model: DemoTreeModel;
};
export default class UITreeDemo extends Component<UITreeDemoProps, UITreeDemoState> {
    componentWillMount(): void;
    onToggleRoot(): void;
    onSelectNode(node: TreeNode): void;
    render(): JSX.Element;
}
export {};
