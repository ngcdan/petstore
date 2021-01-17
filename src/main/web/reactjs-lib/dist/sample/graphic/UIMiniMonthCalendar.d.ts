import React from "react";
interface UIDayInMonthProp {
    month: number;
    year: number;
    movable?: boolean;
}
export declare class UIMiniMonthCalendar extends React.Component<UIDayInMonthProp> {
    days: Array<string>;
    constructor(props: UIDayInMonthProp);
    Cell(content: string | number, style: React.CSSProperties, disabled?: boolean): JSX.Element;
    renderColumnName(): any[];
    getNumberOfDay(): number;
    startAt(): Date;
    isCurrentDay(y: number, m: number, d: number): boolean;
    renderTable(): (any[] | JSX.Element)[];
    render(): JSX.Element;
}
export {};
