import React from "react";
import {Component} from "react";

import ReactDOM from "react-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { IDTracker } from 'util/common';
import {ICONS} from './icons';
import {NotificationMessage} from 'widget/util'

import { ButtonActionModel, GroupButtonActionModel } from './element';

import './stylesheet.scss';

function mergeCssClass(c1?: string, c2?: string) {
  if(!c1) return c2;
  if(!c2) return c1;
  return c1 + ' ' + c2;
}

type ELEProps = { mobile?: boolean, children?: any, className?: string, style?: any };

type ContainerProps = ELEProps & { fluid?: boolean };
export class Container extends Component<ContainerProps, {}> {
  render() {
    let {className, fluid, children} = this.props;
    let classes = mergeCssClass('container', className);
    if(fluid) classes = mergeCssClass('container-fluid', className);
    let html = ( <div className={classes} style={this.props.style}> {children} </div> );
    return html;
  }
}

export class Row extends Component<ELEProps, {}> {
  render() {
    let cssClass = mergeCssClass('row', this.props.className);
    let html = (
      <div className={cssClass} style={this.props.style}>
        {this.props.children}
      </div>
    );
    return html;
  }
}

type ColProps = ELEProps & {
  type?: 'sm'|'md'|'lg'|'xl', span: number
};
export class Col extends Component<ColProps, {}> {
  render() {
    let {style, type, span} = this.props;
    if(!type) type = 'md';
    let cssClass = mergeCssClass('col-' + type + '-' + span, this.props.className);
    return ( <div className={cssClass} style={style}> {this.props.children} </div> );
  }
}

/*Form Layout*/
export class Form extends Component<ELEProps, {}> {
  render() {
    let { className, style } = this.props;
    let classes = 'form';
    if(className) classes = `form ${className}`;
    return (<div className={classes} style={style} >{this.props.children} </div>);
  }
}

export interface FormContainerProps {
  className?: string, fluid?: boolean, children: any
};
export interface FormContainerState { };
export class FormContainer extends Component<FormContainerProps, FormContainerState> {
  render() {
    let {children, fluid, className} = this.props;
    let html = (
      <Form>
        <Container fluid={fluid} className={className}>
          {children}
        </Container>
      </Form>
    );
    return html;
  }
}

interface FormGroupProps extends ELEProps { 
  inline?: boolean 
};
type FormGroupState = { };
export class FormGroup extends Component<FormGroupProps, FormGroupState> {
  render() {
    let {children, style, className, inline} = this.props;
    let classes = mergeCssClass('form-group', className);
    if(inline) classes = mergeCssClass(classes, ' form-group-inline');
    return (<div className={classes} style={style}> {children} </div>);
  }
}

interface FormGroupColProps {
  children: any, inline?: boolean,
  className?: string,
  type?: 'sm'|'md'|'lg'|'xl', span: number
};
type FormGroupColState = { };
export class FormGroupCol extends Component<FormGroupColProps, FormGroupColState> {
  render() {
    let {children, type, span, inline, className} = this.props;
    let html = (
      <Col type={type} span={span} >
        <FormGroup className={className} inline={inline}>{children}</FormGroup>
      </Col>
    );
    return html;
  }
}

export class WS extends Component<ELEProps> {
  key: string;
  constructor(props: ELEProps) {
    super(props);
    this.key = `ws-${IDTracker.next()}`
  }

  render() {
    const { style,className,  children, mobile } = this.props;
    let wsClassName = 'workspace';
    if(mobile) wsClassName = 'workspace m-workspace';
    return ( <div key={this.key} className={mergeCssClass(wsClassName, className)} style={style}>{children}</div> );
  }
}

export class WSHeader extends Component<ELEProps> {
  render() {
    const { style,className,  children } = this.props;
    return ( <div className={mergeCssClass('header', className)} style={style}>{children}</div> );
  }
}

export class WSBody extends Component<ELEProps> {
  render() {
    const { style,className,  children } = this.props;
    return ( <div className={mergeCssClass('body', className)} style={style}>{children}</div> );
  }
}

export class WSFooter extends Component<ELEProps> {
  render() {
    const { style,className,  children } = this.props;
    return ( <div className={mergeCssClass('footer', className)} style={style}>{children}</div> );
  }
}

