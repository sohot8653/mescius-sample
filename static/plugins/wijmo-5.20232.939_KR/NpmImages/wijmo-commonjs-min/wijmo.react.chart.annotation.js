/*!
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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcChartAnnotation=__importStar(require("wijmo/wijmo.chart.annotation")),FlexChartAnnotationLayer=function(t){__extends(FlexChartAnnotationLayer,t);function FlexChartAnnotationLayer(n){var o=t.call(this,n,wjcChartAnnotation.AnnotationLayer)||this;o._parentInCtor=!0;return o}return FlexChartAnnotationLayer}(wijmo_react_base_1.ComponentBase);exports.FlexChartAnnotationLayer=FlexChartAnnotationLayer;var FlexChartAnnotation=function(t){__extends(FlexChartAnnotation,t);function FlexChartAnnotation(n){var o=t.call(this,n,null,{objectProps:["point","offset","style","start","end"]})||this;o._parentProp="items";return o}FlexChartAnnotation.prototype._createControl=function(){return new wjcChartAnnotation[this.props.type]};return FlexChartAnnotation}(wijmo_react_base_1.ComponentBase);exports.FlexChartAnnotation=FlexChartAnnotation;