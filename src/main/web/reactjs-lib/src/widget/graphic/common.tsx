import React from "react";
import ReactDOM from "react-dom";

export class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function toInt(string: string | null, defaultVal: number) {
  if(!string) return defaultVal;
  return parseInt(string, 10);
}

export class Graphic {
  Panel: Element = new Element("sgv");

  drawLine(style: any, p1: Coordinate, p2: Coordinate) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute("x1", p1.x + "px")
    line.setAttribute("y1", p1.y + "px")
    line.setAttribute("x2", p2.x + "px")
    line.setAttribute("y2", p2.y + "px")
    for (const prop in style) {
      line.style.setProperty(prop, style[prop]);
    }
    this.Panel.element.appendChild(line);
  }

  drawConnectedLines(style: any, points: Array<Coordinate>) {
    console.log(points)
    for (var i = 0; i < points.length - 1; i++) {
      this.drawLine(style, points[i], points[i + 1]);
      this.drawCircle({ "stroke": "rgb(255,0,0)", "stroke-width": 2 }, points[i], 4);
    }
    this.drawCircle({ "stroke": "rgb(255,0,0)", "stroke-width": 2 }, points[points.length - 1], 4);
  }

  drawLineWithArrow(_p1: Coordinate, _arrow1Style: any, _p2: Coordinate, _arrow2Style: any) {
  }

  drawCircle(style: any, center: Coordinate, diameter: number) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute("cx", center.x + "px");
    circle.setAttribute("cy", center.y + "px");
    circle.setAttribute("r", diameter + "px");
    for (const prop in style) {
      circle.style.setProperty(prop, style[prop]);
    }
    this.Panel.element.appendChild(circle);
  }
}

export class Element {
  element: HTMLElement;

  constructor(element: string | HTMLElement) {
    if (element instanceof HTMLElement) {
      this.element = element;
    } else {
      let foundEle = document.getElementById(element)
      if (!foundEle) {
        throw new Error("Cannot find the element with id" + element);
      }
      this.element = foundEle;
    }
    this.element.style.position = "relative"
    if (this.element.style.top == "") this.element.style.top = "0"
    if (this.element.style.left == "") this.element.style.left = "0"
    if (this.element.style.width == "")  this.element.style.width = this.element.offsetWidth + "px"
      
  }

  getWidth() { return  this.element.offsetWidth}

  getHeight() { return  this.element.offsetHeight}

  findTopLeftPos() { return new Coordinate(toInt(this.element.style.left, 0), toInt(this.element.style.top, 0)); }

  findTopRightPos() { return new Coordinate(this.findTopLeftPos().x + this.getWidth(), this.findTopLeftPos().y); }

  findBottomLeftPos() { return new Coordinate(this.findTopLeftPos().x, this.findTopLeftPos().y + this.getHeight()); }

  findBottomRightPos() { return new Coordinate(this.findTopLeftPos().x + this.getWidth(), this.findTopLeftPos().y + this.getHeight()); }

  findCenterTopPos() { return new Coordinate((this.findTopLeftPos().x + this.getWidth()) / 2, this.findTopLeftPos().y); }

  findCenterBottomPos() { return new Coordinate((this.findTopLeftPos().x + this.getWidth()) / 2, this.findTopLeftPos().y + this.getHeight()); }

  findCenterLeftPos() { return new Coordinate(this.findTopLeftPos().x, (this.findTopLeftPos().y + this.getHeight()) / 2); }

  findCenterRightPos() { return new Coordinate(this.findTopLeftPos().x + this.getWidth(), (this.findTopLeftPos().y + this.getHeight()) / 2); }

  findCenterPos() { return new Coordinate((this.findTopLeftPos().x + this.getWidth()) / 2, (this.findTopLeftPos().y + this.getHeight()) / 2); }
}

type onDrag = (ele: DraggableElement, x: number, y: number) => void;
export class DraggableElement extends Element {
  onDrag: onDrag;
  initX: number = 0;
  initY: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  static hold: DraggableElement | null = null;

