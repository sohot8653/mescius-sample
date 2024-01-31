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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var a={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(a[e]=r[e]);a.default=r;return a};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_chart_1=require("wijmo/wijmo.angular.chart"),mNg=__importStar(require("angular")),wjcChartRadar=__importStar(require("wijmo/wijmo.chart.radar"));var wjNg=mNg;const wijmoChartRadarName="wj.chart.radar";exports.ngModuleName="wj.chart.radar";var wijmoChartRadar=wijmo_angular_base_1._registerNgModule("wj.chart.radar");if(wijmo_angular_base_1.softRefChartRadar()){wijmoChartRadar.directive("wjFlexRadar",[function(){return new WjFlexRadar}]);wijmoChartRadar.directive("wjFlexRadarSeries",[function(){return new WjFlexRadarSeries}]);wijmoChartRadar.directive("wjFlexRadarAxis",[function(){return new WjFlexRadarAxis}])}class WjFlexRadar extends wijmo_angular_chart_1.WjFlexChartCore{get _controlConstructor(){return wjcChartRadar.FlexRadar}}exports.WjFlexRadar=WjFlexRadar;class WjFlexRadarSeries extends wijmo_angular_chart_1.WjSeriesBase{constructor(){super();this.require="^wjFlexRadar";this.template='<div class="wjFlexRadarSeries" ng-transclude />'}get _controlConstructor(){return wjcChartRadar.FlexRadarSeries}}exports.WjFlexRadarSeries=WjFlexRadarSeries;class WjFlexRadarAxis extends wijmo_angular_base_1.WjDirective{constructor(){super();this.require=["?^wjFlexRadarSeries","?^wjFlexRadar"];this.template='<div class="wjFlexRadarAxis" />'}get _controlConstructor(){return wjcChartRadar.FlexRadarAxis}_initControl(r){return super._initControl(void 0)}}exports.WjFlexRadarAxis=WjFlexRadarAxis;