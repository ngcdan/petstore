import React from "react";
export declare class Coordinate {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Graphic {
    Panel: Element;
    drawLine(style: any, p1: Coordinate, p2: Coordinate): void;
    drawConnectedLines(style: any, points: Array<Coordinate>): void;
    drawLineWithArrow(_p1: Coordinate, _arrow1Style: any, _p2: Coordinate, _arrow2Style: any): void;
    drawCircle(style: any, center: Coordinate, diameter: number): void;
}
export declare class Element {
    element: HTMLElement;
    constructor(element: string | HTMLElement);
    getWidth(): number;
    getHeight(): number;
    findTopLeftPos(): Coordinate;
    findTopRightPos(): Coordinate;
    findBottomLeftPos(): Coordinate;
    findBottomRightPos(): Coordinate;
    findCenterTopPos(): Coordinate;
    findCenterBottomPos(): Coordinate;
    findCenterLeftPos(): Coordinate;
    findCenterRightPos(): Coordinate;
    findCenterPos(): Coordinate;
}
declare type onDrag = (ele: DraggableElement, x: number, y: number) => void;
export declare class DraggableElement extends Element {
    onDrag: onDrag;
    initX: number;
    initY: number;
    mouseX: number;
    mouseY: number;
    static hold: DraggableElement | null;
    constructor(ele: string | HTMLElement, onDrag: onDrag);
}
declare type onDrop = (dragEle: DraggableElement, dropEle: DroppableElement, x: number, y: number) => void;
export declare class DroppableElement extends Element {
    onDrop: onDrop;
    constructor(ele: string | HTMLElement, onDrop: onDrop);
    mouseup(): void;
    mouseover(e: MouseEvent): void;
}
export interface IResizableElementConfig {
    handleSize?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    debug?: boolean;
}
export declare class ResizableElement extends Element {
    handleSize: number;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    debug: boolean;
    constructor(ele: string | HTMLElement, config: IResizableElementConfig);
    resizeTop(me: React.MouseEvent): void;
    resizeBottom(me: React.MouseEvent): void;
    resizeLeft(me: React.MouseEvent): void;
    resizeRight(me: React.MouseEvent): void;
}
export declare class ConnectableElement extends Element {
    constructor(ele: string | HTMLElement);
    translate(Point: any, vector: any): {
        left: any;
        top: any;
        width: any;
        height: any;
    };
    setLeft(Point: any, left: number): any;
    createCoordinate(Point: any): Coordinate;
    setTop(Point: any, top: number): any;
    connect(other: ConnectableElement): void;
}
export {};
