import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { 
  DraggableProvided, DraggableStateSnapshot, DroppableProvided, 
  DroppableStateSnapshot, DraggableRubric 
} from 'react-beautiful-dnd';
import { List } from 'react-virtualized';

import './stylesheet.scss' ;

export interface DNDBoardColumnConfig { 
  name: string, label: string, width?: number,
  items: Array<any> 
}

export interface DNDBoardConfig {
  columns: Array<DNDBoardColumnConfig>;
  height?: number,
  columnWidth: number,
  itemHeight:  number,
  inColumn: (name: string, item: any, ctx?: any) => boolean ;
  onDrop:   (sourceCol: DNDBoardColumnConfig, descCol: DNDBoardColumnConfig, item: any, ctx?: any) => void ;
  getItemId: (item: any, columnName: string, index: number, ctx?: any) => any ;
  renderItem: (col: DNDBoardColumnConfig, item: any, ctx?: any) => any ;
  renderItemDetail: (col: DNDBoardColumnConfig, item: any, ctx?: any) => any ;
}

type DNDItemProps = { 
  context?: any, config: DNDBoardConfig, columnConfig: DNDBoardColumnConfig,  
  item: any, index: number
}
type DNDItemState = { }
class DNDItem extends Component<DNDItemProps, DNDItemState> {
  render() {
    let { context, config, columnConfig, item, index } = this.props;
    let commonStyle = { padding: 2, margin: "0 0 5px 0", height: config.itemHeight - 5 }
    let itemId = config.getItemId(item, columnConfig.name, index, context);
    let html = (
      <Draggable key={itemId} draggableId={itemId} index={index} >
        {(provided, _snapshot) => {
          return (
            <div
              className='dnd-item'
              ref={provided.innerRef} {...provided.draggableProps}
              style={{ ...commonStyle, userSelect: "none", ...provided.draggableProps.style }}>
              <div className='item' {...provided.dragHandleProps}>
                {config.renderItem(columnConfig, item, context)}
              </div>
              <div className='item-detail' >
                {config.renderItemDetail(columnConfig, item, context)}
              </div>
            </div>
          );
        }}
      </Draggable>
    );
    return html;
  }
}

type DNDColumnProps = { 
  context?: any, config: DNDBoardConfig, columnConfig: DNDBoardColumnConfig 
}
type DNDColumnState = { }
class DNDColumn extends Component<DNDColumnProps, DNDColumnState> {

  constructor(props: DNDColumnProps) {
    super(props);
    this.rowRenderer = this.rowRenderer.bind(this);
    this.renderClone = this.renderClone.bind(this);
  }

  rowRenderer(_ref: any) {
    let { key, index, style } = _ref;
    const { context, config, columnConfig } = this.props;
    let items = columnConfig.items;
    let item = items[index];
    return (
      <div key={key} style={style}>
        <DNDItem key={index} context={context} config={config} columnConfig={columnConfig} item={item} index={index} />
      </div>
    );
  }

  setRef(ref: any, droppableProvided: DroppableProvided) {
    // react-virtualized has no way to get the list's ref that I can so
    // So we use the `ReactDOM.findDOMNode(ref)` escape hatch to get the ref
    if (ref) {
      // eslint-disable-next-line react/no-find-dom-node
      const whatHasMyLifeComeTo = ReactDOM.findDOMNode(ref);
      if (whatHasMyLifeComeTo instanceof HTMLElement) {
        droppableProvided.innerRef(whatHasMyLifeComeTo);
      }
    }
  }

  renderClone(provided: DraggableProvided, _snapshot: DraggableStateSnapshot, rubric: DraggableRubric) {
    let {context, config, columnConfig} = this.props;
    let items = columnConfig.items;
    let item = items[rubric.source.index];
    let html = (
      <div {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className='border' style={{ height: config.itemHeight - 5}}>
          <div>
            {config.renderItem(columnConfig, item, context)}
          </div>
          {/*config.renderItemDetail(columnConfig, item, context)*/}
        </div>
      </div>
    );
    return html;
  }

  render() {
    let { config, columnConfig } = this.props;
    let items = columnConfig.items;
    let columnWidth = columnConfig.width ? columnConfig.width : config.columnWidth;
    let height = 500 ;
    if(config.height) height = config.height - 30 ;
    let html = (
      <div className='column' key={columnConfig.name} >
        <h3 className='header'>{columnConfig.label}</h3>
        <Droppable droppableId={columnConfig.name} mode="virtual" renderClone={this.renderClone}>
          {(droppableProvided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
            let className = snapshot.isDraggingOver ? 'list-body list-body-hightlight': 'list-body';
            return (
              <List
                className={className}
                ref={(ref) => { this.setRef(ref, droppableProvided) }}
                width={columnWidth} height={height} 
                rowCount={items.length} rowHeight={config.itemHeight}
                //autoHeight={true}
                overscanRowCount={5}
                rowRenderer={this.rowRenderer} 
              />
            );
          }}
        </Droppable>
      </div>
    );
    return html;
  }
}

type DNDBoardProps = { 
  context?: any, config: DNDBoardConfig, items: Array<any> 
}
type DNDBoardState = { 
  height: number, width: number
}
export class DNDBoard extends Component<DNDBoardProps, DNDBoardState> {
  divElement: HTMLElement | null = null;

