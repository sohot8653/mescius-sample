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
* {@module wijmo.knockout.chart.finance}
* KnockoutJS bindings for wijmo.chart.finance module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjBinding, WjContext } from '@grapecity/wijmo.knockout.base';
import { WjFlexChartBaseBinding } from '@grapecity/wijmo.knockout.chart';
/**
 * KnockoutJS binding for the {@link FinancialChart} control.
 *
 * Use the {@link wjFinancialChart} binding to add {@link FinancialChart} controls to your
 * KnockoutJS applications. For example:
 *
 * <pre>&lt;p&gt;Here is a FinancialChart control:&lt;/p&gt;
 * &lt;div data-bind="wjFinancialChart: { itemsSource: data, chartType: 'Candlestick' }"&gt;
 *     &lt;div data-bind="wjFlexChartLegend : {
 *         position: 'Top' }"&gt;
 *     &lt;/div&gt;
 *     &lt;div data-bind="wjFinancialChartSeries: {
 *          name: 'close',
 *         binding: 'high,low,open,close' }"&gt;
 *     &lt;/div&gt;
 *     &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *
 * The <b>wjFinancialChart</b> binding may contain the following child bindings:
 * {@link wjFlexChartAxis}, {@link wjFinancialChartSeries}, {@link wjFlexChartLegend}.
 *
 * The <b>wjFinancialChart</b> binding supports all read-write properties and events of
 * the {@link FinancialChart} control, and the additional <b>tooltipContent</b> property
 * that assigns a value to the <b>FinancialChart.tooltip.content</b> property.
 * The <b>selection</b> property provides two-way binding mode.
 */
export declare class wjFinancialChart extends WjFlexChartBaseBinding {
    _getControlConstructor(): any;
    _initialize(): void;
}
/**
 * KnockoutJS binding for the {@link FinancialChart} {@link FinancialSeries} object.
 *
 * The {@link WjFinancialChartSeries} binding must be contained in a {@link wjFinancialChart} binding.
 *
 * The <b>WjFinancialChartSeries</b> binding supports all read-write properties and events of
 * the {@link FinancialSeries} class. The <b>visibility</b> property provides two-way binding mode.
 */
export declare class wjFinancialChartSeries extends WjBinding {
    _getControlConstructor(): any;
    _createWijmoContext(): WjContext;
}
export declare class WjFinancialChartSeriesContext extends WjContext {
    _initControl(): void;
}
