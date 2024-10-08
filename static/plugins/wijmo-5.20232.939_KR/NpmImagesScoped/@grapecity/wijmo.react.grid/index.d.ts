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
 * {@module wijmo.react.grid}
 * Contains React components for the <b>wijmo.grid</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
import * as React from 'react';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcInteropGrid from '@grapecity/wijmo.interop.grid';
/**
 * Represents a cell template types enumeration.
 */
export import CellTemplateType = wjcInteropGrid.GridCellTemplateType;
/**
 * React component for the {@link wijmo.grid.FlexGrid} control.
 *
 * The <b>flex-grid</b> component may contain
 * the following child components:
 * {@link wijmo.react.grid.detail.FlexGridDetail}
 * , {@link wijmo.react.grid.filter.FlexGridFilter}
 * , {@link wijmo.react.grid.immutable.ImmutabilityProvider}
 * , {@link wijmo.react.grid.FlexGridColumn}
 * , {@link wijmo.react.grid.FlexGridColumnGroup}
 * and {@link wijmo.react.grid.FlexGridCellTemplate}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.FlexGrid} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The example below shows how to instantiate and initialize a
 * {@link wijmo.grid.FlexGrid} control in JSX:
 *
 * <pre>&lt;Wj.FlexGrid
 *   autoGenerateColumns={ false }
 *   columns={[
 *     { binding: 'name', header: 'Name' },
 *     { binding: 'sales', header: 'Sales', format: 'c0' },
 *     { binding: 'expenses', header: 'Expenses', format: 'c0' },
 *     { binding: 'active', header: 'Active' },
 *     { binding: 'date', header: 'Date' }
 *   ]}
 *   itemsSource={ this.state.data } /&gt;</pre>
 *
 * The code sets the <b>autoGenerateColumns</b> property to false, then
 * sets the <b>columns</b> property, and finally sets the <b>itemsSource</b>
 * property. This order is important, it prevents the grid from automatically
 * generating the columns.
 */
