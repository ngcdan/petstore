import React from "react";
import { Component } from "react";
import { Button } from 'reactstrap';
import { AutoSizer, Column, Table } from 'react-virtualized';

import { BreadcumbsPage, BreadcumbsPageProps } from '../layout';
import {IDTracker} from "util/common"

import {ICONS} from "../icons";
import { VList, ListModel, VListConfig } from './VList';
import {formatCellValue} from './common';

import './stylesheet.scss'

export class TreeNode {
  parent:   any;
  path:     string;
  name:     string;
  label:    string;
  userData: any;
  collapse: boolean;
  children: null|Array<TreeNode>;
  loadedChildren: boolean;

  constructor(parent: any, path: string, name: string, label: string , userData: any, collapse: boolean) {
    this.parent = parent;
    this.path = path;
    this.name = name;
    this.label = label;
    this.userData = userData;
    this.collapse = collapse;
    this.children = null;
    this.loadedChildren = false;
  }

  getChildByName(name: string) {
    if(!this.children) return null;
    for(let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      if(child.name === name) return child;
    }
    return null;
  }

  getChildren(): any { return this.children; }

  getParent(): any { return this.parent; }

  setLoadedChildren() { this.loadedChildren = true; }

  addChild(name: string, label: string, userData: any, collapse: boolean): any {
    let path = null;
    if(this.path) path = this.path + '/' + name;
    else path = name;
    let node = new TreeNode(this, path, name, label, userData, collapse);
    if(!this.children) this.children = [];
    this.children.push(node);
    return node;
  }
}

export class TreeModel {
  showRoot:     boolean;
  root:         TreeNode;
  selectedNode: TreeNode;

  constructor(showRoot: boolean) {
    this.showRoot = showRoot;
    this.root = new TreeNode(null, '', "root", "Root", null, false);
    this.selectedNode = this.root;
  }

  setShowRoot(bool: boolean): void { this.showRoot = bool; }

  getRoot() { return this.root; }

  setRoot(root: any): void { 
    this.root = root;
    this.selectedNode = root;
  }


  getSelectedNode() { return this.selectedNode; }

  setSelectedNode(node: any): void { this.selectedNode = node;}

  isLoadedChildren(node: TreeNode) {
    if(node.children) return true;
    return node.loadedChildren;
  }

  isLeafNode(node: TreeNode) {
    let children = node.getChildren();
    if(!children)  return true;
    return children.length === 0;
  }

  onCollapse(_node: TreeNode): void { }

  onExpand(node: TreeNode, postLoadCallback:(node: TreeNode) => void): void {
    if(!this.isLoadedChildren(node)) {
      this.loadChildren(node, postLoadCallback);
    } else {
      if(postLoadCallback) postLoadCallback(node);
    }
  }

  removeNode(node: any) {
    let parent = node.getParent();
    if(!parent) return;
    let pChildren = parent.getChildren();
    for(let i = 0; i < pChildren.length; i++) {
      let child = pChildren[i];
      if(node.path === child.path) pChildren.splice(i, 1);
    }
  }

  addChild(node: TreeNode, name: string, label: string, userData: any): any {
    let child = node.addChild(name, label, userData, true);
    return child;
  }


  loadChildren(_node: TreeNode, _postLoadCallback?:(node: TreeNode) => void): any {
    throw new Error('this method need to reimplement');
  }
}

export interface VTreeProps {
  className?: string,
  model: TreeModel,
  config: any,
  onSelectNode?: (node: TreeNode) => void
}
class VTreeBase extends Component<VTreeProps> {
  getTreeModel() { return this.props.model ;}

  onExpandRoot(selectFirstNode: boolean = false) {
    const { model } = this.props;
    let thisUI = this;
    let callback = (node: TreeNode) => {
      if(node.getChildren() != null && selectFirstNode) {
        this.onSelectNode(node.getChildren()[0])
      }
      thisUI.forceUpdate();
    };
    model.onExpand(model.getRoot(), callback);
  }

