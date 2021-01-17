import React, { Component } from "react";

interface CellProps {
  style?: React.CSSProperties;

}
class Cell extends Component<CellProps> {
  render() {
    let { style, children } = this.props;
    let className = 'cell';
    return (<div className={className} style={style}>{children}</div>)
  }
}

export class UIDayCalendar extends React.Component {

  renderHourColumn() {
    let column = []
    for (let i = 0; i < 12; i++) {
      column.push(<Cell>{i + "AM"}</Cell>)
    }
    column.push(<Cell>{"12PM"}</Cell>)
    for (let i = 1; i < 12; i++) {
      column.push(<Cell>{i + "PM"}</Cell>)
    }
    return column
  }

  renderItem() {
    let table = []
    for (let i = 0; i < 24; i++) {
      table.push(<div className=" d-flex flex-row flex-grow-1">
        <Cell style={{ width: "100%", minWidth: 100 }}></Cell>
      </div>)
    }
    return table
  }

  getTimePostion() {
    let date = new Date()
    return (date.getHours() + date.getMinutes() / 60) * 50
  }


  render() {
    let date = new Date()
    return (
      <div className='ui-day-calendar'>
        <div>{date.toDateString()}</div>
        <div>
          <div style={{ width: '100%', borderBottom: '2px solid red', position: 'relative', top: this.getTimePostion() }}></div>
          <div className=" d-flex flex-row">
            <div style={{ width: 80 }} className="d-flex flex-column">
              {this.renderHourColumn()}
            </div>
            <div className="flex-grow-1 d-flex flex-column flex-start">
              {this.renderItem()}
            </div>
          </div>
        </div>
      </div>)
  }
}