export class Panel extends Component<ELEProps> {
  render() {
    const { style,className,  children } = this.props;
    return ( <div className={mergeCssClass('ui-panel', className)} style={style}>{children}</div> );
  }
}

export class PanelHeader extends Component<ELEProps> {
  render() {
    const { style,className,  children } = this.props;
    return ( <div className={mergeCssClass('header', className)} style={style}>{children}</div> );
  }
}

type PanelBodyProps = ELEProps & { };
export class PanelBody extends Component<PanelBodyProps> {
  render() {
    const { style, className,  children } = this.props;
    return ( <div className={mergeCssClass('body', className)} style={style}>{children}</div> );
  }
}


export class PanelFooter extends Component<ELEProps> {
  render() {
    const { style,className,  children } = this.props;
    if(!children || !children.length) return null;
    return ( <div className={mergeCssClass('footer', className)} style={style}>{children}</div> );
  }
}

type FlexBoxProps = ELEProps & { };
export class FlexBox extends Component<FlexBoxProps> {
  render() {
    const { style, className,  children } = this.props;
    return ( <div className={mergeCssClass('ui-flex-box', className)} style={style}>{children}</div> );
  }
}

export interface Breadcumbs {
  push: (name: string, label: string, ui: any) => void;
  onBack: () => void;
}
export interface BreadcumbsPageProps extends ELEProps { scroll?: boolean }
export interface BreadcumbsPageState { path: Array<any> }
export class BreadcumbsPage<T extends BreadcumbsPageProps> extends Component<T, BreadcumbsPageState> implements Breadcumbs {
  dropdownActions?: Array<GroupButtonActionModel>;
  actions?: Array<ButtonActionModel> ;

  constructor(props: any) {
    super(props);
    this.onSelectPath.bind(this);
    this.state = { path:[] };
  }

  clear() { this.state.path.splice(0, this.state.path.length); }

  isScrollable() { return false; }

  push(name: string, label: string, ui: any) {
    let {path} = this.state;
    path.push({name: name, label: label, element: ui});
    this.forceUpdate();
  }

  add(name: string, label: string, ui: any) { this.push(name, label, ui); }

  onSelectPath(name: string) {
    const { path } = this.state;
    let newPath = [];
    for(let i = 0; i < path.length; i++) {
      newPath.push(path[i]);
      if(path[i].name === name) break;
    }
    this.setState({path: newPath});
  }

  onBack() {
    const { path } = this.state;
    if(path.length === 1) return;
    path.pop();
    this.setState({path: path});
  }


  renderActions() {
    if(!this.actions) return null;
    let actions: Array<ButtonActionModel> = this.actions;
    let actionBtns = [];
    for (let i = 0; i < actions.length; i++) {
      let action : ButtonActionModel = actions[i];
      if(!action) continue;
      actionBtns.push(
        <Button key={i} className='mx-1' outline size="sm" onClick={() => action.onSelect(action) }>{action.label}</Button>
      );
    }
    return actionBtns;
  }

