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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])})(r,t)};return function(r,t){extendStatics(r,t);function __(){this.constructor=r}r.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);t.default=r;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcFilter=__importStar(require("@grapecity/wijmo.grid.filter")),wjKo=mKo,wjFlexGridFilter=function(r){__extends(wjFlexGridFilter,r);function wjFlexGridFilter(){return null!==r&&r.apply(this,arguments)||this}wjFlexGridFilter.prototype._getControlConstructor=function(){return wjcFilter.FlexGridFilter};return wjFlexGridFilter}(wijmo_knockout_base_1.WjBinding);exports.wjFlexGridFilter=wjFlexGridFilter;wjKo.bindingHandlers.wjFlexGridFilter=new wjFlexGridFilter;