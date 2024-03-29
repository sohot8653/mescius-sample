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
 * {@module wijmo.vue2.gauge}
 * Contains Vue 2 and 3 components for the <b>wijmo.gauge</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component for the {@link wijmo.gauge.LinearGauge} control.
 *
 * The <b>wj-linear-gauge</b> component may contain
 * a {@link wijmo.vue2.gauge.WjRange} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.LinearGauge} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.gauge.LinearGauge} control using Vue markup:
 *
 * <pre>&lt;wj-linear-gauge
 *     :min="0" :max="1000" :step="50" :is-read-only="false"
 *     format="c0" :thumb-size="20"
 *     :show-ranges="false"
 *     :value="sales"
 *     :value-changed="salesChanged"&gt;
 *     &lt;wj-range wj-property="face" :thickness="0.5"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range wj-property="pointer" :thickness="0.5"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range :min="0" :max="333" color="red"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range :min="333" :max="666" color="gold"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range :min="666" :max="1000" color="green"&gt;
 *     &lt;/wj-range&gt;
 * &lt;/wj-linear-gauge&gt;</pre>
 *
 * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
 * to define the range of the gauge and to allow users to edit its value.
 * Next, it binds the gauge's <b>value</b> property to a <b>sales</b> variable
 * in the controller.
 *
 * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
 * properties to define the appearance of the gauge. Finally, the markup sets
 * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
 * that will control the color of the <b>value</b> range depending on the gauge's
 * current value.
 */
export declare var WjLinearGauge: any;
/**
 * Vue component for the {@link wijmo.gauge.BulletGraph} control.
 *
 * The <b>wj-bullet-graph</b> component may contain
 * a {@link wijmo.vue2.gauge.WjRange} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.BulletGraph} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjBulletGraph: any;
/**
 * Vue component for the {@link wijmo.gauge.RadialGauge} control.
 *
 * The <b>wj-radial-gauge</b> component may contain
 * a {@link wijmo.vue2.gauge.WjRange} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.RadialGauge} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.gauge.RadialGauge} control using Vue markup:
 *
 * <pre>&lt;wj-radial-gauge
 *     :min="0" :max="1000" :step="50" :is-read-only="false"
 *     format="c0" :thumb-size="12" :show-text="Value"
 *     :show-ranges="false"
 *     :value="sales"
 *     :value-changed="salesChanged"&gt;
 *     &lt;wj-range wj-property="face" :thickness="0.5"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range wj-property="pointer" :thickness="0.5"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range :min="0" :max="333" color="red"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range :min="333" :max="666" color="gold"&gt;
 *     &lt;/wj-range&gt;
 *     &lt;wj-range :min="666" :max="1000" color="green"&gt;
 *     &lt;/wj-range&gt;
 * &lt;/wj-radial-gauge&gt;</pre>
 *
 * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
 * to define the range of the gauge and to allow users to edit its value.
 * Next, it binds the gauge's <b>value</b> property to a <b>sales</b> variable
 * in the controller.
 *
 * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
 * properties to define the appearance of the gauge. Finally, the markup sets
 * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
 * that will control the color of the <b>value</b> range depending on the gauge's
 * current value.
 */
export declare var WjRadialGauge: any;
/**
 * Vue component for the {@link wijmo.gauge.Range} class.
 *
 * The <b>wj-range</b> component should be contained in
 * one of the following components:
 * {@link wijmo.vue2.gauge.WjLinearGauge}
 * , {@link wijmo.vue2.gauge.WjBulletGraph}
 *  or {@link wijmo.vue2.gauge.WjRadialGauge}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.gauge.Range} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjRange: any;
export declare function registerGauge(app: any): void;