  renderDropdownActions() {
    if(!this.dropdownActions) return null;
    let dropdowns = this.dropdownActions;
    let dropdownEles = [];
    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      let actions: Array<ButtonActionModel> = dropdown.actions;
      let itemEles = [];
      for (let j = 0; j < actions.length; j++) {
        let action: ButtonActionModel = actions[j];
        itemEles.push(<DropdownItem key={j} onClick={() => action.onSelect(action)}>{action.label}</DropdownItem>);
      }
      dropdownEles.push (
        <UncontrolledDropdown key={i}>
          <DropdownToggle nav caret className='px-2'>{ dropdown.label }</DropdownToggle>
          <DropdownMenu right>{itemEles}</DropdownMenu>
        </UncontrolledDropdown>
      );
    }
    return dropdownEles;
  }

  createBreadcumbPaths() {
    const { path } = this.state;
    let breadcumbPaths = [];
    for(let i = 0; i < path.length; i++) {
      let selPath = path[i];
      if(i > 0) {
        breadcumbPaths.push(<span key={`icon-${i}`} className={`${ICONS.webapp.caretRight}`}/>);
      }
      if(i === path.length - 1) {
        breadcumbPaths.push((<Button color='info' key={i} disabled>{selPath.label}</Button>));
      } else {
        let link = ( <Button key={i} color='info' onClick={() => this.onSelectPath(selPath.name)}>{selPath.label}</Button>);
        breadcumbPaths.push(link);
      }
    }

    return breadcumbPaths;
  }

  createBreadcumbContents() {
    const { path } = this.state;
    let breadcumContents = [];
    for(let i = 0; i < path.length; i++) {
      let selPath = path[i];
      if(i === path.length - 1) {
        breadcumContents.push( <div key={i} className='content'>{selPath.element}</div>)
      } else {
        breadcumContents.push( <div key={i} style={{display: 'none'}} className='content'>{selPath.element}</div>)
      }
    }
    return breadcumContents;
  }

  render() {
    let { mobile } = this.props;
    let html = (
      <WS mobile={ mobile }>
        <WSHeader className='d-flex justify-content-between'>
          <div className='breadcumbs'> {this.createBreadcumbPaths()} </div>
          <div className='d-flex'>
            <div className='px-2'>{this.renderActions()}</div>
            <div className='px-2 d-flex'>{this.renderDropdownActions()}</div>
          </div>
        </WSHeader>

        <WSBody> {this.createBreadcumbContents()} </WSBody>
      </WS>
    );
    return html;
  }
}

export interface TabModel {
  name: string, label: string, active?: boolean, closable?: boolean, ui: any
}
type TabProps = {
  name: string, label: string, style?: any, active?: boolean, children: any
}
type TabState = {}
export class Tab extends Component<TabProps, TabState> {
  render() {
    let html = (
      <div className='tab' style={this.props.style}>
        {this.props.children}
      </div>
    );
    return html;
  }
}

interface TabPaneProps extends ELEProps {
  lookAndFeel?: 'outline'
  onCreateTab?: () => TabModel,
  customActions?: Array<ButtonActionModel>
}
type TabPaneState = {selectTab: string}
export class TabPane extends Component<TabPaneProps, TabPaneState> {
  dynamicTabs: Array<any>;

  constructor(props: TabPaneProps) {
    super(props);
    this.state = { selectTab: '' };
    this.dynamicTabs = [];
  }

  onSelectTab(tabName: string) {
    this.setState({ selectTab: tabName });
  }

  onClose(tabName: string) {
    let tabs = this.dynamicTabs;
    for(let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      if(tabName === tab.name) {
        tabs.splice(i, 1);
        let { children } = this.props;
        if(children) {
          let selChild = children;
          if(children.length) selChild = children[0];
          this.setState({ selectTab: selChild.props.name });
        } else if(tabs.length > 0) {
          this.setState({ selectTab: tabs[0].name });
        }
        break;
      }
    }
  }

  onAdd() {
    const { onCreateTab } = this.props;
    if(!onCreateTab) return;
    this.addTab(onCreateTab());
  }

  addTab(tab: TabModel) {
    this.dynamicTabs.push(tab);
    this.setState({ selectTab: tab.name });
  }

