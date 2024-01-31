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
 * {@module wijmo.vue2.grid.grouppanel}
 * Contains Vue 2 and 3 components for the <b>wijmo.grid.grouppanel</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component for the {@link wijmo.grid.grouppanel.GroupPanel} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.grouppanel.GroupPanel} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and connect a
 * {@link wijmo.grid.grouppanel.GroupPanel} and a {@link wijmo.grid.FlexGrid}
 * in Vue:
 *
 * <pre>&lt;wj-group-panel
 *   id="thePanel"
 *   placeholder="Drag columns here to create Groups"&gt;
 * &lt;/wj-group-panel&gt;
 * &lt;wj-flex-grid
 *   id="theGrid"
 *   :items-source="data"&gt;
 * &lt;/wj-flex-grid&gt;</pre>
 *
 * <pre>var app = new Vue({
 *   el: '#app',
 *   // connect group panel and grid
 *   mounted: function () {
 *     var panel = wijmo.Control.getControl(document.getElementById('thePanel'));
 *     var grid = wijmo.Control.getControl(document.getElementById('theGrid'));
 *     panel.grid = grid;
 *   }
 * });</pre>
 */
export declare var WjGroupPanel: any;
export declare function registerGridGrouppanel(app: any): void;
