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
 * {@module wijmo.vue2.chart.finance}
 * Contains Vue 2 and 3 components for the <b>wijmo.chart.finance</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component for the {@link wijmo.chart.finance.FinancialChart} control.
 *
 * The <b>wj-financial-chart</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.chart.analytics.WjFlexChartTrendLine}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartMovingAverage}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartYFunctionSeries}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartParametricFunctionSeries}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartWaterfall}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartBoxWhisker}
 * , {@link wijmo.vue2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationLayer}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartFibonacci}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartFibonacciArcs}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartFibonacciFans}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartFibonacciTimeZones}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartAtr}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartCci}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartRsi}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartWilliamsR}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartMacd}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartMacdHistogram}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartStochastic}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartBollingerBands}
 * , {@link wijmo.vue2.chart.finance.analytics.WjFlexChartEnvelopes}
 * , {@link wijmo.vue2.chart.finance.WjFinancialChartSeries}
 * , {@link wijmo.vue2.chart.interaction.WjFlexChartRangeSelector}
 * , {@link wijmo.vue2.chart.interaction.WjFlexChartGestures}
 * , {@link wijmo.vue2.chart.WjFlexChartAxis}
 * , {@link wijmo.vue2.chart.WjFlexChartLegend}
 * , {@link wijmo.vue2.chart.WjFlexChartLineMarker}
 * and {@link wijmo.vue2.chart.WjFlexChartPlotArea}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.finance.FinancialChart} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFinancialChart: any;
/**
 * Vue component for the {@link wijmo.chart.finance.FinancialSeries} class.
 *
 * The <b>wj-financial-chart-series</b> component should be contained in
 * a {@link wijmo.vue2.chart.finance.WjFinancialChart} component.
 *
 * The <b>wj-financial-chart-series</b> component may contain
 * a {@link wijmo.vue2.chart.WjFlexChartAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.finance.FinancialSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFinancialChartSeries: any;
export declare function registerChartFinance(app: any): void;