  render() {
    let { children, style, lookAndFeel, className, onCreateTab, customActions } = this.props;
    let selectTabName = this.state.selectTab;
    let SelectedTab = null;
    let tabHeaders: Array<any> = [];
    if(children) {
      React.Children.map(children, (tab, i) => {
        const { name, label, active } = tab.props;
        let tabStyle = 'tab';
        if((!selectTabName && active) || name ==  selectTabName) {
          SelectedTab = tab;
          tabStyle = 'tab-active';
        }
        let tabHeader = (
          <div key={`stab-${i}`} className={ tabStyle }>
            <Button color='link' onClick={ this.onSelectTab.bind(this, name) }>{label}</Button>
          </div>
        );
        tabHeaders.push(tabHeader);
      });
    }

    for(let i = 0; i < this.dynamicTabs.length; i++) {
      let tab = this.dynamicTabs[i];
      let tabStyle = 'tab';
      if(tab.name === selectTabName) {
        SelectedTab = tab.ui;
        tabStyle = 'tab-active';
      }
      let closeBtn = null;
      if(tab.closable) {
        closeBtn = (<Button className='ml-2' color='link' onClick={ () => this.onClose(tab.name) }>x</Button> );
      }
      let tabHeader = (
        <div key={`dtab-${i}`} className={ tabStyle }>
          <Button color='link' onClick={ this.onSelectTab.bind(this, tab.name) }>{tab.label}</Button>
          {closeBtn}
        </div>
      );
      tabHeaders.push(tabHeader);
    }

    let addTab = null;
    if(onCreateTab) {
      addTab = (
        <div key={'add'} className='tab'>
          <Button color='link' onClick={() => this.onAdd() }>+</Button>
        </div>
      );
    }

    let actionHtml = null;
    if(customActions) {
      let buttons = [];
      for(let i = 0; i < customActions.length; i++) {
        let action = customActions[i];
        let color = action.color ? action.color : 'primary';
        let iconEle = action.icon ? <span className={action.icon}/> : null
        buttons.push(
          <Button key={i} className='d-block my-1' color={color} outline={action.outline} size={action.size}
            onClick={() => action.onSelect(action, this)}>{iconEle}{action.label}</Button>
        );
      }
      actionHtml = (<div className='d-flex'>{buttons}</div>);
    }
    let cssClass = 'ui-tabpane';
    if (lookAndFeel) cssClass = `${cssClass} ui-tabpane-${lookAndFeel} `
    if (className) cssClass = `${cssClass} ${className} `

    let html = (
      <div style={style} className={cssClass}>
        <div className='header'>
          <div className='tabs'> { tabHeaders } { addTab } </div>
          {actionHtml}
        </div>
        <div className='content'> { SelectedTab } </div>
      </div>
    );
    return html;
  }
}

export interface ColumnProps extends ELEProps {
  width?: any, height?: any, growth?: number,
};
export class Column extends Component<ColumnProps> {
  render() {
    const { children, width, height, growth, style, className } = this.props;
    let computedStyle = {
      width: width ? width : 'auto',
      height: height ? height : 'auto',
      flexGrow: growth ? growth : 'initial',
      ...style
    };
    let cssClasses = mergeCssClass('column', className);
    cssClasses     = mergeCssClass('full-height-box', className);
    let html = ( <div className={cssClasses} style={computedStyle}> {children} </div>);
    return html;
  }
}

export interface ColumnLayoutProps extends ELEProps  { };
export class ColumnLayout extends Component<ColumnLayoutProps> {
  render() {
    const { style, className, children } = this.props;
    let html = (
      <div style={style} className={mergeCssClass('column-layout', className)}>
        {children}
      </div>
    );
    return html;
  }
}


export interface SectionProps extends ELEProps {
  title: string,
  collapse?:boolean,
  actions?: Array<{label: string, onClick: () => void}>;
}
type SectionState = {collapse?: boolean}
export class Section extends React.Component<SectionProps, SectionState> {
  componentWillMount() {
    this.setState({ collapse: this.props.collapse });
  }

  onToggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    const { className, style, title, actions, children } = this.props;
    let contentStyle : any = { };
    if(this.state.collapse) contentStyle.display = 'none';

    let rightNav = null;
    if(actions) {
      let buttons = [];
      for(let i = 0; i < actions.length; i++) {
        let action = actions[i];
        buttons.push((
          <li key={i} className="nav-item mr-1">
            <Button color='link' key={i} onClick={(_evt: any) => action.onClick()}>{action.label}</Button>
          </li>
        ));
      }
      rightNav = ( <ul className="nav justify-content-end"> {buttons} </ul> );
    }

    let html = (
      <div className={mergeCssClass('ui-section', className)} style={style}>
        <div className="navbar">
          <div>
            <Button color='info' onClick={() => this.onToggle() }>
              <span className={`${(this.state.collapse) ? `${ICONS.webapp.caretRight}` : `${ICONS.webapp.caretDown}`} mr-1`}/>
              {title}
            </Button>
          </div>
          {rightNav}
        </div>
        <div className='body' style={contentStyle}> {children} </div>
      </div>
    );
    return html;
  }
}

