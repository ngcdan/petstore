import React, { Component } from "react";
import { Button } from "reactstrap";

import { IDTracker } from "util/common";
import { UIMiniMonthCalendar } from "./UIMiniMonthCalendar";
import { UIMonthCalendar } from "./UIMonthCalendar";
import { UIYearCalendar } from "./UIYearCalendar";
import { UIWeekCalendar } from "./UIWeekCalendar";
import { UIDayCalendar } from "./UIDayCalendar";

import './stylesheet.scss'

export class CalendarDate {

}

export interface CalendarConfig {
  view: 'day' | 'week' | 'month' | 'year';
}

interface CalendarEvent {
  name: string;
  updateView: boolean ;
  data?: any ;
}

interface UICalendarControlProps {
  config: CalendarConfig;
  event:  CalendarEvent | null;
  broadcast: (event: CalendarEvent) => void
}
class UICalendarControl extends React.Component<UICalendarControlProps> {
  getCurrentDay() { return new Date(); }

  onSelectCalendarView(view: 'year'|'month'|'week'|'day') {
    let { config, broadcast } = this.props
    config.view = view ;
    broadcast({name: 'change-calendar-view', updateView: true})
  }

  render() {
    let currDate = this.getCurrentDay()
    return (
      <div className="ui-calendar-control">
        <UIMiniMonthCalendar month={currDate.getMonth() + 1} year={currDate.getFullYear()} movable={true} />
        <div className="d-flex justify-content-around">
          <Button onClick={() => this.onSelectCalendarView('year')}>Year</Button>
          <Button onClick={() => this.onSelectCalendarView('month')}>Month</Button>
          <Button onClick={() => this.onSelectCalendarView('week')}>Week</Button>
          <Button onClick={() => this.onSelectCalendarView('day')}>Day</Button>
        </div>
      </div>
    )
  }
}

interface UICalendarWorkspaceProps {
  config: CalendarConfig;
  event:  CalendarEvent | null;
}
class UICalendarWorkspace extends React.Component<UICalendarWorkspaceProps> {
  getCurrentDate() { return new Date() }

  render() {
    let { config } = this.props
    let UICalendarView = null;
    if ('year' == config.view) {
      UICalendarView = ( <UIYearCalendar /> );
    } else if (config.view == "month") {
      UICalendarView = <UIMonthCalendar year={this.getCurrentDate().getFullYear()} month={this.getCurrentDate().getMonth() + 1} />;
    } else if (config.view == "week") {
      UICalendarView = <UIWeekCalendar />;
    } else {
      UICalendarView = <UIDayCalendar />;
    }
    return (
      <div className='ui-calendar-workspace'>
        { UICalendarView }
      </div>
    )
  }
}

interface UICalendarManagerProps {
  config: CalendarConfig;
}
interface UICalendarManagerState {
  renderId: string;
}
export class UICalendarManager extends Component<UICalendarManagerProps, UICalendarManagerState> {
  currentEvent: CalendarEvent|null = null;
  constructor(props: UICalendarManagerProps) {
    super(props);
    this.broadcast = this.broadcast.bind(this);
    this.state = {renderId: `${IDTracker.next()}`}
  }

  consumeEvent() {
    let event = this.currentEvent ;
    this.currentEvent = null;
    return event;
  }

  broadcast(event: CalendarEvent) {
    this.currentEvent = event;
    if(event && event.updateView) {
      this.setState({ renderId: `${IDTracker.next}` })
    }
  }

  render() {
    let {config } = this.props; 
    let event = this.consumeEvent();
    return (
      <div key={this.state.renderId} className="ui-calendar-manager"  >
        <UICalendarControl config={config} event={event} broadcast={this.broadcast}/>
        <UICalendarWorkspace config={config} event={event}/>
      </div>
    );
  }
}