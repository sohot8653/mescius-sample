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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjBinding,WjContext}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcChartAnno from"@grapecity/wijmo.chart.annotation";var wjKo=mKo,wjFlexChartAnnotationLayer=function(t){__extends(wjFlexChartAnnotationLayer,t);function wjFlexChartAnnotationLayer(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnnotationLayer.prototype._getControlConstructor=function(){return wjcChartAnno.AnnotationLayer};return wjFlexChartAnnotationLayer}(WjBinding);export{wjFlexChartAnnotationLayer};var wjFlexChartAnnotation=function(t){__extends(wjFlexChartAnnotation,t);function wjFlexChartAnnotation(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnnotation.prototype._createControl=function(t){return this._context._createAnnotation()};wjFlexChartAnnotation.prototype._getMetaDataId=function(){return"FlexChartAnnotation"};wjFlexChartAnnotation.prototype._createWijmoContext=function(){this._context=new wjFlexChartAnnotationContext(this);return this._context};return wjFlexChartAnnotation}(WjBinding);export{wjFlexChartAnnotation};var wjFlexChartAnnotationContext=function(t){__extends(wjFlexChartAnnotationContext,t);function wjFlexChartAnnotationContext(){return null!==t&&t.apply(this,arguments)||this}wjFlexChartAnnotationContext.prototype._createAnnotation=function(){var t=this.valueAccessor(),n=wjKo.unwrap(t.type);return new wjcChartAnno[n]};return wjFlexChartAnnotationContext}(WjContext);export{wjFlexChartAnnotationContext};wjKo.bindingHandlers.wjFlexChartAnnotationLayer=new wjFlexChartAnnotationLayer;wjKo.bindingHandlers.wjFlexChartAnnotation=new wjFlexChartAnnotation;