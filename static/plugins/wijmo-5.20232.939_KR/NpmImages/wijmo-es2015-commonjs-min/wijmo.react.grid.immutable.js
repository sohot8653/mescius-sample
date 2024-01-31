/*!
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

"use strict";var __importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);t.default=r;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcGridImmutable=__importStar(require("wijmo/wijmo.grid.immutable"));class ImmutabilityProvider extends wijmo_react_base_1.ComponentBase{constructor(r){super(r,wjcGridImmutable.ImmutabilityProvider,{objectProps:["itemsSource"]});this._parentInCtor=!0}}exports.ImmutabilityProvider=ImmutabilityProvider;