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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])})(e,o)};return function(e,o){extendStatics(e,o);function __(){this.constructor=e}e.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcGridTransposed from"wijmo/wijmo.grid.transposed";var WjTransposedGridBehavior=function(e){__extends(WjTransposedGridBehavior,e);function WjTransposedGridBehavior(){return null!==e&&e.apply(this,arguments)||this}WjTransposedGridBehavior.tag="wj-transposed-grid";WjTransposedGridBehavior.props=["autoGenerateRows","isDisabled","tabOrder","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","showPlaceholders","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","itemValidator","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","rowGroups","commitEmptyEdits","headersFocusability"];WjTransposedGridBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","beginningEdit","cellEditEnded","cellEditEnding","prepareCellForEdit","formatItem","resizingColumn","resizedColumn","autoSizingColumn","autoSizedColumn","draggingColumn","draggingColumnOver","draggedColumn","sortingColumn","sortedColumn","pinningColumn","pinnedColumn","resizingRow","resizedRow","autoSizingRow","autoSizedRow","draggingRow","draggingRowOver","draggedRow","deletingRow","deletedRow","loadingRows","loadedRows","rowEditStarting","rowEditStarted","rowEditEnding","rowEditEnded","rowAdded","groupCollapsedChanging","groupCollapsedChanged","columnGroupCollapsedChanging","columnGroupCollapsedChanged","itemsSourceChanging","itemsSourceChanged","selectionChanging","selectionChanged","scrollPositionChanged","updatingView","updatedView","updatingLayout","updatedLayout","pasting","pasted","pastingCell","pastedCell","copying","copied"];WjTransposedGridBehavior.classCtor=function(){return wjcGridTransposed.TransposedGrid};return WjTransposedGridBehavior}(WjComponentBehavior);export var WjTransposedGrid=WjTransposedGridBehavior.register();function registerV3WjTransposedGrid(e){e.component(WjTransposedGridBehavior.tag,WjTransposedGrid)}var WjTransposedGridRowBehavior=function(e){__extends(WjTransposedGridRowBehavior,e);function WjTransposedGridRowBehavior(){return null!==e&&e.apply(this,arguments)||this}WjTransposedGridRowBehavior.prototype._initParent=function(){var o=this.parent.control;if(o.autoGenerateRows){o.autoGenerateRows=!1;o._rowInfo.clear()}e.prototype._initParent.call(this)};WjTransposedGridRowBehavior.tag="wj-transposed-grid-row";WjTransposedGridRowBehavior.parentProp="_rowInfo";WjTransposedGridRowBehavior.props=["wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","cellTemplate","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","cssClassAll","isContentHtml","isSelected","visible","wordWrap","multiLine","mask","inputType","isRequired","showDropDown","dataMapEditor","dropDownCssClass","quickAutoSize","editor"];WjTransposedGridRowBehavior.events=["initialized"];WjTransposedGridRowBehavior.changeEvents={"grid.selectionChanged":["isSelected"]};WjTransposedGridRowBehavior.classCtor=function(){return wjcGridTransposed.TransposedGridRow};return WjTransposedGridRowBehavior}(WjComponentBehavior);export var WjTransposedGridRow=WjTransposedGridRowBehavior.register();function registerV3WjTransposedGridRow(e){e.component(WjTransposedGridRowBehavior.tag,WjTransposedGridRow)}export function registerGridTransposed(e){if(VueApi.isV3Plus){registerV3WjTransposedGrid(e);registerV3WjTransposedGridRow(e)}}