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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcOlap from"wijmo/wijmo.olap";var PivotGrid=function(t){__extends(PivotGrid,t);function PivotGrid(o){return t.call(this,o,wjcOlap.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})||this}return PivotGrid}(ComponentBase);export{PivotGrid};var PivotChart=function(t){__extends(PivotChart,t);function PivotChart(o){return t.call(this,o,wjcOlap.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})||this}return PivotChart}(ComponentBase);export{PivotChart};var PivotPanel=function(t){__extends(PivotPanel,t);function PivotPanel(o){return t.call(this,o,wjcOlap.PivotPanel,{objectProps:["engine","itemsSource"]})||this}return PivotPanel}(ComponentBase);export{PivotPanel};var Slicer=function(t){__extends(Slicer,t);function Slicer(o){return t.call(this,o,wjcOlap.Slicer,{objectProps:["field"]})||this}return Slicer}(ComponentBase);export{Slicer};