  onToggleNode(node: TreeNode) {
    let {model} = this.props;
    if(!node.collapse) {
      model.onCollapse(node);
      node.collapse = true;
      this.forceUpdate();
    } else {
      let thisUI = this;
      let callback = (node: TreeNode) => {
        node.collapse = false;
        thisUI.forceUpdate();
      } ;
      model.onExpand(node, callback);
    }
  }

  onSelectNode(node: any) {
    this.getTreeModel().setSelectedNode(node);
    let {onSelectNode} = this.props;
    if(onSelectNode) onSelectNode(node);
  }

  createDataRow(rowDataHolder: Array<any>, model: TreeModel, node: TreeNode, deep: number) {
    rowDataHolder.push({node: node, deep: deep});

    if(node.collapse) return;
    let children = node.getChildren();
    if(children == null) return;
    for(let i = 0; i < children.length; i++) {
      this.createDataRow(rowDataHolder, model, children[i], deep + 1);
    }
  }

  initDataRowHolder() {
    const { model } = this.props;
    let rows: Array<any> = [];
    if(model.showRoot) {
      this.createDataRow(rows, model, model.root, 0);
    } else {
      let children = model.root.getChildren();
      if(children != null) {
        for(let i = 0; i < children.length; i++) {
          this.createDataRow(rows, model, children[i], 0);
        }
      }
    }
    return rows;
  }
}

export class VTree extends VTreeBase {
  listConfig: VListConfig = {
    toolbar: { hide: true },
    rowHeight: 25,

    renderItem: function(list: VList, _page: number, row: number, _rowInPage: number, item: any) {
      let uiVtree = list.getContext().uiVTree;
      let model: TreeModel = uiVtree.getTreeModel();
      let node:  TreeNode = item.node;
      let userData = node.userData;
      let deep: number   = item.deep;
      let toggleEle = null;
      if(!model.isLoadedChildren(node)) {
        let toggleBtnClass = ICONS.editor.refresh;
        toggleEle = (
          <Button color='link' onClick={() => uiVtree.onToggleNode(node)}>
            <span className={toggleBtnClass} />
          </Button>
        );

      } else if(!model.isLeafNode(node)) {
        let toggleBtnClass = ICONS.webapp.caretDown;
        if(node.collapse) toggleBtnClass = ICONS.webapp.caretRight;
        toggleEle = (
          <Button color='link' onClick={() => uiVtree.onToggleNode(node)}>
            <span className={toggleBtnClass} />
          </Button>
        );
      }
      let selected = node == model.getSelectedNode();
      let opacity = 1;
      if(userData && userData.state === 'InActive')  opacity = 0.6;
      let treeStyle = { paddingLeft: 10 * deep, opacity: opacity };
      return (
        <div className={'node'} key={row} style={treeStyle}>
          {toggleEle}
          <Button color='link' disabled={selected} onClick={()=>uiVtree.onSelectNode(node)}>{node.label}</Button>
        </div>
      );
    },

    actions: []
  } ;

  render() {
    let rows = this.initDataRowHolder();
    let {className } = this.props;
    className = className? `ui-tree ${className}` : 'ui-tree'
    return (
      <div className={className}>
        <VList context={{uiVTree: this}} config={this.listConfig} model={new ListModel(50000, rows)} />
      </div>
    );
  }
}

export class VTreeSimpleTable extends VTreeBase {

  constructor(props: VTreeProps) {
    super(props);

    this.headerRenderer = this.headerRenderer.bind(this);

    this.cellDataGetter = this.cellDataGetter.bind(this);
    this.treeCellRenderer = this.treeCellRenderer.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.noRowsRenderer = this.noRowsRenderer.bind(this);
    this.rowClassName = this.rowClassName.bind(this);
  }

  cellDataGetter(_ref: any) { return ''; }

  headerRenderer(_ref: any) {
    let {label} = _ref;
    let colConfig = _ref.columnData;
    let style = null;
    if(colConfig) style = colConfig.cellStyle;
    return (
      <div className='header-cell' style={style}>{label}</div>
    );
  }

  cellRenderer(_ref: any) {
    let rowData  = _ref.rowData;
    let node     = rowData.node;
    let userData = node.userData;

    let colConfig = _ref.columnData;
    let cellData  = '';
    if(userData) {
      cellData = formatCellValue(colConfig, userData[colConfig.name]);
    }
    return (<div className='cell'>{cellData}</div>);
  }

