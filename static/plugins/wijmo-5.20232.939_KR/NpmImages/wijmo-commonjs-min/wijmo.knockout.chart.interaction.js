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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartInter=__importStar(require("wijmo/wijmo.chart.interaction")),wjKo=mKo,wjFlexChartRangeSelector=function(t){__extends(wjFlexChartRangeSelector,t);function wjFlexChartRangeSelector(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartRangeSelector.prototype._getControlConstructor=function(){return wjcChartInter.RangeSelector};return wjFlexChartRangeSelector}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartRangeSelector=wjFlexChartRangeSelector;var wjFlexChartGestures=function(t){__extends(wjFlexChartGestures,t);function wjFlexChartGestures(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartGestures.prototype._getControlConstructor=function(){return wjcChartInter.ChartGestures};return wjFlexChartGestures}(wijmo_knockout_base_1.WjBinding);exports.wjFlexChartGestures=wjFlexChartGestures;wjKo.bindingHandlers.wjFlexChartRangeSelector=new wjFlexChartRangeSelector;wjKo.bindingHandlers.wjFlexChartGestures=new wjFlexChartGestures;