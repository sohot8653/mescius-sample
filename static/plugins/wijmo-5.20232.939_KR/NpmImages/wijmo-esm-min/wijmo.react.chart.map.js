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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{ComponentBase}from"wijmo/wijmo.react.base";import*as wjcChartMap from"wijmo/wijmo.chart.map";var FlexMap=function(t){__extends(FlexMap,t);function FlexMap(e){return t.call(this,e,wjcChartMap.FlexMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","center"]})||this}FlexMap.prototype.componentDidMount=function(){var e=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return e};FlexMap.prototype.componentDidUpdate=function(e){t.prototype.componentDidUpdate.call(this,e);this._setExtra(this.props)};FlexMap.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent)};return FlexMap}(ComponentBase);export{FlexMap};var ScatterMapLayer=function(t){__extends(ScatterMapLayer,t);function ScatterMapLayer(e){var r=t.call(this,e,wjcChartMap.ScatterMapLayer,{objectProps:["style","itemsSource"]})||this;r._parentProp="layers";r._siblingId="layers";return r}return ScatterMapLayer}(ComponentBase);export{ScatterMapLayer};var GeoMapLayer=function(t){__extends(GeoMapLayer,t);function GeoMapLayer(e){var r=t.call(this,e,wjcChartMap.GeoMapLayer,{objectProps:["style","itemsSource","itemFormatter"]})||this;r._parentProp="layers";r._siblingId="layers";return r}return GeoMapLayer}(ComponentBase);export{GeoMapLayer};var GeoGridLayer=function(t){__extends(GeoGridLayer,t);function GeoGridLayer(e){var r=t.call(this,e,wjcChartMap.GeoGridLayer,{objectProps:["style","itemsSource"]})||this;r._parentProp="layers";r._siblingId="layers";return r}return GeoGridLayer}(ComponentBase);export{GeoGridLayer};var ColorScale=function(t){__extends(ColorScale,t);function ColorScale(e){var r=t.call(this,e,wjcChartMap.ColorScale,{objectProps:["colors"]})||this;r._parentProp="colorScale";return r}return ColorScale}(ComponentBase);export{ColorScale};