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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcGauge=__importStar(require("@grapecity/wijmo.gauge")),LinearGauge=function(e){__extends(LinearGauge,e);function LinearGauge(t){return e.call(this,t,wjcGauge.LinearGauge)||this}return LinearGauge}(wijmo_react_base_1.ComponentBase);exports.LinearGauge=LinearGauge;var BulletGraph=function(e){__extends(BulletGraph,e);function BulletGraph(t){return e.call(this,t,wjcGauge.BulletGraph)||this}return BulletGraph}(wijmo_react_base_1.ComponentBase);exports.BulletGraph=BulletGraph;var RadialGauge=function(e){__extends(RadialGauge,e);function RadialGauge(t){return e.call(this,t,wjcGauge.RadialGauge,{objectProps:["needleElement"]})||this}return RadialGauge}(wijmo_react_base_1.ComponentBase);exports.RadialGauge=RadialGauge;var Range=function(e){__extends(Range,e);function Range(t){var a=e.call(this,t,wjcGauge.Range)||this;a._parentProp="ranges";return a}return Range}(wijmo_react_base_1.ComponentBase);exports.Range=Range;