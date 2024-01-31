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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(n[r]=t[r]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcChartAnnotation=__importStar(require("@grapecity/wijmo.chart.annotation")),FlexChartAnnotationLayer=function(t){__extends(FlexChartAnnotationLayer,t);function FlexChartAnnotationLayer(n){var r=t.call(this,n,wjcChartAnnotation.AnnotationLayer)||this;r._parentInCtor=!0;return r}return FlexChartAnnotationLayer}(wijmo_react_base_1.ComponentBase);exports.FlexChartAnnotationLayer=FlexChartAnnotationLayer;var FlexChartAnnotation=function(t){__extends(FlexChartAnnotation,t);function FlexChartAnnotation(n){var r=t.call(this,n,null,{objectProps:["point","offset","style","start","end"]})||this;r._parentProp="items";return r}FlexChartAnnotation.prototype._createControl=function(){return new wjcChartAnnotation[this.props.type]};return FlexChartAnnotation}(wijmo_react_base_1.ComponentBase);exports.FlexChartAnnotation=FlexChartAnnotation;