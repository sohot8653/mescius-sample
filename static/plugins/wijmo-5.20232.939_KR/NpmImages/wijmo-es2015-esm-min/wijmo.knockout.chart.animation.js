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

import{WjBinding}from"wijmo/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcChartAnim from"wijmo/wijmo.chart.animation";var wjKo=mKo;export class wjFlexChartAnimation extends WjBinding{_getControlConstructor(){return wjcChartAnim.ChartAnimation}}wjKo.bindingHandlers.wjFlexChartAnimation=new wjFlexChartAnimation;