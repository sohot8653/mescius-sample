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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcChartAnnotation=__importStar(require("@grapecity/wijmo.chart.annotation"));class FlexChartAnnotationLayer extends wijmo_react_base_1.ComponentBase{constructor(t){super(t,wjcChartAnnotation.AnnotationLayer);this._parentInCtor=!0}}exports.FlexChartAnnotationLayer=FlexChartAnnotationLayer;class FlexChartAnnotation extends wijmo_react_base_1.ComponentBase{constructor(t){super(t,null,{objectProps:["point","offset","style","start","end"]});this._parentProp="items"}_createControl(){return new wjcChartAnnotation[this.props.type]}}exports.FlexChartAnnotation=FlexChartAnnotation;