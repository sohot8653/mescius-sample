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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcChartHierarchical=__importStar(require("wijmo/wijmo.chart.hierarchical")),Sunburst=function(t){__extends(Sunburst,t);function Sunburst(e){return t.call(this,e,wjcChartHierarchical.Sunburst,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}Sunburst.prototype.componentDidMount=function(){var e=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return e};Sunburst.prototype.componentDidUpdate=function(e){t.prototype.componentDidUpdate.call(this,e);this._setExtra(this.props)};Sunburst.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return Sunburst}(wijmo_react_base_1.ComponentBase);exports.Sunburst=Sunburst;var TreeMap=function(t){__extends(TreeMap,t);function TreeMap(e){return t.call(this,e,wjcChartHierarchical.TreeMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}TreeMap.prototype.componentDidMount=function(){var e=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return e};TreeMap.prototype.componentDidUpdate=function(e){t.prototype.componentDidUpdate.call(this,e);this._setExtra(this.props)};TreeMap.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return TreeMap}(wijmo_react_base_1.ComponentBase);exports.TreeMap=TreeMap;