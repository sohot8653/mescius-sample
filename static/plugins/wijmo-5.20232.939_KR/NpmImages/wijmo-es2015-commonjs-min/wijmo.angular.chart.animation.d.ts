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
* {@module wijmo.angular.chart.animation}
* AngularJS directives for wijmo.angular.chart.animation module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjDirective } from 'wijmo/wijmo.angular.base';
/**
 * Angular module name, which can be used in the <b>angular.module(moduleName)</b>
 * function to obtain a reference to the module .
 */
export declare const ngModuleName = "wj.chart.animation";
/**
 * AngularJS directive for the {@link FlexChart} {@link wijmo.chart.animation.ChartAnimation} object.
 *
 * The <b>wj-flex-chart-animation</b> directive must be contained in a {@link wijmo.angular.chart.WjFlexChart} or {@link wijmo.angular.chart.WjFlexPie} or {@link wijmo.angular.chart.finance.WjFinancialChart} directive.
 * It supports the following attributes:
 *
 * <dl class="dl-horizontal">
 *   <dt>animation-mode</dt>     <dd><code>@</code> The value indicating whether the plot points animate one at a time, series by series, or all at once.</dd>
 *   <dt>easing</dt>           <dd><code>@</code> The value indicating the easing function applied to the animation.</dd>
 *   <dt>duration</dt>           <dd><code>@</code> The value indicating the length of entire animation in milliseconds.</dd>
 *   <dt>axis-animation</dt>           <dd><code>@</code> The value indicating whether the axis animation is enabled.</dd>
 * </dl>
 */
export declare class WjFlexChartAnimation extends WjDirective {
    constructor();
    readonly _controlConstructor: any;
}
