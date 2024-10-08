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
/**
* {@module wijmo.angular2.grid.multirow}
* Contains Angular 2 components for the <b>wijmo.grid.multirow</b> module.
*
* <b>wijmo.angular2.grid.multirow</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjMultiRow from 'wijmo/wijmo.angular2.grid.multirow';
* &nbsp;
* &#64;Component({
*     directives: [wjMultiRow.WjMultiRow],
*     template: `&lt;wj-multi-row&gt;&lt;/wj-multi-row&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
/**
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, ViewContainerRef, TemplateRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from '@grapecity/wijmo.angular2.directivebase';
import * as wjcGridMultirow from '@grapecity/wijmo.grid.multirow';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjGrid from '@grapecity/wijmo.angular2.grid';
declare var wjMultiRowMeta: IWjComponentMeta;
export { wjMultiRowMeta };
/**
 * Angular 2 component for the {@link wijmo.grid.multirow.MultiRow} control.
 *
 * Use the <b>wj-multi-row</b> component to add <b>MultiRow</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMultiRow</b> component is derived from the <b>MultiRow</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-multi-row</b> component may contain the following child components:
 * {@link wijmo.angular2.grid.multirow.WjMultiRowCellGroup}
 *  and {@link wijmo.angular2.grid.multirow.WjMultiRowCellTemplate}.
*/
export declare class WjMultiRow extends wjcGridMultirow.MultiRow implements OnInit, OnDestroy, AfterViewInit {
    cdRef: ChangeDetectorRef;
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>beginningEdit</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>beginningEdit</b> Wijmo event name.
     */
    beginningEditNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>cellEditEnded</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>cellEditEnded</b> Wijmo event name.
     */
    cellEditEndedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>cellEditEnding</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>cellEditEnding</b> Wijmo event name.
     */
    cellEditEndingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>prepareCellForEdit</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>prepareCellForEdit</b> Wijmo event name.
     */
    prepareCellForEditNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>resizingColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>resizingColumn</b> Wijmo event name.
     */
    resizingColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>resizedColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>resizedColumn</b> Wijmo event name.
     */
    resizedColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>autoSizingColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>autoSizingColumn</b> Wijmo event name.
     */
    autoSizingColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>autoSizedColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>autoSizedColumn</b> Wijmo event name.
     */
    autoSizedColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>draggingColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>draggingColumn</b> Wijmo event name.
     */
    draggingColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>draggingColumnOver</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>draggingColumnOver</b> Wijmo event name.
     */
    draggingColumnOverNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>draggedColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>draggedColumn</b> Wijmo event name.
     */
    draggedColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>sortingColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>sortingColumn</b> Wijmo event name.
     */
    sortingColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>sortedColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>sortedColumn</b> Wijmo event name.
     */
    sortedColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pinningColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pinningColumn</b> Wijmo event name.
     */
    pinningColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pinnedColumn</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pinnedColumn</b> Wijmo event name.
     */
    pinnedColumnNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>resizingRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>resizingRow</b> Wijmo event name.
     */
    resizingRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>resizedRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>resizedRow</b> Wijmo event name.
     */
    resizedRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>autoSizingRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>autoSizingRow</b> Wijmo event name.
     */
    autoSizingRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>autoSizedRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>autoSizedRow</b> Wijmo event name.
     */
    autoSizedRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>draggingRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>draggingRow</b> Wijmo event name.
     */
    draggingRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>draggingRowOver</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>draggingRowOver</b> Wijmo event name.
     */
    draggingRowOverNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>draggedRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>draggedRow</b> Wijmo event name.
     */
    draggedRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>deletingRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>deletingRow</b> Wijmo event name.
     */
    deletingRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>deletedRow</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>deletedRow</b> Wijmo event name.
     */
    deletedRowNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>loadingRows</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>loadingRows</b> Wijmo event name.
     */
    loadingRowsNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>loadedRows</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>loadedRows</b> Wijmo event name.
     */
    loadedRowsNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rowEditStarting</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rowEditStarting</b> Wijmo event name.
     */
    rowEditStartingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rowEditStarted</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rowEditStarted</b> Wijmo event name.
     */
    rowEditStartedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rowEditEnding</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rowEditEnding</b> Wijmo event name.
     */
    rowEditEndingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rowEditEnded</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rowEditEnded</b> Wijmo event name.
     */
    rowEditEndedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rowAdded</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rowAdded</b> Wijmo event name.
     */
    rowAddedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>groupCollapsedChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>groupCollapsedChanging</b> Wijmo event name.
     */
    groupCollapsedChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>groupCollapsedChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>groupCollapsedChanged</b> Wijmo event name.
     */
    groupCollapsedChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>columnGroupCollapsedChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>columnGroupCollapsedChanging</b> Wijmo event name.
     */
    columnGroupCollapsedChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>columnGroupCollapsedChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>columnGroupCollapsedChanged</b> Wijmo event name.
     */
    columnGroupCollapsedChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanging</b> Wijmo event name.
     */
    itemsSourceChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectionChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectionChanging</b> Wijmo event name.
     */
    selectionChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectionChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectionChanged</b> Wijmo event name.
     */
    selectionChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>scrollPositionChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>scrollPositionChanged</b> Wijmo event name.
     */
    scrollPositionChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>updatingView</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>updatingView</b> Wijmo event name.
     */
    updatingViewNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>updatedView</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>updatedView</b> Wijmo event name.
     */
    updatedViewNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>updatingLayout</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>updatingLayout</b> Wijmo event name.
     */
    updatingLayoutNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>updatedLayout</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>updatedLayout</b> Wijmo event name.
     */
    updatedLayoutNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pasting</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pasting</b> Wijmo event name.
     */
    pastingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pasted</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pasted</b> Wijmo event name.
     */
    pastedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pastingCell</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pastingCell</b> Wijmo event name.
     */
    pastingCellNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pastedCell</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pastedCell</b> Wijmo event name.
     */
    pastedCellNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>copying</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>copying</b> Wijmo event name.
     */
    copyingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>copied</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>copied</b> Wijmo event name.
     */
    copiedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>collapsedHeadersChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>collapsedHeadersChanging</b> Wijmo event name.
     */
    collapsedHeadersChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>collapsedHeadersChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>collapsedHeadersChanged</b> Wijmo event name.
     */
    collapsedHeadersChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>collapsedHeaders</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>collapsedHeadersChange</b> event name.
     */
    collapsedHeadersChangePC: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, cdRef: ChangeDetectorRef);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    _edtFocus: boolean;
    startEditing(fullEdit?: boolean, r?: number, c?: number, focus?: boolean, evt?: any): boolean;
    onCellEditEnding(e: wjcGrid.CellEditEndingEventArgs): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjMultiRow, [null, null, { optional: true; skipSelf: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjMultiRow, "wj-multi-row", never, { "asyncBindings": "asyncBindings"; "wjModelProperty": "wjModelProperty"; "isDisabled": "isDisabled"; "tabOrder": "tabOrder"; "newRowAtTop": "newRowAtTop"; "allowAddNew": "allowAddNew"; "allowDelete": "allowDelete"; "allowDragging": "allowDragging"; "allowMerging": "allowMerging"; "allowResizing": "allowResizing"; "allowSorting": "allowSorting"; "allowPinning": "allowPinning"; "autoScroll": "autoScroll"; "autoRowHeights": "autoRowHeights"; "autoSizeMode": "autoSizeMode"; "autoGenerateColumns": "autoGenerateColumns"; "autoSearch": "autoSearch"; "caseSensitiveSearch": "caseSensitiveSearch"; "quickAutoSize": "quickAutoSize"; "bigCheckboxes": "bigCheckboxes"; "childItemsPath": "childItemsPath"; "groupHeaderFormat": "groupHeaderFormat"; "headersVisibility": "headersVisibility"; "showSelectedHeaders": "showSelectedHeaders"; "showMarquee": "showMarquee"; "showPlaceholders": "showPlaceholders"; "itemFormatter": "itemFormatter"; "isReadOnly": "isReadOnly"; "imeEnabled": "imeEnabled"; "mergeManager": "mergeManager"; "selectionMode": "selectionMode"; "showGroups": "showGroups"; "showSort": "showSort"; "showDropDown": "showDropDown"; "showAlternatingRows": "showAlternatingRows"; "showErrors": "showErrors"; "alternatingRowStep": "alternatingRowStep"; "itemValidator": "itemValidator"; "validateEdits": "validateEdits"; "treeIndent": "treeIndent"; "itemsSource": "itemsSource"; "autoClipboard": "autoClipboard"; "expandSelectionOnCopyPaste": "expandSelectionOnCopyPaste"; "frozenRows": "frozenRows"; "frozenColumns": "frozenColumns"; "cloneFrozenCells": "cloneFrozenCells"; "deferResizing": "deferResizing"; "sortRowIndex": "sortRowIndex"; "editColumnIndex": "editColumnIndex"; "stickyHeaders": "stickyHeaders"; "preserveSelectedState": "preserveSelectedState"; "preserveOutlineState": "preserveOutlineState"; "preserveWhiteSpace": "preserveWhiteSpace"; "keyActionTab": "keyActionTab"; "keyActionEnter": "keyActionEnter"; "rowHeaderPath": "rowHeaderPath"; "virtualizationThreshold": "virtualizationThreshold"; "anchorCursor": "anchorCursor"; "lazyRender": "lazyRender"; "refreshOnEdit": "refreshOnEdit"; "copyHeaders": "copyHeaders"; "columnGroups": "columnGroups"; "layoutDefinition": "layoutDefinition"; "headerLayoutDefinition": "headerLayoutDefinition"; "centerHeadersVertically": "centerHeadersVertically"; "collapsedHeaders": "collapsedHeaders"; "showHeaderCollapseButton": "showHeaderCollapseButton"; "multiRowGroupHeaders": "multiRowGroupHeaders"; "commitEmptyEdits": "commitEmptyEdits"; "headersFocusability": "headersFocusability"; }, { "initialized": "initialized"; "gotFocusNg": "gotFocus"; "lostFocusNg": "lostFocus"; "refreshingNg": "refreshing"; "refreshedNg": "refreshed"; "invalidInputNg": "invalidInput"; "beginningEditNg": "beginningEdit"; "cellEditEndedNg": "cellEditEnded"; "cellEditEndingNg": "cellEditEnding"; "prepareCellForEditNg": "prepareCellForEdit"; "formatItemNg": "formatItem"; "resizingColumnNg": "resizingColumn"; "resizedColumnNg": "resizedColumn"; "autoSizingColumnNg": "autoSizingColumn"; "autoSizedColumnNg": "autoSizedColumn"; "draggingColumnNg": "draggingColumn"; "draggingColumnOverNg": "draggingColumnOver"; "draggedColumnNg": "draggedColumn"; "sortingColumnNg": "sortingColumn"; "sortedColumnNg": "sortedColumn"; "pinningColumnNg": "pinningColumn"; "pinnedColumnNg": "pinnedColumn"; "resizingRowNg": "resizingRow"; "resizedRowNg": "resizedRow"; "autoSizingRowNg": "autoSizingRow"; "autoSizedRowNg": "autoSizedRow"; "draggingRowNg": "draggingRow"; "draggingRowOverNg": "draggingRowOver"; "draggedRowNg": "draggedRow"; "deletingRowNg": "deletingRow"; "deletedRowNg": "deletedRow"; "loadingRowsNg": "loadingRows"; "loadedRowsNg": "loadedRows"; "rowEditStartingNg": "rowEditStarting"; "rowEditStartedNg": "rowEditStarted"; "rowEditEndingNg": "rowEditEnding"; "rowEditEndedNg": "rowEditEnded"; "rowAddedNg": "rowAdded"; "groupCollapsedChangingNg": "groupCollapsedChanging"; "groupCollapsedChangedNg": "groupCollapsedChanged"; "columnGroupCollapsedChangingNg": "columnGroupCollapsedChanging"; "columnGroupCollapsedChangedNg": "columnGroupCollapsedChanged"; "itemsSourceChangingNg": "itemsSourceChanging"; "itemsSourceChangedNg": "itemsSourceChanged"; "selectionChangingNg": "selectionChanging"; "selectionChangedNg": "selectionChanged"; "scrollPositionChangedNg": "scrollPositionChanged"; "updatingViewNg": "updatingView"; "updatedViewNg": "updatedView"; "updatingLayoutNg": "updatingLayout"; "updatedLayoutNg": "updatedLayout"; "pastingNg": "pasting"; "pastedNg": "pasted"; "pastingCellNg": "pastingCell"; "pastedCellNg": "pastedCell"; "copyingNg": "copying"; "copiedNg": "copied"; "collapsedHeadersChangingNg": "collapsedHeadersChanging"; "collapsedHeadersChangedNg": "collapsedHeadersChanged"; "collapsedHeadersChangePC": "collapsedHeadersChange"; }, never, ["*"], false, never>;
}
declare var wjMultiRowCellMeta: IWjComponentMeta;
export { wjMultiRowCellMeta };
/**
 * Angular 2 component for the {@link wijmo.grid.multirow.MultiRowCell} class.
 *
 * The <b>wj-multi-row-cell</b> component must be
 * contained in a {@link wijmo.angular2.grid.multirow.WjMultiRowCellGroup} component.
 *
 * Use the <b>wj-multi-row-cell</b> component to add <b>MultiRowCell</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMultiRowCell</b> component is derived from the <b>MultiRowCell</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-multi-row-cell</b> component may contain a {@link wijmo.angular2.grid.multirow.WjMultiRowCellTemplate} child component.
*/
export declare class WjMultiRowCell extends wjcGridMultirow.MultiRowCell implements OnInit, OnDestroy, AfterViewInit {
    cdRef: ChangeDetectorRef;
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'cells'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, cdRef: ChangeDetectorRef);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjMultiRowCell, [null, null, { optional: true; skipSelf: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjMultiRowCell, "wj-multi-row-cell", never, { "wjProperty": "wjProperty"; "name": "name"; "dataMap": "dataMap"; "dataType": "dataType"; "binding": "binding"; "sortMemberPath": "sortMemberPath"; "format": "format"; "cellTemplate": "cellTemplate"; "header": "header"; "width": "width"; "maxLength": "maxLength"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "align": "align"; "allowDragging": "allowDragging"; "allowSorting": "allowSorting"; "allowResizing": "allowResizing"; "allowMerging": "allowMerging"; "aggregate": "aggregate"; "isReadOnly": "isReadOnly"; "cssClass": "cssClass"; "cssClassAll": "cssClassAll"; "isContentHtml": "isContentHtml"; "visible": "visible"; "wordWrap": "wordWrap"; "multiLine": "multiLine"; "mask": "mask"; "inputType": "inputType"; "isRequired": "isRequired"; "showDropDown": "showDropDown"; "dataMapEditor": "dataMapEditor"; "dropDownCssClass": "dropDownCssClass"; "quickAutoSize": "quickAutoSize"; "editor": "editor"; "colspan": "colspan"; "rowspan": "rowspan"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
declare var wjMultiRowCellGroupMeta: IWjComponentMeta;
export { wjMultiRowCellGroupMeta };
/**
 * Angular 2 component for the {@link wijmo.grid.multirow.MultiRowCellGroup} class.
 *
 * The <b>wj-multi-row-cell-group</b> component must be
 * contained in a {@link wijmo.angular2.grid.multirow.WjMultiRow} component.
 *
 * Use the <b>wj-multi-row-cell-group</b> component to add <b>MultiRowCellGroup</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMultiRowCellGroup</b> component is derived from the <b>MultiRowCellGroup</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-multi-row-cell-group</b> component may contain a {@link wijmo.angular2.grid.multirow.WjMultiRowCell} child component.
*/
export declare class WjMultiRowCellGroup extends wjcGridMultirow.MultiRowCellGroup implements OnInit, OnDestroy, AfterViewInit {
    cdRef: ChangeDetectorRef;
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'layoutDefinition'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, cdRef: ChangeDetectorRef);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjMultiRowCellGroup, [null, null, { optional: true; skipSelf: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<WjMultiRowCellGroup, "wj-multi-row-cell-group", never, { "wjProperty": "wjProperty"; "name": "name"; "dataMap": "dataMap"; "dataType": "dataType"; "binding": "binding"; "sortMemberPath": "sortMemberPath"; "format": "format"; "cellTemplate": "cellTemplate"; "header": "header"; "width": "width"; "maxLength": "maxLength"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "align": "align"; "allowDragging": "allowDragging"; "allowSorting": "allowSorting"; "allowResizing": "allowResizing"; "allowMerging": "allowMerging"; "aggregate": "aggregate"; "isReadOnly": "isReadOnly"; "cssClass": "cssClass"; "cssClassAll": "cssClassAll"; "isContentHtml": "isContentHtml"; "visible": "visible"; "wordWrap": "wordWrap"; "multiLine": "multiLine"; "mask": "mask"; "inputType": "inputType"; "isRequired": "isRequired"; "showDropDown": "showDropDown"; "dataMapEditor": "dataMapEditor"; "dropDownCssClass": "dropDownCssClass"; "quickAutoSize": "quickAutoSize"; "editor": "editor"; "colspan": "colspan"; "rowspan": "rowspan"; }, { "initialized": "initialized"; }, never, ["*"], false, never>;
}
/**
* Angular 2 directive for the {@link MultiRow} cell templates.
*
* The <b>wjMultiRowCellTemplate</b> directive defines a template for a certain
* cell type in {@link MultiRow}. The template should be defined on a <b>&lt;ng-template&gt;</b> element
* and must contain a <b>cellType</b> attribute that
* specifies the {@link wijmo.angular2.grid.CellTemplateType}. Depending on the template's cell type,
* the <b>&lt;ng-template&gt;</b> element with the <b>wjMultiRowCellTemplate</b> directive must be a child
* of either {@link wijmo.angular2.grid.multirow.WjMultiRow}
* or {@link wijmo.angular2.grid.multirow.WjMultiRowCell} components.
*
* Column-specific cell templates must be contained in <b>wj-multi-row-cell</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>wj-multi-row</b> component.
*
* The <b>&lt;ng-template&gt;</b> element with the <b>wjMultiRowCellTemplate</b> directive
* may contain an arbitrary HTML fragment with Angular 2 interpolation expressions and
* other components and directives.
*
* Bindings in HTML fragment can use the <b>cell</b> local template variable containing the cell context object,
* with <b>col</b>, <b>row</b>, and <b>item</b> properties that refer to the {@link MultiRowCell},
* {@link Row}, and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* property containing an unformatted cell value is provided. For example, here is a
* {@link MultiRow} control with templates for row header cells and, regular
* and column header cells of the Country column:
*
* ```typescript
* // component.ts
* import * as wjMultiRow from '@grapecity/wijmo.angular2.grid.multirow';
*
* @Component({
*     templateUrl: './component.html',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }
* ```
* ```html
* <!-- component.html -->
* <wj-multi-row [itemsSource]="data">
*   <ng-template wjMultiRowCellTemplate [cellType]="'RowHeader'" let-cell="cell">
*     {{cell.row.index}}
*   </ng-template>
*   <ng-template wjMultiRowCellTemplate [cellType]="'RowHeaderEdit'">
*     ...
*   </ng-template>
*
*   <wj-multi-row-cell-group header="Statistics">
*     <wj-multi-row-cell [header]="'Country'" [binding]="'country'">
*       <ng-template wjMultiRowCellTemplate [cellType]="'ColumnHeader'" let-cell="cell">
*         <img src="resources/globe.png" />
*           {{cell.col.header}}
*       </ng-template>
*       <ng-template wjMultiRowCellTemplate [cellType]="'Cell'" let-cell="cell">
*         <img src="resources/{{cell.item.country}}.png" />
*         {{cell.item.country}}
*       </ng-template>
*     </wj-multi-row-cell>
*     <wj-multi-row-cell [header]="'Sales'" [binding]="'sales'"></wj-multi-row-cell>
*   </wj-multi-row-cell-group>
* </wj-multi-row>
* ```
*
* The <b>cellType</b> attribute takes any of the following enumerated values:
*
* <b>Cell</b>
*
* Defines a regular (data) cell template. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRowCell} component.
* For example, this cell template shows flags in the cells of Country column:
*
* ```html
* <wj-multi-row-cell [header]="'Country'" [binding]="'country'">
*   <ng-template wjMultiRowCellTemplate [cellType]="'Cell'" let-cell="cell">
*     <img src="resources/{{cell.item.country}}.png" />
*     {{cell.item.country}}
*   </ng-template>
* </wj-multi-row-cell>
* ```
*
* <b>CellEdit</b>
*
* Defines a template for a cell in edit mode. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRowCell} component.
* This cell type has an additional <b>cell.value</b> property available for binding. It contains the
* original cell value before editing, and the updated value after editing.

* For example, here is a template that uses the Wijmo {@link InputNumber} control as an editor
* for the "Sales" column:
*
* ```html
* <wj-multi-row-cell [header]="'Sales'" [binding]="'sales'">
*   <ng-template wjMultiRowCellTemplate [cellType]="'CellEdit'">
*     <wj-input-number [(value)]="cell.value" [step]="1"></wj-input-number>
*   </ng-template>
* </wj-multi-row-cell>
* ```
*
* <b>ColumnHeader</b>
*
* Defines a template for a column header cell. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRowCell} component.
* For example, this template adds an image to the header of the "Country" column:
*
* ```html
* <wj-multi-row-cell [header]="'Country'" [binding]="'country'">
*   <ng-template wjMultiRowCellTemplate [cellType]="'ColumnHeader'" let-cell="cell">
*     <img src="resources/globe.png" />
*     {{cell.col.header}}
*   </ng-template>
* </wj-multi-row-cell>
* ```
*
* <b>RowHeader</b>
*
* Defines a template for a row header cell. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRow} component.
* For example, this template shows row indices in the row headers:
*
* ```html
* <wj-multi-row #mr [itemsSource]="data">
*   <ng-template wjMultiRowCellTemplate [cellType]="'RowHeader'" let-cell="cell">
*     {{cell.row.index / mr.rowsPerItem + 1}}
*   </ng-template>
* </wj-multi-row>
* ```
*
* Note that this template is applied to a row header cell, even if it is in a row that is
* in edit mode. In order to provide an edit-mode version of a row header cell with alternate
* content, define the <b>RowHeaderEdit</b> template.
*
* <b>RowHeaderEdit</b>
*
* Defines a template for a row header cell in edit mode. Must be a child of the
* {@link wijmo.angular2.grid.multirow.WjMultiRow} component. For example, this template shows dots in the header
* of rows being edited:
*
* ```html
* <wj-multi-row [itemsSource]="data">
*   <ng-template wjMultiRowCellTemplate [cellType]="'RowHeaderEdit'">
*     ...
*   </ng-template>
* </wj-multi-row>
* ```
*
* Use the following <b>RowHeaderEdit</b> template to add the standard edit-mode indicator to cells where the <b>RowHeader</b> template
* applies:
*
* ```html
* <wj-multi-row [itemsSource]="data">
*   <ng-template wjMultiRowCellTemplate [cellType]="'RowHeaderEdit'">
*     {{&amp;#x270e;}}
*   </ng-template>
* </wj-multi-row>
* ```
*
* <b>TopLeft</b>
*
* Defines a template for the top left cell. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRow} component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* ```html
* <wj-multi-row [itemsSource]="data">
*   <ng-template wjMultiRowCellTemplate [cellType]="'TopLeft'">
*     <span class="wj-glyph-down-right"></span>
*   </ng-template>
* </wj-multi-row>
* ```
*
* <b>GroupHeader</b>
*
* Defines a template for a group header cell in a {@link GroupRow}. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRowCell} component.
*
* The <b>cell.row</b> property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from {@link CollectionView}, the <b>cell.item</b> property references the {@link CollectionViewGroup} object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* ```html
* <wj-multi-row-cell [header]="'Country'" [binding]="'country'">
*   <ng-template wjMultiRowCellTemplate [cellType]="'GroupHeader'" let-cell="cell">
*     <input type="checkbox" [(ngModel)]="cell.row.isCollapsed"/>
*     {{cell.item.name}} ({{cell.item.items.length}} items)
*   </ng-template>
* </wj-multi-row-cell>
* ```
*
* <b>Group</b>
*
* Defines a template for a regular cell (not a group header) in a {@link GroupRow}. Must be a child of the
* {@link wijmo.angular2.grid.multirow.WjMultiRowCell} component. This cell type has an additional <b>cell.value</b> property available for
* binding. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows aggregate's value and kind for group row cells in the "Sales"
* column:
*
* ```html
* <wj-multi-row-cell [header]="'Sales'" [binding]="'sales'" [aggregate]="'Avg'">
*   <ng-template wjMultiRowCellTemplate [cellType]="'Group'" let-cell="cell">
*     Average: {{cell.value | number:'1.0-0'}}
*   </ng-template>
* </wj-multi-row-cell>
* ```
*
* <b>NewCellTemplate</b>
*
* Defines a cell in a new row template. Must be a child of the {@link wijmo.angular2.grid.multirow.WjMultiRowCell} component.
* Note that the <b>cell.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* ```html
* <wj-multi-row-cell [header]="'Date'" [binding]="'date'">
*   <ng-template wjMultiRowCellTemplate [cellType]="'NewCellTemplate'">
*     Enter a date here
*   </ng-template>
* </wj-multi-row-cell>
* ```
*/
export declare class WjMultiRowCellTemplate extends wjGrid.WjFlexGridCellTemplate {
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, elRef: ElementRef, parentCmp: any, injector: Injector, cdRef: ChangeDetectorRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjMultiRowCellTemplate, [null, { optional: true; }, null, { optional: true; skipSelf: true; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<WjMultiRowCellTemplate, "[wjMultiRowCellTemplate]", ["wjMultiRowCellTemplate"], { "wjMultiRowCellTemplate": "wjMultiRowCellTemplate"; "cellTypeStr": "cellType"; "cellOverflow": "cellOverflow"; "valuePaths": "valuePaths"; "autoSizeRows": "autoSizeRows"; "forceFullEdit": "forceFullEdit"; }, {}, never, never, false, never>;
}
export declare class WjGridMultirowModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WjGridMultirowModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<WjGridMultirowModule, [typeof WjMultiRow, typeof WjMultiRowCell, typeof WjMultiRowCellGroup, typeof WjMultiRowCellTemplate], [typeof ɵngcc1.CommonModule], [typeof WjMultiRow, typeof WjMultiRowCell, typeof WjMultiRowCellGroup, typeof WjMultiRowCellTemplate]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<WjGridMultirowModule>;
}
