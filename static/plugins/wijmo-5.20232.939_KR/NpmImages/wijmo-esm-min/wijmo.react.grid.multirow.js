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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcGridMultirow from"wijmo/wijmo.grid.multirow";import*as wjGrid from"wijmo/wijmo.react.grid";var MultiRow=function(t){__extends(MultiRow,t);function MultiRow(e){return t.call(this,e,wjcGridMultirow.MultiRow,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","layoutDefinition","headerLayoutDefinition"]})||this}MultiRow.prototype._createControl=function(){var e=t.prototype._createControl.call(this);new wjGrid.DirectiveCellFactory(this,e);return e};MultiRow.prototype._onBeforeWillUnmount=function(e){t.prototype._onBeforeWillUnmount.call(this,e);ComponentBase._reactMajorVersion<18&&this.control._layout._dispose()};return MultiRow}(ComponentBase);export{MultiRow};var MultiRowCell=function(t){__extends(MultiRowCell,t);function MultiRowCell(e){var o=t.call(this,e,wjcGridMultirow.MultiRowCell,{objectProps:["dataMap","cellTemplate","editor"]})||this;o._parentProp="cells";return o}return MultiRowCell}(ComponentBase);export{MultiRowCell};var MultiRowCellGroup=function(t){__extends(MultiRowCellGroup,t);function MultiRowCellGroup(e){var o=t.call(this,e,wjcGridMultirow.MultiRowCellGroup,{objectProps:["dataMap","cellTemplate","editor"]})||this;o._parentProp="layoutDefinition";return o}return MultiRowCellGroup}(ComponentBase);export{MultiRowCellGroup};var MultiRowCellTemplate=function(t){__extends(MultiRowCellTemplate,t);function MultiRowCellTemplate(){return null!==t&&t.apply(this,arguments)||this}Object.defineProperty(MultiRowCellTemplate.prototype,"template",{get:function(){return this.props[MultiRowCellTemplate._CellRenderFuncProp]},enumerable:!0,configurable:!0});return MultiRowCellTemplate}(wjGrid.FlexGridCellTemplate);export{MultiRowCellTemplate};