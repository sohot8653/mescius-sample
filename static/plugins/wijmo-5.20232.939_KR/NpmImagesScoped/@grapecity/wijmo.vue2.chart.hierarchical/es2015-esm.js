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

import{VueApi,WjComponentBehavior}from"@grapecity/wijmo.vue2.base";import*as wjcChartHierarchical from"@grapecity/wijmo.chart.hierarchical";class WjSunburstBehavior extends WjComponentBehavior{_updateControl(e,t){switch(e){case"tooltipContent":this.control.tooltip.content=t;break;case"labelContent":this.control.dataLabel.content=t;break;default:super._updateControl(e,t)}}}WjSunburstBehavior.tag="wj-sunburst";WjSunburstBehavior.props=["isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","childItemsPath"];WjSunburstBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","selectionChanged","itemsSourceChanging","itemsSourceChanged"];WjSunburstBehavior.classCtor=function(){return wjcChartHierarchical.Sunburst};export var WjSunburst=WjSunburstBehavior.register();function registerV3WjSunburst(e){e.component(WjSunburstBehavior.tag,WjSunburst)}class WjTreeMapBehavior extends WjComponentBehavior{_updateControl(e,t){switch(e){case"tooltipContent":this.control.tooltip.content=t;break;case"labelContent":this.control.dataLabel.content=t;break;default:super._updateControl(e,t)}}}WjTreeMapBehavior.tag="wj-tree-map";WjTreeMapBehavior.props=["isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","maxDepth","type","labelContent","childItemsPath"];WjTreeMapBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","selectionChanged","itemsSourceChanging","itemsSourceChanged"];WjTreeMapBehavior.classCtor=function(){return wjcChartHierarchical.TreeMap};export var WjTreeMap=WjTreeMapBehavior.register();function registerV3WjTreeMap(e){e.component(WjTreeMapBehavior.tag,WjTreeMap)}export function registerChartHierarchical(e){if(VueApi.isV3Plus){registerV3WjSunburst(e);registerV3WjTreeMap(e)}}