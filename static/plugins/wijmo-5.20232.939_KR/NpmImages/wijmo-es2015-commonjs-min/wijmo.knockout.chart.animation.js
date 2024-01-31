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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.default=t;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcChartAnim=__importStar(require("wijmo/wijmo.chart.animation"));var wjKo=mKo;class wjFlexChartAnimation extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChartAnim.ChartAnimation}}exports.wjFlexChartAnimation=wjFlexChartAnimation;wjKo.bindingHandlers.wjFlexChartAnimation=new wjFlexChartAnimation;