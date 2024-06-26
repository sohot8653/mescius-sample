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
 * {@module wijmo.react.olap}
 * Contains React components for the <b>wijmo.olap</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.olap.PivotGrid} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.olap.PivotGrid} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class PivotGrid extends ComponentBase {
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
        showDetailOnDoubleClick?: any;
        customContextMenu?: any;
        collapsibleSubtotals?: any;
        centerHeadersVertically?: any;
        showColumnFieldHeaders?: any;
        showRowFieldHeaders?: any;
        showValueFieldHeaders?: any;
        outlineMode?: any;
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
        headersFocusability?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.olap.PivotChart} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.olap.PivotChart} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class PivotChart extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        chartType?: any;
        showHierarchicalAxes?: any;
        showTotals?: any;
        showTitle?: any;
        showLegend?: any;
        legendPosition?: any;
        stacking?: any;
        maxSeries?: any;
        maxPoints?: any;
        itemsSource?: any;
        header?: any;
        footer?: any;
        headerStyle?: any;
        footerStyle?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.olap.PivotPanel} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.olap.PivotPanel} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class PivotPanel extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        autoGenerateFields?: any;
        viewDefinition?: any;
        engine?: any;
        itemsSource?: any;
        showFieldIcons?: any;
        restrictDragging?: any;
        deferredUpdate?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        itemsSourceChanged?: any;
        viewDefinitionChanged?: any;
        updatingView?: any;
        updatedView?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.olap.Slicer} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.olap.Slicer} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Slicer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        field?: any;
        showHeader?: any;
        header?: any;
        showCheckboxes?: any;
        multiSelect?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
