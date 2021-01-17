import React, { CSSProperties } from "react"

interface CellProps{
  style?: CSSProperties
  hour?: boolean
  day?: boolean
  workspace?: boolean
  seleced?: boolean
}

class Cell extends React.Component<CellProps>{

  render() {
    let { children, style, hour, day, workspace, seleced } = this.props
    let className = 'cell'
    if (hour) className += ' cell-hour-name'
    if (day) className += ' cell-day-name'
    if (workspace) className += ' cell-workspace'
    if (seleced) className += ' cell-selected'
    return (<div className={className} style={style}>{children}</div>)
  }
}

export class UIWeekCalendar extends React.Component<{}>{

  renderHourColumn() {
    let column = []
    column.push(<Cell hour></Cell>)
    for (let i = 0; i < 12; i++) {
      column.push(<Cell hour>{i + "AM"}</Cell>)
    }
    column.push(<Cell hour>{"12PM"}</Cell>)
    for (let i = 1; i < 12; i++) {
      column.push(<Cell hour>{i + "PM"}</Cell>)
    }
    return column
  }

  getDate(day: number) {
    let date = new Date();
    date.setDate(date.getDate() + (day - date.getDay()))
    return date.toDateString()
  }

  renderLabel() {
    return (<div className=" d-flex flex-row flex-grow-1">
      <Cell day > {this.getDate(0)}</Cell>
      <Cell day > {this.getDate(1)}</Cell>
      <Cell day > {this.getDate(2)}</Cell>
      <Cell day > {this.getDate(3)}</Cell>
      <Cell day > {this.getDate(4)}</Cell>
      <Cell day > {this.getDate(5)}</Cell>
      <Cell day > {this.getDate(6)}</Cell>
    </div>)
  }

  isCurrDate(day: number){
    let date = new Date()
    return day == date.getDay()
  }

  renderItem() {
    let table = []
    for (let i = 0; i < 24; i++) {
      table.push(<div className=" d-flex flex-row flex-grow-1">
        <Cell workspace seleced={this.isCurrDate(0)}></Cell>
        <Cell workspace seleced={this.isCurrDate(1)}></Cell>
        <Cell workspace seleced={this.isCurrDate(2)}></Cell>
        <Cell workspace seleced={this.isCurrDate(3)}></Cell>
        <Cell workspace seleced={this.isCurrDate(4)}></Cell>
        <Cell workspace seleced={this.isCurrDate(5)}></Cell>
        <Cell workspace seleced={this.isCurrDate(6)}></Cell>
      </div>)
    }
    return table
  }

  getTimePostion() {
    let date = new Date()
    return (date.getHours() + date.getMinutes() / 60 + 1) * 50
  }

  render() {
    return (
      <div className="ui-week-calendar">
        <div style={{ width: '100%', borderBottom: '2px solid red', position: 'relative', top: this.getTimePostion() }}></div>
        <div className=" d-flex flex-row">
          <div style={{ width: 80 }} className="d-flex flex-column">
            {this.renderHourColumn()}
          </div>
          <div className="flex-grow-1 d-flex flex-column flex-start">
            {this.renderLabel()}
            {this.renderItem()}
          </div>
        </div>
      </div>
    )
  }
}