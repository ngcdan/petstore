import React, { Component } from "react";
import { Button } from 'reactstrap'

import { BBBeanSelectField } from 'widget/input';

interface CellProps {
  style?: React.CSSProperties;
  selected?: boolean;
  preview?: boolean;
  day?: boolean;
}
class Cell extends Component<CellProps> {
  render() {
    let { style, selected, preview, day, children } = this.props;
    let className = 'cell';
    if (selected) className += ' cell-selected';
    else if (preview) className += ' cell-preview'
    else if (day) className += ' cell-day'
    return (<Button className={className} style={style}>{children}</Button>)
  }
}

interface UIDayInMonthProp {
  month: number; year: number; movable?: boolean;
}
export class UIMiniMonthCalendar extends Component<UIDayInMonthProp> {
  dayInWeek: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  renderColumnName() {
    let res1: Array<any> = []
    this.dayInWeek.forEach((value) => { res1.push(<Cell day>{value}</Cell>) });
    return res1
  }

  getNumberOfDay() {
    return new Date(this.props.year, this.props.month, 0).getDate();
  }

  startAt() {
    let date = new Date(this.props.year + "-" + this.props.month + "-" + 1)
    return date
  }

  isCurrentDay(y: number, m: number, d: number) {
    let currDate = new Date();
    return (y == currDate.getFullYear() && currDate.getMonth() == m - 1 && currDate.getDate() == d)
  }

  getPrevDate(colId: number) {
    let date1 = new Date(this.props.year, this.props.month - 1, 1)
    date1.setDate(date1.getDate() - (this.startAt().getDay() - colId))
    return <Cell preview>{date1.getDate()}</Cell>
  }

  renderTable() {
    let rows: Array<any> = []
    let startDay = this.startAt().getDay()
    let { year, month } = this.props
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
    rows.push(<div className="d-flex justify-content-between"> {firstRow} </div>)

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
      rows.push(<div className="d-flex justify-content-between"> {row} </div>)
    }
    return [(<div className="d-flex justify-content-between"> {this.renderColumnName()} </div>), rows]
  }

  render() {
    let { month, year /*, movable */ } = this.props;
    let MonthLabel = [{ label: "January" }, { label: "February" }, { label: "March" }, { label: "April" }, { label: "May" },
    { label: "June" }, { label: "July" }, { label: "August" }, { label: "September" }, { label: "October" }, { label: "November" }, { label: "December" }];
    let YearLabel = [{ label: 2013 }, { label: 2014 }, { label: 2015 }, { label: 2016 }, { label: 2017 }, { label: 2018 }, { label: 2019 }, { label: 2020 }, { label: 2021 }]
    let bean = { month: MonthLabel[month - 1].label, year: year }
    return (
      <div className='ui-mini-month-calendar'>
        <div className="control d-flex justify-content-between border">
          <Button color='link' onClick={() => { }} >{'<'}</Button>
          <div className='text-center d-flex'>
            <BBBeanSelectField bean={bean} field={'month'} options={MonthLabel} fieldCheck={'label'} fieldLabel={'label'} onInputChange={() => { }} />
            <BBBeanSelectField bean={bean} field={'year'} options={YearLabel} fieldCheck={'label'} fieldLabel={'label'} onInputChange={() => { }} />
          </div>
          <Button color='link' onClick={() => { }} >{'>'}</Button>
        </div>
        <div className="d-flex flex-column my-2">
          {this.renderTable()}
        </div>
      </div>
    )
  }
}
