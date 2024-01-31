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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_grid_1=require("wijmo/wijmo.angular.grid"),mNg=__importStar(require("angular")),wjcGridSheet=__importStar(require("wijmo/wijmo.grid.sheet"));var wjNg=mNg;const wijmoGridSheetName="wj.grid.sheet";exports.ngModuleName="wj.grid.sheet";var wijmoGridSheet=wijmo_angular_base_1._registerNgModule("wj.grid.sheet");if(wijmo_angular_base_1.softRefGridSheet()){wijmoGridSheet.directive("wjFlexSheet",["$compile","$interpolate",function(e,r){return new WjFlexSheet(e,r)}]);wijmoGridSheet.directive("wjSheet",[function(){return new WjSheet}])}class WjFlexSheet extends wijmo_angular_grid_1.WjFlexGrid{constructor(e,r){super(e,r)}get _controlConstructor(){return wjcGridSheet.FlexSheet}}class WjSheet extends wijmo_angular_base_1.WjDirective{constructor(){super();this.require="^wjFlexSheet"}get _controlConstructor(){return wjcGridSheet.Sheet}_initControl(e){return super._initControl(void 0)}}