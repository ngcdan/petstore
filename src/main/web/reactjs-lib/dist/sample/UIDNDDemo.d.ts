import { Component } from 'react';
export interface TaskProps {
    task: any;
    position: number;
}
export interface TaskState {
    showItems: boolean;
}
export default class DNDDemo extends Component<{}, {}> {
    render(): JSX.Element;
}
