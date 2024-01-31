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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var o in r)Object.hasOwnProperty.call(r,o)&&(e[o]=r[o]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcGridGrouppanel=__importStar(require("@grapecity/wijmo.grid.grouppanel")),WjGroupPanelBehavior=function(r){__extends(WjGroupPanelBehavior,r);function WjGroupPanelBehavior(){return null!==r&&r.apply(this,arguments)||this}WjGroupPanelBehavior.tag="wj-group-panel";WjGroupPanelBehavior.props=["isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"];WjGroupPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel};return WjGroupPanelBehavior}(wijmo_vue2_base_1.WjComponentBehavior);exports.WjGroupPanel=WjGroupPanelBehavior.register();function registerV3WjGroupPanel(r){r.component(WjGroupPanelBehavior.tag,exports.WjGroupPanel)}function registerGridGrouppanel(r){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjGroupPanel(r)}exports.registerGridGrouppanel=registerGridGrouppanel;