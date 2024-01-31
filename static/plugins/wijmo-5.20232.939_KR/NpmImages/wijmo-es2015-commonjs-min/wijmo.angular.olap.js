﻿/*!
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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);t.default=r;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_grid_1=require("wijmo/wijmo.angular.grid"),mNg=__importStar(require("angular")),wjcOlap=__importStar(require("wijmo/wijmo.olap"));var wjNg=mNg;const wijmoOlapName="wj.olap";exports.ngModuleName="wj.olap";var wijmoOlap=wijmo_angular_base_1._registerNgModule("wj.olap");if(wijmo_angular_base_1.softRefOlap()&&wijmo_angular_base_1.softRefOlap().PivotGrid){wijmoOlap.directive("wjPivotGrid",["$compile","$interpolate",function(r,t){return new WjPivotGrid(r,t)}]);wijmoOlap.directive("wjPivotChart",[function(){return new WjPivotChart}]);wijmoOlap.directive("wjPivotPanel",[function(){return new WjPivotPanel}]);wijmoOlap.directive("wjSlicer",[function(){return new WjSlicer}])}class WjPivotGrid extends wijmo_angular_grid_1.WjFlexGrid{constructor(r,t){super(r,t)}get _controlConstructor(){return wjcOlap.PivotGrid}}exports.WjPivotGrid=WjPivotGrid;class WjPivotChart extends wijmo_angular_base_1.WjDirective{get _controlConstructor(){return wjcOlap.PivotChart}}exports.WjPivotChart=WjPivotChart;class WjPivotPanel extends wijmo_angular_base_1.WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />"}get _controlConstructor(){return wjcOlap.PivotPanel}}exports.WjPivotPanel=WjPivotPanel;class WjSlicer extends wijmo_angular_base_1.WjDirective{get _controlConstructor(){return wjcOlap.Slicer}}exports.WjSlicer=WjSlicer;