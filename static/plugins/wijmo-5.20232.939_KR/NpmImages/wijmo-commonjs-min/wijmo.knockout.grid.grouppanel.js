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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(o,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var t in r)r.hasOwnProperty(t)&&(o[t]=r[t])})(o,r)};return function(o,r){extendStatics(o,r);function __(){this.constructor=o}o.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__importStar=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(null!=o)for(var t in o)Object.hasOwnProperty.call(o,t)&&(r[t]=o[t]);r.default=o;return r};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),mKo=__importStar(require("knockout")),wjcGroup=__importStar(require("wijmo/wijmo.grid.grouppanel")),wjKo=mKo,wjGroupPanel=function(o){__extends(wjGroupPanel,o);function wjGroupPanel(){return null!==o&&o.apply(this,arguments)||this}wjGroupPanel.prototype._getControlConstructor=function(){return wjcGroup.GroupPanel};return wjGroupPanel}(wijmo_knockout_base_1.WjBinding);exports.wjGroupPanel=wjGroupPanel;wjKo.bindingHandlers.wjGroupPanel=new wjGroupPanel;