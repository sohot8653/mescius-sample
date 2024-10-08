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
 * {@module wijmo.react.chart.finance}
 * Contains React components for the <b>wijmo.chart.finance</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.chart.finance.FinancialChart} control.
 *
 * The <b>financial-chart</b> component may contain
 * the following child components:
 * {@link wijmo.react.chart.analytics.FlexChartTrendLine}
 * , {@link wijmo.react.chart.analytics.FlexChartMovingAverage}
 * , {@link wijmo.react.chart.analytics.FlexChartYFunctionSeries}
 * , {@link wijmo.react.chart.analytics.FlexChartParametricFunctionSeries}
 * , {@link wijmo.react.chart.analytics.FlexChartWaterfall}
 * , {@link wijmo.react.chart.analytics.FlexChartBoxWhisker}
 * , {@link wijmo.react.chart.animation.FlexChartAnimation}
 * , {@link wijmo.react.chart.annotation.FlexChartAnnotationLayer}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacci}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacciArcs}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacciFans}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartFibonacciTimeZones}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartAtr}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartCci}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartRsi}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartWilliamsR}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartMacd}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartMacdHistogram}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartStochastic}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartBollingerBands}
 * , {@link wijmo.react.chart.finance.analytics.FlexChartEnvelopes}
 * , {@link wijmo.react.chart.finance.FinancialChartSeries}
 * , {@link wijmo.react.chart.interaction.FlexChartRangeSelector}
 * , {@link wijmo.react.chart.interaction.FlexChartGestures}
 * , {@link wijmo.react.chart.FlexChartAxis}
 * , {@link wijmo.react.chart.FlexChartLegend}
 * , {@link wijmo.react.chart.FlexChartLineMarker}
 * and {@link wijmo.react.chart.FlexChartPlotArea}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.finance.FinancialChart} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FinancialChart extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        renderEngine?: any;
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
        bindingX?: any;
        interpolateNulls?: any;
        legendToggle?: any;
        symbolSize?: any;
        options?: any;
        selection?: any;
        itemFormatter?: any;
        labelContent?: any;
        chartType?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        rendering?: any;
        rendered?: any;
        itemsSourceChanging?: any;
        itemsSourceChanged?: any;
        seriesVisibilityChanged?: any;
        selectionChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    private _setExtra;
}
/**
 * React component for the {@link wijmo.chart.finance.FinancialSeries} class.
 *
 * The <b>financial-chart-series</b> component should be contained in
 * a {@link wijmo.react.chart.finance.FinancialChart} component.
 *
 * The <b>financial-chart-series</b> component may contain
 * a {@link wijmo.react.chart.FlexChartAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.finance.FinancialSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FinancialChartSeries extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        axisX?: any;
        axisY?: any;
        binding?: any;
        bindingX?: any;
        cssClass?: any;
        name?: any;
        style?: any;
        altStyle?: any;
        symbolMarker?: any;
        symbolSize?: any;
        symbolStyle?: any;
        visibility?: any;
        itemsSource?: any;
        interpolateNulls?: any;
        tooltipContent?: any;
        itemFormatter?: any;
        chartType?: any;
        initialized?: any;
        rendering?: any;
        rendered?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    constructor(props: any);
}
