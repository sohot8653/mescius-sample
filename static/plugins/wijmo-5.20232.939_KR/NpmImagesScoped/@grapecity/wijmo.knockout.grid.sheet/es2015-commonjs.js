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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),wijmo_knockout_grid_1=require("@grapecity/wijmo.knockout.grid"),mKo=__importStar(require("knockout")),wjcSheet=__importStar(require("@grapecity/wijmo.grid.sheet"));var wjKo=mKo;class wjFlexSheet extends wijmo_knockout_grid_1.wjFlexGrid{_getControlConstructor(){return wjcSheet.FlexSheet}}exports.wjFlexSheet=wjFlexSheet;class wjSheet extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcSheet.Sheet}_createWijmoContext(){return new WjSheetContext(this)}}exports.wjSheet=wjSheet;class WjSheetContext extends wijmo_knockout_base_1.WjContext{_initControl(){super._initControl();var e=this.valueAccessor(),t=this.parentWjContext.control,o=wjKo.unwrap(e.itemsSource),r=wjKo.unwrap(e.name);return o?t.addBoundSheet(r,o):t.addUnboundSheet(r,+wjKo.unwrap(e.rowCount),+wjKo.unwrap(e.columnCount))}}exports.WjSheetContext=WjSheetContext;wjKo.bindingHandlers.wjFlexSheet=new wjFlexSheet;wjKo.bindingHandlers.wjSheet=new wjSheet;