  constructor(props: DNDBoardProps) {
    super(props);
    let {context, config, items} = this.props;
    let columns  = config.columns;
    for (let j = 0; j < columns.length; j++) {
      let column = columns[j];
      column.items = [];
    }
    for(let i = 0; i < items.length; i++) {
      let item = items[i];
      for(let j = 0; j < columns.length; j++) {
        let column = columns[j];
        if(config.inColumn(column.name, item, context)) {
          column.items.push(item);
          break;
        }
      }
    }
    this.state = { height: 500, width: 900 }
  }

  componentDidMount() {
    if (this.divElement) {
      const height = this.divElement.clientHeight;
      const width = this.divElement.clientWidth;
      this.setState({ height: height, width: width });
    }
  }

  
  findColumn(name: string) {
    const {config} = this.props;
    const columns  = config.columns;
    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      if(name == column.name) return column;
    }
    throw new Error("Cannot find the column " + name);
  }

  onDragEnd(result: any) {
    if (!result.destination) return;
    const { context, config } = this.props;
    const { source, destination } = result;

    let sourceColumn = this.findColumn(source.droppableId);
    let destColumn = this.findColumn(destination.droppableId);
    const sourceItems = sourceColumn.items;
    const [dragItem] = sourceItems.splice(source.index, 1);
    if (source.droppableId !== destination.droppableId) {
      const destItems = destColumn.items;
      destItems.splice(destination.index, 0, dragItem);
    } else {
      sourceItems.splice(destination.index, 0, dragItem);
    }
    config.onDrop(sourceColumn, destColumn, dragItem, context);
    this.forceUpdate();
  };

  render() {
    if(!this.divElement) {
      return (<div className='dnd-board' ref={ (divElement) => { this.divElement = divElement }}>Loading...</div>)
    }
    const {context, config} = this.props;
    const {width, height}   = this.state;
    if(config.columnWidth < 10) {
      config.columnWidth = (width / config.columns.length) - 10;
    }
    config.height = height;
    const columns  = config.columns;
    let columnEles = [];
    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      columnEles.push(<DNDColumn key={i} context={context} config={config} columnConfig={column} />);
    };
    return (
      <div className='dnd-board' ref={ (divElement) => { this.divElement = divElement } }>
        <DragDropContext onDragEnd={result => this.onDragEnd(result)} >
          { columnEles }
        </DragDropContext>
      </div>
    );
  }
}

const items = [
  { id: 'task-1', content: "First task",  state: "Requested" },
  { id: 'task-2', content: "Second task", state: "Todo" },
  { id: 'task-3', content: "Third task",  state: "Requested" },
  { id: 'task-4', content: "Fourth task", state: "Requested" },
  { id: 'task-5', content: "Fifth task",  state: "InProgress" },
  { id: 'random-task', content: "Random",      state: "Requested" },
  { id: 'random-task-1', content: "Random",      state: "Requested" },
  { id: 'random-task-2', content: "Random",      state: "Requested" },
  { id: 'random-task-3', content: "Random",      state: "Requested" },
  { id: 'random-task-5', content: "Random",      state: "Requested" },
  { id: 'random-task-6', content: "Random",      state: "Requested" },
  { id: 'random-task-7', content: "Random",      state: "Requested" },
  { id: 'random-task-8', content: "Random",      state: "Requested" },
  { id: 'random-task-9', content: "Random",      state: "Requested" },
];

function createConfig() {
  const config: DNDBoardConfig = {
    columns: [
      { name: "Requested", label: 'Requested', items: [] },
      { name: "Todo", label: 'To Do', items: [] },
      { name: "InProgress", label: 'In Progress', items: [] },
      { name: "Done", label: 'Done', items: [] }
    ],
    columnWidth: 0,
    itemHeight:  100,

    inColumn: (name: string, item: any) => {
      return name == item.state
    },

    onDrop: (sourceCol: DNDBoardColumnConfig, destCol: DNDBoardColumnConfig, item: any) => {
      item.state = destCol.name;
      console.log(`Drag Item ${item.id} from ${sourceCol} to ${destCol}`)
    },

    getItemId: (item: any, _columnName: string, _index: number) => { return item.id; },

    renderItem: (_col: DNDBoardColumnConfig,  item: any) => {
      return (<h5 className='border-bottom'>{item.id}</h5>);
    },

    renderItemDetail: (_col: DNDBoardColumnConfig,  item: any) => {
      return (<div>{item.content}</div>);
    }
  };
  return config;
}

export class DNDBoardDemo extends Component {
  render() {
    return (<DNDBoard config={createConfig()} items={items} />) 
  }
}