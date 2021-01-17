import React, { Component } from "react";
import {CalendarConfig, UICalendarManager} from 'widget/calendar/UICalendarManager'

export class UICalendarManagerDemo extends Component {
  config: CalendarConfig
  constructor(props: any) {
   super(props); 
   this.config = {
     view: 'year'
   }
  }

  render() {
    return <UICalendarManager config={this.config} />
  }
}
