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

var __extends=this&&this.__extends||function(){var extendStatics=function(r,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var e in o)o.hasOwnProperty(e)&&(r[e]=o[e])})(r,o)};return function(r,o){extendStatics(r,o);function __(){this.constructor=r}r.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{WjDirective,_registerNgModule,softRefGridGrouppanel}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcGridGroup from"wijmo/wijmo.grid.grouppanel";var wjNg=mNg,wijmoGridGroupName="wj.grid.grouppanel";export var ngModuleName=wijmoGridGroupName;var wijmoGridGroup=_registerNgModule(wijmoGridGroupName);softRefGridGrouppanel()&&wijmoGridGroup.directive("wjGroupPanel",[function(){return new WjGroupPanel}]);var WjGroupPanel=function(r){__extends(WjGroupPanel,r);function WjGroupPanel(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjGroupPanel.prototype,"_controlConstructor",{get:function(){return wjcGridGroup.GroupPanel},enumerable:!0,configurable:!0});return WjGroupPanel}(WjDirective);export{WjGroupPanel};