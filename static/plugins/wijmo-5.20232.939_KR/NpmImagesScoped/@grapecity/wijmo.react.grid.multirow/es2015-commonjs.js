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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("@grapecity/wijmo.react.base"),wjcGridMultirow=__importStar(require("@grapecity/wijmo.grid.multirow")),wjGrid=__importStar(require("@grapecity/wijmo.react.grid"));class MultiRow extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridMultirow.MultiRow,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","layoutDefinition","headerLayoutDefinition"]})}_createControl(){let e=super._createControl();new wjGrid.DirectiveCellFactory(this,e);return e}_onBeforeWillUnmount(e){super._onBeforeWillUnmount(e);wijmo_react_base_1.ComponentBase._reactMajorVersion<18&&this.control._layout._dispose()}}exports.MultiRow=MultiRow;class MultiRowCell extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridMultirow.MultiRowCell,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="cells"}}exports.MultiRowCell=MultiRowCell;class MultiRowCellGroup extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGridMultirow.MultiRowCellGroup,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="layoutDefinition"}}exports.MultiRowCellGroup=MultiRowCellGroup;class MultiRowCellTemplate extends wjGrid.FlexGridCellTemplate{get template(){return this.props[MultiRowCellTemplate._CellRenderFuncProp]}}exports.MultiRowCellTemplate=MultiRowCellTemplate;