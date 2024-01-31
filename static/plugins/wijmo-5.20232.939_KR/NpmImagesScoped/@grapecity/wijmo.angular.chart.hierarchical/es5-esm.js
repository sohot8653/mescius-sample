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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])})(r,t)};return function(r,t){extendStatics(r,t);function __(){this.constructor=r}r.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{_registerNgModule,MetaFactory,softRefChartHierarchical}from"@grapecity/wijmo.angular.base";import{WjFlexChartBase,WjFlexPie}from"@grapecity/wijmo.angular.chart";import*as mNg from"angular";import*as wjcChartHierarchical from"@grapecity/wijmo.chart.hierarchical";var wjNg=mNg,wijmoChartHierarchicalName="wj.chart.hierarchical";export var ngModuleName=wijmoChartHierarchicalName;var wijmoChartHierarchical=_registerNgModule(wijmoChartHierarchicalName);if(softRefChartHierarchical){wijmoChartHierarchical.directive("wjSunburst",[function(){return new WjSunburst}]);wijmoChartHierarchical.directive("wjTreeMap",[function(){return new WjTreeMap}])}var WjSunburst=function(r){__extends(WjSunburst,r);function WjSunburst(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjSunburst.prototype,"_controlConstructor",{get:function(){return wjcChartHierarchical.Sunburst},enumerable:!0,configurable:!0});return WjSunburst}(WjFlexPie);export{WjSunburst};var WjTreeMap=function(r){__extends(WjTreeMap,r);function WjTreeMap(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjTreeMap.prototype,"_controlConstructor",{get:function(){return wjcChartHierarchical.TreeMap},enumerable:!0,configurable:!0});WjTreeMap.prototype._initProps=function(){r.prototype._initProps.call(this);MetaFactory.findProp("labelContent",this._props).customHandler=function(r,t,e,a,n){null!=e&&(t.dataLabel.content=e)}};return WjTreeMap}(WjFlexChartBase);export{WjTreeMap};