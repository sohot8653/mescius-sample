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

import * as ɵngcc0 from '@angular/core';
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,i,r){var a,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcChartFinanceAnalytics from"@grapecity/wijmo.chart.finance.analytics";var wjFlexChartFibonacciMeta={selector:"wj-flex-chart-fibonacci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","high","low","labelPosition","levels","minX","maxX","uptrend"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciMeta};var WjFlexChartFibonacci=function(e){__extends(WjFlexChartFibonacci,e);function WjFlexChartFibonacci(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacci;WjFlexChartFibonacci.prototype.created=function(){};WjFlexChartFibonacci.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacci.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacci.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacci.meta={outputs:wjFlexChartFibonacciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartFibonacci.ɵfac = function WjFlexChartFibonacci_Factory(t) { return new (t || WjFlexChartFibonacci)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacci.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacci, selectors: [["wj-flex-chart-fibonacci"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", high: "high", low: "low", labelPosition: "labelPosition", levels: "levels", minX: "minX", maxX: "maxX", uptrend: "uptrend" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartFibonacci_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacci, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciMeta.selector, template: wjFlexChartFibonacciMeta.template, inputs: wjFlexChartFibonacciMeta.inputs, outputs: wjFlexChartFibonacciMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartFibonacci=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacci)}(wjcChartFinanceAnalytics.Fibonacci);export{WjFlexChartFibonacci};var wjFlexChartFibonacciArcsMeta={selector:"wj-flex-chart-fibonacci-arcs",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciArcsMeta};var WjFlexChartFibonacciArcs=function(e){__extends(WjFlexChartFibonacciArcs,e);function WjFlexChartFibonacciArcs(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacciArcs;WjFlexChartFibonacciArcs.prototype.created=function(){};WjFlexChartFibonacciArcs.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacciArcs.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacciArcs.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacciArcs.meta={outputs:wjFlexChartFibonacciArcsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartFibonacciArcs.ɵfac = function WjFlexChartFibonacciArcs_Factory(t) { return new (t || WjFlexChartFibonacciArcs)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacciArcs.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacciArcs, selectors: [["wj-flex-chart-fibonacci-arcs"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", start: "start", end: "end", labelPosition: "labelPosition", levels: "levels" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciArcsMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartFibonacciArcs_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacciArcs, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciArcsMeta.selector, template: wjFlexChartFibonacciArcsMeta.template, inputs: wjFlexChartFibonacciArcsMeta.inputs, outputs: wjFlexChartFibonacciArcsMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciArcsMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartFibonacciArcs=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacciArcs)}(wjcChartFinanceAnalytics.FibonacciArcs);export{WjFlexChartFibonacciArcs};var wjFlexChartFibonacciFansMeta={selector:"wj-flex-chart-fibonacci-fans",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","start","end","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciFansMeta};var WjFlexChartFibonacciFans=function(e){__extends(WjFlexChartFibonacciFans,e);function WjFlexChartFibonacciFans(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacciFans;WjFlexChartFibonacciFans.prototype.created=function(){};WjFlexChartFibonacciFans.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacciFans.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacciFans.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacciFans.meta={outputs:wjFlexChartFibonacciFansMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartFibonacciFans.ɵfac = function WjFlexChartFibonacciFans_Factory(t) { return new (t || WjFlexChartFibonacciFans)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacciFans.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacciFans, selectors: [["wj-flex-chart-fibonacci-fans"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", start: "start", end: "end", labelPosition: "labelPosition", levels: "levels" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciFansMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartFibonacciFans_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacciFans, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciFansMeta.selector, template: wjFlexChartFibonacciFansMeta.template, inputs: wjFlexChartFibonacciFansMeta.inputs, outputs: wjFlexChartFibonacciFansMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciFansMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartFibonacciFans=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacciFans)}(wjcChartFinanceAnalytics.FibonacciFans);export{WjFlexChartFibonacciFans};var wjFlexChartFibonacciTimeZonesMeta={selector:"wj-flex-chart-fibonacci-time-zones",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","startX","endX","labelPosition","levels"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartFibonacciTimeZonesMeta};var WjFlexChartFibonacciTimeZones=function(e){__extends(WjFlexChartFibonacciTimeZones,e);function WjFlexChartFibonacciTimeZones(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartFibonacciTimeZones;WjFlexChartFibonacciTimeZones.prototype.created=function(){};WjFlexChartFibonacciTimeZones.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartFibonacciTimeZones.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartFibonacciTimeZones.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartFibonacciTimeZones.meta={outputs:wjFlexChartFibonacciTimeZonesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartFibonacciTimeZones.ɵfac = function WjFlexChartFibonacciTimeZones_Factory(t) { return new (t || WjFlexChartFibonacciTimeZones)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartFibonacciTimeZones.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartFibonacciTimeZones, selectors: [["wj-flex-chart-fibonacci-time-zones"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", startX: "startX", endX: "endX", labelPosition: "labelPosition", levels: "levels" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciTimeZonesMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartFibonacciTimeZones_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartFibonacciTimeZones, [{
        type: Component,
        args: [{ selector: wjFlexChartFibonacciTimeZonesMeta.selector, template: wjFlexChartFibonacciTimeZonesMeta.template, inputs: wjFlexChartFibonacciTimeZonesMeta.inputs, outputs: wjFlexChartFibonacciTimeZonesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartFibonacciTimeZonesMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartFibonacciTimeZones=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartFibonacciTimeZones)}(wjcChartFinanceAnalytics.FibonacciTimeZones);export{WjFlexChartFibonacciTimeZones};var wjFlexChartAtrMeta={selector:"wj-flex-chart-atr",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartAtrMeta};var WjFlexChartAtr=function(e){__extends(WjFlexChartAtr,e);function WjFlexChartAtr(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartAtr;WjFlexChartAtr.prototype.created=function(){};WjFlexChartAtr.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartAtr.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartAtr.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartAtr.meta={outputs:wjFlexChartAtrMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartAtr.ɵfac = function WjFlexChartAtr_Factory(t) { return new (t || WjFlexChartAtr)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartAtr.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartAtr, selectors: [["wj-flex-chart-atr"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartAtrMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartAtr_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartAtr, [{
        type: Component,
        args: [{ selector: wjFlexChartAtrMeta.selector, template: wjFlexChartAtrMeta.template, inputs: wjFlexChartAtrMeta.inputs, outputs: wjFlexChartAtrMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartAtrMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartAtr=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAtr)}(wjcChartFinanceAnalytics.ATR);export{WjFlexChartAtr};var wjFlexChartCciMeta={selector:"wj-flex-chart-cci",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","constant"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartCciMeta};var WjFlexChartCci=function(e){__extends(WjFlexChartCci,e);function WjFlexChartCci(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartCci;WjFlexChartCci.prototype.created=function(){};WjFlexChartCci.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartCci.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartCci.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartCci.meta={outputs:wjFlexChartCciMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartCci.ɵfac = function WjFlexChartCci_Factory(t) { return new (t || WjFlexChartCci)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartCci.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartCci, selectors: [["wj-flex-chart-cci"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period", constant: "constant" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartCciMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartCci_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartCci, [{
        type: Component,
        args: [{ selector: wjFlexChartCciMeta.selector, template: wjFlexChartCciMeta.template, inputs: wjFlexChartCciMeta.inputs, outputs: wjFlexChartCciMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartCciMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartCci=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartCci)}(wjcChartFinanceAnalytics.CCI);export{WjFlexChartCci};var wjFlexChartRsiMeta={selector:"wj-flex-chart-rsi",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartRsiMeta};var WjFlexChartRsi=function(e){__extends(WjFlexChartRsi,e);function WjFlexChartRsi(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartRsi;WjFlexChartRsi.prototype.created=function(){};WjFlexChartRsi.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartRsi.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartRsi.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartRsi.meta={outputs:wjFlexChartRsiMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartRsi.ɵfac = function WjFlexChartRsi_Factory(t) { return new (t || WjFlexChartRsi)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartRsi.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartRsi, selectors: [["wj-flex-chart-rsi"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartRsiMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartRsi_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartRsi, [{
        type: Component,
        args: [{ selector: wjFlexChartRsiMeta.selector, template: wjFlexChartRsiMeta.template, inputs: wjFlexChartRsiMeta.inputs, outputs: wjFlexChartRsiMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartRsiMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartRsi=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartRsi)}(wjcChartFinanceAnalytics.RSI);export{WjFlexChartRsi};var wjFlexChartWilliamsRMeta={selector:"wj-flex-chart-williams-r",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartWilliamsRMeta};var WjFlexChartWilliamsR=function(e){__extends(WjFlexChartWilliamsR,e);function WjFlexChartWilliamsR(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartWilliamsR;WjFlexChartWilliamsR.prototype.created=function(){};WjFlexChartWilliamsR.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartWilliamsR.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartWilliamsR.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartWilliamsR.meta={outputs:wjFlexChartWilliamsRMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartWilliamsR.ɵfac = function WjFlexChartWilliamsR_Factory(t) { return new (t || WjFlexChartWilliamsR)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartWilliamsR.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartWilliamsR, selectors: [["wj-flex-chart-williams-r"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartWilliamsRMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartWilliamsR_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartWilliamsR, [{
        type: Component,
        args: [{ selector: wjFlexChartWilliamsRMeta.selector, template: wjFlexChartWilliamsRMeta.template, inputs: wjFlexChartWilliamsRMeta.inputs, outputs: wjFlexChartWilliamsRMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartWilliamsRMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartWilliamsR=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartWilliamsR)}(wjcChartFinanceAnalytics.WilliamsR);export{WjFlexChartWilliamsR};var wjFlexChartMacdMeta={selector:"wj-flex-chart-macd",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartMacdMeta};var WjFlexChartMacd=function(e){__extends(WjFlexChartMacd,e);function WjFlexChartMacd(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartMacd;WjFlexChartMacd.prototype.created=function(){};WjFlexChartMacd.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartMacd.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartMacd.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartMacd.meta={outputs:wjFlexChartMacdMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartMacd.ɵfac = function WjFlexChartMacd_Factory(t) { return new (t || WjFlexChartMacd)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartMacd.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartMacd, selectors: [["wj-flex-chart-macd"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", fastPeriod: "fastPeriod", slowPeriod: "slowPeriod", smoothingPeriod: "smoothingPeriod", styles: "styles" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartMacdMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartMacd_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartMacd, [{
        type: Component,
        args: [{ selector: wjFlexChartMacdMeta.selector, template: wjFlexChartMacdMeta.template, inputs: wjFlexChartMacdMeta.inputs, outputs: wjFlexChartMacdMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartMacdMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartMacd=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartMacd)}(wjcChartFinanceAnalytics.Macd);export{WjFlexChartMacd};var wjFlexChartMacdHistogramMeta={selector:"wj-flex-chart-macd-histogram",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","fastPeriod","slowPeriod","smoothingPeriod"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartMacdHistogramMeta};var WjFlexChartMacdHistogram=function(e){__extends(WjFlexChartMacdHistogram,e);function WjFlexChartMacdHistogram(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartMacdHistogram;WjFlexChartMacdHistogram.prototype.created=function(){};WjFlexChartMacdHistogram.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartMacdHistogram.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartMacdHistogram.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartMacdHistogram.meta={outputs:wjFlexChartMacdHistogramMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartMacdHistogram.ɵfac = function WjFlexChartMacdHistogram_Factory(t) { return new (t || WjFlexChartMacdHistogram)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartMacdHistogram.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartMacdHistogram, selectors: [["wj-flex-chart-macd-histogram"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", fastPeriod: "fastPeriod", slowPeriod: "slowPeriod", smoothingPeriod: "smoothingPeriod" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartMacdHistogramMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartMacdHistogram_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartMacdHistogram, [{
        type: Component,
        args: [{ selector: wjFlexChartMacdHistogramMeta.selector, template: wjFlexChartMacdHistogramMeta.template, inputs: wjFlexChartMacdHistogramMeta.inputs, outputs: wjFlexChartMacdHistogramMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartMacdHistogramMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartMacdHistogram=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartMacdHistogram)}(wjcChartFinanceAnalytics.MacdHistogram);export{WjFlexChartMacdHistogram};var wjFlexChartStochasticMeta={selector:"wj-flex-chart-stochastic",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","dPeriod","kPeriod","smoothingPeriod","styles"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartStochasticMeta};var WjFlexChartStochastic=function(e){__extends(WjFlexChartStochastic,e);function WjFlexChartStochastic(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartStochastic;WjFlexChartStochastic.prototype.created=function(){};WjFlexChartStochastic.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartStochastic.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartStochastic.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartStochastic.meta={outputs:wjFlexChartStochasticMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartStochastic.ɵfac = function WjFlexChartStochastic_Factory(t) { return new (t || WjFlexChartStochastic)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartStochastic.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartStochastic, selectors: [["wj-flex-chart-stochastic"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", dPeriod: "dPeriod", kPeriod: "kPeriod", smoothingPeriod: "smoothingPeriod", styles: "styles" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartStochasticMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartStochastic_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartStochastic, [{
        type: Component,
        args: [{ selector: wjFlexChartStochasticMeta.selector, template: wjFlexChartStochasticMeta.template, inputs: wjFlexChartStochasticMeta.inputs, outputs: wjFlexChartStochasticMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartStochasticMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartStochastic=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartStochastic)}(wjcChartFinanceAnalytics.Stochastic);export{WjFlexChartStochastic};var wjFlexChartBollingerBandsMeta={selector:"wj-flex-chart-bollinger-bands",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","multiplier"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartBollingerBandsMeta};var WjFlexChartBollingerBands=function(e){__extends(WjFlexChartBollingerBands,e);function WjFlexChartBollingerBands(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartBollingerBands;WjFlexChartBollingerBands.prototype.created=function(){};WjFlexChartBollingerBands.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartBollingerBands.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartBollingerBands.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartBollingerBands.meta={outputs:wjFlexChartBollingerBandsMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartBollingerBands.ɵfac = function WjFlexChartBollingerBands_Factory(t) { return new (t || WjFlexChartBollingerBands)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartBollingerBands.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartBollingerBands, selectors: [["wj-flex-chart-bollinger-bands"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period", multiplier: "multiplier" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartBollingerBandsMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartBollingerBands_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartBollingerBands, [{
        type: Component,
        args: [{ selector: wjFlexChartBollingerBandsMeta.selector, template: wjFlexChartBollingerBandsMeta.template, inputs: wjFlexChartBollingerBandsMeta.inputs, outputs: wjFlexChartBollingerBandsMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartBollingerBandsMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartBollingerBands=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartBollingerBands)}(wjcChartFinanceAnalytics.BollingerBands);export{WjFlexChartBollingerBands};var wjFlexChartEnvelopesMeta={selector:"wj-flex-chart-envelopes",template:"",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","period","size","type"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export{wjFlexChartEnvelopesMeta};var WjFlexChartEnvelopes=function(e){__extends(WjFlexChartEnvelopes,e);function WjFlexChartEnvelopes(t,i,r){var a=e.call(this)||this;a.isInitialized=!1;a.wjProperty="series";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,i,r);a.created();return a}t=WjFlexChartEnvelopes;WjFlexChartEnvelopes.prototype.created=function(){};WjFlexChartEnvelopes.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartEnvelopes.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartEnvelopes.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartEnvelopes.meta={outputs:wjFlexChartEnvelopesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"};
WjFlexChartEnvelopes.ɵfac = function WjFlexChartEnvelopes_Factory(t) { return new (t || WjFlexChartEnvelopes)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjFlexChartEnvelopes.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjFlexChartEnvelopes, selectors: [["wj-flex-chart-envelopes"]], inputs: { asyncBindings: "asyncBindings", wjProperty: "wjProperty", axisX: "axisX", axisY: "axisY", binding: "binding", bindingX: "bindingX", cssClass: "cssClass", name: "name", style: "style", altStyle: "altStyle", symbolMarker: "symbolMarker", symbolSize: "symbolSize", symbolStyle: "symbolStyle", visibility: "visibility", itemsSource: "itemsSource", interpolateNulls: "interpolateNulls", tooltipContent: "tooltipContent", itemFormatter: "itemFormatter", period: "period", size: "size", type: "type" }, outputs: { initialized: "initialized", renderingNg: "rendering", renderedNg: "rendered", visibilityChangePC: "visibilityChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartEnvelopesMeta.providers))], decls: 0, vars: 0, template: function WjFlexChartEnvelopes_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexChartEnvelopes, [{
        type: Component,
        args: [{ selector: wjFlexChartEnvelopesMeta.selector, template: wjFlexChartEnvelopesMeta.template, inputs: wjFlexChartEnvelopesMeta.inputs, outputs: wjFlexChartEnvelopesMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexChartEnvelopesMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();return WjFlexChartEnvelopes=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartEnvelopes)}(wjcChartFinanceAnalytics.Envelopes);export{WjFlexChartEnvelopes};var moduleExports=[WjFlexChartFibonacci,WjFlexChartFibonacciArcs,WjFlexChartFibonacciFans,WjFlexChartFibonacciTimeZones,WjFlexChartAtr,WjFlexChartCci,WjFlexChartRsi,WjFlexChartWilliamsR,WjFlexChartMacd,WjFlexChartMacdHistogram,WjFlexChartStochastic,WjFlexChartBollingerBands,WjFlexChartEnvelopes],WjChartFinanceAnalyticsModule=function(){function WjChartFinanceAnalyticsModule(){}
WjChartFinanceAnalyticsModule.ɵfac = function WjChartFinanceAnalyticsModule_Factory(t) { return new (t || WjChartFinanceAnalyticsModule)(); };
WjChartFinanceAnalyticsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjChartFinanceAnalyticsModule });
WjChartFinanceAnalyticsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjChartFinanceAnalyticsModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjChartFinanceAnalyticsModule, { declarations: function () { return [WjFlexChartFibonacci, WjFlexChartFibonacciArcs, WjFlexChartFibonacciFans, WjFlexChartFibonacciTimeZones, WjFlexChartAtr, WjFlexChartCci, WjFlexChartRsi, WjFlexChartWilliamsR, WjFlexChartMacd, WjFlexChartMacdHistogram, WjFlexChartStochastic, WjFlexChartBollingerBands, WjFlexChartEnvelopes]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexChartFibonacci, WjFlexChartFibonacciArcs, WjFlexChartFibonacciFans, WjFlexChartFibonacciTimeZones, WjFlexChartAtr, WjFlexChartCci, WjFlexChartRsi, WjFlexChartWilliamsR, WjFlexChartMacd, WjFlexChartMacdHistogram, WjFlexChartStochastic, WjFlexChartBollingerBands, WjFlexChartEnvelopes]; } }); })();return WjChartFinanceAnalyticsModule}();export{WjChartFinanceAnalyticsModule};