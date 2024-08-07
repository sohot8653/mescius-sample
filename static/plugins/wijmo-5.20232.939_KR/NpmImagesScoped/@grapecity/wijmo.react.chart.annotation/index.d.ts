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
 * {@module wijmo.react.chart.annotation}
 * Contains React components for the <b>wijmo.chart.annotation</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.annotation.AnnotationLayer} class.
 *
 * The <b>flex-chart-annotation-layer</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.chart.FlexChart}
 *  or {@link wijmo.react.chart.finance.FinancialChart}.
 *
 * The <b>flex-chart-annotation-layer</b> component may contain
 * a {@link wijmo.react.chart.annotation.FlexChartAnnotation} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.annotation.AnnotationLayer} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartAnnotationLayer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentInCtor: boolean;
    constructor(props: any);
}
/**
* React component that represents objects inherited from the
* {@link wijmo.chart.annotation.AnnotationBase} class.
 *
 * The <b>flex-chart-annotation</b> component should be contained in
 * a {@link wijmo.react.chart.annotation.FlexChartAnnotationLayer} component.
 *
 * The <b>flex-chart-annotation</b> component may contain
 * a {@link wijmo.react.chart.FlexChartDataPoint} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link } class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexChartAnnotation extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        type?: any;
        attachment?: any;
        position?: any;
        point?: any;
        seriesIndex?: any;
        pointIndex?: any;
        offset?: any;
        style?: any;
        isVisible?: any;
        tooltip?: any;
        text?: any;
        content?: any;
        name?: any;
        width?: any;
        height?: any;
        start?: any;
        end?: any;
        radius?: any;
        length?: any;
        href?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
    protected _createControl(): any;
}
