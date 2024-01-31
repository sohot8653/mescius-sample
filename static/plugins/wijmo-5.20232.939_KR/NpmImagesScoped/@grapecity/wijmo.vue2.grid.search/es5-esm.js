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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcGridSearch from"@grapecity/wijmo.grid.search";var WjFlexGridSearchBehavior=function(r){__extends(WjFlexGridSearchBehavior,r);function WjFlexGridSearchBehavior(){return null!==r&&r.apply(this,arguments)||this}WjFlexGridSearchBehavior.tag="wj-flex-grid-search";WjFlexGridSearchBehavior.props=["isDisabled","tabOrder","text","delay","searchAllColumns","placeholder","cssMatch","grid"];WjFlexGridSearchBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjFlexGridSearchBehavior.classCtor=function(){return wjcGridSearch.FlexGridSearch};return WjFlexGridSearchBehavior}(WjComponentBehavior);export var WjFlexGridSearch=WjFlexGridSearchBehavior.register();function registerV3WjFlexGridSearch(r){r.component(WjFlexGridSearchBehavior.tag,WjFlexGridSearch)}export function registerGridSearch(r){VueApi.isV3Plus&&registerV3WjFlexGridSearch(r)}