  constructor(ele: string | HTMLElement, onDrag: onDrag) {
    super(ele);
    this.onDrag = onDrag;
    let { initX, initY, mouseX, mouseY } = this;

    this.element.style.cursor = "move";

    const move = (e: MouseEvent) => {
      this.element.style.left = initX + (e.clientX - mouseX) + "px";
      this.element.style.top = initY + (e.clientY - mouseY) + "px";
      onDrag(this, e.clientX, e.clientY);
    }

    const stopMove = (_e: MouseEvent) => {
      DraggableElement.hold = null;
      window.removeEventListener("mousemove", move, true);
      window.removeEventListener("mouseup", stopMove, true);
    }

    const initMove = (e: MouseEvent) => {

      this.element.style.zIndex = "1"
      DraggableElement.hold = this;
      initX = this.findTopLeftPos().x;
      initY = this.findTopLeftPos().y;
      mouseX = e.clientX;
      mouseY = e.clientY;

      window.addEventListener("mousemove", move, true);
      window.addEventListener("mouseup", stopMove, true);
    }
    this.element.addEventListener("mousedown", initMove);
  }
}

type onDrop = (dragEle: DraggableElement, dropEle: DroppableElement, x: number, y: number) => void;
export class DroppableElement extends Element {
  onDrop: onDrop;

  constructor(ele: string | HTMLElement, onDrop: onDrop) {
    super(ele);
    this.onDrop = onDrop;
    this.mouseover = this.mouseover.bind(this);
    this.mouseup = this.mouseup.bind(this);

    document.body.addEventListener("mousemove", this.mouseover, true);
    this.element.addEventListener("mouseup", this.mouseup, true);
  }

  mouseup() {
    document.body.removeEventListener("mousemove", this.mouseover, true);
    this.element.removeEventListener("mouseup", this.mouseup, true);
  }

  mouseover(e: MouseEvent) {
    let ele = this.element;
    if (DraggableElement.hold &&  ele.offsetLeft < e.clientX 
    && ele.offsetLeft + ele.offsetWidth > e.clientX 
    && ele.offsetTop < e.clientY 
    && ele.offsetTop + ele.offsetHeight > e.clientY ) {
      this.onDrop(DraggableElement.hold, this, e.clientX, e.clientY);
    }else{
      this.element.style.border = "";
    }
  }
}

export interface IResizableElementConfig {
  handleSize?: number;
  minWidth?:   number;
  maxWidth?:   number;
  minHeight?:  number;
  maxHeight?:  number;
  debug?:      boolean;
}
export class ResizableElement extends Element {
  handleSize: number;
  minWidth:   number;
  maxWidth:   number;
  minHeight:  number;
  maxHeight:  number;
  debug:      boolean;
  
  constructor(ele: string | HTMLElement, config: IResizableElementConfig) {
    super(ele);

    this.handleSize = config.handleSize ? config.handleSize : 5;
    this.minWidth = config.minWidth ? config.minWidth : 0;
    this.maxWidth = config.maxWidth ? config.maxWidth : 1000;
    this.minHeight = config.minHeight ? config.minHeight : 0;
    this.maxHeight = config.maxHeight ? config.maxHeight : 1000;
    this.debug = config.debug ? config.debug : false;

    this.resizeTop = this.resizeTop.bind(this);
    this.resizeBottom = this.resizeBottom.bind(this);
    this.resizeLeft = this.resizeLeft.bind(this);
    this.resizeRight = this.resizeRight.bind(this);

    let handle = `${this.handleSize}px`
    let vHandleStyle = { background: "transparent", width: handle, minWidth: handle, maxWidth: handle, minHeight: 0, cursor: "w-resize" };
    let hHandleStyle = { background: "transparent", height: handle, minHeight: handle, maxHeight: handle, cursor: "n-resize" };

    if(this.debug == true) {
      vHandleStyle.background = 'gray';
      hHandleStyle.background = 'gray';
    }
    let template = [
      <div style={hHandleStyle} onMouseDown={this.resizeTop}></div>,
      <div className='d-flex flex-grow-1'>
        <div style={vHandleStyle} onMouseDown={this.resizeLeft}></div>
        <div style={{ overflow: "hidden" }} className='flex-grow-1' dangerouslySetInnerHTML={{ __html: this.element.innerHTML }}></div>
        <div style={vHandleStyle} onMouseDown={this.resizeRight}></div>
      </div>,
      <div style={hHandleStyle} onMouseDown={this.resizeBottom}></div>
    ];
    let block = document.createElement('div');
    block.setAttribute('class', 'd-flex flex-column flex-grow-1');
    block.style.height = "100%"
    ReactDOM.render(template, block);
    this.element.innerHTML = '';
    this.element.appendChild(block);
  }

