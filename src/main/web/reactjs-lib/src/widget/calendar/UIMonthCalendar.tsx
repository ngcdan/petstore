import React, { Component, CSSProperties } from "react";
import { Button } from 'reactstrap'

interface CellProps {
  style?: CSSProperties,
  label?: boolean,
  selected?: boolean
  preview?: boolean
}

class Cell extends Component<CellProps>{
  render() {
    let { children, style, label, selected, preview } = this.props
    let className = 'cell'
    if (label) className += ' cell-label'
    if (selected) className += ' cell-selected'
    if (preview) className += ' cell-preview'
    return (<div className={className} style={style}>{children}</div>)
  }
}

interface UIMonthCalendarProp {
  year: number,
  month: number
}

export class UIMonthCalendar extends React.Component<UIMonthCalendarProp> {

  startAt() {
    let date = new Date(this.props.year + "-" + this.props.month + "-" + 1)
    return date
  }

  isCurrentDay(y: number, m: number, d: number) {
    let currDate = new Date();
    return (y == currDate.getFullYear() && currDate.getMonth() == m - 1 && currDate.getDate() == d)
  }

  getNumberOfDay() {
    return new Date(this.props.year, this.props.month, 0).getDate();
  }

  renderLabel() {
    let style: CSSProperties = { height: 50 }
    return (<div className=" d-flex flex-row">
      <Cell label style={style}> Sun</Cell>
      <Cell label style={style}> Mon</Cell>
      <Cell label style={style}> Tue</Cell>
      <Cell label style={style}> Wed</Cell>
      <Cell label style={style}> Thu</Cell>
      <Cell label style={style}> Fri</Cell>
      <Cell label style={style}> Sat</Cell>
    </div>)
  }

  getPrevDate(colId: number) {
    let date1 = new Date(this.props.year, this.props.month - 1, 1)
    date1.setDate(date1.getDate() - (this.startAt().getDay() - colId))
    return <Cell preview>{date1.getDate()}</Cell>
  }

  renderItem() {
    let { year, month } = this.props
    let table = []
    let startDay = this.startAt().getDay()
    let day = 1
    let nextMonthDay = 1
    let firstRow = []
    for (let i = 0; i < 7; i++) {
      if (i < startDay) {
        firstRow.push(this.getPrevDate(i))
      }
      else {
        firstRow.push(<Cell selected={this.isCurrentDay(year, month, day)}>{day++}</Cell>)
      }
    }
    table.push(<div className=" d-flex flex-row">{firstRow}</div>)

    for (let i = 0; i < 5; i++) {
      let row = []
      for (let j = 0; j < 7; j++) {
        if (day <= this.getNumberOfDay()) {
          row.push(<Cell selected={this.isCurrentDay(year, month, day)}>{day++}</Cell>)
        }
        else {
          row.push(<Cell preview>{nextMonthDay++}</Cell>);
        }
      }
      table.push(<div className="d-flex flex-row"> {row} </div>)
    }
    return table
  }

  render() {
    let MonthLable = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <div className="ui-month-calendar d-flex flex-column">
        <div className="d-flex justify-content-center ">
          <Button style={{ marginRight: 50 }} color='primay' onClick={() => { }} >{'<'}</Button>
          {this.props.year + "-" + MonthLable[this.props.month - 1]}
          <Button style={{ marginLeft: 50 }} color='primay' onClick={() => { }} >{'>'}</Button>
        </div>
        {this.renderLabel()}
        {this.renderItem()}
      </div>
    );
  }
}