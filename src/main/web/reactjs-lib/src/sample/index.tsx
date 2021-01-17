import React from "react";
import {Component} from "react";

import * as server from '../server/index'
import * as app from '../app/index'
import * as reactstrap from 'reactstrap'

import { DNDBoardDemo } from 'widget/dnd/DNDBoard'
import UIBootstrapDemo from './UIBootstrapDemo'
import UIBeanEditor from './UIBeanEditor'

import UIDNDDemo from './UIDNDDemo'
import UIMultiVerticalListDND from './dnd/multiple-vertical-list'

import UIVList from './UIVList'
import UIVTreeDemo from './UIVTreeDemo'
import { VTableDemo } from './VTableDemo'
import { UIGraphicDemo } from './graphic/UIGraphicDemo'
import { UICalendarManagerDemo } from "./UICalendarManagerDemo";

import "./stylesheet.scss" ;

const DEFAULT_CATEGORY = 'graphic' ;
const DEFAULT_VIEW     = 'Calendar' ;

const DEMO_COMPONENTS : any = {
  'widget': {
    'label': 'Widget',
    'components': {
      'reactstrap': {
        'label': "Reactstrap",
        'description': "Reactstrap(Bootstrap) Demo",
        'view': (<UIBootstrapDemo/>)
      },
      'bean-editor': {
        'label': "Bean Editor",
        'description': "Demo Bean Editor",
        'view': (<UIBeanEditor/>)
      }
    }
  },

  'dnd': {
    'label': 'DND',
    'components': {
      'multi-list': {
        'label': "Multi Vertical List",
        'description': "DND Demo",
        'view': (<UIMultiVerticalListDND />)
      },
      'dnd': {
        'label': "DND Demo",
        'description': "DND Demo",
        'view': (<UIDNDDemo />)
      },
      'DNDBoardDemo': {
        'label': "DND Board Demo",
        'description': "DND Board Demo",
        'view': (<DNDBoardDemo />)
      }
    }
  },

  'graphic': {
    'label': 'Graphic',
    'components': {
      'UIGraphicDemo': {
        'label': "Graphic Demo",
        'description': "Graphic Demo",
        'view': (<UIGraphicDemo />)
      },
      'Calendar': {
        'label': "Calendar",
        'description': "Calendar Demo",
        'view': (<UICalendarManagerDemo />)
      }
    }
  },

  'list': {
    'label':    'List',
    'components': {
      'vlist': {
        'label': "VList",
        'description': "Demo VList",
        'view': (<div style={{height: '600px'}}> <UIVList/> </div>)
      },
      'vgridtable': {
        'label': "VTableDemo",
        'description': "Demo Grid Table",
        'view': ( <VTableDemo/> )
      },
      'vtree': {
        'label': "VTree Demo",
        'description': "Demo VTree",
        'view': (<div style={{height: '600px'}}> <UIVTreeDemo/> </div>)
      }
    }
  },
  'server': {
    'label': 'Server',
    'components': {
      'rest-ping': {
        'label': "Rest Ping",
        'description': "Demo UIRestPing Component",
        'view': (<server.rest.UIRestPing serverUrl={"http://localhost:7080/rest/v1.0.0"}  restPath={"/monitor/ping"} />)
      },
      'websocket-ping': {
        'label': "Websocket Echo",
        'description': "Demo UIWebsocketEcho Component",
        'view': (<server.websocket.UIWebsocketEcho serverUrl={"ws://localhost:7080"} wsPath={"/chat"} />)
      },
    }
  },
};

interface NavigationProps {
  appContext: app.AppContext
  event: null|app.AppEvent,
  broadcast: (event: app.AppEvent) => void,
}
export class Navigation extends Component<NavigationProps, {}> {
  render() {
    let { broadcast } = this.props;
    let sections = [];
    for(const categoryName in DEMO_COMPONENTS) {
      let category = DEMO_COMPONENTS[categoryName];
      let items = [];
      for(const name in category.components) {
        let entry = category.components[name];
        let onClickItem = () => {
          let params = {'category': categoryName, 'component': name};
          broadcast(new app.AppEvent('navigation', 'change-component', params, null));
        };
        let key = categoryName + '/' + name;
        items.push((
          <reactstrap.Button key={key} onClick={onClickItem} size='sm' color='link' className='d-block'>{entry.label}</reactstrap.Button>
        ));
      }
      sections.push((
        <div key={categoryName} className='mb-3'>
          <h5 className='border-bottom'>{category.label}</h5>
          {items}
        </div>
      ));
    }
    return (
      <div className='p-1 mt-2 border-right h-100'>
        {sections}
      </div>
    );
  }
}

interface WorkspaceProps {
  appContext: app.AppContext
  event: null|app.AppEvent,
  broadcast: (event: app.AppEvent) => void,
}
export class Workspace extends Component<WorkspaceProps, {}> {
  render() {
    let { event} = this.props;
    let selectDemoComponent = DEMO_COMPONENTS[DEFAULT_CATEGORY].components[DEFAULT_VIEW];
    if(event) {
      let params = event.data;
      selectDemoComponent = DEMO_COMPONENTS[params['category']].components[params['component']];
    }
    return (
      <div className='p-1 full-height-box'>
        <h1>{selectDemoComponent.description}</h1>
        {selectDemoComponent.view}
      </div>
    );
  }
}

interface UISampleProps { appContext: app.AppContext }
export class UISample extends Component<UISampleProps, {}> {
  render() {
    let { appContext } = this.props;
    let broadcast = (event: app.AppEvent) => {
      console.log('App: call broadcast event!!!')
      appContext.setEvent(event);
      this.forceUpdate();
    };
    let event = appContext.consumeEvent();
    let html = (
        <div className='d-flex flex-grow-1 w-100'>
          <div className='d-flex flex-column' style={{minWidth: 200, maxWidth: 200}}>
            <Navigation appContext={appContext} broadcast={broadcast} event={event}/>
          </div>
          <div className='d-flex flex-olumn flex-grow-1'>
            <Workspace  appContext={appContext} broadcast={broadcast} event={event} />
          </div>
        </div>
    );
    return html;
  }
}
