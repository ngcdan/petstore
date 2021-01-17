import React from "react";
interface UIMonthCalendarProp {
    year: number;
    month: number;
}
export declare class UIMonthCalendar extends React.Component<UIMonthCalendarProp> {
    Cell(content: string | number, style: React.CSSProperties): JSX.Element;
    startAt(): Date;
    isCurrentDay(y: number, m: number, d: number): boolean;
    renderLabel(): JSX.Element;
    renderItem(): JSX.Element[];
    render(): JSX.Element;
}
export {};
