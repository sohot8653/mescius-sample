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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var i in t)t.hasOwnProperty(i)&&(r[i]=t[i])})(r,t)};return function(r,t){extendStatics(r,t);function __(){this.constructor=r}r.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var i in r)Object.hasOwnProperty.call(r,i)&&(t[i]=r[i]);t.default=r;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),wijmo_angular_grid_1=require("@grapecity/wijmo.angular.grid"),mNg=__importStar(require("angular")),wjcGridMultirow=__importStar(require("@grapecity/wijmo.grid.multirow")),wjNg=mNg,wijmoGridMultirowName="wj.grid.multirow";exports.ngModuleName=wijmoGridMultirowName;var wijmoGridMultirow=wijmo_angular_base_1._registerNgModule(wijmoGridMultirowName);wijmo_angular_base_1.softRefGridMultirow()&&wijmoGridMultirow.directive("wjMultiRow",["$compile","$interpolate",function(r,t){return new WjMultiRow(r,t)}]);var WjMultiRow=function(r){__extends(WjMultiRow,r);function WjMultiRow(t,i){return r.call(this,t,i)||this}Object.defineProperty(WjMultiRow.prototype,"_controlConstructor",{get:function(){return wjcGridMultirow.MultiRow},enumerable:!0,configurable:!0});return WjMultiRow}(wijmo_angular_grid_1.WjFlexGrid);exports.WjMultiRow=WjMultiRow;