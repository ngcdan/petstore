import { Component } from 'react';
import { BreadcumbsPage, BreadcumbsPageProps } from 'widget/layout';
import { AppContext, PageContext, AppEvent, ApplicationProps, OSProps } from './app';
import { IAppRegistry, AppCapability } from './AppRegistry';
import './stylesheet.scss';
export interface ScreenModel {
    id: string;
    label: string;
    icon?: String;
    hint?: String;
    ui: any;
    requiredCapability?: AppCapability;
}
export interface NavigationSection {
    label: string;
    indentLevel: 1 | 2 | 3;
    screens: Array<ScreenModel>;
    requiredCapability?: AppCapability;
}
export interface NavigationConfig {
    navWidth?: number;
    defaultScreen: string;
    screens?: Array<ScreenModel>;
    sections?: Array<NavigationSection>;
    collapse?: boolean;
    requiredCapability?: AppCapability;
}
interface UINavigationProps extends ApplicationProps {
    navigation: NavigationConfig;
}
export declare function changeScreen(appContext: AppContext, screen: string): void;
export declare function findScreenModel(navigation: NavigationConfig, id: string): ScreenModel | null;
interface UIApplicationProps extends OSProps {
    appRegistry: IAppRegistry;
}
export declare class UIApplication extends Component<UIApplicationProps> {
    appContext: AppContext;
    pageContext: PageContext;
    navigation: NavigationConfig;
    constructor(props: any);
    createAllowedNavigation(appContext: AppContext, pageContext: PageContext): NavigationConfig;
    createNavigation(_appContext: AppContext, _pageContext: PageContext): NavigationConfig;
}
export declare class UINavigation extends Component<UINavigationProps> {
    constructor(props: any);
    toggleNav(): void;
    renderSectionScreens(section: NavigationSection): JSX.Element[];
    renderSections(nav: NavigationConfig): JSX.Element[] | null;
    renderBanner(nav: NavigationConfig): JSX.Element;
    render(): JSX.Element;
}
interface UIBodyProps extends BreadcumbsPageProps {
    appContext: AppContext;
    pageContext: PageContext;
    navigation: NavigationConfig;
}
export declare class UIApplicationBody extends BreadcumbsPage<UIBodyProps> {
    constructor(props: UIBodyProps);
    selectUIScreen(event: null | AppEvent): ScreenModel;
    componentWillMount(): void;
}
export declare class UINavApplication extends UIApplication {
    render(): JSX.Element;
}
export declare class UIMenuApplicationBody extends UIApplicationBody {
    renderMenuSections(appContext: AppContext, navigation: NavigationConfig): JSX.Element[] | null;
    renderNavigationMenu(): JSX.Element | null;
    renderScreens(): JSX.Element | null;
    render(): JSX.Element;
}
export declare class UIMenuApplication extends UIApplication {
    render(): JSX.Element;
}
export {};
