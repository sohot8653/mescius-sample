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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o])})(r,t)};return function(r,t){extendStatics(r,t);function __(){this.constructor=r}r.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var o in r)Object.hasOwnProperty.call(r,o)&&(t[o]=r[o]);t.default=r;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcGroup=__importStar(require("@grapecity/wijmo.grid.grouppanel")),wjKo=mKo,wjGroupPanel=function(r){__extends(wjGroupPanel,r);function wjGroupPanel(){return null!==r&&r.apply(this,arguments)||this}wjGroupPanel.prototype._getControlConstructor=function(){return wjcGroup.GroupPanel};return wjGroupPanel}(wijmo_knockout_base_1.WjBinding);exports.wjGroupPanel=wjGroupPanel;wjKo.bindingHandlers.wjGroupPanel=new wjGroupPanel;