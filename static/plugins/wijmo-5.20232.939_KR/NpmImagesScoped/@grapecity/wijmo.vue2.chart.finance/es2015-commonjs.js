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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.default=e;return i};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcChartFinance=__importStar(require("@grapecity/wijmo.chart.finance"));class WjFinancialChartBehavior extends wijmo_vue2_base_1.WjComponentBehavior{_updateControl(e,i){switch(e){case"tooltipContent":this.control.tooltip.content=i;break;case"labelContent":this.control.dataLabel.content=i;break;default:super._updateControl(e,i)}}}WjFinancialChartBehavior.tag="wj-financial-chart";WjFinancialChartBehavior.props=["renderEngine","isDisabled","tabOrder","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType"];WjFinancialChartBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","rendering","rendered","itemsSourceChanging","itemsSourceChanged","seriesVisibilityChanged"];WjFinancialChartBehavior.changeEvents={selectionChanged:["selection"]};WjFinancialChartBehavior.classCtor=function(){return wjcChartFinance.FinancialChart};exports.WjFinancialChart=WjFinancialChartBehavior.register();function registerV3WjFinancialChart(e){e.component(WjFinancialChartBehavior.tag,exports.WjFinancialChart)}class WjFinancialChartSeriesBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFinancialChartSeriesBehavior.tag="wj-financial-chart-series";WjFinancialChartSeriesBehavior.parentProp="series";WjFinancialChartSeriesBehavior.siblingId="series";WjFinancialChartSeriesBehavior.props=["wjProperty","axisX","axisY","binding","bindingX","cssClass","name","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"];WjFinancialChartSeriesBehavior.events=["initialized","rendering","rendered"];WjFinancialChartSeriesBehavior.changeEvents={"chart.seriesVisibilityChanged":["visibility"]};WjFinancialChartSeriesBehavior.classCtor=function(){return wjcChartFinance.FinancialSeries};exports.WjFinancialChartSeries=WjFinancialChartSeriesBehavior.register();function registerV3WjFinancialChartSeries(e){e.component(WjFinancialChartSeriesBehavior.tag,exports.WjFinancialChartSeries)}function registerChartFinance(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjFinancialChart(e);registerV3WjFinancialChartSeries(e)}}exports.registerChartFinance=registerChartFinance;