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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcGridSearch from"wijmo/wijmo.grid.search";var _wj_ns_exists_12=!0,WjcFlexGridSearch=function(e){__extends(WjcFlexGridSearch,e);function WjcFlexGridSearch(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcFlexGridSearch,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFlexGridSearch.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFlexGridSearch.prototype.attributeChangedCallback=function(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)};WjcFlexGridSearch.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFlexGridSearch.prototype.addEventListener=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcFlexGridSearch}(wjcGridSearch.FlexGridSearch);export{WjcFlexGridSearch};_wj_ns_exists_12&&WjComponentBehavior.register("wjc-flex-grid-search",WjcFlexGridSearch);