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

import{WjDirective,_registerNgModule,softRefChartRadar}from"@grapecity/wijmo.angular.base";import{WjFlexChartCore,WjSeriesBase}from"@grapecity/wijmo.angular.chart";import*as mNg from"angular";import*as wjcChartRadar from"@grapecity/wijmo.chart.radar";var wjNg=mNg;const wijmoChartRadarName="wj.chart.radar";export const ngModuleName="wj.chart.radar";var wijmoChartRadar=_registerNgModule("wj.chart.radar");if(softRefChartRadar()){wijmoChartRadar.directive("wjFlexRadar",[function(){return new WjFlexRadar}]);wijmoChartRadar.directive("wjFlexRadarSeries",[function(){return new WjFlexRadarSeries}]);wijmoChartRadar.directive("wjFlexRadarAxis",[function(){return new WjFlexRadarAxis}])}export class WjFlexRadar extends WjFlexChartCore{get _controlConstructor(){return wjcChartRadar.FlexRadar}}export class WjFlexRadarSeries extends WjSeriesBase{constructor(){super();this.require="^wjFlexRadar";this.template='<div class="wjFlexRadarSeries" ng-transclude />'}get _controlConstructor(){return wjcChartRadar.FlexRadarSeries}}export class WjFlexRadarAxis extends WjDirective{constructor(){super();this.require=["?^wjFlexRadarSeries","?^wjFlexRadar"];this.template='<div class="wjFlexRadarAxis" />'}get _controlConstructor(){return wjcChartRadar.FlexRadarAxis}_initControl(r){return super._initControl(void 0)}}