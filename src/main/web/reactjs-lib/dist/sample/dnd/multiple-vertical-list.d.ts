import { Component } from 'react';
export default class UIMultiVerticalListDND extends Component<{}, {}> {
    state: {
        items: void;
        selected: void;
    };
    /**
    * A semi-generic way to handle multiple lists. Matches
    * the IDs of the droppable container to the names of the
    * source arrays stored in the state.
    */
    id2List: {
        droppable: string;
        droppable2: string;
    };
    getList(id: any): any;
    onDragEnd(result: any): void;
    render(): JSX.Element;
}
