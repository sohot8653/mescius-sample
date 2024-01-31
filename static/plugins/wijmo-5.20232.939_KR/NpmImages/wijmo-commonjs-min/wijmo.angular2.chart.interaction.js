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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcChartInteraction=__importStar(require("wijmo/wijmo.chart.interaction")),wjFlexChartRangeSelectorMeta={selector:"wj-flex-chart-range-selector",template:"",inputs:["wjProperty","isVisible","min","max","orientation","seamless","minScale","maxScale"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};exports.wjFlexChartRangeSelectorMeta=wjFlexChartRangeSelectorMeta;var WjFlexChartRangeSelector=function(e){__extends(WjFlexChartRangeSelector,e);function WjFlexChartRangeSelector(t,r,o){var a=e.call(this,o)||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjFlexChartRangeSelector;WjFlexChartRangeSelector.prototype.created=function(){};WjFlexChartRangeSelector.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartRangeSelector.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartRangeSelector.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartRangeSelector.meta={outputs:wjFlexChartRangeSelectorMeta.outputs};return WjFlexChartRangeSelector=t=__decorate([core_1.Component({selector:wjFlexChartRangeSelectorMeta.selector,template:wjFlexChartRangeSelectorMeta.template,inputs:wjFlexChartRangeSelectorMeta.inputs,outputs:wjFlexChartRangeSelectorMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartRangeSelectorMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartRangeSelector)}(wjcChartInteraction.RangeSelector);exports.WjFlexChartRangeSelector=WjFlexChartRangeSelector;var wjFlexChartGesturesMeta={selector:"wj-flex-chart-gestures",template:"",inputs:["wjProperty","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],outputs:["initialized"],providers:[]};exports.wjFlexChartGesturesMeta=wjFlexChartGesturesMeta;var WjFlexChartGestures=function(e){__extends(WjFlexChartGestures,e);function WjFlexChartGestures(t,r,o){var a=e.call(this,o)||this;a.isInitialized=!1;a._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(a,t,r,o);a.created();return a}t=WjFlexChartGestures;WjFlexChartGestures.prototype.created=function(){};WjFlexChartGestures.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexChartGestures.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexChartGestures.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexChartGestures.meta={outputs:wjFlexChartGesturesMeta.outputs};return WjFlexChartGestures=t=__decorate([core_1.Component({selector:wjFlexChartGesturesMeta.selector,template:wjFlexChartGesturesMeta.template,inputs:wjFlexChartGesturesMeta.inputs,outputs:wjFlexChartGesturesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef((function(){return t}))}].concat(wjFlexChartGesturesMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexChartGestures)}(wjcChartInteraction.ChartGestures);exports.WjFlexChartGestures=WjFlexChartGestures;var moduleExports=[WjFlexChartRangeSelector,WjFlexChartGestures],WjChartInteractionModule=function(){function WjChartInteractionModule(){}return WjChartInteractionModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjChartInteractionModule)}();exports.WjChartInteractionModule=WjChartInteractionModule;