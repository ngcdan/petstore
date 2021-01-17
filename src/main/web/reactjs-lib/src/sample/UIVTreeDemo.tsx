import React from "react";
import { Component } from "react";

import {Button} from 'reactstrap';
import { TreeNode, TreeModel, VTree, VTreeSimpleTable } from "../widget/list/vtree";


class DemoTreeModel extends TreeModel {
  constructor(showRoot: boolean) {
    super(showRoot);
    let root = new TreeNode(null, '', '', 'Root', null, false);
    this.setRoot(root);

    let hktNode = root.addChild('hkt', 'HKT', null, false);
    hktNode.addChild('employees', 'Employees', null, true);

    root.addChild('erp', 'ERP', null, true);
  }

  loadChildren(node: TreeNode, postLoadCallback?:(node: TreeNode) => void): any {
    let path = node.path;
    let pathSeg = path.split('/');
    if(pathSeg.length > 5) {
    } else {
      for(let i = 0; i < 3; i++) {
        let userData = { label: "Userdata " + i, field: 'test field' }
        this.addChild(node, 'node-' + i, 'node ' + i, userData);
      }
    }
    node.setLoadedChildren();
    if(postLoadCallback) postLoadCallback(node);
  }
}

const TREE_TABLE_CONFIG = {
  columns: [
    { name: 'label', label: 'Label', visible: true, width: 200 },
    { name: 'field', label: 'Field', visible: true, width: 200 },
  ]
}
type UITreeDemoProps = {}
type UITreeDemoState = {model: DemoTreeModel}
export default class UITreeDemo extends Component<UITreeDemoProps, UITreeDemoState> {
  componentWillMount() {
    let model = new DemoTreeModel(true);
    this.setState ({model: model});
  }

  onToggleRoot() {
    let {model} = this.state;
    model.showRoot = !model.showRoot;
    this.forceUpdate();
  }

  onSelectNode(node: TreeNode) {
    console.log("on select node");
    console.log(node);
  }

  render() {
    let {model} = this.state;
    var html = (
      <div>
        <Button size='sm' color='primary' onClick={() => this.onToggleRoot()}>Show Root</Button>

        <div className='d-flex h-100'>
          <div style={{padding: '5px', width: "50%"}}>
            <h4 className='border-bottom'>Tree Node</h4>
            <div style={{height: 600 }}>
              <VTree className='h-100' config={{}}  model={model} / >
            </div>
          </div>

          <div style={{padding: '5px', height: 600, width: "50%"}}>
            <h4 className='border-bottom'>Tree Table</h4>
            <VTreeSimpleTable model={model} onSelectNode={(node)=>this.onSelectNode(node)} config={TREE_TABLE_CONFIG}/ >
          </div>
        </div>
      </div>
    );
    return html;
  }
}
