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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcNav from"@grapecity/wijmo.nav";var _wj_ns_exists_21=!0,WjcTreeView=function(e){__extends(WjcTreeView,e);function WjcTreeView(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcTreeView,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTreeView.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTreeView.prototype.attributeChangedCallback=function(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)};WjcTreeView.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTreeView.prototype.addEventListener=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcTreeView}(wjcNav.TreeView);export{WjcTreeView};_wj_ns_exists_21&&WjComponentBehavior.register("wjc-tree-view",WjcTreeView);WjComponentBehavior.register("",wjcNav.TabPanel);WjComponentBehavior.register("",wjcNav.Accordion);