  resizeTop(me: React.MouseEvent) {
    let top = toInt(this.element.style.top, 0);
    let height = this.getHeight();
    let mtop = me.clientY;
    const stop = () => {
      window.removeEventListener("mousemove", move);
    }
    const move = (m: MouseEvent) => {
      if (height - (m.clientY - mtop) > 60){
        this.element.style.top = top + (m.clientY - mtop) + "px";
        this.element.style.height = height - (m.clientY - mtop) + "px";
      }
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", stop);
  }

  resizeBottom(me: React.MouseEvent) {
    let height = this.getHeight();
    let mtop = me.clientY;
    const stop = () => {
      window.removeEventListener("mousemove", move);
    }
    const move = (m: MouseEvent) => {
      if (height + (m.clientY - mtop) > 60)
        this.element.style.height = height + (m.clientY - mtop) + "px";
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", stop);
  }

  resizeLeft(me: React.MouseEvent) {
    let left = toInt(this.element.style.left, 10);
    let width = this.getWidth();
    let mX = me.clientX;
    const stop = () => {
      window.removeEventListener("mousemove", move);
    }
    const move = (m: MouseEvent) => {
      if (width - (m.clientX - mX) > 60){
        this.element.style.left = left + (m.clientX - mX) + "px";
        this.element.style.width = width - (m.clientX - mX) + "px";
      }
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", stop);
  }

  resizeRight(me: React.MouseEvent) {
    let width = toInt(this.element.style.width, 10);
    let mX = me.clientX;
    const stop = () => {
      window.removeEventListener("mousemove", move);
    }
    const move = (m: MouseEvent) => {
      if (width + (m.clientX - mX) > 60){
        this.element.style.width = width + (m.clientX - mX) + "px";
      }
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", stop);
  }
}

export class ConnectableElement extends Element {

  constructor(ele: string | HTMLElement) {
    super(ele);
    this.element.style.position = "absolute";
  }

  translate(Point: any, vector: any) {
    return { left: Point.left + vector[0], top: Point.top + vector[1], width: Point.width, height: Point.height }
  }

  setLeft(Point: any, left: number) {
    var res = { ...Point }
    res.left = left
    return res
  }

  createCoordinate(Point: any) {
    return new Coordinate(Point.left, Point.top);
  }

  setTop(Point: any, top: number) {
    var res = { ...Point }
    res.top = top
    return res
  }

  connect(other: ConnectableElement) {
    let { translate, createCoordinate, setLeft, setTop } = this
    let Points = []
    let e1 = this.element
    let e2 = other.element
    if (e1 != null && e2 != null) {
      var Point1 = { top: e1.offsetTop + e1.offsetHeight / 2, left: e1.offsetLeft + e1.offsetWidth, width: e1.offsetWidth, height: e1.offsetHeight }
      var Point2 = { top: e2.offsetTop + e2.offsetHeight / 2, left: e2.offsetLeft, width: e2.offsetWidth, height: e2.offsetHeight }
      var TPoint1 = translate(Point1, [20, 0]);
      var TPoint2 = translate(Point2, [-20, 0])

      Points.push(createCoordinate(Point1));
      Points.push(createCoordinate(TPoint1));
      if (TPoint1.left <= TPoint2.left) {
        Points.push(new Coordinate(Point1.left + 20, Point2.top));
      } else {
        if (TPoint1.height / 2 + TPoint2.height / 2 < Math.abs(TPoint1.top - TPoint2.top)) {
          var sp = Math.abs(TPoint1.top - TPoint2.top) - (TPoint1.height / 2 + TPoint2.height / 2)
          sp = sp / 2 + TPoint1.height / 2
          if (TPoint1.top > TPoint2.top)
            sp = -sp
          Points.push(createCoordinate(translate(TPoint1, [0, sp])));
          Points.push(createCoordinate(setLeft(translate(TPoint1, [0, sp]), TPoint2.left)));
        } else {
          if (TPoint1.left <= Point2.left + Point2.width) {
            Points.push(createCoordinate(translate(TPoint1, [Point2.width, 0])));
            TPoint1 = translate(TPoint1, [Point2.width, 0])
          }
          let sd = Math.max(Point1.top + Point1.height / 2, Point2.top + Point2.height / 2) + 20
          Points.push(createCoordinate(setTop(TPoint1, sd)));
          Points.push(createCoordinate(setTop(TPoint2, sd)));
        }
      }
      Points.push(createCoordinate(TPoint2));
      Points.push(createCoordinate(Point2));
      let graphic = new Graphic
      graphic.drawConnectedLines({ "stroke": "rgb(255,0,0)", "stroke-width": 2 }, Points)
    }
  }
}