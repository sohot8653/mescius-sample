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

import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcGridTransposed from"@grapecity/wijmo.grid.transposed";let _wj_ns_exists_15=!0;export class WjcTransposedGrid extends wjcGridTransposed.TransposedGrid{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}_wj_ns_exists_15&&WjComponentBehavior.register("wjc-transposed-grid",WjcTransposedGrid);export class WjcTransposedGridRow extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}_beforeInitParent(){let e=this.parentElement.control;if(e.autoGenerateRows){e.autoGenerateRows=!1;e._rowInfo.clear()}}}WjcTransposedGridRow.wrappedClass=()=>wjcGridTransposed.TransposedGridRow;WjcTransposedGridRow.parentProp="_rowInfo";_wj_ns_exists_15&&WjComponentBehavior.register("wjc-transposed-grid-row",WjcTransposedGridRow);