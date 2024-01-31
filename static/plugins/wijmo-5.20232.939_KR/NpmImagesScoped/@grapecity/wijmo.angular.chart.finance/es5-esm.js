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

var __extends=this&&this.__extends||function(){var extendStatics=function(n,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)r.hasOwnProperty(a)&&(n[a]=r[a])})(n,r)};return function(n,r){extendStatics(n,r);function __(){this.constructor=n}n.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{_registerNgModule,softRefChartFinance}from"@grapecity/wijmo.angular.base";import{WjSeriesBase,WjFlexChartCore}from"@grapecity/wijmo.angular.chart";import*as mNg from"angular";import*as wjcChartFinance from"@grapecity/wijmo.chart.finance";var wjNg=mNg,wijmoChartFinanceName="wj.chart.finance";export var ngModuleName=wijmoChartFinanceName;var wijmoChartFinance=_registerNgModule(wijmoChartFinanceName);if(softRefChartFinance()){wijmoChartFinance.directive("wjFinancialChart",[function(){return new WjFinancialChart}]);wijmoChartFinance.directive("wjFinancialChartSeries",[function(){return new WjFinancialChartSeries}])}var WjFinancialChart=function(n){__extends(WjFinancialChart,n);function WjFinancialChart(){return null!==n&&n.apply(this,arguments)||this}Object.defineProperty(WjFinancialChart.prototype,"_controlConstructor",{get:function(){return wjcChartFinance.FinancialChart},enumerable:!0,configurable:!0});return WjFinancialChart}(WjFlexChartCore);export{WjFinancialChart};var WjFinancialChartSeries=function(n){__extends(WjFinancialChartSeries,n);function WjFinancialChartSeries(){var r=n.call(this)||this;r.require="^wjFinancialChart";r.template='<div class="wjFinancialChartSeries" ng-transclude />';return r}Object.defineProperty(WjFinancialChartSeries.prototype,"_controlConstructor",{get:function(){return wjcChartFinance.FinancialSeries},enumerable:!0,configurable:!0});return WjFinancialChartSeries}(WjSeriesBase);export{WjFinancialChartSeries};