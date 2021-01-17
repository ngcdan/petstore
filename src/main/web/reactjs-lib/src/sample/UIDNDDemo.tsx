import React, { Component } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class DraggableId {
  type:   string;
  taskId: string ;
  itemId: string  = '';

  constructor(id: string) {
    let token = id.split(':');
    this.type = token[0];
    this.taskId = token[1];
    if(token.length === 3) {
      this.itemId = token[2];
    }
  }
}

const createTasks = (from: number, to: number) => {
  let tasks = [];
  for(let i = from; i < to; i++) {
    let task = {
      id:      `task-${i}`,
      content: `Task ${i}`,
      taskItems: [
        { id: `task-${i}-0`, taskId: `task-${i}`, content: `Task ${i} item 0` },
        { id: `task-${i}-1`, taskId: `task-${i}`, content: `Task ${i} item 1` }
      ]
    };
    tasks.push(task);
  }
  return tasks;
}

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

/** Moves an task from one list to another list. */
const move = (sourceList: any, destList: any, droppableSource: any, droppableDestination: any) => {
  console.log('droppableSource.index      = ' + droppableSource.index);
  console.log('droppableDestination.index = ' + droppableDestination.index);
  const [removed] = sourceList.splice(droppableSource.index, 1);
  destList.splice(droppableDestination.index, 0, removed);
  return { sourceList: sourceList, destList: destList };
};


const createDraggableStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the container1 look a bit nicer
  userSelect: 'none',
  //margin: `0 0 ${GRID}px 0`,

  // change background colour if dragging
  background: 'wheat',
  opacity: isDragging ? 0.75 : 1,
  // styles we need to apply on draggables
  ...draggableStyle
});

const createContainerStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightgray' : 'white' ,
  border: '1px solid lightgray',
  margin: '0px 2px',
  padding: '2px 2px',
  width: 200
});

type TaskItemProps = {taskItem: any, position: number}
type TaskItemState = {}
class TaskItem extends Component<TaskItemProps, TaskItemState> {
  render() {
    let {taskItem, position} = this.props;
    let html = (
        <Draggable key={taskItem.id} draggableId={`item:${taskItem.taskId}:${taskItem.id}`} index={position}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
              style={createDraggableStyle(snapshot.isDragging, provided.draggableProps.style )}>
              <div style={{marginTop: 1, paddingLeft: 5}}>
                <strong>Item {taskItem.id}</strong>
              </div>
            </div>
          )}
        </Draggable>
    );
    return html;
  }
}

export interface TaskProps {task: any, position: number}
export interface TaskState { showItems: boolean }
class Task extends Component<TaskProps, TaskState> {
  constructor(props: TaskProps) {
    super(props);
    this.state = {showItems: true};
  }

  componentWillReceiveProps(_nextProps: TaskProps) {
    this.setState({showItems: true});
  }

  onDragStart(draggableId: DraggableId) {
    if(draggableId.type === 'task') {
    console.log(`Task: onDragStart taskId = ${draggableId.taskId}`);
      this.setState({showItems: false});
    }
  }

  onDragEnd(taskId: string) {
    console.log(`Task: onDragEnd taskId = ${taskId}`);
    this.setState({showItems: true});
  }

  render() {
    let { task, position } = this.props;
    let { showItems } = this.state;
  //  console.log(`Task: render(...) task.id = ${task.id}`);
    let taskItemEles = [];
    let taskItems = task.taskItems;
    for(let i = 0; i < taskItems.length; i++) {
      let taskItem = taskItems[i];
      taskItemEles.push( <TaskItem key={i} taskItem={taskItem} position={position}/> );
    }

    let html = (
      <div style={{border: '2px solid tan', margin: '5px 0px', padding: '2px'}}>
        <Draggable key={task.id} draggableId={`task:${task.id}`} index={position}>
          {(provided: any, snapshot: any) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
              style={createDraggableStyle(snapshot.isDragging, provided.draggableProps.style)}>
              <div>
                <strong>Task {task.id}</strong>
              </div>
            </div>
          )}
        </Draggable>
        <div style={{marginTop: 3, display: showItems? 'block': 'none'}}>
          {taskItemEles}
        </div>
      </div>
    );
    return html;
  }
}


type TaskContainerProps = { id: string, tasks: Array<any> }
type TaskContainerState = {}
class TaskContainer extends Component<TaskContainerProps, TaskContainerState> {
  uiTaskMap: any;

  componentWillReceiveProps(_nextProps: TaskContainerProps) {
    this.uiTaskMap = {};
    // let {id} = nextProps;
    //console.log(`TaskContainer: componentWillReceiveProps(...) id = ${id}`);
  }