export interface UINotificationMessageProps extends ELEProps {
  msg: NotificationMessage
}
export class UINotificationMessage extends React.Component<UINotificationMessageProps> {
  render() {
    const { msg, className, style } = this.props;

    let html = (
      <div className={className} style={style}>
        <h3 className='border-bottom'>{msg.label}</h3>
        <div>{msg.detail}</div>
      </div>
    );
    return html;
  }
}

export class DialogContext {
  dialog?: Dialog ;

  getDialog() { 
    if(!this.dialog) {
      throw new Error("No dialog is set");
    }
    return this.dialog ;
  }
  setDialog(dialog: Dialog) { this.dialog = dialog; }
}

type DialogProps = { 
  parentDomId: string,
  title: string, content: any,
  size?: 'xs'|'sm'|'md'|'lg'|'xl',
  context?: DialogContext,
  actions?: Array<ButtonActionModel>,
  onClose?: (uiDialog: Dialog) => void,
};
type DialogState = { show: boolean };
export class Dialog extends React.Component<DialogProps, DialogState> {
  constructor(props: DialogProps) {
    super(props);
    let {context} = props;
    if(context) context.setDialog(this);
    this.state = { show: true };
  }

  hide() {
    let {parentDomId} = this.props;
    let parentDomEle = document.getElementById(parentDomId);
    if(parentDomEle) {
      ReactDOM.unmountComponentAtNode(parentDomEle);
      parentDomEle.remove();
    }
  }

  doClose() {
    const {onClose} = this.props;
    if(onClose) onClose(this);
    this.hide();
  }

  render() {
    let {title, content, size, actions, onClose} = this.props;
    if(!size) size = 'md';
    let actionEles = [];
    if(actions) {
      actionEles = [] ;
      for(let i = 0; i < actions.length; i++) {
        let action = actions[i];
        let color = 'primary';
        if(action.color) color = action.color;
        actionEles.push(
          <Button key={i} className='mx-1' color={color} outline={action.outline} 
            onClick={() => action.onSelect(action, {uiDialog: this})}>{action.label}</Button>
        );
      }
    } 
    if(onClose) {
      actionEles.push( <Button key={'close'} className='mx-1' onClick={() => this.doClose()}>{'Close'}</Button> );
    }
    let Footer = null;
    if(actionEles.length > 0) {
      Footer = (
        <ModalFooter>
          <div className='d-flex flex-row-reverse'> {actionEles} </div>
        </ModalFooter>
      );
    }

    let html = (
      <Modal className='ui-dialog' backdrop={true} 
        backdropTransition={{ timeout: 50, appear: false, exit: false }}
        modalTransition={{ timeout: 50, appear: false, exit: false }} 
        isOpen={this.state.show} size={size} toggle={() => this.hide()}>
        <ModalHeader toggle={() => this.hide()}> {title} </ModalHeader>
        <ModalBody> {content} </ModalBody>
        {Footer}
      </Modal>
    );
    return html;
  }
}

export function showDialog(title: string, size: 'xs'|'sm'|'md'|'lg'|'xl', content: any, ctx?: DialogContext) {
  let parentDomId = `uidialog_${IDTracker.next()}`;
  let uiDialog = (<Dialog parentDomId={parentDomId} title={title} size={size} content={content} context={ctx} />);

  var dialogDiv = document.createElement("div");
  dialogDiv.setAttribute("id", parentDomId);
  let appDialogDiv = document.getElementById('app-dialog'); 
  if(appDialogDiv) {
    appDialogDiv.appendChild(dialogDiv);
    ReactDOM.render(uiDialog, dialogDiv);
  }
}

export function showNotification(type: 'success' | 'info' | 'warning' | 'danger', label: string, detail?: string | null, cause?: any) {
  let stacktrace = '';
  if (cause) stacktrace = JSON.stringify(cause, null, 2);
  let msg: NotificationMessage = { type: type, label: label, detail: detail, stacktrace: stacktrace };
  let ui  = (<UINotificationMessage msg={msg} />);
  let size : 'sm' | 'md' = 'sm';
  if(cause) size = 'md';
  showDialog(label, size, ui) ;
}