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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_grid_1=require("wijmo/wijmo.angular.grid"),mNg=__importStar(require("angular")),wjcGridSheet=__importStar(require("wijmo/wijmo.grid.sheet")),wjNg=mNg,wijmoGridSheetName="wj.grid.sheet";exports.ngModuleName=wijmoGridSheetName;var wijmoGridSheet=wijmo_angular_base_1._registerNgModule(wijmoGridSheetName);if(wijmo_angular_base_1.softRefGridSheet()){wijmoGridSheet.directive("wjFlexSheet",["$compile","$interpolate",function(e,t){return new WjFlexSheet(e,t)}]);wijmoGridSheet.directive("wjSheet",[function(){return new WjSheet}])}var WjFlexSheet=function(e){__extends(WjFlexSheet,e);function WjFlexSheet(t,r){return e.call(this,t,r)||this}Object.defineProperty(WjFlexSheet.prototype,"_controlConstructor",{get:function(){return wjcGridSheet.FlexSheet},enumerable:!0,configurable:!0});return WjFlexSheet}(wijmo_angular_grid_1.WjFlexGrid),WjSheet=function(e){__extends(WjSheet,e);function WjSheet(){var t=e.call(this)||this;t.require="^wjFlexSheet";return t}Object.defineProperty(WjSheet.prototype,"_controlConstructor",{get:function(){return wjcGridSheet.Sheet},enumerable:!0,configurable:!0});WjSheet.prototype._initControl=function(t){return e.prototype._initControl.call(this,void 0)};return WjSheet}(wijmo_angular_base_1.WjDirective);