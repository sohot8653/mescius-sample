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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};return function(t,r){extendStatics(t,r);function __(){this.constructor=t}t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();import{WjBinding}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcFilter from"@grapecity/wijmo.grid.filter";var wjKo=mKo,wjFlexGridFilter=function(t){__extends(wjFlexGridFilter,t);function wjFlexGridFilter(){return null!==t&&t.apply(this,arguments)||this}wjFlexGridFilter.prototype._getControlConstructor=function(){return wjcFilter.FlexGridFilter};return wjFlexGridFilter}(WjBinding);export{wjFlexGridFilter};wjKo.bindingHandlers.wjFlexGridFilter=new wjFlexGridFilter;