  onDragStart(draggableId: DraggableId) {
    let {id} = this.props;
    console.log(`TaskContainer: onDragStart container = ${id}, taskId = ${draggableId.taskId}`);
    this.uiTaskMap[draggableId.taskId].onDragStart(draggableId);
  }

  onDragEnd(draggableId: DraggableId) {
    let {id} = this.props;
    console.log(`TaskContainer: onDragEnd container = ${id}, taskId = ${draggableId.taskId}`);
    //this.uiTaskMap[draggableId.taskId].onDragEnd(draggableId);
    this.forceUpdate();
  }

  render() {
    let {id, tasks} = this.props;
    //console.log(`TaskContainer: render(...) id = ${id}`);
    this.uiTaskMap = {};
    let uiTasks: Array<any> = [];
    for(let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      let uiTask = (<Task ref={(instance) => {this.uiTaskMap[task.id] = instance}} key={i} task={task} position={i}/>);
      uiTasks.push( uiTask);
    }

    let html = (
      <div>
        <h3>{id}</h3>
        <Droppable droppableId={id}>
          {(provided: any, snapshot: any) => (
            <div ref={provided.innerRef} style={createContainerStyle(snapshot.isDraggingOver)}>
              {uiTasks}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
    return html;
  }
}

type DndDemoProps = { }
type DndDemoState = { }
class TaskBoard extends Component<DndDemoProps, DndDemoState> {
  containerMap: any;

  constructor(props: DndDemoProps) {
    super(props);
    this.containerMap = {
      container1: {tasks: createTasks( 0, 3) },
      container2: {tasks: createTasks(3, 6) },
      container3: {tasks: createTasks(6, 9) },
      container4: {tasks: createTasks(9, 12) }
    };
  }

  getTasksByContainerId = (id: string) => this.containerMap[id].tasks;

  onDragEnd = (result: any) => {
    const {source, destination } = result;
    // dropped outside the list
    if (!destination) return;

    let sourceContainerId = source.droppableId;
    let destContainerId   = destination.droppableId;
    let draggableId = new DraggableId(result.draggableId);

    console.log('onDragEnd:');
    console.log(`  source container = ${sourceContainerId}, destination container = ${destContainerId}, dragbleId = ${result.draggableId}`);
    console.log('  sourcei.index = ' + source.index + ", destination.index = " + destination.index);

    if (sourceContainerId ===  destContainerId) {
      const sourceList = reorder(this.containerMap[source.droppableId].tasks, source.index, destination.index );
      this.containerMap[sourceContainerId].tasks = sourceList;
      this.containerMap[sourceContainerId].ui.onDragEnd(draggableId);
    } else {
      const result = move(this.getTasksByContainerId(sourceContainerId), this.getTasksByContainerId(destContainerId), source, destination );
      this.containerMap[source.droppableId].tasks = result.sourceList;
      this.containerMap[destination.droppableId].tasks = result.destList;
      this.containerMap[sourceContainerId].ui.onDragEnd(draggableId);
      this.containerMap[destContainerId].ui.onDragEnd(draggableId);
    }
    this.forceUpdate();
  };

  onDragStart = (result: any) => {
    let containerId = result.source.droppableId;
    let draggableId = new DraggableId(result.draggableId);
    console.log('onDragStart');
    console.log(`  Container = ${containerId}, id = ${result.dragbleId}`);
    this.containerMap[containerId].ui.onDragStart(draggableId);
  };

  render() {
    return (
      <div className='d-flex'>
        <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
          {this.renderTaskContainers()}
        </DragDropContext>
      </div>
    );
  }

  renderTaskContainers() {
    let containers = [];
    containers.push(
      <TaskContainer ref={(instance) => {this.containerMap.container1.ui = instance;}} key={1}
        id='container1' tasks={this.containerMap.container1.tasks} />
    );
    containers.push(
      <TaskContainer ref={(instance) => {this.containerMap.container2.ui = instance;}} key={2}
        id='container2' tasks={this.containerMap.container2.tasks} />
    );
    containers.push(
      <TaskContainer ref={(instance) => {this.containerMap.container3.ui = instance;}} key={3}
        id='container3' tasks={this.containerMap.container3.tasks} />
    );
    containers.push(
      <TaskContainer ref={(instance) => {this.containerMap.container4.ui = instance;}} key={4}
        id='container4' tasks={this.containerMap.container4.tasks} />
    );
    return containers;
  }
}

export default class DNDDemo extends Component<{}, {}> {
  render() { 
    return ( <TaskBoard /> ); 
  }
}