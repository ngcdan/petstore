import React, { Component } from "react";
import { UIMiniMonthCalendar } from "./UIMiniMonthCalendar";

export class UIYearCalendar extends Component {
  getCurrentYear() {
    let date = new Date()
    return date.getFullYear()
  }

  render() {
    let table = []
    for (let i = 0; i < 3; i++) {
      let row = []
      for (let j = 0; j < 4; j++) {
        row.push(<UIMiniMonthCalendar month={i * 4 + j + 1} year={this.getCurrentYear()} />)
      }
      table.push(
        <div className="d-flex flex-row justify-content-around">
          {row}
        </div>
      );
    }
    return (
      <div className='ui-calendar-manager d-flex flex-column justify-content-around' >
        {table }
      </div>
    );
  }
}