  treeCellRenderer(_ref: any) {
    const { model } = this.props;
    let rowData  = _ref.rowData;
    let node     = rowData.node;
    let userData = node.userData;
    let deep: number   = rowData.deep;
    let toggleEle = null;
    if(!model.isLoadedChildren(node)) {
      let toggleBtnClass = ICONS.editor.refresh;
      toggleEle = (
        <Button color='link' onClick={() => this.onToggleNode(node)}>
          <span className={toggleBtnClass} />
        </Button>
      );

    } else if(!model.isLeafNode(node)) {
      let toggleBtnClass = ICONS.webapp.caretDown;
      if(node.collapse) toggleBtnClass = ICONS.webapp.caretRight;
      toggleEle = (
        <Button color='link' onClick={() => this.onToggleNode(node)}>
          <span className={toggleBtnClass} />
        </Button>
      );
    }
    let opacity = 1;
    if(userData && userData.state === 'InActive')  opacity = 0.6;
    let treeStyle = { paddingLeft: 10 * deep, opacity: opacity };
    return (
      <div className='tree-cell' style={treeStyle}>
        {toggleEle}
        <Button color='link' onClick={()=> this.onSelectNode(node)}>{node.label}</Button>
      </div>
    );
  }

  noRowsRenderer() {
    return (<div className='no-rows'>{'No rows'}</div>)
  }

  rowClassName(_ref: any) {
    const {index} = _ref;
    if (index < 0) return 'header-row';
    else return index % 2 === 0 ? 'even-row' : 'odd-row';
  }

