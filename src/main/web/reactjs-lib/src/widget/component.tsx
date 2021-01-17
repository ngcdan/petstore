import * as React from "react";
import { Button, Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';

import { Section } from './layout';
import { ListModel } from "./list/ListModel";
import { VTable, VTableConfig } from './list';

export interface ArrayEditorProps {
  beans: Array<any>,
  dialogEditor: boolean,
  style?: any,
  className?: string,
  editorTitle: string,
  collapseEditor?: boolean,
  closeOnLostFocus?: boolean,
  context?: any,
  onChange?: (beans: Array<any>) => void
}
interface ArrayEditorState {
  beans?: Array<any>, selectBean: any, dialogEditor: boolean, openDialog: boolean
}
class ArrayEditor<T extends ArrayEditorProps, S extends ArrayEditorState> extends React.Component<T, S> {

  createTableConfig(): any { throw new Error('This method method need to be implemented'); }

  renderBeanEditor() { throw new Error('This method method need to be implemented'); }

  isEditable() { return true; }

  createNewBean() { return {}; }

  getModifiedBean() {
    const { selectBean } = this.state;
    return selectBean.modified;
  }

  setModifiedBean(modifiedBean: any) {
    const { selectBean } = this.state;
    selectBean.modified = modifiedBean;
  }

  onSelect(_row: number, bean: any) {
    let newState = {
      selectBean: { origin: bean, modified: Object.assign({}, bean), edit: true, },
      openDialog: true
    };
    this.setState(newState);
  }

  onNewAction() {
    let newBean = this.createNewBean();
    let newState = {
      selectBean: { origin: newBean, modified: Object.assign({}, newBean), edit: false },
      openDialog: !this.state.openDialog
    };
    this.setState(newState);
  }

  onSaveAction() { throw new Error('This method method need to be implemented'); }

  hideDialog() { this.setState({ openDialog: false }); }

  renderDialogEditor() {
    let { openDialog, selectBean } = this.state;
    let { editorTitle, closeOnLostFocus } = this.props;
    let dialogTitle = selectBean.edit ? `Edit ${editorTitle}` : `Add ${editorTitle}`;
    let closeOnLostFocusHandler = null;
    if (closeOnLostFocus) {
      closeOnLostFocusHandler = () => this.hideDialog();
    } else {
      closeOnLostFocusHandler = () => { };
    }
    let editorHtml = (
      <Modal size={'md'}
        backdropTransition={{ timeout: 50, appear: false, exit: false }}
        modalTransition={{ timeout: 50, appear: false, exit: false }}
        isOpen={openDialog} toggle={closeOnLostFocusHandler}>
        <ModalHeader toggle={() => this.hideDialog()}>{dialogTitle}</ModalHeader>
        <ModalBody>
          {this.renderBeanEditor()}
          {this.renderFooterAction(selectBean)}
        </ModalBody>
      </Modal>
    );
    return editorHtml;
  }

  renderFooterAction(selectBean: any) {
    if (!this.isEditable()) return null;
    let html = (
      <div className='d-flex justify-content-end mt-2'>
        <Button size='sm' onClick={() => this.onSaveAction()}>{selectBean.edit ? 'Save' : 'Add'}</Button>
      </div>
    );
    return html;
  }

  renderEditor() {
    let { dialogEditor, selectBean } = this.state;
    let { editorTitle } = this.props;
    let editorHtml = null;
    if (dialogEditor) {
      editorHtml = this.renderDialogEditor();
    } else {
      let { collapseEditor } = this.props;
      collapseEditor = collapseEditor === null ? false : collapseEditor;
      editorHtml = (
        <Section title={editorTitle} collapse={collapseEditor}>
          { this.renderBeanEditor()}
          {this.renderFooterAction(selectBean)}
        </Section>
      )
    }
    return editorHtml;
  }
}

export interface BeanListEditorProps extends ArrayEditorProps { }
interface ListEditorState extends ArrayEditorState { }
class ListEditor<T extends BeanListEditorProps> extends ArrayEditor<T, ListEditorState> {
  tableModel: ListModel;
  constructor(props: T) {
    super(props);
    let { beans, dialogEditor } = props;
    this.tableModel = new ListModel(500, beans);
    let bean = {};
    this.state = {
      dialogEditor: dialogEditor,
      openDialog: false,
      selectBean: { origin: {}, modified: Object.assign({}, bean) }
    };
  }

  getSelectedBeans(): Array<any> {
    if (!this.tableModel) return [];
    return this.tableModel.getSelectedRecords();
  }

  onSaveAction() {
    const { selectBean } = this.state;
    selectBean.origin = Object.assign(selectBean.origin, selectBean.modified);
    if (!selectBean.edit) {
      this.tableModel.addRecord(selectBean.origin);
    }
    this.onNewAction();
    const { onChange } = this.props;
    if (onChange) onChange(this.tableModel.getRecords());
  }

  onDeleteAction() {
    this.tableModel.removeSelectedRows();
    this.forceUpdate();
  }

  onChangeState(newState: 'ACTIVE' | 'ARCHIVED') {
    let selRecords = this.tableModel.getSelectedRecords();
    for (let i = 0; i < selRecords.length; i++) {
      let record = selRecords[i];
      record.entityState = newState;
    }
    this.tableModel.refresh();
    this.forceUpdate();
  }
}

export class UIBeanGridTableEditor<T extends ArrayEditorProps> extends ListEditor<T> {
  config: VTableConfig;

  constructor(props: T) {
    super(props);
    this.config = this.createTableConfig();
  }

  render() {
    let { style, className } = this.props;
    let editorHtml = this.renderEditor();
    let html = (
      <div className='full-height-box'>
        <VTable className={className} style={style} context={{ uiParent: this }} config={this.config} model={this.tableModel} />
        {editorHtml}
      </div>
    );
    return html;
  }
}

export class UILazyLoad<P, S> extends React.Component<P, S> {
  loading: boolean = false;

  isLoading() { return this.loading; }

  markLoading(loading: boolean) {
    this.loading = loading;
  }

  renderLoading() {
    let html = (
      <div className='full-height-box'>
        <div className='mx-auto my-auto'>
          <Spinner color="primary" style={{ width: '5rem', height: '5rem' }} />
        </div>
      </div>
    );
    return html;
  }
}