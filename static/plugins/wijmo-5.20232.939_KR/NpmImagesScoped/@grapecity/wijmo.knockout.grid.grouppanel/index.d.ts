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
* {@module wijmo.knockout.grid.grouppanel}
* KnockoutJS bindings for wijmo.grid.grouppanel module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjBinding } from '@grapecity/wijmo.knockout.base';
/**
 * KnockoutJS binding for the {@link FlexGrid} {@link GroupPanel} control.
 *
 * The <b>wjGroupPanel</b> binding should be connected to the <b>FlexGrid</b> control using the <b>grid</b> property.
 * For example:
 *
 * <pre>&lt;p&gt;Here is a FlexGrid control with GroupPanel:&lt;/p&gt;
 * &nbsp;
 * &lt;div data-bind="wjGroupPanel: { grid: flex(), placeholder: 'Drag columns here to create groups.' }"&gt;&lt;/div&gt;
 * &nbsp;
 * &lt;div data-bind="wjFlexGrid: { control: flex, itemsSource: data }"&gt;
 *     &lt;div data-bind="wjFlexGridColumn: {
 *         header: 'Country',
 *         binding: 'country',
 *         width: '*' }"&gt;
 *     &lt;/div&gt;
 *     &lt;div data-bind="wjFlexGridColumn: {
 *         header: 'Date',
 *         binding: 'date' }"&gt;
 *     &lt;/div&gt;
 *     &lt;div data-bind="wjFlexGridColumn: {
 *         header: 'Revenue',
 *         binding: 'amount',
 *         format: 'n0' }"&gt;
 *     &lt;/div&gt;
 *     &lt;div data-bind="wjFlexGridColumn: {
 *         header: 'Active',
 *         binding: 'active' }"&gt;
 *     &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *
 * The <b>wjGroupPanel</b> binding supports all read-write properties and events of
 * the {@link GroupPanel} class.
 *
 */
export declare class wjGroupPanel extends WjBinding {
    _getControlConstructor(): any;
}
