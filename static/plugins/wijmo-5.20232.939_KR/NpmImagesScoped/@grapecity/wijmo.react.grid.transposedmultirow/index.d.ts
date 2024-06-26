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
 * {@module wijmo.react.grid.transposedmultirow}
 * Contains React components for the <b>wijmo.grid.transposedmultirow</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.grid.transposedmultirow.TransposedMultiRow} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.transposedmultirow.TransposedMultiRow} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class TransposedMultiRow extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        newRowAtTop?: any;
        allowAddNew?: any;
        allowDelete?: any;
        allowDragging?: any;
        allowMerging?: any;
        allowResizing?: any;
        allowSorting?: any;
        allowPinning?: any;
        autoScroll?: any;
        autoRowHeights?: any;
        autoSizeMode?: any;
        autoGenerateColumns?: any;
        autoSearch?: any;
        caseSensitiveSearch?: any;
        quickAutoSize?: any;
        bigCheckboxes?: any;
        childItemsPath?: any;
        groupHeaderFormat?: any;
        headersVisibility?: any;
        showSelectedHeaders?: any;
        showMarquee?: any;
        showPlaceholders?: any;
        itemFormatter?: any;
        isReadOnly?: any;
        imeEnabled?: any;
        mergeManager?: any;
        selectionMode?: any;
        showGroups?: any;
        showSort?: any;
        showDropDown?: any;
        showAlternatingRows?: any;
        showErrors?: any;
        alternatingRowStep?: any;
        itemValidator?: any;
        validateEdits?: any;
        treeIndent?: any;
        itemsSource?: any;
        autoClipboard?: any;
        expandSelectionOnCopyPaste?: any;
        frozenRows?: any;
        frozenColumns?: any;
        cloneFrozenCells?: any;
        deferResizing?: any;
        sortRowIndex?: any;
        editColumnIndex?: any;
        stickyHeaders?: any;
        preserveSelectedState?: any;
        preserveOutlineState?: any;
        preserveWhiteSpace?: any;
        keyActionTab?: any;
        keyActionEnter?: any;
        rowHeaderPath?: any;
        virtualizationThreshold?: any;
        anchorCursor?: any;
        lazyRender?: any;
        refreshOnEdit?: any;
        copyHeaders?: any;
        columnGroups?: any;
        layoutDefinition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        beginningEdit?: any;
        cellEditEnded?: any;
        cellEditEnding?: any;
        prepareCellForEdit?: any;
        formatItem?: any;
        resizingColumn?: any;
        resizedColumn?: any;
        autoSizingColumn?: any;
        autoSizedColumn?: any;
        draggingColumn?: any;
        draggingColumnOver?: any;
        draggedColumn?: any;
        sortingColumn?: any;
        sortedColumn?: any;
        pinningColumn?: any;
        pinnedColumn?: any;
        resizingRow?: any;
        resizedRow?: any;
        autoSizingRow?: any;
        autoSizedRow?: any;
        draggingRow?: any;
        draggingRowOver?: any;
        draggedRow?: any;
        deletingRow?: any;
        deletedRow?: any;
        loadingRows?: any;
        loadedRows?: any;
        rowEditStarting?: any;
        rowEditStarted?: any;
        rowEditEnding?: any;
        rowEditEnded?: any;
        rowAdded?: any;
        groupCollapsedChanging?: any;
        groupCollapsedChanged?: any;
        columnGroupCollapsedChanging?: any;
        columnGroupCollapsedChanged?: any;
        itemsSourceChanging?: any;
        itemsSourceChanged?: any;
        selectionChanging?: any;
        selectionChanged?: any;
        scrollPositionChanged?: any;
        updatingView?: any;
        updatedView?: any;
        updatingLayout?: any;
        updatedLayout?: any;
        pasting?: any;
        pasted?: any;
        pastingCell?: any;
        pastedCell?: any;
        copying?: any;
        copied?: any;
        commitEmptyEdits?: any;
        [key: string]: any;
        headersFocusability?: any;
    };
    constructor(props: any);
}
