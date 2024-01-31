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

import{_registerNgModule,softRefGridMultirow}from"wijmo/wijmo.angular.base";import{WjFlexGrid}from"wijmo/wijmo.angular.grid";import*as mNg from"angular";import*as wjcGridMultirow from"wijmo/wijmo.grid.multirow";var wjNg=mNg;const wijmoGridMultirowName="wj.grid.multirow";export const ngModuleName="wj.grid.multirow";var wijmoGridMultirow=_registerNgModule("wj.grid.multirow");softRefGridMultirow()&&wijmoGridMultirow.directive("wjMultiRow",["$compile","$interpolate",function(r,o){return new WjMultiRow(r,o)}]);export class WjMultiRow extends WjFlexGrid{constructor(r,o){super(r,o)}get _controlConstructor(){return wjcGridMultirow.MultiRow}}