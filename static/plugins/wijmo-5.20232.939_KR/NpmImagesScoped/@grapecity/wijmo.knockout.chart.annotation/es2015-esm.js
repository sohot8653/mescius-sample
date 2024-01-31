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

import{WjBinding,WjContext}from"@grapecity/wijmo.knockout.base";import*as mKo from"knockout";import*as wjcChartAnno from"@grapecity/wijmo.chart.annotation";var wjKo=mKo;export class wjFlexChartAnnotationLayer extends WjBinding{_getControlConstructor(){return wjcChartAnno.AnnotationLayer}}export class wjFlexChartAnnotation extends WjBinding{_createControl(t){return this._context._createAnnotation()}_getMetaDataId(){return"FlexChartAnnotation"}_createWijmoContext(){this._context=new wjFlexChartAnnotationContext(this);return this._context}}export class wjFlexChartAnnotationContext extends WjContext{_createAnnotation(){var t=this.valueAccessor(),n=wjKo.unwrap(t.type);return new wjcChartAnno[n]}}wjKo.bindingHandlers.wjFlexChartAnnotationLayer=new wjFlexChartAnnotationLayer;wjKo.bindingHandlers.wjFlexChartAnnotation=new wjFlexChartAnnotation;