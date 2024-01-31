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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var i={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(i[n]=t[n]);i.default=t;return i};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),wijmo_knockout_chart_1=require("wijmo/wijmo.knockout.chart"),mKo=__importStar(require("knockout")),wjcChartFin=__importStar(require("wijmo/wijmo.chart.finance"));var wjKo=mKo;class wjFinancialChart extends wijmo_knockout_chart_1.WjFlexChartBaseBinding{_getControlConstructor(){return wjcChartFin.FinancialChart}_initialize(){super._initialize();wijmo_knockout_base_1.MetaFactory.findProp("labelContent",this._metaData.props).updateControl=function(t,i,n,a,e){null!=e&&(n.dataLabel.content=e);return!0}}}exports.wjFinancialChart=wjFinancialChart;class wjFinancialChartSeries extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wjcChartFin.FinancialSeries}_createWijmoContext(){return new WjFinancialChartSeriesContext(this)}}exports.wjFinancialChartSeries=wjFinancialChartSeries;class WjFinancialChartSeriesContext extends wijmo_knockout_base_1.WjContext{_initControl(){super._initControl();var t=this.parentWjContext.control;t instanceof wjcChartFin.FinancialChart&&t.seriesVisibilityChanged.addHandler((t,i)=>{this._updateSource()})}}exports.WjFinancialChartSeriesContext=WjFinancialChartSeriesContext;wjKo.bindingHandlers.wjFinancialChart=new wjFinancialChart;wjKo.bindingHandlers.wjFinancialChartSeries=new wjFinancialChartSeries;