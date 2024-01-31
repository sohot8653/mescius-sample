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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjBinding,WjContext}from"@grapecity/wijmo.knockout.base";import{wjFlexGrid}from"@grapecity/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcSheet from"@grapecity/wijmo.grid.sheet";var wjKo=mKo,wjFlexSheet=function(t){__extends(wjFlexSheet,t);function wjFlexSheet(){return null!==t&&t.apply(this,arguments)||this}wjFlexSheet.prototype._getControlConstructor=function(){return wjcSheet.FlexSheet};return wjFlexSheet}(wjFlexGrid);export{wjFlexSheet};var wjSheet=function(t){__extends(wjSheet,t);function wjSheet(){return null!==t&&t.apply(this,arguments)||this}wjSheet.prototype._getControlConstructor=function(){return wjcSheet.Sheet};wjSheet.prototype._createWijmoContext=function(){return new WjSheetContext(this)};return wjSheet}(WjBinding);export{wjSheet};var WjSheetContext=function(t){__extends(WjSheetContext,t);function WjSheetContext(){return null!==t&&t.apply(this,arguments)||this}WjSheetContext.prototype._initControl=function(){t.prototype._initControl.call(this);var e=this.valueAccessor(),n=this.parentWjContext.control,o=wjKo.unwrap(e.itemsSource),r=wjKo.unwrap(e.name);return o?n.addBoundSheet(r,o):n.addUnboundSheet(r,+wjKo.unwrap(e.rowCount),+wjKo.unwrap(e.columnCount))};return WjSheetContext}(WjContext);export{WjSheetContext};wjKo.bindingHandlers.wjFlexSheet=new wjFlexSheet;wjKo.bindingHandlers.wjSheet=new wjSheet;