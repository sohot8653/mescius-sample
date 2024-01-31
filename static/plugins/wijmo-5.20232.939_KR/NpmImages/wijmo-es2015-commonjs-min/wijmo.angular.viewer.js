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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),mNg=__importStar(require("angular")),wjcViewer=__importStar(require("wijmo/wijmo.viewer"));var wjNg=mNg;const wijmoViewerName="wj.viewer";exports.ngModuleName="wj.viewer";var wijmoOlap=wijmo_angular_base_1._registerNgModule("wj.viewer"),wijmoViewer=window.angular.module("wj.viewer",[]);wijmo_angular_base_1.softRefViewer()&&wijmo_angular_base_1.softRefViewer().ReportViewer&&wijmoViewer.directive("wjReportViewer",[function(){return new WjReportViewer}]);wjcViewer&&wjcViewer.PdfViewer&&wijmoViewer.directive("wjPdfViewer",[function(){return new WjPdfViewer}]);class WjViewerBase extends wijmo_angular_base_1.WjDirective{constructor(){super();this.template="<div ng-transclude />";this.transclude=!0}get _controlConstructor(){return wjcViewer.ViewerBase}}class WjReportViewer extends WjViewerBase{constructor(){super()}get _controlConstructor(){return wjcViewer.ReportViewer}}class WjPdfViewer extends WjViewerBase{constructor(){super()}get _controlConstructor(){return wjcViewer.PdfViewer}}