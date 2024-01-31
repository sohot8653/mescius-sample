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

"use strict";var WjFlexChartTrendLine_1,WjFlexChartMovingAverage_1,WjFlexChartYFunctionSeries_1,WjFlexChartParametricFunctionSeries_1,WjFlexChartWaterfall_1,WjFlexChartBoxWhisker_1,WjFlexChartErrorBar_1,WjFlexChartBreakEven_1,__decorate=this&&this.__decorate||function(e,t,r,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,r,o):a(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcChartAnalytics=__importStar(require("@grapecity/wijmo.chart.analytics"));var wjFlexChartTrendLineMeta={selector:"wj-flex-chart-trend-line",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","order","fitType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartTrendLineMeta=wjFlexChartTrendLineMeta;let WjFlexChartTrendLine=WjFlexChartTrendLine_1=class WjFlexChartTrendLine extends wjcChartAnalytics.TrendLine{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartTrendLine.meta={outputs:wjFlexChartTrendLineMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartTrendLine=WjFlexChartTrendLine_1=__decorate([core_1.Component({selector:wjFlexChartTrendLineMeta.selector,template:wjFlexChartTrendLineMeta.template,inputs:wjFlexChartTrendLineMeta.inputs,outputs:wjFlexChartTrendLineMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartTrendLine_1)},...wjFlexChartTrendLineMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartTrendLine);exports.WjFlexChartTrendLine=WjFlexChartTrendLine;var wjFlexChartMovingAverageMeta={selector:"wj-flex-chart-moving-average",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","period","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartMovingAverageMeta=wjFlexChartMovingAverageMeta;let WjFlexChartMovingAverage=WjFlexChartMovingAverage_1=class WjFlexChartMovingAverage extends wjcChartAnalytics.MovingAverage{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartMovingAverage.meta={outputs:wjFlexChartMovingAverageMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartMovingAverage=WjFlexChartMovingAverage_1=__decorate([core_1.Component({selector:wjFlexChartMovingAverageMeta.selector,template:wjFlexChartMovingAverageMeta.template,inputs:wjFlexChartMovingAverageMeta.inputs,outputs:wjFlexChartMovingAverageMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartMovingAverage_1)},...wjFlexChartMovingAverageMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartMovingAverage);exports.WjFlexChartMovingAverage=WjFlexChartMovingAverage;var wjFlexChartYFunctionSeriesMeta={selector:"wj-flex-chart-y-function-series",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartYFunctionSeriesMeta=wjFlexChartYFunctionSeriesMeta;let WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries_1=class WjFlexChartYFunctionSeries extends wjcChartAnalytics.YFunctionSeries{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartYFunctionSeries.meta={outputs:wjFlexChartYFunctionSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries_1=__decorate([core_1.Component({selector:wjFlexChartYFunctionSeriesMeta.selector,template:wjFlexChartYFunctionSeriesMeta.template,inputs:wjFlexChartYFunctionSeriesMeta.inputs,outputs:wjFlexChartYFunctionSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartYFunctionSeries_1)},...wjFlexChartYFunctionSeriesMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartYFunctionSeries);exports.WjFlexChartYFunctionSeries=WjFlexChartYFunctionSeries;var wjFlexChartParametricFunctionSeriesMeta={selector:"wj-flex-chart-parametric-function-series",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","sampleCount","min","max","func","xFunc","yFunc"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartParametricFunctionSeriesMeta=wjFlexChartParametricFunctionSeriesMeta;let WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries_1=class WjFlexChartParametricFunctionSeries extends wjcChartAnalytics.ParametricFunctionSeries{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartParametricFunctionSeries.meta={outputs:wjFlexChartParametricFunctionSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries_1=__decorate([core_1.Component({selector:wjFlexChartParametricFunctionSeriesMeta.selector,template:wjFlexChartParametricFunctionSeriesMeta.template,inputs:wjFlexChartParametricFunctionSeriesMeta.inputs,outputs:wjFlexChartParametricFunctionSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartParametricFunctionSeries_1)},...wjFlexChartParametricFunctionSeriesMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartParametricFunctionSeries);exports.WjFlexChartParametricFunctionSeries=WjFlexChartParametricFunctionSeries;var wjFlexChartWaterfallMeta={selector:"wj-flex-chart-waterfall",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","relativeData","start","startLabel","showTotal","totalLabel","showIntermediateTotal","intermediateTotalPositions","intermediateTotalLabels","connectorLines","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartWaterfallMeta=wjFlexChartWaterfallMeta;let WjFlexChartWaterfall=WjFlexChartWaterfall_1=class WjFlexChartWaterfall extends wjcChartAnalytics.Waterfall{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartWaterfall.meta={outputs:wjFlexChartWaterfallMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartWaterfall=WjFlexChartWaterfall_1=__decorate([core_1.Component({selector:wjFlexChartWaterfallMeta.selector,template:wjFlexChartWaterfallMeta.template,inputs:wjFlexChartWaterfallMeta.inputs,outputs:wjFlexChartWaterfallMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartWaterfall_1)},...wjFlexChartWaterfallMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartWaterfall);exports.WjFlexChartWaterfall=WjFlexChartWaterfall;var wjFlexChartBoxWhiskerMeta={selector:"wj-flex-chart-box-whisker",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","quartileCalculation","groupWidth","gapWidth","showMeanLine","meanLineStyle","showMeanMarker","meanMarkerStyle","showInnerPoints","showOutliers"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartBoxWhiskerMeta=wjFlexChartBoxWhiskerMeta;let WjFlexChartBoxWhisker=WjFlexChartBoxWhisker_1=class WjFlexChartBoxWhisker extends wjcChartAnalytics.BoxWhisker{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartBoxWhisker.meta={outputs:wjFlexChartBoxWhiskerMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBoxWhisker=WjFlexChartBoxWhisker_1=__decorate([core_1.Component({selector:wjFlexChartBoxWhiskerMeta.selector,template:wjFlexChartBoxWhiskerMeta.template,inputs:wjFlexChartBoxWhiskerMeta.inputs,outputs:wjFlexChartBoxWhiskerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartBoxWhisker_1)},...wjFlexChartBoxWhiskerMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartBoxWhisker);exports.WjFlexChartBoxWhisker=WjFlexChartBoxWhisker;var wjFlexChartErrorBarMeta={selector:"wj-flex-chart-error-bar",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType","errorBarStyle","value","errorAmount","endStyle","direction"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartErrorBarMeta=wjFlexChartErrorBarMeta;let WjFlexChartErrorBar=WjFlexChartErrorBar_1=class WjFlexChartErrorBar extends wjcChartAnalytics.ErrorBar{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartErrorBar.meta={outputs:wjFlexChartErrorBarMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartErrorBar=WjFlexChartErrorBar_1=__decorate([core_1.Component({selector:wjFlexChartErrorBarMeta.selector,template:wjFlexChartErrorBarMeta.template,inputs:wjFlexChartErrorBarMeta.inputs,outputs:wjFlexChartErrorBarMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartErrorBar_1)},...wjFlexChartErrorBarMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartErrorBar);exports.WjFlexChartErrorBar=WjFlexChartErrorBar;var wjFlexChartBreakEvenMeta={selector:"wj-flex-chart-break-even",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fixedCost","variableCost","salesPrice","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};exports.wjFlexChartBreakEvenMeta=wjFlexChartBreakEvenMeta;let WjFlexChartBreakEven=WjFlexChartBreakEven_1=class WjFlexChartBreakEven extends wjcChartAnalytics.BreakEven{constructor(e,t,r){super();this.isInitialized=!1;this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartBreakEven.meta={outputs:wjFlexChartBreakEvenMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};WjFlexChartBreakEven=WjFlexChartBreakEven_1=__decorate([core_1.Component({selector:wjFlexChartBreakEvenMeta.selector,template:wjFlexChartBreakEvenMeta.template,inputs:wjFlexChartBreakEvenMeta.inputs,outputs:wjFlexChartBreakEvenMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexChartBreakEven_1)},...wjFlexChartBreakEvenMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartBreakEven);exports.WjFlexChartBreakEven=WjFlexChartBreakEven;let moduleExports=[WjFlexChartTrendLine,WjFlexChartMovingAverage,WjFlexChartYFunctionSeries,WjFlexChartParametricFunctionSeries,WjFlexChartWaterfall,WjFlexChartBoxWhisker,WjFlexChartErrorBar,WjFlexChartBreakEven],WjChartAnalyticsModule=class WjChartAnalyticsModule{};WjChartAnalyticsModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjChartAnalyticsModule);exports.WjChartAnalyticsModule=WjChartAnalyticsModule;