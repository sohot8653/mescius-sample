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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,r){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){extendStatics(e,r);function __(){this.constructor=e}e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("@grapecity/wijmo.angular.base"),mNg=__importStar(require("angular")),wjcViewer=__importStar(require("@grapecity/wijmo.viewer")),wjNg=mNg,wijmoViewerName="wj.viewer";exports.ngModuleName=wijmoViewerName;var wijmoOlap=wijmo_angular_base_1._registerNgModule(wijmoViewerName),wijmoViewer=window.angular.module("wj.viewer",[]);wijmo_angular_base_1.softRefViewer()&&wijmo_angular_base_1.softRefViewer().ReportViewer&&wijmoViewer.directive("wjReportViewer",[function(){return new WjReportViewer}]);wjcViewer&&wjcViewer.PdfViewer&&wijmoViewer.directive("wjPdfViewer",[function(){return new WjPdfViewer}]);var WjViewerBase=function(e){__extends(WjViewerBase,e);function WjViewerBase(){var r=e.call(this)||this;r.template="<div ng-transclude />";r.transclude=!0;return r}Object.defineProperty(WjViewerBase.prototype,"_controlConstructor",{get:function(){return wjcViewer.ViewerBase},enumerable:!0,configurable:!0});return WjViewerBase}(wijmo_angular_base_1.WjDirective),WjReportViewer=function(e){__extends(WjReportViewer,e);function WjReportViewer(){return e.call(this)||this}Object.defineProperty(WjReportViewer.prototype,"_controlConstructor",{get:function(){return wjcViewer.ReportViewer},enumerable:!0,configurable:!0});return WjReportViewer}(WjViewerBase),WjPdfViewer=function(e){__extends(WjPdfViewer,e);function WjPdfViewer(){return e.call(this)||this}Object.defineProperty(WjPdfViewer.prototype,"_controlConstructor",{get:function(){return wjcViewer.PdfViewer},enumerable:!0,configurable:!0});return WjPdfViewer}(WjViewerBase);