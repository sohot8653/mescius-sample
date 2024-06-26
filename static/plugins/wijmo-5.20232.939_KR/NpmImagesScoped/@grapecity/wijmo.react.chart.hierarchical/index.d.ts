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
 * {@module wijmo.react.chart.hierarchical}
 * Contains React components for the <b>wijmo.chart.hierarchical</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.hierarchical.Sunburst} control.
 *
 * The <b>sunburst</b> component may contain
 * a {@link wijmo.react.chart.FlexChartLegend} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.hierarchical.Sunburst} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Sunburst extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        binding?: any;
        footer?: any;
        header?: any;
        selectionMode?: any;
        palette?: any;
        plotMargin?: any;
        footerStyle?: any;
        headerStyle?: any;
        tooltipContent?: any;
        itemsSource?: any;
        bindingName?: any;
        innerRadius?: any;
        isAnimated?: any;
        offset?: any;
        reversed?: any;
        startAngle?: any;
        selectedIndex?: any;
        selectedItemPosition?: any;
        selectedItemOffset?: any;
        itemFormatter?: any;
        labelContent?: any;
        childItemsPath?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        rendering?: any;
        rendered?: any;
        selectionChanged?: any;
        itemsSourceChanging?: any;
        itemsSourceChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.hierarchical.TreeMap} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.hierarchical.TreeMap} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TreeMap extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        binding?: any;
        footer?: any;
        header?: any;
        selectionMode?: any;
        palette?: any;
        plotMargin?: any;
        footerStyle?: any;
        headerStyle?: any;
        tooltipContent?: any;
        itemsSource?: any;
        bindingName?: any;
        maxDepth?: any;
        type?: any;
        labelContent?: any;
        childItemsPath?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        rendering?: any;
        rendered?: any;
        selectionChanged?: any;
        itemsSourceChanging?: any;
        itemsSourceChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
