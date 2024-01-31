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

import{_registerNgModule,MetaFactory,softRefChartHierarchical}from"wijmo/wijmo.angular.base";import{WjFlexChartBase,WjFlexPie}from"wijmo/wijmo.angular.chart";import*as mNg from"angular";import*as wjcChartHierarchical from"wijmo/wijmo.chart.hierarchical";var wjNg=mNg;const wijmoChartHierarchicalName="wj.chart.hierarchical";export const ngModuleName="wj.chart.hierarchical";var wijmoChartHierarchical=_registerNgModule("wj.chart.hierarchical");if(softRefChartHierarchical){wijmoChartHierarchical.directive("wjSunburst",[function(){return new WjSunburst}]);wijmoChartHierarchical.directive("wjTreeMap",[function(){return new WjTreeMap}])}export class WjSunburst extends WjFlexPie{get _controlConstructor(){return wjcChartHierarchical.Sunburst}}export class WjTreeMap extends WjFlexChartBase{get _controlConstructor(){return wjcChartHierarchical.TreeMap}_initProps(){super._initProps();MetaFactory.findProp("labelContent",this._props).customHandler=function(r,a,e,t,i){null!=e&&(a.dataLabel.content=e)}}}