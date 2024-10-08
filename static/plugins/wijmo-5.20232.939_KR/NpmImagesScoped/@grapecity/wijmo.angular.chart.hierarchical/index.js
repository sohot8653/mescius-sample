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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)Object.hasOwnProperty.call(r,t)&&(e[t]=r[t]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),wijmo_angular_chart_1=require("@grapecity/wijmo.angular.chart"),mNg=__importStar(require("angular")),wjcChartHierarchical=__importStar(require("@grapecity/wijmo.chart.hierarchical")),wjNg=mNg,wijmoChartHierarchicalName="wj.chart.hierarchical";exports.ngModuleName=wijmoChartHierarchicalName;var wijmoChartHierarchical=wijmo_angular_base_1._registerNgModule(wijmoChartHierarchicalName);if(wijmo_angular_base_1.softRefChartHierarchical){wijmoChartHierarchical.directive("wjSunburst",[function(){return new WjSunburst}]);wijmoChartHierarchical.directive("wjTreeMap",[function(){return new WjTreeMap}])}var WjSunburst=function(r){__extends(WjSunburst,r);function WjSunburst(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjSunburst.prototype,"_controlConstructor",{get:function(){return wjcChartHierarchical.Sunburst},enumerable:!0,configurable:!0});return WjSunburst}(wijmo_angular_chart_1.WjFlexPie);exports.WjSunburst=WjSunburst;var WjTreeMap=function(r){__extends(WjTreeMap,r);function WjTreeMap(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjTreeMap.prototype,"_controlConstructor",{get:function(){return wjcChartHierarchical.TreeMap},enumerable:!0,configurable:!0});WjTreeMap.prototype._initProps=function(){r.prototype._initProps.call(this);wijmo_angular_base_1.MetaFactory.findProp("labelContent",this._props).customHandler=function(r,e,t,a,n){null!=t&&(e.dataLabel.content=t)}};return WjTreeMap}(wijmo_angular_chart_1.WjFlexChartBase);exports.WjTreeMap=WjTreeMap;