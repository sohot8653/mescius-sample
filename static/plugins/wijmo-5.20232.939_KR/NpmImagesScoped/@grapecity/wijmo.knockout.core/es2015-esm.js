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

import{WjBinding,WjContext}from"@grapecity/wijmo.knockout.base";import{Tooltip}from"@grapecity/wijmo";import*as mKo from"knockout";var wjKo=mKo;export class wjTooltip extends WjBinding{_getControlConstructor(){return Tooltip}_createControl(o){return super._createControl(null)}_createWijmoContext(){return new WjTooltipContext(this)}}export class WjTooltipContext extends WjContext{update(o,t,e,r,i){super.update(o,t,e,r,i);this._updateTooltip()}_updateTooltip(){this.control.setTooltip(this.element,wjKo.unwrap(this.valueAccessor()))}}wjKo.bindingHandlers.wjTooltip=new wjTooltip;