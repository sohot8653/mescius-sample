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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGridFilter=__importStar(require("wijmo/wijmo.grid.filter"));let _wj_ns_exists_10=!0;class WjcFlexGridFilter extends HTMLElement{constructor(){super();this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexGridFilter.wrappedClass=()=>wjcGridFilter.FlexGridFilter;WjcFlexGridFilter.parentInCtor=!0;exports.WjcFlexGridFilter=WjcFlexGridFilter;if(_wj_ns_exists_10){wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-flex-grid-filter",WjcFlexGridFilter);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcGridFilter.ColumnFilterEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcGridFilter.ConditionFilterEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcGridFilter.ValueFilterEditor)}