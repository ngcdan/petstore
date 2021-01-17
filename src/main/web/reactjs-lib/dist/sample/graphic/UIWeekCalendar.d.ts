import React, { CSSProperties } from "react";
export declare class UIWeekCalendar extends React.Component<{}> {
    style: CSSProperties;
    renderHourColumn(): JSX.Element[];
    getDate(day: number): string;
    renderLabel(): JSX.Element;
    isCurrDate(day: number): boolean;
    renderItem(): JSX.Element[];
    getTimePostion(): number;
    render(): JSX.Element;
}
