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
 * {@module wijmo.vue2.chart}
 * Contains Vue 2 and 3 components for the <b>wijmo.chart</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component for the {@link wijmo.chart.FlexChart} control.
 *
 * The <b>wj-flex-chart</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.chart.analytics.WjFlexChartTrendLine}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartMovingAverage}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartYFunctionSeries}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartParametricFunctionSeries}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartWaterfall}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartBoxWhisker}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartErrorBar}
 * , {@link wijmo.vue2.chart.analytics.WjFlexChartBreakEven}
 * , {@link wijmo.vue2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationLayer}
 * , {@link wijmo.vue2.chart.interaction.WjFlexChartRangeSelector}
 * , {@link wijmo.vue2.chart.interaction.WjFlexChartGestures}
 * , {@link wijmo.vue2.chart.WjFlexChartAxis}
 * , {@link wijmo.vue2.chart.WjFlexChartLegend}
 * , {@link wijmo.vue2.chart.WjFlexChartDataLabel}
 * , {@link wijmo.vue2.chart.WjFlexChartSeries}
 * , {@link wijmo.vue2.chart.WjFlexChartLineMarker}
 * and {@link wijmo.vue2.chart.WjFlexChartPlotArea}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.FlexChart} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.chart.FlexChart} control using Vue markup:
 *
 * <pre>&lt;wj-flex-chart
 *     :items-source="data"
 *     binding-x="country"
 *     :header="props.header"
 *     :footer="props.footer"&gt;
 *
 *     &lt;wj-flex-chart-legend :position="props.legendPosition"&gt;
 *     &lt;/wj-flex-chart-legend&gt;
 *     &lt;wj-flex-chart-axis wj-property="axisX" :title="props.titleX"&gt;
 *     &lt;/wj-flex-chart-axis&gt;
 *     &lt;wj-flex-chart-axis wj-property="axisY" :title="props.titleY"&gt;
 *     &lt;/wj-flex-chart-axis&gt;
 *
 *     &lt;wj-flex-chart-series name="Sales" binding="sales"&gt;
 *     &lt;/wj-flex-chart-series&gt;
 *     &lt;wj-flex-chart-series name="Expenses" binding="expenses"&gt;
 *     &lt;/wj-flex-chart-series&gt;
 *     &lt;wj-flex-chart-series name="Downloads" binding="downloads"&gt;
 *     &lt;/wj-flex-chart-series&gt;
 * &lt;/wj-flex-chart&gt;</pre>
 *
 * The code sets the <b>itemsSource</b> property to a collection that contains the chart
 * data and the <b>bindingX</b> property to the data property that contains the chart X values.
 * It also sets the chart's <b>header</b> and <b>footer</b> properties to define titles to
 * show above and below the chart.
 *
 * The <b>wj-flex-chart-legend</b> and <b>wj-flex-chart-axis</b> components are used to
 * customize the chart's legend and axes.
 *
 * Finally, three <b>wj-flex-chart-series</b> components are used to specify the data
 * properties to be shown on the chart.
 */
export declare var WjFlexChart: any;
/**
 * Vue component for the {@link wijmo.chart.FlexPie} control.
 *
 * The <b>wj-flex-pie</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.vue2.chart.WjFlexChartLegend}
 * and {@link wijmo.vue2.chart.WjFlexPieDataLabel}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.FlexPie} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexPie: any;
/**
 * Vue component for the {@link wijmo.chart.Axis} class.
 *
 * The <b>wj-flex-chart-axis</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.chart.WjFlexChart}
 * , {@link wijmo.vue2.chart.WjFlexChartSeries}
 * , {@link wijmo.vue2.chart.finance.WjFinancialChart}
 *  or {@link wijmo.vue2.chart.finance.WjFinancialChartSeries}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.Axis} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartAxis: any;
/**
 * Vue component for the {@link wijmo.chart.Legend} class.
 *
 * The <b>wj-flex-chart-legend</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.chart.WjFlexChart}
 * , {@link wijmo.vue2.chart.WjFlexPie}
 * , {@link wijmo.vue2.chart.finance.WjFinancialChart}
 * , {@link wijmo.vue2.chart.radar.WjFlexRadar}
 * , {@link wijmo.vue2.chart.hierarchical.WjSunburst}
 *  or {@link wijmo.vue2.chart.map.WjFlexMap}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.Legend} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartLegend: any;
/**
 * Vue component for the {@link wijmo.chart.DataLabel} class.
 *
 * The <b>wj-flex-chart-data-label</b> component should be contained in
 * a {@link wijmo.vue2.chart.WjFlexChart} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.DataLabel} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartDataLabel: any;
/**
 * Vue component for the {@link wijmo.chart.PieDataLabel} class.
 *
 * The <b>wj-flex-pie-data-label</b> component should be contained in
 * a {@link wijmo.vue2.chart.WjFlexPie} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.PieDataLabel} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexPieDataLabel: any;
/**
 * Vue component for the {@link wijmo.chart.Series} class.
 *
 * The <b>wj-flex-chart-series</b> component should be contained in
 * a {@link wijmo.vue2.chart.WjFlexChart} component.
 *
 * The <b>wj-flex-chart-series</b> component may contain
 * a {@link wijmo.vue2.chart.WjFlexChartAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.Series} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartSeries: any;
/**
 * Vue component for the {@link wijmo.chart.LineMarker} class.
 *
 * The <b>wj-flex-chart-line-marker</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.chart.WjFlexChart}
 *  or {@link wijmo.vue2.chart.finance.WjFinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.LineMarker} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartLineMarker: any;
/**
 * Vue component for the {@link wijmo.chart.DataPoint} class.
 *
 * The <b>wj-flex-chart-data-point</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationText}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationEllipse}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationRectangle}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationLine}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationPolygon}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationCircle}
 * , {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationSquare}
 *  or {@link wijmo.vue2.chart.annotation.WjFlexChartAnnotationImage}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.DataPoint} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartDataPoint: any;
/**
 * Vue component for the {@link wijmo.chart.PlotArea} class.
 *
 * The <b>wj-flex-chart-plot-area</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.chart.WjFlexChart}
 *  or {@link wijmo.vue2.chart.finance.WjFinancialChart}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.PlotArea} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexChartPlotArea: any;
export declare function registerChart(app: any): void;
