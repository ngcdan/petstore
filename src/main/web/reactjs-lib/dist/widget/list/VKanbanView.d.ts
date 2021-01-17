import { Component } from "react";
import { IVTable, VTableCommonProps } from "./IVTable";
export interface VTableViewProps extends VTableCommonProps {
    vtable: IVTable;
}
export declare class VKanbanView extends Component<VTableViewProps, {}> {
    render(): JSX.Element | null;
}
