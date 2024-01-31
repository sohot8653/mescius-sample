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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.hasOwnProperty.call(e,l)&&(t[l]=e[l]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_react_base_1=require("wijmo/wijmo.react.base"),React=__importStar(require("react")),wjcCore=__importStar(require("wijmo/wijmo")),wjcGrid=__importStar(require("wijmo/wijmo.grid")),wjcInteropGrid=__importStar(require("wijmo/wijmo.interop.grid"));exports.CellTemplateType=wjcInteropGrid.GridCellTemplateType;class FlexGrid extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGrid.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups"]})}_createControl(){let e=super._createControl();new DirectiveCellFactory(this,e);return e}}exports.FlexGrid=FlexGrid;class FlexGridColumn extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGrid.Column,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="columns"}_initParent(){var e=this.parent.control;if(e.autoGenerateColumns){e.autoGenerateColumns=!1;e.columns.clear()}super._initParent()}}exports.FlexGridColumn=FlexGridColumn;class FlexGridColumnGroup extends wijmo_react_base_1.ComponentBase{constructor(e){super(e,wjcGrid.ColumnGroup,{objectProps:["dataMap","cellTemplate","editor"]});this._parentProp="columnGroups"}}exports.FlexGridColumnGroup=FlexGridColumnGroup;class DirectiveCellFactory extends wjcInteropGrid.DirectiveCellFactoryBase{constructor(e,t){super(t);this._renderedCells=[];this._isViewUpdated=!1;t.updatedView.addHandler(this._gridViewUpdated,this);e._beforeDidUpdate.addHandler(this._gridCmpBeforeDidUpdate,this);e._afterDidUpdate.addHandler(this._gridCmpAfterDidUpdate,this)}shouldInstantiate(e){let t=e.templateCache;return null==t||t.column!==e.column||t.templateContextProperty!==e.templateContextProperty||e.cell.firstChild!=t.rootElement}renderTemplate(e,t){let l=e.row,r=e.templateContext,i=e.cell;e.cellBindingsData=this.setBindingsData({},l,e.column,l.dataItem,e.cellValue,r.valuePaths);this._renderCell(i,e);if(t){this._addRenderedCell(i);let t=e.templateCache={column:e.column,rootElement:i.firstElementChild,templateContextProperty:e.templateContextProperty};i[e.templateContextProperty]=t}}disposeTemplate(e,t,l){if(t){wijmo_react_base_1.ComponentBase.selectiveDomUnmount(e);this._removeRenderedCell(e);super.disposeTemplate(e,t,l)}}clearCell(e){wijmo_react_base_1.ComponentBase.selectiveDomUnmount(e)}applyImmediately(e){}flushPendingEvents(e){}getEditorFocusFlag(){return!0}setEditorFocusFlag(e){}_renderCell(e,t){var l=t||e.__wjCellLastRenderedProp;if(l){let t=l&&l.templateContext.template,r=l.cellBindingsData.localVars;wijmo_react_base_1.ComponentBase.selectiveDomRender(React.createElement("div",{},t&&t(r)),e);e.__wjCellLastRenderedProp=l}}_addRenderedCell(e){let t=this._renderedCells;t.indexOf(e)<0&&t.push(e)}_removeRenderedCell(e){let t=this._renderedCells,l=t.indexOf(e);l>-1&&t.splice(l,1)}_reRenderCells(){this._renderedCells.forEach(e=>this._renderCell(e))}_gridCmpBeforeDidUpdate(){this._isViewUpdated=!1}_gridCmpAfterDidUpdate(){this._gridCmpRendered()}_gridCmpRendered(){setTimeout(()=>{this._isViewUpdated?this._isViewUpdated=!1:this._reRenderCells()},wjcCore.Control._REFRESH_INTERVAL)}_gridViewUpdated(){this._isViewUpdated=!0}checkHeight(e){"$__cellTemplGroupHeader"!==e.templateContextProperty&&(this._isCheckingHeight||setTimeout(()=>{if(this._isCheckingHeight)return;var t=e.panel.rows,l=e.row.index;let r=e.cell;const i=r.style.height;r.style.height="0";let o=r.scrollHeight>7?r.scrollHeight:t[l].renderHeight;r.style.height=i;if(e.cellStamp===r[wjcInteropGrid.DirectiveCellFactoryBase._cellStampProp]){var n=e.rng,s=n&&n.rowSpan||1,a=e.isEdit;null!=t.maxSize&&(o=Math.min(o,t.maxSize));if(l<t.length&&t[l].renderHeight<o-1||t[l].renderHeight>o+1&&!a&&e.panel.cellType===wjcGrid.CellType.Cell){const t=o/s;e.row.resizedManually||(e.row.height=t);if(a){let l=this._isFullEdit(),r=this.grid;this._backupHeight=e.row.height;e.row.height=t;this._cacheRow=e.row;this._isCheckingHeight=!0;r.refresh();r.startEditing(l);this._isCheckingHeight=!1;e.isImeInput?this._initImeEditInput(e.cell,e.templateContext):this._initEditInput(e.cell,e.templateContext,null);return}}else a&&(e.isImeInput?this._initImeEditInput(e.cell,e.templateContext):this._initEditInput(e.cell,e.templateContext,null))}},2))}}exports.DirectiveCellFactory=DirectiveCellFactory;class FlexGridCellTemplate extends React.Component{get cellOverflow(){return this.props.cellOverflow}get autoSizeRows(){let e=this.props.autoSizeRows;return null==e||e}get forceFullEdit(){let e=this.props.forceFullEdit;return null==e||e}get valuePaths(){return this.props.valuePaths}get template(){return this.props[FlexGridCellTemplate._CellRenderFuncProp]}componentDidMount(){let e=this.props[wijmo_react_base_1.ComponentBase._propsParent];e&&e._mountedCB(()=>{let t=this.ownerControl=e.control;if(t instanceof wjcGrid.FlexGrid)this.grid=t;else if(t instanceof wjcGrid.Column){this.column=t;let l,r=e;do{l=(r=r.props[wijmo_react_base_1.ComponentBase._propsParent])&&r.control}while(l&&!(l instanceof wjcGrid.FlexGrid));this.grid=l}this.template&&this._attachToControl()})}componentWillUnmount(){this._detachFromControl()}componentDidUpdate(e){let t=e[FlexGridCellTemplate._CellRenderFuncProp],l=this.template;t!=l&&(null==t?this._attachToControl():null==l&&this._detachFromControl())}render(){return null}_attachToControl(){let e=this.cellType=wjcCore.asEnum(this.props.cellType,exports.CellTemplateType),t=this.ownerControl;t[DirectiveCellFactory.getTemplContextProp(e)]=this;t instanceof wjcGrid.Column&&(e===exports.CellTemplateType.Cell||e===exports.CellTemplateType.ColumnHeader||e===exports.CellTemplateType.ColumnFooter)&&t._setFlag(wjcGrid.RowColFlags.HasTemplate,!0);this.grid.invalidate()}_detachFromControl(){if(null!=this.cellType){this.ownerControl[DirectiveCellFactory.getTemplContextProp(this.cellType)]=null;this.grid.invalidate()}}}FlexGridCellTemplate._CellRenderFuncProp="template";exports.FlexGridCellTemplate=FlexGridCellTemplate;