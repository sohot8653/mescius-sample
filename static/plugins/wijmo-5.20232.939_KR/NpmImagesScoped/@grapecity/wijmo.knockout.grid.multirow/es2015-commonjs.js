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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var o in r)Object.hasOwnProperty.call(r,o)&&(t[o]=r[o]);t.default=r;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_grid_1=require("@grapecity/wijmo.knockout.grid"),mKo=__importStar(require("knockout")),wjcMultirow=__importStar(require("@grapecity/wijmo.grid.multirow"));var wjKo=mKo;class wjMultiRow extends wijmo_knockout_grid_1.wjFlexGrid{_getControlConstructor(){return wjcMultirow.MultiRow}}exports.wjMultiRow=wjMultiRow;wjKo.bindingHandlers.wjMultiRow=new wjMultiRow;