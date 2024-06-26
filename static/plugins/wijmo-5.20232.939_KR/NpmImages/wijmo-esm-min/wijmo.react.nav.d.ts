/*!
    *
    * Wijmo Library 5.20232.939
    * https://developer.mescius.com/wijmo
    *
    * Copyright(c) MESCIUS inc. All rights reserved.
    *
    * Licensed under the End-User License Agreement For MESCIUS Wijmo Software.
    * us.sales@mescius.com
    * https://developer.mescius.com/wijmo/licensing
    *
    */
/**
 * {@module wijmo.react.nav}
 * Contains React components for the <b>wijmo.nav</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.nav.TreeView} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.TreeView} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TreeView extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        childItemsPath?: any;
        displayMemberPath?: any;
        imageMemberPath?: any;
        checkedMemberPath?: any;
        isContentHtml?: any;
        showCheckboxes?: any;
        autoCollapse?: any;
        isAnimated?: any;
        isReadOnly?: any;
        allowDragging?: any;
        checkOnClick?: any;
        expandOnClick?: any;
        collapseOnClick?: any;
        expandOnLoad?: any;
        lazyLoadFunction?: any;
        itemsSource?: any;
        selectedItem?: any;
        selectedNode?: any;
        checkedItems?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        itemsSourceChanged?: any;
        loadingItems?: any;
        loadedItems?: any;
        itemClicked?: any;
        isCollapsedChanging?: any;
        isCollapsedChanged?: any;
        isCheckedChanging?: any;
        isCheckedChanged?: any;
        formatItem?: any;
        dragStart?: any;
        dragOver?: any;
        drop?: any;
        dragEnd?: any;
        nodeEditStarting?: any;
        nodeEditStarted?: any;
        nodeEditEnding?: any;
        nodeEditEnded?: any;
        selectedItemChanged?: any;
        checkedItemsChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.nav.TabPanel} control.
 *
 * The <b>tab-panel</b> component may contain
 * a {@link wijmo.react.nav.Tab} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.TabPanel} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TabPanel extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isAnimated?: any;
        autoSwitch?: any;
        selectedIndex?: any;
        selectedTab?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        selectedIndexChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    protected _createControl(): any;
    componentDidMount(): void;
}
/**
 * React component for the {@link wijmo.nav.Tab} class.
 *
 * The <b>tab</b> component should be contained in
 * a {@link wijmo.react.nav.TabPanel} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.Tab} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Tab extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        isVisible?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
    protected _createControl(): any;
    protected _renderImpl(): any;
}
/**
 * React component for the {@link wijmo.nav.Accordion} control.
 *
 * The <b>accordion</b> component may contain
 * a {@link wijmo.react.nav.AccordionPane} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.Accordion} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Accordion extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isAnimated?: any;
        autoSwitch?: any;
        selectedIndex?: any;
        selectedPane?: any;
        showIcons?: any;
        allowCollapseAll?: any;
        allowExpandMany?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        selectedIndexChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    protected _createControl(): any;
    componentDidMount(): void;
}
/**
 * React component for the {@link wijmo.nav.AccordionPane} class.
 *
 * The <b>accordion-pane</b> component should be contained in
 * a {@link wijmo.react.nav.Accordion} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.nav.AccordionPane} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class AccordionPane extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        isVisible?: any;
        isCollapsed?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
    protected _createControl(): any;
    protected _renderImpl(): any;
}
