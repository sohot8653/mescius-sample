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

import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcGridMultirow from"wijmo/wijmo.grid.multirow";let _wj_ns_exists_13=!0;export class WjcMultiRow extends wjcGridMultirow.MultiRow{constructor(){super(document.createElement("div"));this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...t){"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):super.addEventListener.apply(this,t)}}_wj_ns_exists_13&&WjComponentBehavior.register("wjc-multi-row",WjcMultiRow);export class WjcMultiRowCell extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcMultiRowCell.wrappedClass=()=>wjcGridMultirow.MultiRowCell;WjcMultiRowCell.parentProp="cells";_wj_ns_exists_13&&WjComponentBehavior.register("wjc-multi-row-cell",WjcMultiRowCell);export class WjcMultiRowCellGroup extends HTMLElement{constructor(){super();this._wjBehaviour=WjComponentBehavior._attach(this)}static get observedAttributes(){return WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcMultiRowCellGroup.wrappedClass=()=>wjcGridMultirow.MultiRowCellGroup;WjcMultiRowCellGroup.parentProp="layoutDefinition";_wj_ns_exists_13&&WjComponentBehavior.register("wjc-multi-row-cell-group",WjcMultiRowCellGroup);