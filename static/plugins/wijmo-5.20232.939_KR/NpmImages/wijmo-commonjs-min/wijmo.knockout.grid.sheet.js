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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),wijmo_knockout_grid_1=require("wijmo/wijmo.knockout.grid"),mKo=__importStar(require("knockout")),wjcSheet=__importStar(require("wijmo/wijmo.grid.sheet")),wjKo=mKo,wjFlexSheet=function(t){__extends(wjFlexSheet,t);function wjFlexSheet(){return null!==t&&t.apply(this,arguments)||this}wjFlexSheet.prototype._getControlConstructor=function(){return wjcSheet.FlexSheet};return wjFlexSheet}(wijmo_knockout_grid_1.wjFlexGrid);exports.wjFlexSheet=wjFlexSheet;var wjSheet=function(t){__extends(wjSheet,t);function wjSheet(){return null!==t&&t.apply(this,arguments)||this}wjSheet.prototype._getControlConstructor=function(){return wjcSheet.Sheet};wjSheet.prototype._createWijmoContext=function(){return new WjSheetContext(this)};return wjSheet}(wijmo_knockout_base_1.WjBinding);exports.wjSheet=wjSheet;var WjSheetContext=function(t){__extends(WjSheetContext,t);function WjSheetContext(){return null!==t&&t.apply(this,arguments)||this}WjSheetContext.prototype._initControl=function(){t.prototype._initControl.call(this);var e=this.valueAccessor(),o=this.parentWjContext.control,n=wjKo.unwrap(e.itemsSource),r=wjKo.unwrap(e.name);return n?o.addBoundSheet(r,n):o.addUnboundSheet(r,+wjKo.unwrap(e.rowCount),+wjKo.unwrap(e.columnCount))};return WjSheetContext}(wijmo_knockout_base_1.WjContext);exports.WjSheetContext=WjSheetContext;wjKo.bindingHandlers.wjFlexSheet=new wjFlexSheet;wjKo.bindingHandlers.wjSheet=new wjSheet;