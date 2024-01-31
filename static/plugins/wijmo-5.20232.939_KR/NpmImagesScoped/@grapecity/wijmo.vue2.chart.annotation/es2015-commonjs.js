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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcChartAnnotation=__importStar(require("@grapecity/wijmo.chart.annotation"));class WjFlexChartAnnotationLayerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationLayerBehavior.tag="wj-flex-chart-annotation-layer";WjFlexChartAnnotationLayerBehavior.parentInCtor=!0;WjFlexChartAnnotationLayerBehavior.props=[];WjFlexChartAnnotationLayerBehavior.events=["initialized"];WjFlexChartAnnotationLayerBehavior.classCtor=function(){return wjcChartAnnotation.AnnotationLayer};exports.WjFlexChartAnnotationLayer=WjFlexChartAnnotationLayerBehavior.register();function registerV3WjFlexChartAnnotationLayer(t){t.component(WjFlexChartAnnotationLayerBehavior.tag,exports.WjFlexChartAnnotationLayer)}class WjFlexChartAnnotationTextBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationTextBehavior.tag="wj-flex-chart-annotation-text";WjFlexChartAnnotationTextBehavior.parentProp="items";WjFlexChartAnnotationTextBehavior.siblingId="annotation";WjFlexChartAnnotationTextBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationTextBehavior.events=["initialized"];WjFlexChartAnnotationTextBehavior.classCtor=function(){return wjcChartAnnotation.Text};exports.WjFlexChartAnnotationText=WjFlexChartAnnotationTextBehavior.register();function registerV3WjFlexChartAnnotationText(t){t.component(WjFlexChartAnnotationTextBehavior.tag,exports.WjFlexChartAnnotationText)}class WjFlexChartAnnotationEllipseBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationEllipseBehavior.tag="wj-flex-chart-annotation-ellipse";WjFlexChartAnnotationEllipseBehavior.parentProp="items";WjFlexChartAnnotationEllipseBehavior.siblingId="annotation";WjFlexChartAnnotationEllipseBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationEllipseBehavior.events=["initialized"];WjFlexChartAnnotationEllipseBehavior.classCtor=function(){return wjcChartAnnotation.Ellipse};exports.WjFlexChartAnnotationEllipse=WjFlexChartAnnotationEllipseBehavior.register();function registerV3WjFlexChartAnnotationEllipse(t){t.component(WjFlexChartAnnotationEllipseBehavior.tag,exports.WjFlexChartAnnotationEllipse)}class WjFlexChartAnnotationRectangleBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationRectangleBehavior.tag="wj-flex-chart-annotation-rectangle";WjFlexChartAnnotationRectangleBehavior.parentProp="items";WjFlexChartAnnotationRectangleBehavior.siblingId="annotation";WjFlexChartAnnotationRectangleBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationRectangleBehavior.events=["initialized"];WjFlexChartAnnotationRectangleBehavior.classCtor=function(){return wjcChartAnnotation.Rectangle};exports.WjFlexChartAnnotationRectangle=WjFlexChartAnnotationRectangleBehavior.register();function registerV3WjFlexChartAnnotationRectangle(t){t.component(WjFlexChartAnnotationRectangleBehavior.tag,exports.WjFlexChartAnnotationRectangle)}class WjFlexChartAnnotationLineBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationLineBehavior.tag="wj-flex-chart-annotation-line";WjFlexChartAnnotationLineBehavior.parentProp="items";WjFlexChartAnnotationLineBehavior.siblingId="annotation";WjFlexChartAnnotationLineBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationLineBehavior.events=["initialized"];WjFlexChartAnnotationLineBehavior.classCtor=function(){return wjcChartAnnotation.Line};exports.WjFlexChartAnnotationLine=WjFlexChartAnnotationLineBehavior.register();function registerV3WjFlexChartAnnotationLine(t){t.component(WjFlexChartAnnotationLineBehavior.tag,exports.WjFlexChartAnnotationLine)}class WjFlexChartAnnotationPolygonBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationPolygonBehavior.tag="wj-flex-chart-annotation-polygon";WjFlexChartAnnotationPolygonBehavior.parentProp="items";WjFlexChartAnnotationPolygonBehavior.siblingId="annotation";WjFlexChartAnnotationPolygonBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationPolygonBehavior.events=["initialized"];WjFlexChartAnnotationPolygonBehavior.classCtor=function(){return wjcChartAnnotation.Polygon};exports.WjFlexChartAnnotationPolygon=WjFlexChartAnnotationPolygonBehavior.register();function registerV3WjFlexChartAnnotationPolygon(t){t.component(WjFlexChartAnnotationPolygonBehavior.tag,exports.WjFlexChartAnnotationPolygon)}class WjFlexChartAnnotationCircleBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationCircleBehavior.tag="wj-flex-chart-annotation-circle";WjFlexChartAnnotationCircleBehavior.parentProp="items";WjFlexChartAnnotationCircleBehavior.siblingId="annotation";WjFlexChartAnnotationCircleBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationCircleBehavior.events=["initialized"];WjFlexChartAnnotationCircleBehavior.classCtor=function(){return wjcChartAnnotation.Circle};exports.WjFlexChartAnnotationCircle=WjFlexChartAnnotationCircleBehavior.register();function registerV3WjFlexChartAnnotationCircle(t){t.component(WjFlexChartAnnotationCircleBehavior.tag,exports.WjFlexChartAnnotationCircle)}class WjFlexChartAnnotationSquareBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationSquareBehavior.tag="wj-flex-chart-annotation-square";WjFlexChartAnnotationSquareBehavior.parentProp="items";WjFlexChartAnnotationSquareBehavior.siblingId="annotation";WjFlexChartAnnotationSquareBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationSquareBehavior.events=["initialized"];WjFlexChartAnnotationSquareBehavior.classCtor=function(){return wjcChartAnnotation.Square};exports.WjFlexChartAnnotationSquare=WjFlexChartAnnotationSquareBehavior.register();function registerV3WjFlexChartAnnotationSquare(t){t.component(WjFlexChartAnnotationSquareBehavior.tag,exports.WjFlexChartAnnotationSquare)}class WjFlexChartAnnotationImageBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexChartAnnotationImageBehavior.tag="wj-flex-chart-annotation-image";WjFlexChartAnnotationImageBehavior.parentProp="items";WjFlexChartAnnotationImageBehavior.siblingId="annotation";WjFlexChartAnnotationImageBehavior.props=["wjProperty","type","attachment","position","point","seriesIndex","pointIndex","offset","isVisible","tooltip","text","content","name","width","height","start","end","radius","length","href"];WjFlexChartAnnotationImageBehavior.events=["initialized"];WjFlexChartAnnotationImageBehavior.classCtor=function(){return wjcChartAnnotation.Image};exports.WjFlexChartAnnotationImage=WjFlexChartAnnotationImageBehavior.register();function registerV3WjFlexChartAnnotationImage(t){t.component(WjFlexChartAnnotationImageBehavior.tag,exports.WjFlexChartAnnotationImage)}function registerChartAnnotation(t){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjFlexChartAnnotationLayer(t);registerV3WjFlexChartAnnotationText(t);registerV3WjFlexChartAnnotationEllipse(t);registerV3WjFlexChartAnnotationRectangle(t);registerV3WjFlexChartAnnotationLine(t);registerV3WjFlexChartAnnotationPolygon(t);registerV3WjFlexChartAnnotationCircle(t);registerV3WjFlexChartAnnotationSquare(t);registerV3WjFlexChartAnnotationImage(t)}}exports.registerChartAnnotation=registerChartAnnotation;