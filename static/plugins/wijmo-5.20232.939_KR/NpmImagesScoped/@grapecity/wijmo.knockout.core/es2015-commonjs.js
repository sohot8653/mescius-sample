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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(o[e]=t[e]);o.default=t;return o};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_knockout_base_1=require("@grapecity/wijmo.knockout.base"),wijmo_1=require("@grapecity/wijmo"),mKo=__importStar(require("knockout"));var wjKo=mKo;class wjTooltip extends wijmo_knockout_base_1.WjBinding{_getControlConstructor(){return wijmo_1.Tooltip}_createControl(t){return super._createControl(null)}_createWijmoContext(){return new WjTooltipContext(this)}}exports.wjTooltip=wjTooltip;class WjTooltipContext extends wijmo_knockout_base_1.WjContext{update(t,o,e,r,i){super.update(t,o,e,r,i);this._updateTooltip()}_updateTooltip(){this.control.setTooltip(this.element,wjKo.unwrap(this.valueAccessor()))}}exports.WjTooltipContext=WjTooltipContext;wjKo.bindingHandlers.wjTooltip=new wjTooltip;