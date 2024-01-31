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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(o[t]=e[t]);o.default=e;return o};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("@grapecity/wijmo.vue2.base"),wjcGridSheet=__importStar(require("@grapecity/wijmo.grid.sheet"));class WjFlexSheetBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjFlexSheetBehavior.tag="wj-flex-sheet";WjFlexSheetBehavior.props=["isDisabled","tabOrder","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","showPlaceholders","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","itemValidator","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","allowAutoFill","isTabHolderVisible","showFilterIcons","enableDragDrop","enableFormulas","selectedSheetIndex","commitEmptyEdits","headersFocusability"];WjFlexSheetBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput","beginningEdit","cellEditEnded","cellEditEnding","prepareCellForEdit","formatItem","resizingColumn","resizedColumn","autoSizingColumn","autoSizedColumn","draggingColumn","draggingColumnOver","draggedColumn","sortingColumn","sortedColumn","pinningColumn","pinnedColumn","resizingRow","resizedRow","autoSizingRow","autoSizedRow","draggingRow","draggingRowOver","draggedRow","deletingRow","deletedRow","loadingRows","loadedRows","rowEditStarting","rowEditStarted","rowEditEnding","rowEditEnded","rowAdded","groupCollapsedChanging","groupCollapsedChanged","columnGroupCollapsedChanging","columnGroupCollapsedChanged","itemsSourceChanging","itemsSourceChanged","selectionChanging","selectionChanged","scrollPositionChanged","updatingView","updatedView","updatingLayout","updatedLayout","pasting","pasted","pastingCell","pastedCell","copying","copied","draggingRowColumn","droppingRowColumn","beginDroppingRowColumn","endDroppingRowColumn","loaded","unknownFunction","sheetCleared","prepareChangingRow","prepareChangingColumn","rowChanged","columnChanged","autoFilling","autoFilled"];WjFlexSheetBehavior.changeEvents={selectedSheetChanged:["selectedSheetIndex"]};WjFlexSheetBehavior.classCtor=function(){return wjcGridSheet.FlexSheet};exports.WjFlexSheet=WjFlexSheetBehavior.register();function registerV3WjFlexSheet(e){e.component(WjFlexSheetBehavior.tag,exports.WjFlexSheet)}class WjSheetBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjSheetBehavior.tag="wj-sheet";WjSheetBehavior.parentProp="sheets";WjSheetBehavior.parentInCtor=!0;WjSheetBehavior.props=["wjProperty","name","itemsSource","visible","rowCount","columnCount"];WjSheetBehavior.events=["initialized","nameChanged"];WjSheetBehavior.classCtor=function(){return wjcGridSheet.Sheet};exports.WjSheet=WjSheetBehavior.register();function registerV3WjSheet(e){e.component(WjSheetBehavior.tag,exports.WjSheet)}function registerGridSheet(e){if(wijmo_vue2_base_1.VueApi.isV3Plus){registerV3WjFlexSheet(e);registerV3WjSheet(e)}}exports.registerGridSheet=registerGridSheet;