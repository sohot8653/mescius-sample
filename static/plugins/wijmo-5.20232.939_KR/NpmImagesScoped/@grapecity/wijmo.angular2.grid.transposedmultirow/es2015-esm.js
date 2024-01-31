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

import * as ɵngcc0 from '@angular/core';
var WjTransposedMultiRow_1,__decorate=this&&this.__decorate||function(e,o,t,i){var r,n=arguments.length,a=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,i);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(a=(n<3?r(a):n>3?r(o,t,a):r(o,t))||a);return n>3&&a&&Object.defineProperty(o,t,a),a},__param=this&&this.__param||function(e,o){return function(t,i){o(t,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridTransposedmultirow from"@grapecity/wijmo.grid.transposedmultirow";var wjTransposedMultiRowMeta={selector:"wj-transposed-multi-row",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","allowPinning","autoScroll","autoRowHeights","autoSizeMode","autoGenerateColumns","autoSearch","caseSensitiveSearch","quickAutoSize","bigCheckboxes","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","showPlaceholders","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","alternatingRowStep","itemValidator","validateEdits","treeIndent","itemsSource","autoClipboard","expandSelectionOnCopyPaste","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","editColumnIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","preserveWhiteSpace","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold","anchorCursor","lazyRender","refreshOnEdit","copyHeaders","columnGroups","layoutDefinition","commitEmptyEdits","headersFocusability"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","pinningColumnNg: pinningColumn","pinnedColumnNg: pinnedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangingNg: groupCollapsedChanging","groupCollapsedChangedNg: groupCollapsedChanged","columnGroupCollapsedChangingNg: columnGroupCollapsedChanging","columnGroupCollapsedChangedNg: columnGroupCollapsedChanged","itemsSourceChangingNg: itemsSourceChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTransposedMultiRowMeta};let WjTransposedMultiRow=WjTransposedMultiRow_1=class WjTransposedMultiRow extends wjcGridTransposedmultirow.TransposedMultiRow{constructor(e,o,t){super(WjDirectiveBehavior.getHostElement(e,o));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,o,t);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,o,t,i=!1){let r=WjDirectiveBehavior,n=r.getZone(this);n&&r.outsideZoneEvents[o]?n.runOutsideAngular(()=>{super.addEventListener(e,o,t,i)}):super.addEventListener(e,o,t,i)}};
WjTransposedMultiRow.ɵfac = function WjTransposedMultiRow_Factory(t) { return new (t || WjTransposedMultiRow)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTransposedMultiRow.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTransposedMultiRow, selectors: [["wj-transposed-multi-row"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", newRowAtTop: "newRowAtTop", allowAddNew: "allowAddNew", allowDelete: "allowDelete", allowDragging: "allowDragging", allowMerging: "allowMerging", allowResizing: "allowResizing", allowSorting: "allowSorting", allowPinning: "allowPinning", autoScroll: "autoScroll", autoRowHeights: "autoRowHeights", autoSizeMode: "autoSizeMode", autoGenerateColumns: "autoGenerateColumns", autoSearch: "autoSearch", caseSensitiveSearch: "caseSensitiveSearch", quickAutoSize: "quickAutoSize", bigCheckboxes: "bigCheckboxes", childItemsPath: "childItemsPath", groupHeaderFormat: "groupHeaderFormat", headersVisibility: "headersVisibility", showSelectedHeaders: "showSelectedHeaders", showMarquee: "showMarquee", showPlaceholders: "showPlaceholders", itemFormatter: "itemFormatter", isReadOnly: "isReadOnly", imeEnabled: "imeEnabled", mergeManager: "mergeManager", selectionMode: "selectionMode", showGroups: "showGroups", showSort: "showSort", showDropDown: "showDropDown", showAlternatingRows: "showAlternatingRows", showErrors: "showErrors", alternatingRowStep: "alternatingRowStep", itemValidator: "itemValidator", validateEdits: "validateEdits", treeIndent: "treeIndent", itemsSource: "itemsSource", autoClipboard: "autoClipboard", expandSelectionOnCopyPaste: "expandSelectionOnCopyPaste", frozenRows: "frozenRows", frozenColumns: "frozenColumns", cloneFrozenCells: "cloneFrozenCells", deferResizing: "deferResizing", sortRowIndex: "sortRowIndex", editColumnIndex: "editColumnIndex", stickyHeaders: "stickyHeaders", preserveSelectedState: "preserveSelectedState", preserveOutlineState: "preserveOutlineState", preserveWhiteSpace: "preserveWhiteSpace", keyActionTab: "keyActionTab", keyActionEnter: "keyActionEnter", rowHeaderPath: "rowHeaderPath", virtualizationThreshold: "virtualizationThreshold", anchorCursor: "anchorCursor", lazyRender: "lazyRender", refreshOnEdit: "refreshOnEdit", copyHeaders: "copyHeaders", columnGroups: "columnGroups", layoutDefinition: "layoutDefinition", commitEmptyEdits: "commitEmptyEdits", headersFocusability: "headersFocusability" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", beginningEditNg: "beginningEdit", cellEditEndedNg: "cellEditEnded", cellEditEndingNg: "cellEditEnding", prepareCellForEditNg: "prepareCellForEdit", formatItemNg: "formatItem", resizingColumnNg: "resizingColumn", resizedColumnNg: "resizedColumn", autoSizingColumnNg: "autoSizingColumn", autoSizedColumnNg: "autoSizedColumn", draggingColumnNg: "draggingColumn", draggingColumnOverNg: "draggingColumnOver", draggedColumnNg: "draggedColumn", sortingColumnNg: "sortingColumn", sortedColumnNg: "sortedColumn", pinningColumnNg: "pinningColumn", pinnedColumnNg: "pinnedColumn", resizingRowNg: "resizingRow", resizedRowNg: "resizedRow", autoSizingRowNg: "autoSizingRow", autoSizedRowNg: "autoSizedRow", draggingRowNg: "draggingRow", draggingRowOverNg: "draggingRowOver", draggedRowNg: "draggedRow", deletingRowNg: "deletingRow", deletedRowNg: "deletedRow", loadingRowsNg: "loadingRows", loadedRowsNg: "loadedRows", rowEditStartingNg: "rowEditStarting", rowEditStartedNg: "rowEditStarted", rowEditEndingNg: "rowEditEnding", rowEditEndedNg: "rowEditEnded", rowAddedNg: "rowAdded", groupCollapsedChangingNg: "groupCollapsedChanging", groupCollapsedChangedNg: "groupCollapsedChanged", columnGroupCollapsedChangingNg: "columnGroupCollapsedChanging", columnGroupCollapsedChangedNg: "columnGroupCollapsedChanged", itemsSourceChangingNg: "itemsSourceChanging", itemsSourceChangedNg: "itemsSourceChanged", selectionChangingNg: "selectionChanging", selectionChangedNg: "selectionChanged", scrollPositionChangedNg: "scrollPositionChanged", updatingViewNg: "updatingView", updatedViewNg: "updatedView", updatingLayoutNg: "updatingLayout", updatedLayoutNg: "updatedLayout", pastingNg: "pasting", pastedNg: "pasted", pastingCellNg: "pastingCell", pastedCellNg: "pastedCell", copyingNg: "copying", copiedNg: "copied" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjTransposedMultiRow_1) }, ...wjTransposedMultiRowMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjTransposedMultiRow_Template(rf, ctx) { }, encapsulation: 2 });WjTransposedMultiRow.meta={outputs:wjTransposedMultiRowMeta.outputs};WjTransposedMultiRow=WjTransposedMultiRow_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTransposedMultiRow);export{WjTransposedMultiRow};let moduleExports=[WjTransposedMultiRow],WjGridTransposedmultirowModule=class WjGridTransposedmultirowModule{};
WjGridTransposedmultirowModule.ɵfac = function WjGridTransposedmultirowModule_Factory(t) { return new (t || WjGridTransposedmultirowModule)(); };
WjGridTransposedmultirowModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridTransposedmultirowModule });
WjGridTransposedmultirowModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTransposedMultiRow, [{
        type: Component,
        args: [{ selector: wjTransposedMultiRowMeta.selector, template: wjTransposedMultiRowMeta.template, inputs: wjTransposedMultiRowMeta.inputs, outputs: wjTransposedMultiRowMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjTransposedMultiRow_1) }, ...wjTransposedMultiRowMeta.providers] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridTransposedmultirowModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridTransposedmultirowModule, { declarations: function () { return [WjTransposedMultiRow]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjTransposedMultiRow]; } }); })();export{WjGridTransposedmultirowModule};