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

import{MetaFactory}from"@grapecity/wijmo.knockout.base";import{WjSeriesBase}from"@grapecity/wijmo.knockout.chart";import*as mKo from"knockout";import*as wjcChartAnal from"@grapecity/wijmo.chart.analytics";var wjKo=mKo;export class WjTrendLineBase extends WjSeriesBase{_getControlConstructor(){return wjcChartAnal.TrendLineBase}}export class wjFlexChartTrendLine extends WjTrendLineBase{_getControlConstructor(){return wjcChartAnal.TrendLine}}export class wjFlexChartMovingAverage extends WjTrendLineBase{_getControlConstructor(){return wjcChartAnal.MovingAverage}}export class wjFlexChartYFunctionSeries extends WjTrendLineBase{_getControlConstructor(){return wjcChartAnal.YFunctionSeries}}export class wjFlexChartParametricFunctionSeries extends WjTrendLineBase{_getControlConstructor(){return wjcChartAnal.ParametricFunctionSeries}_initialize(){super._initialize();MetaFactory.findProp("func",this._metaData.props).updateControl=function(e,r,t,n,a){null!=a&&(t.xFunc=a);return!0}}}export class wjFlexChartWaterfall extends WjSeriesBase{_getControlConstructor(){return wjcChartAnal.Waterfall}}wjKo.bindingHandlers.wjFlexChartTrendLine=new wjFlexChartTrendLine;wjKo.bindingHandlers.wjFlexChartMovingAverage=new wjFlexChartMovingAverage;wjKo.bindingHandlers.wjFlexChartYFunctionSeries=new wjFlexChartYFunctionSeries;wjKo.bindingHandlers.wjFlexChartParametricFunctionSeries=new wjFlexChartParametricFunctionSeries;wjKo.bindingHandlers.wjFlexChartWaterfall=new wjFlexChartWaterfall;