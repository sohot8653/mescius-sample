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
 * {@module wijmo.vue2.chart.radar}
 * Contains Vue 2 and 3 components for the <b>wijmo.chart.radar</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component for the {@link wijmo.chart.radar.FlexRadar} control.
 *
 * The <b>wj-flex-radar</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.chart.animation.WjFlexChartAnimation}
 * , {@link wijmo.vue2.chart.radar.WjFlexRadarAxis}
 * , {@link wijmo.vue2.chart.radar.WjFlexRadarSeries}
 * and {@link wijmo.vue2.chart.WjFlexChartLegend}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadar} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexRadar: any;
/**
 * Vue component for the {@link wijmo.chart.radar.FlexRadarAxis} class.
 *
 * The <b>wj-flex-radar-axis</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.chart.radar.WjFlexRadar}
 *  or {@link wijmo.vue2.chart.radar.WjFlexRadarSeries}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadarAxis} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexRadarAxis: any;
/**
 * Vue component for the {@link wijmo.chart.radar.FlexRadarSeries} class.
 *
 * The <b>wj-flex-radar-series</b> component should be contained in
 * a {@link wijmo.vue2.chart.radar.WjFlexRadar} component.
 *
 * The <b>wj-flex-radar-series</b> component may contain
 * a {@link wijmo.vue2.chart.radar.WjFlexRadarAxis} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.chart.radar.FlexRadarSeries} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjFlexRadarSeries: any;
export declare function registerChartRadar(app: any): void;
