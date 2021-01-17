import { Component } from 'react';
import { VListConfig } from '../widget/list/VList';
import { ListModel } from '../widget/list/VList';
export default class UIVList extends Component<{}, {}> {
    model: ListModel;
    config: VListConfig;
    constructor(props: any);
    render(): JSX.Element;
}
