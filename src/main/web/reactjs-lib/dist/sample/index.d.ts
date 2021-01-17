import { Component } from "react";
import * as app from '../app/index';
import "./stylesheet.scss";
interface NavigationProps {
    appContext: app.AppContext;
    event: null | app.AppEvent;
    broadcast: (event: app.AppEvent) => void;
}
export declare class Navigation extends Component<NavigationProps, {}> {
    render(): JSX.Element;
}
interface WorkspaceProps {
    appContext: app.AppContext;
    event: null | app.AppEvent;
    broadcast: (event: app.AppEvent) => void;
}
export declare class Workspace extends Component<WorkspaceProps, {}> {
    render(): JSX.Element;
}
interface UISampleProps {
    appContext: app.AppContext;
}
export declare class UISample extends Component<UISampleProps, {}> {
    render(): JSX.Element;
}
export {};
