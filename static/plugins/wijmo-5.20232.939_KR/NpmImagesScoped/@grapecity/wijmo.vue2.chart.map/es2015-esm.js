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

import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcChartMap from"@grapecity/wijmo.chart.map";class WjFlexMapBehavior extends WjComponentBehavior{_updateControl(e,r){switch(e){case"tooltipContent":this.control.tooltip.content=r;break;default:super._updateControl(e,r)}}}WjFlexMapBehavior.tag="wj-flex-map";WjFlexMapBehavior.props=["isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","center","zoom"];WjFlexMapBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","selectionChanged","itemsSourceChanging","itemsSourceChanged"];WjFlexMapBehavior.classCtor=function(){return wjcChartMap.FlexMap};export var WjFlexMap=WjFlexMapBehavior.register();function registerV3WjFlexMap(e){e.component(WjFlexMapBehavior.tag,WjFlexMap)}class WjScatterMapLayerBehavior extends WjComponentBehavior{}WjScatterMapLayerBehavior.tag="wj-scatter-map-layer";WjScatterMapLayerBehavior.parentProp="layers";WjScatterMapLayerBehavior.siblingId="layers";WjScatterMapLayerBehavior.props=["wjProperty","itemsSource","url","symbolSize","symbolMinSize","symbolMaxSize","binding"];WjScatterMapLayerBehavior.events=["initialized"];WjScatterMapLayerBehavior.changeEvents={itemsSourceChanged:["itemsSource"]};WjScatterMapLayerBehavior.classCtor=function(){return wjcChartMap.ScatterMapLayer};export var WjScatterMapLayer=WjScatterMapLayerBehavior.register();function registerV3WjScatterMapLayer(e){e.component(WjScatterMapLayerBehavior.tag,WjScatterMapLayer)}class WjGeoMapLayerBehavior extends WjComponentBehavior{}WjGeoMapLayerBehavior.tag="wj-geo-map-layer";WjGeoMapLayerBehavior.parentProp="layers";WjGeoMapLayerBehavior.siblingId="layers";WjGeoMapLayerBehavior.props=["wjProperty","itemsSource","url","itemFormatter"];WjGeoMapLayerBehavior.events=["initialized"];WjGeoMapLayerBehavior.changeEvents={itemsSourceChanged:["itemsSource"]};WjGeoMapLayerBehavior.classCtor=function(){return wjcChartMap.GeoMapLayer};export var WjGeoMapLayer=WjGeoMapLayerBehavior.register();function registerV3WjGeoMapLayer(e){e.component(WjGeoMapLayerBehavior.tag,WjGeoMapLayer)}class WjGeoGridLayerBehavior extends WjComponentBehavior{}WjGeoGridLayerBehavior.tag="wj-geo-grid-layer";WjGeoGridLayerBehavior.parentProp="layers";WjGeoGridLayerBehavior.siblingId="layers";WjGeoGridLayerBehavior.props=["wjProperty","itemsSource","url"];WjGeoGridLayerBehavior.events=["initialized"];WjGeoGridLayerBehavior.changeEvents={itemsSourceChanged:["itemsSource"]};WjGeoGridLayerBehavior.classCtor=function(){return wjcChartMap.GeoGridLayer};export var WjGeoGridLayer=WjGeoGridLayerBehavior.register();function registerV3WjGeoGridLayer(e){e.component(WjGeoGridLayerBehavior.tag,WjGeoGridLayer)}class WjColorScaleBehavior extends WjComponentBehavior{}WjColorScaleBehavior.tag="wj-color-scale";WjColorScaleBehavior.parentProp="colorScale";WjColorScaleBehavior.props=["wjProperty","scale","binding","colorUnknown","colors","format"];WjColorScaleBehavior.events=["initialized"];WjColorScaleBehavior.classCtor=function(){return wjcChartMap.ColorScale};export var WjColorScale=WjColorScaleBehavior.register();function registerV3WjColorScale(e){e.component(WjColorScaleBehavior.tag,WjColorScale)}export function registerChartMap(e){if(VueApi.isV3Plus){registerV3WjFlexMap(e);registerV3WjScatterMapLayer(e);registerV3WjGeoMapLayer(e);registerV3WjGeoGridLayer(e);registerV3WjColorScale(e)}}