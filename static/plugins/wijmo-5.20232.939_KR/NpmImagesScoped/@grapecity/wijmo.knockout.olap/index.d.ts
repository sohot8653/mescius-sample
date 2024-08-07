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
* {@module wijmo.knockout.olap}
* KnockoutJS bindings for wijmo.olap module
*/
/**
 *
 */
export declare var ___keepComment: any;
import { WjBinding } from '@grapecity/wijmo.knockout.base';
import { wjFlexGrid } from '@grapecity/wijmo.knockout.grid';
/**
 * KnockoutJS binding for the {@link PivotGrid} object.
 * Use the {@link wjPivotGrid} binding to add {@link PivotGrid} controls to your
 * KnockoutJS applications. For example:
 *  &lt;div data-bind="wjPivotGrid:
 *      {
 *          itemsSource: thePanel
 *      }"&gt;
 *  &lt;/div&gt;
 *
 * The <b>wjPivotGrid</b> binding supports all read-write properties and events of
 * the {@link PivotGrid} class.
 *
 */
export declare class wjPivotGrid extends wjFlexGrid {
    _getControlConstructor(): any;
}
/**
 * KnockoutJS binding for the {@link PivotChart} object.
 * Use the {@link wjPivotChart} binding to add {@link PivotChart} controls to your
 * KnockoutJS applications. For example:
 *  &lt;div data-bind="wjPivotChart:
 *      {
 *          itemsSource: thePanel
 *      }"&gt;
 *  &lt;/div&gt;
 *
 * The <b>wjPivotChart</b> binding supports all read-write properties and events of
 * the {@link PivotChart} class.
 *
 */
export declare class wjPivotChart extends WjBinding {
    _getControlConstructor(): any;
}
/**
 * KnockoutJS binding for the {@link PivotPanel} object.
 * Use the {@link wjPivotPanel} binding to add {@link PivotPanel} controls to your
 * KnockoutJS applications. For example:
 *  &lt;div data-bind="wjPivotPanel:
 *      {
 *           itemsSource: rawData,
 *           control: thePanel,
 *           initialized: init
 *      }"&gt;
 *  &lt;/div&gt;
 *
 * The <b>wjPivotPanel</b> binding supports all read-write properties and events of
 * the {@link PivotPanel} class.
 *
 */
export declare class wjPivotPanel extends WjBinding {
    _getControlConstructor(): any;
}
/**
 * KnockoutJS binding for the {@link Slicer} object.
 * Use the {@link wjSlicer} binding to add {@link Slicer} controls to your
 * KnockoutJS applications. For example:
 *  &lt;div data-bind="wjSlicer:
 *      {
 *           field: theField,
 *           showHeader: true
 *      }"&gt;
 *  &lt;/div&gt;
 *
 * The <b>wjSlicer</b> binding supports all read-write properties and events of
 * the {@link Slicer} class.
 *
 */
export declare class wjSlicer extends WjBinding {
    _getControlConstructor(): any;
}
