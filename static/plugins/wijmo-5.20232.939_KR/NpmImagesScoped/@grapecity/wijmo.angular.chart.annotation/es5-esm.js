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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}();import{WjDirective,WjLink,_registerNgModule,softRefChartAnnotation}from"@grapecity/wijmo.angular.base";import*as mNg from"angular";import*as wjcChartAnnotation from"@grapecity/wijmo.chart.annotation";var wjNg=mNg,wijmoChartAnnotationName="wj.chart.annotation";export var ngModuleName=wijmoChartAnnotationName;var wijmoChartAnnotation=_registerNgModule(wijmoChartAnnotationName);if(softRefChartAnnotation()){wijmoChartAnnotation.directive("wjFlexChartAnnotationLayer",[function(){return new WjFlexChartAnnotationLayer}]);wijmoChartAnnotation.directive("wjFlexChartAnnotation",[function(){return new WjFlexChartAnnotation}])}var WjFlexChartAnnotationLayer=function(t){__extends(WjFlexChartAnnotationLayer,t);function WjFlexChartAnnotationLayer(){var n=t.call(this)||this;n.require=["?^wjFlexChart","?^wjFinancialChart"];n.template='<div class="wjFlexChartAnnotationLayer" ng-transclude />';n.transclude=!0;return n}Object.defineProperty(WjFlexChartAnnotationLayer.prototype,"_controlConstructor",{get:function(){return wjcChartAnnotation.AnnotationLayer},enumerable:!0,configurable:!0});return WjFlexChartAnnotationLayer}(WjDirective);export{WjFlexChartAnnotationLayer};var WjFlexChartAnnotation=function(t){__extends(WjFlexChartAnnotation,t);function WjFlexChartAnnotation(){var n=t.call(this)||this;n.require="^wjFlexChartAnnotationLayer";n.template='<div class="wjFlexChartAnnotation" ng-transclude />';n.transclude=!0;return n}WjFlexChartAnnotation.prototype._createLink=function(){return new WjFlexChartAnnotationLink};WjFlexChartAnnotation.prototype._getMetaDataId=function(){return"FlexChartAnnotation"};return WjFlexChartAnnotation}(WjDirective);export{WjFlexChartAnnotation};var WjFlexChartAnnotationLink=function(t){__extends(WjFlexChartAnnotationLink,t);function WjFlexChartAnnotationLink(){return null!==t&&t.apply(this,arguments)||this}WjFlexChartAnnotationLink.prototype._initControl=function(){return new wjcChartAnnotation[this.scope.type]};return WjFlexChartAnnotationLink}(WjLink);export{WjFlexChartAnnotationLink};