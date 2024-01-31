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

import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcChartAnalytics from"wijmo/wijmo.chart.analytics";class WjFlexChartTrendLineBehavior extends WjComponentBehavior{}WjFlexChartTrendLineBehavior.tag="wj-flex-chart-trend-line";WjFlexChartTrendLineBehavior.parentProp="series";WjFlexChartTrendLineBehavior.siblingId="series";WjFlexChartTrendLineBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","order","fitType"];WjFlexChartTrendLineBehavior.events=["initialized","rendering","rendered"];WjFlexChartTrendLineBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartTrendLineBehavior.classCtor=function(){return wjcChartAnalytics.TrendLine};export var WjFlexChartTrendLine=WjFlexChartTrendLineBehavior.register();function registerV3WjFlexChartTrendLine(e){e.component(WjFlexChartTrendLineBehavior.tag,WjFlexChartTrendLine)}class WjFlexChartMovingAverageBehavior extends WjComponentBehavior{}WjFlexChartMovingAverageBehavior.tag="wj-flex-chart-moving-average";WjFlexChartMovingAverageBehavior.parentProp="series";WjFlexChartMovingAverageBehavior.siblingId="series";WjFlexChartMovingAverageBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","period","type"];WjFlexChartMovingAverageBehavior.events=["initialized","rendering","rendered"];WjFlexChartMovingAverageBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartMovingAverageBehavior.classCtor=function(){return wjcChartAnalytics.MovingAverage};export var WjFlexChartMovingAverage=WjFlexChartMovingAverageBehavior.register();function registerV3WjFlexChartMovingAverage(e){e.component(WjFlexChartMovingAverageBehavior.tag,WjFlexChartMovingAverage)}class WjFlexChartYFunctionSeriesBehavior extends WjComponentBehavior{}WjFlexChartYFunctionSeriesBehavior.tag="wj-flex-chart-y-function-series";WjFlexChartYFunctionSeriesBehavior.parentProp="series";WjFlexChartYFunctionSeriesBehavior.siblingId="series";WjFlexChartYFunctionSeriesBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func"];WjFlexChartYFunctionSeriesBehavior.events=["initialized","rendering","rendered"];WjFlexChartYFunctionSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartYFunctionSeriesBehavior.classCtor=function(){return wjcChartAnalytics.YFunctionSeries};export var WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeriesBehavior.register();function registerV3WjFlexChartYFunctionSeries(e){e.component(WjFlexChartYFunctionSeriesBehavior.tag,WjFlexChartYFunctionSeries)}class WjFlexChartParametricFunctionSeriesBehavior extends WjComponentBehavior{}WjFlexChartParametricFunctionSeriesBehavior.tag="wj-flex-chart-parametric-function-series";WjFlexChartParametricFunctionSeriesBehavior.parentProp="series";WjFlexChartParametricFunctionSeriesBehavior.siblingId="series";WjFlexChartParametricFunctionSeriesBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func","xFunc","yFunc"];WjFlexChartParametricFunctionSeriesBehavior.events=["initialized","rendering","rendered"];WjFlexChartParametricFunctionSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartParametricFunctionSeriesBehavior.classCtor=function(){return wjcChartAnalytics.ParametricFunctionSeries};export var WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeriesBehavior.register();function registerV3WjFlexChartParametricFunctionSeries(e){e.component(WjFlexChartParametricFunctionSeriesBehavior.tag,WjFlexChartParametricFunctionSeries)}class WjFlexChartWaterfallBehavior extends WjComponentBehavior{}WjFlexChartWaterfallBehavior.tag="wj-flex-chart-waterfall";WjFlexChartWaterfallBehavior.parentProp="series";WjFlexChartWaterfallBehavior.siblingId="series";WjFlexChartWaterfallBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","relativeData","start","startLabel","showTotal","totalLabel","showIntermediateTotal","intermediateTotalPositions","intermediateTotalLabels","connectorLines","styles"];WjFlexChartWaterfallBehavior.events=["initialized","rendering","rendered"];WjFlexChartWaterfallBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartWaterfallBehavior.classCtor=function(){return wjcChartAnalytics.Waterfall};export var WjFlexChartWaterfall=WjFlexChartWaterfallBehavior.register();function registerV3WjFlexChartWaterfall(e){e.component(WjFlexChartWaterfallBehavior.tag,WjFlexChartWaterfall)}class WjFlexChartBoxWhiskerBehavior extends WjComponentBehavior{}WjFlexChartBoxWhiskerBehavior.tag="wj-flex-chart-box-whisker";WjFlexChartBoxWhiskerBehavior.parentProp="series";WjFlexChartBoxWhiskerBehavior.siblingId="series";WjFlexChartBoxWhiskerBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","quartileCalculation","groupWidth","gapWidth","showMeanLine","meanLineStyle","showMeanMarker","meanMarkerStyle","showInnerPoints","showOutliers"];WjFlexChartBoxWhiskerBehavior.events=["initialized","rendering","rendered"];WjFlexChartBoxWhiskerBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartBoxWhiskerBehavior.classCtor=function(){return wjcChartAnalytics.BoxWhisker};export var WjFlexChartBoxWhisker=WjFlexChartBoxWhiskerBehavior.register();function registerV3WjFlexChartBoxWhisker(e){e.component(WjFlexChartBoxWhiskerBehavior.tag,WjFlexChartBoxWhisker)}class WjFlexChartErrorBarBehavior extends WjComponentBehavior{}WjFlexChartErrorBarBehavior.tag="wj-flex-chart-error-bar";WjFlexChartErrorBarBehavior.parentProp="series";WjFlexChartErrorBarBehavior.siblingId="series";WjFlexChartErrorBarBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType","errorBarStyle","value","errorAmount","endStyle","direction"];WjFlexChartErrorBarBehavior.events=["initialized","rendering","rendered"];WjFlexChartErrorBarBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartErrorBarBehavior.classCtor=function(){return wjcChartAnalytics.ErrorBar};export var WjFlexChartErrorBar=WjFlexChartErrorBarBehavior.register();function registerV3WjFlexChartErrorBar(e){e.component(WjFlexChartErrorBarBehavior.tag,WjFlexChartErrorBar)}class WjFlexChartBreakEvenBehavior extends WjComponentBehavior{}WjFlexChartBreakEvenBehavior.tag="wj-flex-chart-break-even";WjFlexChartBreakEvenBehavior.parentProp="series";WjFlexChartBreakEvenBehavior.siblingId="series";WjFlexChartBreakEvenBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fixedCost","variableCost","salesPrice","styles"];WjFlexChartBreakEvenBehavior.events=["initialized","rendering","rendered"];WjFlexChartBreakEvenBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFlexChartBreakEvenBehavior.classCtor=function(){return wjcChartAnalytics.BreakEven};export var WjFlexChartBreakEven=WjFlexChartBreakEvenBehavior.register();function registerV3WjFlexChartBreakEven(e){e.component(WjFlexChartBreakEvenBehavior.tag,WjFlexChartBreakEven)}export function registerChartAnalytics(e){if(VueApi.isV3Plus){registerV3WjFlexChartTrendLine(e);registerV3WjFlexChartMovingAverage(e);registerV3WjFlexChartYFunctionSeries(e);registerV3WjFlexChartParametricFunctionSeries(e);registerV3WjFlexChartWaterfall(e);registerV3WjFlexChartBoxWhisker(e);registerV3WjFlexChartErrorBar(e);registerV3WjFlexChartBreakEven(e)}}