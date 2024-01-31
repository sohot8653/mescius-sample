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

"use strict";var __importStar=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(null!=o)for(var t in o)Object.hasOwnProperty.call(o,t)&&(r[t]=o[t]);r.default=o;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_grid_1=require("wijmo/wijmo.knockout.grid"),mKo=__importStar(require("knockout")),wjcMultirow=__importStar(require("wijmo/wijmo.grid.multirow"));var wjKo=mKo;class wjMultiRow extends wijmo_knockout_grid_1.wjFlexGrid{_getControlConstructor(){return wjcMultirow.MultiRow}}exports.wjMultiRow=wjMultiRow;wjKo.bindingHandlers.wjMultiRow=new wjMultiRow;