export declare class FlexGrid extends ComponentBase {
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
        ariaLabel?: any;
    };
    constructor(props: any);
    protected _createControl(): any;
}
/**
 * React component for the {@link wijmo.grid.Column} class.
 *
 * The <b>flex-grid-column</b> component should be contained in
 * a {@link wijmo.react.grid.FlexGrid} component.
 *
 * The <b>flex-grid-column</b> component may contain
 * a {@link wijmo.react.grid.FlexGridCellTemplate} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.Column} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexGridColumn extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        name?: any;
        dataMap?: any;
        dataType?: any;
        binding?: any;
        sortMemberPath?: any;
        format?: any;
        cellTemplate?: any;
        header?: any;
        width?: any;
        maxLength?: any;
        minWidth?: any;
        maxWidth?: any;
        align?: any;
        allowDragging?: any;
        allowSorting?: any;
        allowResizing?: any;
        allowMerging?: any;
        aggregate?: any;
        isReadOnly?: any;
        cssClass?: any;
        cssClassAll?: any;
        isContentHtml?: any;
        isSelected?: any;
        visible?: any;
        wordWrap?: any;
        multiLine?: any;
        mask?: any;
        inputType?: any;
        isRequired?: any;
        showDropDown?: any;
        dataMapEditor?: any;
        dropDownCssClass?: any;
        quickAutoSize?: any;
        editor?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
    protected _initParent(): void;
}
/**
 * React component for the {@link wijmo.grid.ColumnGroup} class.
 *
 * The <b>flex-grid-column-group</b> component should be contained in
 * one of the following components:
 * {@link wijmo.react.grid.FlexGrid}
 *  or {@link wijmo.react.grid.FlexGridColumnGroup}.
 *
 * The <b>flex-grid-column-group</b> component may contain
 * the following child components:
 * {@link wijmo.react.grid.FlexGridColumnGroup}
 * and {@link wijmo.react.grid.FlexGridCellTemplate}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.ColumnGroup} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexGridColumnGroup extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        name?: any;
        dataMap?: any;
        dataType?: any;
        binding?: any;
        sortMemberPath?: any;
        format?: any;
        cellTemplate?: any;
        header?: any;
        width?: any;
        maxLength?: any;
        minWidth?: any;
        maxWidth?: any;
        align?: any;
        allowDragging?: any;
        allowSorting?: any;
        allowResizing?: any;
        allowMerging?: any;
        aggregate?: any;
        isReadOnly?: any;
        cssClass?: any;
        cssClassAll?: any;
        isContentHtml?: any;
        isSelected?: any;
        visible?: any;
        wordWrap?: any;
        multiLine?: any;
        mask?: any;
        inputType?: any;
        isRequired?: any;
        showDropDown?: any;
        dataMapEditor?: any;
        dropDownCssClass?: any;
        quickAutoSize?: any;
        editor?: any;
        collapseTo?: any;
        isCollapsed?: any;
        initialized?: any;
        height?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
interface ICellTemplateInfoReact extends wjcInteropGrid.ICellTemplateInfo {
    template: CellTemplateRender;
}
interface ICellRenderingInfoReact extends wjcInteropGrid.ICellRenderingInfo {
    templateContext: ICellTemplateInfoReact;
}
export declare class DirectiveCellFactory extends wjcInteropGrid.DirectiveCellFactoryBase {
    private readonly _renderedCells;
    private _isViewUpdated;
    constructor(gridComponent: ComponentBase, grid: wjcGrid.FlexGrid);
    protected shouldInstantiate(cellInfo: wjcInteropGrid.ICellRenderingInfo): boolean;
    protected renderTemplate(cellInfo: ICellRenderingInfoReact, initNew: boolean): void;
    protected disposeTemplate(cell: HTMLElement, templateCache: wjcInteropGrid.ICellTemplateCache, templateContext: ICellTemplateInfoReact): void;
    protected clearCell(cell: HTMLElement): void;
    protected applyImmediately(cellInfo: ICellRenderingInfoReact): void;
    protected flushPendingEvents(control: wjcCore.Control): void;
    protected getEditorFocusFlag(): boolean;
    protected setEditorFocusFlag(value: boolean): void;
    private _renderCell;
    private _addRenderedCell;
    private _removeRenderedCell;
    private _reRenderCells;
    private _gridCmpBeforeDidUpdate;
    private _gridCmpAfterDidUpdate;
    private _gridCmpRendered;
    private _gridViewUpdated;
    protected checkHeight(cellInfo: wjcInteropGrid.ICellRenderingInfo): void;
}
export interface ICellTemplateContext {
    row: wjcGrid.Row;
    col: wjcGrid.Column;
    item: any;
    value: any;
    values: any;
}
export declare type CellTemplateRender = (context: ICellTemplateContext) => any;
/**
* React component for the {@link FlexGrid} cell templates.
*
* The <b>FlexGridCellTemplate</b> component defines a template for a certain
* cell type in {@link FlexGrid}. The template element must contain a <b>cellType</b> property that
* specifies the {@link wijmo.react.grid.CellTemplateType}. Depending on the template's cell type,
* the <b>FlexGridCellTemplate</b> element must be a child
* of either {@link wijmo.react.grid.FlexGrid}
* or {@link wijmo.react.grid.FlexGridColumn} components.
*
* Column-specific cell templates must be contained in <b>FlexGridColumn</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>FlexGrid</b> component.
*
* The content of cells is defined using the <b>template</b> <i>render prop</i>, which receives
* a render function that should return a virtual element tree representing the cell content.
* The function has the <b>context</b> parameter where the data context of each certain cell is
* passed. This is an object with the <b>col</b>, <b>row</b>, and <b>item</b> properties,
* which refer to the {@link Column}, {@link Row}, and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* context property containing an unformatted cell value is provided.
*
* For example, here is a
* {@link FlexGrid} control with templates for row header cells and, regular
* and column header cells of the Country column:
*
* ```html
* <!-- component.html -->
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeader"
*       template={ (context) => context.row.index + 1 } />
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '...' } />
*
*   <wjGrid.FlexGridColumn header="Country" binding="country">
*     <wjGrid.FlexGridCellTemplate
*           cellType="ColumnHeader"
*           template={ (context) => {
*               return <React.Fragment>
*                   <img src="resources/globe.png" />
*                   {context.col.header}
*               </React.Fragment>
*               }
*           }
*      />
*     <wjGrid.FlexGridCellTemplate
*           cellType="Cell"
*           template={ (context) => {
*               return <React.Fragment>
*                  <img src={`resources/${context.item.country}.png`} />
*                  {context.item.country}
*               </React.Fragment>
*           } }
*       />
*   </wjGrid.FlexGridColumn>
*   <wjGrid.FlexGridColumn header="Sales" binding="sales"></wjGrid.FlexGridColumn>
* </wjGrid.FlexGrid>
* ```
*
* The <b>FlexGridCellTemplate</b> directive supports the following properties:
*
* <dl class="dl-horizontal">
*   <dt>cellType</dt>
*   <dd>
*     The <b>CellTemplateType</b> value defining the type of cell to which the template is applied.
*   </dd>
*   <dt>autoSizeRows</dt>
*   <dd>
*     Indicates whether the cell template will increase grid's default row height
*     to accomodate cells content. Defaults to true.
*   </dd>
*   <dt>cellOverflow</dt>
*   <dd>
*     Defines the <b>style.overflow</b> property value for cells.
*   </dd>
*   <dt>forceFullEdit</dt>
*   <dd>
*     For cell edit templates, indicates whether cell editing forcibly starts in full edit mode,
*     regardless of how the editing was initiated. In full edit mode pressing cursor keys don't finish editing.
*     Defaults to true.
*   </dd>
* </dl>
*
* The <b>cellType</b> attribute takes any of the following enumerated values:
*
* <b>Cell</b>
*
* Defines a regular (data) cell template. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* For example, this cell template shows flags in the cells of Country column:
*
* ```html
* <wjGrid.FlexGridColumn header="Country" binding="country">
*   <wjGrid.FlexGridCellTemplate
*       cellType="Cell"
*       template={ (context) => {
*           return <React.Fragment>
*              <img src={`resources/${context.item.country}.png`} />
*              {context.item.country}
*           </React.Fragment>
*       }
*    }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* If <b>Group</b> template is not provided for a hierarchical {@link FlexGrid} (that is, one with the <b>childItemsPath</b> property
* specified), non-header cells in group rows of
* this {@link Column} also use this template.
*
* <b>CellEdit</b>
*
* Defines a template for a cell in edit mode. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* This cell type has an additional <b>context.value</b> property. It contains the
* original cell value before editing, and the updated value after editing.
*
* For example, here is a template that uses the Wijmo {@link InputNumber} control as an editor
* for the "Sales" column:
* ```html
* <wjGrid.FlexGridColumn header="Sales" binding="sales">
*   <wjGrid.FlexGridCellTemplate
*       cellType="CellEdit"
*       template={ (context) => {
*            return <wjInput.InputNumber
*                step={1}
*                value={context.value}
*                valueChanged={(inpNum: wjcInput.InputNumber) =>
*                    context.value = inpNum.value
*                } />
*            }
*       }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>ColumnHeader</b>
*
* Defines a template for a column header cell. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* For example, this template adds an image to the header of the "Country" column:
*
* ```html
* <wjGrid.FlexGridColumn header="Country" binding="country">
*   <wjGrid.FlexGridCellTemplate
*         cellType="ColumnHeader"
*         template={ (context) => {
*             return <React.Fragment>
*                 <img src="resources/globe.png" />
*                 {context.col.header}
*             </React.Fragment>
*             }
*         }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>RowHeader</b>
*
* Defines a template for a row header cell. Must be a child of the {@link wijmo.react.grid.FlexGrid} component.
* For example, this template shows row indices in the row headers:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeader"
*       template={ (context) => context.row.index + 1 } />
* </wjGrid.FlexGrid>
* ```
*
* Note that this template is applied to a row header cell, even if it is in a row that is
* in edit mode. In order to provide an edit-mode version of a row header cell with alternate
* content, define the <b>RowHeaderEdit</b> template.
*
* <b>RowHeaderEdit</b>
*
* Defines a template for a row header cell in edit mode. Must be a child of the
* {@link wijmo.react.grid.FlexGrid} component. For example, this template shows dots in the header
* of rows being edited:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '...' } />
* </wjGrid.FlexGrid>
* ```
*
* Use the following <b>RowHeaderEdit</b> template to add the standard edit-mode indicator to cells where
* the <b>RowHeader</b> template applies:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '\u270e\ufe0e' } />
* </wjGrid.FlexGrid>
* ```
*
* <b>TopLeft</b>
*
* Defines a template for the top left cell. Must be a child of the {@link wijmo.react.grid.FlexGrid} component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="TopLeft"
*       template={ (context) => {
*           return <span class="wj-glyph-down-right"></span>
*       } }
*   />
* </wjGrid.FlexGrid>
* ```
*
* <b>GroupHeader</b>
*
* Defines a template for a group header cell in a {@link GroupRow}. Must be a child of
* the {@link wijmo.react.grid.FlexGridColumn} component.
*
* The <b>context.row</b> property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from {@link CollectionView}, the <b>context.item</b> property references the {@link CollectionViewGroup} object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* ```html
* <wjGrid.FlexGridColumn header="Country" binding="country">
*   <wjGrid.FlexGridCellTemplate
*       cellType="GroupHeader"
*       template={ (context) => {
*          return <React.Fragment>
*            <input type="checkbox"
*                checked={context.row.isCollapsed}
*                onChange={e =>
*                    context.row.isCollapsed = e.target.checked as boolean
*                } />
*            {context.item.name} ({context.item.items.length} items)
*          </React.Fragment>
*          }
*        }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>Group</b>
*
* Defines a template for a regular cell (not a group header) in a {@link GroupRow}. Must be a child of the
* {@link wijmo.react.grid.FlexGridColumn} component. This cell type has an additional <b>context.value</b>
* property. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows aggregate's value and kind for group row cells in the "Sales"
* column:
*
* ```html
* <wjGrid.FlexGridColumn header="Sales" binding="sales" aggregate="Avg">
*   <wjGrid.FlexGridCellTemplate
*       cellType="Group"
*       template={ (context) => {
*          return <React.Fragment>
*            Average: {wjcCore.Globalize.formatNumber(context.value, 'N0')}
*          </React.Fragment>
*          }
*        }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>ColumnFooter</b>
*
* Defines a template for a regular cell in a <b>columnFooters</b> panel. Must be a child of the
* {@link wijmo.react.grid.FlexGridColumn} component. This cell type provides an additional <b>context.value</b>
* property available for binding that contains an aggregated cell value.
*
* For example, this template shows aggregate's value and kind for a footer cell in the "Sales"
* column:
*
* ```html
* <wjGrid.FlexGridColumn header="Sales" binding="sales" aggregate="Avg">
*   <wjGrid.FlexGridCellTemplate
*       cellType="ColumnFooter"
*       template={ (context) => {
*          return <React.Fragment>
*            Average: {wjcCore.Globalize.formatNumber(context.value, 'N0')}
*          </React.Fragment>
*          }
*        }
*   />
* </wjGrid.FlexGridColumn>
* ```
*
* <b>BottomLeft</b>
*
* Defines a template for the bottom left cells (at the intersection of the row header and column footer cells).
* Must be a child of the {@link wijmo.react.grid.FlexGrid} component.
* For example, this template shows a sigma glyph in the bottom-left cell of the grid:
*
* ```html
* <wjGrid.FlexGrid itemsSource={this.state.data}>
*   <wjGrid.FlexGridCellTemplate
*       cellType="BottomLeft"
*       template={(context) => <span>&#931;</span>} />
* </wjGrid.FlexGrid>
* ```
*
* <b>NewCellTemplate</b>
*
* Defines a cell in a new row template. Must be a child of the {@link wijmo.react.grid.FlexGridColumn} component.
* Note that the <b>context.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* ```html
* <wjGrid.FlexGridColumn header="Date" binding="date">
*   <wjGrid.FlexGridCellTemplate
*       cellType="NewCellTemplate"
*       template={ (context) => 'Enter a date here' } />
* </wjGrid.FlexGridColumn>
* ```
*/
export declare class FlexGridCellTemplate extends React.Component<any, any> {
    static readonly _CellRenderFuncProp = "template";
    grid: wjcGrid.FlexGrid;
    column: wjcGrid.Column;
    ownerControl: wjcGrid.FlexGrid | wjcGrid.Column;
    cellType: CellTemplateType;
    readonly cellOverflow: string;
    readonly autoSizeRows: boolean;
    readonly forceFullEdit: boolean;
    readonly valuePaths: Object;
    readonly template: CellTemplateRender;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): any;
    private _attachToControl;
    private _detachFromControl;
}
export {};
