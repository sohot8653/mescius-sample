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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefChartAnimation}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";var wjNg=mNg,wijmoChartAnimationName="wj.chart.animation";export var ngModuleName=wijmoChartAnimationName;var wijmoChartAnimation=_registerNgModule(wijmoChartAnimationName);softRefChartAnimation()&&wijmoChartAnimation.directive("wjFlexChartAnimation",[function(){return new WjFlexChartAnimation}]);var WjFlexChartAnimation=function(t){__extends(WjFlexChartAnimation,t);function WjFlexChartAnimation(){var n=t.call(this)||this;n.require=["?^wjFlexChart","?^wjFlexPie","?^wjSunburst","?^wjFinancialChart","?^wjFlexRadar"];return n}Object.defineProperty(WjFlexChartAnimation.prototype,"_controlConstructor",{get:function(){return wjcChartAnimation.ChartAnimation},enumerable:!0,configurable:!0});return WjFlexChartAnimation}(WjDirective);export{WjFlexChartAnimation};