  render() {
    let { className, config } = this.props;
    let rowDataHolder = this.initDataRowHolder();

    let columns: Array<any> = [];

    let treeColWidth = 200;
    columns.push(
      <Column key='_tree' label={''} dataKey="_tree" disableSort={true} width={treeColWidth}
        headerRenderer={this.headerRenderer}
        cellDataGetter={this.cellDataGetter} cellRenderer={this.treeCellRenderer} />
    );
    for(let i = 0; i < config.columns.length; i++) {
      let colConfig = config.columns[i];
      if(colConfig.visible) {
        let colWidth = 150;
        if(colConfig.width) colWidth = colConfig.width;
        columns.push(
          <Column key={i} label={colConfig.label} dataKey={colConfig.name} width={colWidth} columnData={colConfig}
            headerRenderer={this.headerRenderer} disableSort={true}
            cellDataGetter={this.cellDataGetter} cellRenderer={this.cellRenderer}/>
        )
      }
    }
    className = className ? `ui-vtable ${className}` : 'ui-vtable'
    let rowHeight = 25;
    return (
      <div className={className} style={{height: '100%'}}>
        <div className='view'>
          <AutoSizer key={IDTracker.next()}>
            {({ height, width }) => (
              <Table width={width} height={height} headerHeight={35}
                rowHeight={rowHeight} rowCount={rowDataHolder.length} rowGetter={({ index }) => rowDataHolder[index]}
                rowClassName={this.rowClassName} noRowsRenderer={this.noRowsRenderer}>
                {columns}
              </Table>
            )}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export interface UIWidgetProps {
  label: string,
  node: TreeNode,
  isLeafNode: boolean,
  onExpandNode: (node: TreeNode) => void,
  onSelectNode: (node: TreeNode) => void,
  config: any
}
type UIWidgetState = { }
class UIWidget extends Component<UIWidgetProps, UIWidgetState> {
  render() {
    let { label, node, isLeafNode, onSelectNode, onExpandNode, config } = this.props;
    let nodeConfig = config.node;
    let uiNodeInfo = null;
    if (isLeafNode) {
      uiNodeInfo = (
        <div className='btn-tree-widget'>
          <Button outline onClick={() => onSelectNode(node)}>
            {label}
          </Button>
          <div className='d-flex'>
            <Button outline onClick={() => onSelectNode(node)}>
              {nodeConfig.format(node.userData[nodeConfig.name])}
            </Button>
            <Button outline style={{width: '25px', borderLeft: 'none'}} onClick={() => nodeConfig.onNodeInfo(node)}>
              <span className={`${ICONS.editor.info}`}/>
            </Button>
          </div>
        </div>
      )
    } else {
      uiNodeInfo = (
        <div className='btn-tree-widget'>
          <Button className='btn-primary h-100' onClick={() => onExpandNode(node)}>
            <div>{label}</div>
          </Button>
        </div>
      )
    }
    return uiNodeInfo;
  }
}

class MUIWidget extends UIWidget {
  render() {
    let { label, node, isLeafNode, onSelectNode, onExpandNode, config } = this.props;
    let nodeConfig = config.node;
    let uiNodeInfo = null;
    if (isLeafNode) {
      uiNodeInfo = (
        <div className='btn-tree-widget'>
          <Button outline onClick={() => onSelectNode(node)}>
            {label}
          </Button>
          <div className='d-flex'>
            <Button outline onClick={() => onSelectNode(node)}>
              {nodeConfig.format(node.userData[nodeConfig.name])}
            </Button>
          </div>
        </div>
      )
    } else {
      uiNodeInfo = (
        <div className='btn-tree-widget'>
          <Button className='btn-primary h-100' onClick={() => onExpandNode(node)}>
            <div>{label}</div>
          </Button>
        </div>
      )
    }
    return uiNodeInfo;
  }
}

interface TreeWidgetProps extends BreadcumbsPageProps {
  pageContext: any
}
class TreeWidget extends BreadcumbsPage<TreeWidgetProps> {
  componentWillMount() {
    this.initUI(this.props);
  }

  componentWillReceiveProps(nextProps: any) {
    this.initUI(nextProps);
  }

  initUI(props: any) {
    let {pageContext} = props;
    let nodes = pageContext.nodes;
    let uiNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      uiNodes.push(pageContext.nodeRender(nodes[i]))
    }
    let html = (
      <div className='ui-tree-widget'>
        {uiNodes}
      </div>
    )
    let label = pageContext.label;
    this.push(`widget-panel-${label}`, label, html);
  }
}

export class UIVTreeWidget extends VTree {
  treeWigdetEle: any;

  nodeRender(node: TreeNode) {
    let { model, config } = this.props;
    return (
      <UIWidget key={`node-${node.name}`} label={node.label} node={node} isLeafNode={model.isLeafNode(node)} config={config}
        onExpandNode={(node) => this.onExpandNode(node)}
        onSelectNode={(node) => this.onSelectNode(node)} />
    );
  }

  onExpandNode(node: TreeNode) {
    let thisUI = this;
    let callback = (node: TreeNode) => {
      let children = node.getChildren();
      let uiChildren = [];
      for (let i = 0; i < children.length; i++) {
        uiChildren.push(thisUI.nodeRender(children[i]));
      }
      let html = (
        <div className='ui-tree-widget'> {uiChildren} </div>
      )
      thisUI.treeWigdetEle.push(`node-${node.name}`, node.label, html);
    };
    this.props.model.onExpand(node, callback);
  }

  render() {
    let { config } = this.props;
    let dataHolder = this.initDataRowHolder();

    let nodes : Array<TreeNode> = [];
    for (let i = 0; i < dataHolder.length; i++) {
      nodes.push(dataHolder[i].node);
    }
    let pageContext = {
      label: config.label,
      nodeRender: (node: TreeNode) => this.nodeRender(node),
      nodes: nodes
    }
    let html = (<div> </div>);
    if (nodes.length > 0) {
      html = (
        <TreeWidget pageContext={pageContext} scroll={false} ref={(instance) => {this.treeWigdetEle = instance;}}/>
      )
    }
    return html;
  }
}

export class MUIVTreeWidget extends UIVTreeWidget {
  nodeRender(node: TreeNode) {
    let { model, config } = this.props;
    return (
      <MUIWidget key={`node-${node.name}`} label={node.label} node={node} isLeafNode={model.isLeafNode(node)} config={config}
        onExpandNode={(node) => this.onExpandNode(node)}
        onSelectNode={(node) => this.onSelectNode(node)} />
    );
  }
}
