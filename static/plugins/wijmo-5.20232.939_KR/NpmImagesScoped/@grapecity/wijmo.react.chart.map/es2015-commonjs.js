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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcChartMap=__importStar(require("@grapecity/wijmo.chart.map"));class FlexMap extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartMap.FlexMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","center"]})}componentDidMount(){let e=super.componentDidMount();this._setExtra(this.props);return e}componentDidUpdate(e){super.componentDidUpdate(e);this._setExtra(this.props)}_setExtra(e){"tooltipContent"in e&&(this.control.tooltip.content=e.tooltipContent)}}exports.FlexMap=FlexMap;class ScatterMapLayer extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartMap.ScatterMapLayer,{objectProps:["style","itemsSource"]});this._parentProp="layers";this._siblingId="layers"}}exports.ScatterMapLayer=ScatterMapLayer;class GeoMapLayer extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartMap.GeoMapLayer,{objectProps:["style","itemsSource","itemFormatter"]});this._parentProp="layers";this._siblingId="layers"}}exports.GeoMapLayer=GeoMapLayer;class GeoGridLayer extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartMap.GeoGridLayer,{objectProps:["style","itemsSource"]});this._parentProp="layers";this._siblingId="layers"}}exports.GeoGridLayer=GeoGridLayer;class ColorScale extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcChartMap.ColorScale,{objectProps:["colors"]});this._parentProp="colorScale"}}exports.ColorScale=ColorScale;