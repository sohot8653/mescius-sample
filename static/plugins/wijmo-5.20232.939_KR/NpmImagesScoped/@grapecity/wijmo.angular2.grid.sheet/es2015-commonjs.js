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

"use strict";var WjFlexSheet_1,WjSheet_1,__decorate=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},__param=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directivebase_1=require("@grapecity/wijmo.angular2.directivebase"),wjcGridSheet=__importStar(require("@grapecity/wijmo.grid.sheet"));var wjFlexSheetMeta={selector:"wj-flex-sheet",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","showPlaceholders","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","itemValidator","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","allowAutoFill","isTabHolderVisible","showFilterIcons","enableDragDrop","enableFormulas","selectedSheetIndex","commitEmptyEdits","headersFocusability"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","columnGroupCollapsedChangingNg: columnGroupCollapsedChanging","columnGroupCollapsedChangedNg: columnGroupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied","selectedSheetChangedNg: selectedSheetChanged","selectedSheetIndexChangePC: selectedSheetIndexChange","draggingRowColumnNg: draggingRowColumn","droppingRowColumnNg: droppingRowColumn","beginDroppingRowColumnNg: beginDroppingRowColumn","endDroppingRowColumnNg: endDroppingRowColumn","loadedNg: loaded","unknownFunctionNg: unknownFunction","sheetClearedNg: sheetCleared","prepareChangingRowNg: prepareChangingRow","prepareChangingColumnNg: prepareChangingColumn","rowChangedNg: rowChanged","columnChangedNg: columnChanged","autoFillingNg: autoFilling","autoFilledNg: autoFilled"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directivebase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};exports.wjFlexSheetMeta=wjFlexSheetMeta;let WjFlexSheet=WjFlexSheet_1=class WjFlexSheet extends wjcGridSheet.FlexSheet{constructor(e,t,o){super(wijmo_angular2_directivebase_1.WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,n=!1){let r=wijmo_angular2_directivebase_1.WjDirectiveBehavior,i=r.getZone(this);i&&r.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,n)}):super.addEventListener(e,t,o,n)}};WjFlexSheet.meta={outputs:wjFlexSheetMeta.outputs,changeEvents:{selectedSheetChanged:["selectedSheetIndex"]}};WjFlexSheet=WjFlexSheet_1=__decorate([core_1.Component({selector:wjFlexSheetMeta.selector,template:wjFlexSheetMeta.template,inputs:wjFlexSheetMeta.inputs,outputs:wjFlexSheetMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexSheet_1)},...wjFlexSheetMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjFlexSheet);exports.WjFlexSheet=WjFlexSheet;var wjSheetMeta={selector:"wj-sheet",template:"",inputs:["wjProperty","name","itemsSource","visible","rowCount","columnCount"],outputs:["initialized","nameChangedNg: nameChanged"],providers:[]};exports.wjSheetMeta=wjSheetMeta;let WjSheet=WjSheet_1=class WjSheet extends wjcGridSheet.Sheet{constructor(e,t,o){super(o);this.isInitialized=!1;this.wjProperty="sheets";this._wjBehaviour=wijmo_angular2_directivebase_1.WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}ngOnChanges(e){let t;(t=e.rowCount)&&t.isFirstChange&&(this.boundRowCount=t.currentValue);(t=e.columnCount)&&t.isFirstChange&&(this.boundColumnCount=t.currentValue)}};WjSheet.meta={outputs:wjSheetMeta.outputs};WjSheet=WjSheet_1=__decorate([core_1.Component({selector:wjSheetMeta.selector,template:wjSheetMeta.template,inputs:wjSheetMeta.inputs,outputs:wjSheetMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjSheet_1)},...wjSheetMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],WjSheet);exports.WjSheet=WjSheet;let moduleExports=[WjFlexSheet,WjSheet],WjGridSheetModule=class WjGridSheetModule{};WjGridSheetModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGridSheetModule);exports.WjGridSheetModule=WjGridSheetModule;