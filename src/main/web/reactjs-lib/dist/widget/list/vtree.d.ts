import { Component } from "react";
import { VListConfig } from './VList';
import './stylesheet.scss';
export declare class TreeNode {
    parent: any;
    path: string;
    name: string;
    label: string;
    userData: any;
    collapse: boolean;
    children: null | Array<TreeNode>;
    loadedChildren: boolean;
    constructor(parent: any, path: string, name: string, label: string, userData: any, collapse: boolean);
    getChildByName(name: string): TreeNode | null;
    getChildren(): any;
    getParent(): any;
    setLoadedChildren(): void;
    addChild(name: string, label: string, userData: any, collapse: boolean): any;
}
export declare class TreeModel {
    showRoot: boolean;
    root: TreeNode;
    selectedNode: TreeNode;
    constructor(showRoot: boolean);
    setShowRoot(bool: boolean): void;
    getRoot(): TreeNode;
    setRoot(root: any): void;
    getSelectedNode(): TreeNode;
    setSelectedNode(node: any): void;
    isLoadedChildren(node: TreeNode): boolean;
    isLeafNode(node: TreeNode): boolean;
    onCollapse(_node: TreeNode): void;
    onExpand(node: TreeNode, postLoadCallback: (node: TreeNode) => void): void;
    removeNode(node: any): void;
    addChild(node: TreeNode, name: string, label: string, userData: any): any;
    loadChildren(_node: TreeNode, _postLoadCallback?: (node: TreeNode) => void): any;
}
export interface VTreeProps {
    className?: string;
    model: TreeModel;
    config: any;
    onSelectNode?: (node: TreeNode) => void;
}
declare class VTreeBase extends Component<VTreeProps> {
    getTreeModel(): TreeModel;
    onExpandRoot(selectFirstNode?: boolean): void;
    onToggleNode(node: TreeNode): void;
    onSelectNode(node: any): void;
    createDataRow(rowDataHolder: Array<any>, model: TreeModel, node: TreeNode, deep: number): void;
    initDataRowHolder(): any[];
}
export declare class VTree extends VTreeBase {
    listConfig: VListConfig;
    render(): JSX.Element;
}
export declare class VTreeSimpleTable extends VTreeBase {
    constructor(props: VTreeProps);
    cellDataGetter(_ref: any): string;
    headerRenderer(_ref: any): JSX.Element;
    cellRenderer(_ref: any): JSX.Element;
    treeCellRenderer(_ref: any): JSX.Element;
    noRowsRenderer(): JSX.Element;
    rowClassName(_ref: any): "header-row" | "even-row" | "odd-row";
    render(): JSX.Element;
}
export interface UIWidgetProps {
    label: string;
    node: TreeNode;
    isLeafNode: boolean;
    onExpandNode: (node: TreeNode) => void;
    onSelectNode: (node: TreeNode) => void;
    config: any;
}
export declare class UIVTreeWidget extends VTree {
    treeWigdetEle: any;
    nodeRender(node: TreeNode): JSX.Element;
    onExpandNode(node: TreeNode): void;
    render(): JSX.Element;
}
export declare class MUIVTreeWidget extends UIVTreeWidget {
    nodeRender(node: TreeNode): JSX.Element;
}
export {};
