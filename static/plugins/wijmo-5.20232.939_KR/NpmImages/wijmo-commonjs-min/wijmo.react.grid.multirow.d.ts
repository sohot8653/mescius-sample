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
 * {@module wijmo.react.grid.multirow}
 * Contains React components for the <b>wijmo.grid.multirow</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGridMultirow from 'wijmo/wijmo.grid.multirow';
import * as wjGrid from 'wijmo/wijmo.react.grid';
/**
 * React component for the {@link wijmo.grid.multirow.MultiRow} control.
 *
 * The <b>multi-row</b> component may contain
 * the following child components:
 * {@link wijmo.react.grid.multirow.MultiRowCellGroup}
 * and {@link wijmo.react.grid.multirow.MultiRowCellTemplate}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.multirow.MultiRow} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiRow extends ComponentBase {
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
        headerLayoutDefinition?: any;
        centerHeadersVertically?: any;
        collapsedHeaders?: any;
        showHeaderCollapseButton?: any;
        multiRowGroupHeaders?: any;
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
        collapsedHeadersChanging?: any;
        collapsedHeadersChanged?: any;
        commitEmptyEdits?: any;
        [key: string]: any;
    };
    constructor(props: any);
    protected _createControl(): any;
    protected _onBeforeWillUnmount(e?: wjcCore.EventArgs): void;
}
/**
 * React component for the {@link wijmo.grid.multirow.MultiRowCell} class.
 *
 * The <b>multi-row-cell</b> component should be contained in
 * a {@link wijmo.react.grid.multirow.MultiRowCellGroup} component.
 *
 * The <b>multi-row-cell</b> component may contain
 * a {@link wijmo.react.grid.multirow.MultiRowCellTemplate} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.multirow.MultiRowCell} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiRowCell extends ComponentBase {
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
        colspan?: any;
        rowspan?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.grid.multirow.MultiRowCellGroup} class.
 *
 * The <b>multi-row-cell-group</b> component should be contained in
 * a {@link wijmo.react.grid.multirow.MultiRow} component.
 *
 * The <b>multi-row-cell-group</b> component may contain
 * a {@link wijmo.react.grid.multirow.MultiRowCell} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.multirow.MultiRowCellGroup} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiRowCellGroup extends ComponentBase {
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
        colspan?: any;
        rowspan?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    constructor(props: any);
}
/**
* React component for the {@link MultiRow} cell templates.
*
* The <b>MultiRowCellTemplate</b> component defines a template for a certain
* cell type in {@link MultiRow}. The template element must contain a <b>cellType</b> property that
* specifies the {@link wijmo.react.grid.CellTemplateType}. Depending on the template's cell type,
* the <b>MultiRowCellTemplate</b> element must be a child
* of either {@link wijmo.react.grid.multirow.MultiRow}
* or {@link wijmo.react.grid.multirow.MultiRowCell} components.
*
* Column-specific cell templates must be contained in <b>MultiRowCell</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>MultiRow</b> component.
*
* The content of cells is defined using the <b>template</b> <i>render prop</i>, which receives
* a render function that should return a virtual element tree representing the cell content.
* The function has the <b>context</b> parameter where the data context of each certain cell is
* passed. This is an object with the <b>col</b>, <b>row</b>, and <b>item</b> properties,
* which refer to the {@link MultiRowCell}, {@link Row}, and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* context property containing an unformatted cell value is provided.
*
* For example, here is a
* {@link MultiRow} control with templates for row header cells and, regular
* and column header cells of the Country column:
*
* ```html
* <!-- component.html -->
* <MultiRow itemsSource={this.state.data}>
*   <MultiRowCellTemplate
*       cellType="RowHeader"
*       template={ (context) => context.row.index + 1 } />
*   <MultiRowCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '...' } />
*
*   <MultiRowCellGroup header="Statistics">
*      <MultiRowCell header="Country" binding="country">
*         <MultiRowCellTemplate
*               cellType="ColumnHeader"
*               template={ (context) => {
*                   return <React.Fragment>
*                       <img src="resources/globe.png" />
*                       {context.col.header}
*                   </React.Fragment>
*                   }
*              }
*         />
*         <MultiRowCellTemplate
*               cellType="Cell"
*               template={ (context) => {
*                   return <React.Fragment>
*                       <img src={`resources/${context.item.country}.png`} />
*                       {context.item.country}
*                   </React.Fragment>
*               } }
*       />
*      </MultiRowCell>
*      <MultiRowCell header="Sales" binding="sales"></MultiRowCell>
*   </MultiRowCellGroup>
* </MultiRow>
* ```
*
* The <b>MultiRowCellTemplate</b> directive supports the following properties:
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
* Defines a regular (data) cell template. Must be a child of the {@link wijmo.react.grid.multirow.MultiRowCell} component.
* For example, this cell template shows flags in the cells of Country column:
*
* ```html
* <MultiRowCell header="Country" binding="country">
*   <MultiRowCellTemplate
*       cellType="Cell"
*       template={ (context) => {
*           return <React.Fragment>
*              <img src={`resources/${context.item.country}.png`} />
*              {context.item.country}
*           </React.Fragment>
*       }
*    }
*   />
* </MultiRowCell>
* ```
*
* <b>CellEdit</b>
*
* Defines a template for a cell in edit mode. Must be a child of the {@link wijmo.react.grid.multirow.MultiRowCell} component.
* This cell type has an additional <b>context.value</b> property. It contains the
* original cell value before editing, and the updated value after editing.
*
* For example, here is a template that uses the Wijmo {@link InputNumber} control as an editor
* for the "Sales" column:
* ```html
* <MultiRowCell header="Sales" binding="sales">
*   <MultiRowCellTemplate
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
* </MultiRowCell>
* ```
*
* <b>ColumnHeader</b>
*
* Defines a template for a column header cell. Must be a child of the {@link wijmo.react.grid.multirow.MultiRowCell} component.
* For example, this template adds an image to the header of the "Country" column:
*
* ```html
* <MultiRowCell header="Country" binding="country">
*   <MultiRowCellTemplate
*         cellType="ColumnHeader"
*         template={ (context) => {
*             return <React.Fragment>
*                 <img src="resources/globe.png" />
*                 {context.col.header}
*             </React.Fragment>
*             }
*         }
*   />
* </MultiRowCell>
* ```
*
* <b>RowHeader</b>
*
* Defines a template for a row header cell. Must be a child of the {@link wijmo.react.grid.multirow.MultiRow} component.
* For example, this template shows row indices in the row headers:
*
* ```html
* <MultiRow itemsSource={this.state.data}>
*   <MultiRowCellTemplate
*       cellType="RowHeader"
*       template={ (context) => context.row.index / context.row.grid.rowsPerItem + 1 } />
* </MultiRow>
* ```
*
* Note that this template is applied to a row header cell, even if it is in a row that is
* in edit mode. In order to provide an edit-mode version of a row header cell with alternate
* content, define the <b>RowHeaderEdit</b> template.
*
* <b>RowHeaderEdit</b>
*
* Defines a template for a row header cell in edit mode. Must be a child of the
* {@link wijmo.react.grid.multirow.MultiRow} component. For example, this template shows dots in the header
* of rows being edited:
*
* ```html
* <MultiRow itemsSource={this.state.data}>
*   <MultiRowCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '...' } />
* </MultiRow>
* ```
*
* Use the following <b>RowHeaderEdit</b> template to add the standard edit-mode indicator to cells where
* the <b>RowHeader</b> template applies:
*
* ```html
* <MultiRow itemsSource={this.state.data}>
*   <MultiRowCellTemplate
*       cellType="RowHeaderEdit"
*       template={ (context) => '\u270e\ufe0e' } />
* </MultiRow>
* ```
*
* <b>TopLeft</b>
*
* Defines a template for the top left cell. Must be a child of the {@link wijmo.react.grid.multirow.MultiRow} component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* ```html
* <MultiRow itemsSource={this.state.data}>
*   <MultiRowCellTemplate
*       cellType="TopLeft"
*       template={ (context) => {
*           return <span class="wj-glyph-down-right"></span>
*       } }
*   />
* </MultiRow>
* ```
*
* <b>GroupHeader</b>
*
* Defines a template for a group header cell in a {@link GroupRow}. Must be a child of
* the {@link wijmo.react.grid.multirow.MultiRowCell} component.
*
* The <b>context.row</b> property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from {@link CollectionView}, the <b>context.item</b> property references the {@link CollectionViewGroup} object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* ```html
* <MultiRowCell header="Country" binding="country">
*   <MultiRowCellTemplate
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
* </MultiRowCell>
* ```
*
* <b>Group</b>
*
* Defines a template for a regular cell (not a group header) in a {@link GroupRow}. Must be a child of the
* {@link wijmo.react.grid.multirow.MultiRowCell} component. This cell type has an additional <b>context.value</b>
* property. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows aggregate's value and kind for group row cells in the "Sales"
* column:
*
* ```html
* <MultiRowCell header="Sales" binding="sales" aggregate="Avg">
*   <MultiRowCellTemplate
*       cellType="Group"
*       template={ (context) => {
*          return <React.Fragment>
*            Average: {wjcCore.Globalize.formatNumber(context.value, 'N0')}
*          </React.Fragment>
*          }
*        }
*   />
* </MultiRowCell>
* ```
*
* <b>NewCellTemplate</b>
*
* Defines a cell in a new row template. Must be a child of the {@link wijmo.react.grid.multirow.MultiRowCell} component.
* Note that the <b>context.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* ```html
* <MultiRowCell header="Date" binding="date">
*   <MultiRowCellTemplate
*       cellType="NewCellTemplate"
*       template={ (context) => 'Enter a date here' } />
* </MultiRowCell>
* ```
*/
export declare class MultiRowCellTemplate extends wjGrid.FlexGridCellTemplate {
    readonly template: MultiRowCellTemplateRender;
}
export interface IMultiRowCellTemplateContext extends wjGrid.ICellTemplateContext {
    col: wjcGridMultirow.MultiRowCell;
}
export declare type MultiRowCellTemplateRender = (context: IMultiRowCellTemplateContext) => any;
