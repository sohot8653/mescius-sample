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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcGridGrouppanel from"@grapecity/wijmo.grid.grouppanel";var WjGroupPanelBehavior=function(r){__extends(WjGroupPanelBehavior,r);function WjGroupPanelBehavior(){return null!==r&&r.apply(this,arguments)||this}WjGroupPanelBehavior.tag="wj-group-panel";WjGroupPanelBehavior.props=["isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"];WjGroupPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel};return WjGroupPanelBehavior}(WjComponentBehavior);export var WjGroupPanel=WjGroupPanelBehavior.register();function registerV3WjGroupPanel(r){r.component(WjGroupPanelBehavior.tag,WjGroupPanel)}export function registerGridGrouppanel(r){VueApi.isV3Plus&&registerV3WjGroupPanel(r)}