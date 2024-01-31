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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcViewer=__importStar(require("@grapecity/wijmo.viewer"));class WjReportViewerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer";WjReportViewerBehavior.props=["isDisabled","tabOrder","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders","parameters","paginated","reportName"];WjReportViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjReportViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer};exports.WjReportViewer=WjReportViewerBehavior.register();function registerV3WjReportViewer(e){e.component(WjReportViewerBehavior.tag,exports.WjReportViewer)}class WjPdfViewerBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer";WjPdfViewerBehavior.props=["isDisabled","tabOrder","serviceUrl","filePath","fullScreen","zoomFactor","zoomMode","mouseMode","viewMode","requestHeaders"];WjPdfViewerBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","pageIndexChanged","queryLoadingData","beforeSendRequest"];WjPdfViewerBehavior.changeEvents={fullScreenChanged:["fullScreen"],zoomFactorChanged:["zoomFactor"],zoomModeChanged:["zoomMode"],mouseModeChanged:["mouseMode"],viewModeChanged:["viewMode"]};WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer};exports.WjPdfViewer=WjPdfViewerBehavior.register();function registerV3WjPdfViewer(e){e.component(WjPdfViewerBehavior.tag,exports.WjPdfViewer)}function registerViewer(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjReportViewer(e);registerV3WjPdfViewer(e)}}exports.registerViewer=registerViewer;