import React from "react";
import { Component } from "react";
import { DNDBoard } from "widget/dnd/DNDBoard";
import { IVTable, VTableCommonProps } from "./IVTable";

export interface VTableViewProps extends VTableCommonProps { vtable: IVTable }
export class VKanbanView extends Component<VTableViewProps, {}> {
  render() {
    const { vtable, config, model, style, className } = this.props;
    const kanbanview = config.kanbanView;
    if (!kanbanview) return null;
    let records = model.getFilterRecords();
    let cssClass = className ? `kanban-view ${className}` : 'kanban-view';
    let html = (
      <div className={cssClass} style={style}>
        <DNDBoard context={vtable} config={kanbanview.dndBoard} items={records} />
      </div>
    );
    return html;
  }
}