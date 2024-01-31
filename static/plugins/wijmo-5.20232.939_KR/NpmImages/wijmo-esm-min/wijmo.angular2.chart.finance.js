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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},__param=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";import*as wjcChartFinance from"wijmo/wijmo.chart.finance";var wjFinancialChartMeta={selector:"wj-financial-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjFinancialChartMeta};var WjFinancialChart=function(e){__extends(WjFinancialChart,e);function WjFinancialChart(t,n,i){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,i);a.created();return a}t=WjFinancialChart;WjFinancialChart.prototype.created=function(){};WjFinancialChart.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFinancialChart.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFinancialChart.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFinancialChart.prototype.addEventListener=function(t,n,i,a){var r=this;void 0===a&&(a=!1);var o=WjDirectiveBehavior,c=o.getZone(this);c&&o.outsideZoneEvents[n]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(r,t,n,i,a)})):e.prototype.addEventListener.call(this,t,n,i,a)};Object.defineProperty(WjFinancialChart.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0});Object.defineProperty(WjFinancialChart.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0});var t;WjFinancialChart.meta={outputs:wjFinancialChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}};return WjFinancialChart=t=__decorate([Component({selector:wjFinancialChartMeta.selector,template:wjFinancialChartMeta.template,inputs:wjFinancialChartMeta.inputs,outputs:wjFinancialChartMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef((function(){return t}))}].concat(wjFinancialChartMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFinancialChart)}(wjcChartFinance.FinancialChart);export{WjFinancialChart};var wjFinancialChartSeriesMeta={selector:"wj-financial-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFinancialChartSeriesMeta};var WjFinancialChartSeries=function(e){__extends(WjFinancialChartSeries,e);function WjFinancialChartSeries(t,n,i){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,i);a.created();return a}t=WjFinancialChartSeries;WjFinancialChartSeries.prototype.created=function(){};WjFinancialChartSeries.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFinancialChartSeries.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFinancialChartSeries.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFinancialChartSeries.meta={outputs:wjFinancialChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};return WjFinancialChartSeries=t=__decorate([Component({selector:wjFinancialChartSeriesMeta.selector,template:wjFinancialChartSeriesMeta.template,inputs:wjFinancialChartSeriesMeta.inputs,outputs:wjFinancialChartSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef((function(){return t}))}].concat(wjFinancialChartSeriesMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFinancialChartSeries)}(wjcChartFinance.FinancialSeries);export{WjFinancialChartSeries};var moduleExports=[WjFinancialChart,WjFinancialChartSeries],WjChartFinanceModule=function(){function WjChartFinanceModule(){}return WjChartFinanceModule=__decorate([NgModule({imports:[CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartFinanceModule)}();export{WjChartFinanceModule};