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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcChartInteraction from"@grapecity/wijmo.chart.interaction";let _wj_ns_exists_6=!0;export class WjcFlexChartRangeSelector extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexChartRangeSelector.wrappedClass=()=>wjcChartInteraction.RangeSelector;WjcFlexChartRangeSelector.parentInCtor=!0;_wj_ns_exists_6&&WjComponentBehavior.register("wjc-flex-chart-range-selector",WjcFlexChartRangeSelector);export class WjcFlexChartGestures extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexChartGestures.wrappedClass=()=>wjcChartInteraction.ChartGestures;WjcFlexChartGestures.parentInCtor=!0;_wj_ns_exists_6&&WjComponentBehavior.register("wjc-flex-chart-gestures",WjcFlexChartGestures);