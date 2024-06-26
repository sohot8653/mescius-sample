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
 * {@module wijmo.vue2.grid.multirow}
 * Contains Vue 2 and 3 components for the <b>wijmo.grid.multirow</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component for the {@link wijmo.grid.multirow.MultiRow} control.
 *
 * The <b>wj-multi-row</b> component may contain
 * the following child components:
 * {@link wijmo.vue2.grid.multirow.WjMultiRowCellGroup}
 * and {@link wijmo.vue2.grid.multirow.WjMultiRowCellTemplate}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.multirow.MultiRow} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjMultiRow: any;
/**
 * Vue component for the {@link wijmo.grid.multirow.MultiRowCell} class.
 *
 * The <b>wj-multi-row-cell</b> component should be contained in
 * a {@link wijmo.vue2.grid.multirow.WjMultiRowCellGroup} component.
 *
 * The <b>wj-multi-row-cell</b> component may contain
 * a {@link wijmo.vue2.grid.multirow.WjMultiRowCellTemplate} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.multirow.MultiRowCell} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjMultiRowCell: any;
/**
 * Vue component for the {@link wijmo.grid.multirow.MultiRowCellGroup} class.
 *
 * The <b>wj-multi-row-cell-group</b> component should be contained in
 * a {@link wijmo.vue2.grid.multirow.WjMultiRow} component.
 *
 * The <b>wj-multi-row-cell-group</b> component may contain
 * a {@link wijmo.vue2.grid.multirow.WjMultiRowCell} child component.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.multirow.MultiRowCellGroup} class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in markup.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare var WjMultiRowCellGroup: any;
/**
* Vue component for the {@link MultiRow} cell templates.
*
* The <b>wj-multi-row-cell-template</b> component defines a template for a certain
* cell type in {@link MultiRow}. The template element must contain a <b>cellType</b> attribute that
* specifies the {@link wijmo.vue2.grid.CellTemplateType}. Depending on the template's cell type,
* the <b>wj-multi-row-cell-template</b> element must be a child
* of either {@link wijmo.vue2.grid.multirow.WjMultiRow}
* or {@link wijmo.vue2.grid.multirow.WjMultiRowCell} components.
*
* Column-specific cell templates must be contained in <b>wj-multi-row-cell</b>
* components, and cells that are not column-specific (like row header or top left cells)
* must be contained in the <b>wj-multi-row</b> component.
*
* The <b>wj-multi-row-cell-template</b> element
* may contain an arbitrary HTML fragment with Vue interpolation expressions and
* other components and directives.
*
* Bindings in HTML fragment can use scoped slot properties that store cell specific data.
* The properties are <b>col</b>, <b>row</b>, and <b>item</b>, which refer to the {@link MultiRowCell},
* {@link Row}, and <b>Row.dataItem</b> objects pertaining to the cell.
*
* For cell types like <b>Group</b> and <b>CellEdit</b>, an additional <b>value</b>
* property containing an unformatted cell value is provided.
*
* To reference slot properties, you can use either a new v-slot directive right on the
* <b>wj-multi-row-cell-template</b> element (it's available in Vue 2.6.0 or higher),
* or an old slot-scope directive on the <b>&lt;template&gt;</b> element nested in
* wj-multi-row-cell-template.
*
* For example, here is a
* {@link MultiRow} control with templates for row header cells and, regular
* and column header cells of the Country column:
*
* ```html
* <!-- component.html -->
* <wj-multi-row :itemsSource="data">
*   <wj-multi-row-cell-template cellType="RowHeader" v-slot="cell">
*     {{cell.row.index}}
*   </wj-multi-row-cell-template>
*   <wj-multi-row-cell-template cellType="RowHeaderEdit">
*     ...
*   </wj-multi-row-cell-template>
*
*   <wj-multi-row-cell-group header="Statistics">
*     <wj-multi-row-cell header="Country" binding="country">
*       <wj-multi-row-cell-template cellType="ColumnHeader" v-slot="cell">
*         <img src="resources/globe.png" />
*           {{cell.col.header}}
*       </wj-multi-row-cell-template>
*       <wj-multi-row-cell-template cellType="Cell" v-slot="cell">
*         <img :src="'resources/' + cell.item.country + '.png'" />
*         {{cell.item.country}}
*       </wj-multi-row-cell-template>
*     </wj-multi-row-cell>
*     <wj-multi-row-cell header="Sales" binding="sales"></wj-multi-row-cell>
*   </wj-multi-row-cell-group>
* </wj-multi-row>
* ```
*
* The <b>wj-multi-row-cell-template</b> directive supports the following attributes:
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
* Defines a regular (data) cell template. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRowCell} component.
* For example, this cell template shows flags in the cells of Country column:
*
* ```html
* <wj-multi-row-cell header="Country" binding="country">
*   <wj-multi-row-cell-template cellType="Cell" v-slot="cell">
*     <img :src="'resources/' + cell.item.country + '.png'" />
*     {{cell.item.country}}
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*
* <b>CellEdit</b>
*
* Defines a template for a cell in edit mode. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRowCell} component.
* This cell type has an additional <b>value</b> scoped slot property available for binding. It contains the
* original cell value before editing, and the updated value after editing.
*
* For example, here is a template that uses the Wijmo {@link InputNumber} control as an editor
* for the "Sales" column:
* ```html
* <wj-multi-row-cell header="Sales" binding="sales">
*   <wj-multi-row-cell-template cellType="CellEdit">
*     <wj-input-number v-model="cell.value" :step="1"></wj-input-number>
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*
* Note that two-way binding can also be specified using the binding's <b>sync</b> modifier:
* ```html
* <wj-multi-row-cell header="Sales" binding="sales">
*   <wj-multi-row-cell-template cellType="CellEdit">
*     <wj-input-number value.sync="cell.value" :step="1"></wj-input-number>
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*
* <b>ColumnHeader</b>
*
* Defines a template for a column header cell. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRowCell} component.
* For example, this template adds an image to the header of the "Country" column:
*
* ```html
* <wj-multi-row-cell header="Country" binding="country">
*   <wj-multi-row-cell-template cellType="ColumnHeader" v-slot="cell">
*     <img src="resources/globe.png" />
*     {{cell.col.header}}
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*
* <b>RowHeader</b>
*
* Defines a template for a row header cell. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRow} component.
* For example, this template shows row indices in the row headers:
*
* ```html
* <wj-multi-row :itemsSource="data">
*   <wj-multi-row-cell-template cellType="RowHeader" v-slot="cell">
*     {{cell.row.index / cell.row.grid.rowsPerItem + 1}}
*   </wj-multi-row-cell-template>
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
* {@link wijmo.vue2.grid.multirow.WjMultiRow} component. For example, this template shows dots in the header
* of rows being edited:
*
* ```html
* <wj-multi-row :itemsSource="data">
*   <wj-multi-row-cell-template cellType="RowHeaderEdit">
*     ...
*   </wj-multi-row-cell-template>
* </wj-multi-row>
* ```
*
* Use the following <b>RowHeaderEdit</b> template to add the standard edit-mode indicator to cells where the <b>RowHeader</b> template
* applies:
*
* ```html
* <wj-multi-row :itemsSource="data">
*   <wj-multi-row-cell-template cellType="RowHeaderEdit">
*     &#x270e;&#xfe0e;
*   </wj-multi-row-cell-template>
* </wj-multi-row>
* ```
*
* <b>TopLeft</b>
*
* Defines a template for the top left cell. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRow} component.
* For example, this template shows a down/right glyph in the top-left cell of the grid:
*
* ```html
* <wj-multi-row :itemsSource="data">
*   <wj-multi-row-cell-template cellType="TopLeft">
*     <span class="wj-glyph-down-right"></span>
*   </wj-multi-row-cell-template>
* </wj-multi-row>
* ```
*
* <b>GroupHeader</b>
*
* Defines a template for a group header cell in a {@link GroupRow}. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRowCell} component.
*
* The <b>row</b> scoped slot property contains an instance of the <b>GroupRow</b> class. If the grouping comes
* from {@link CollectionView}, the <b>item</b> scoped slot property references the {@link CollectionViewGroup} object.
*
* For example, this template uses a checkbox element as an expand/collapse toggle:
*
* ```html
* <wj-multi-row-cell header="Country" binding="country">
*   <wj-multi-row-cell-template cellType="GroupHeader" v-slot="cell">
*     <input type="checkbox" v-model="cell.row.isCollapsed"/>
*     {{cell.item.name}} ({{cell.item.items.length}} items)
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*
* <b>Group</b>
*
* Defines a template for a regular cell (not a group header) in a {@link GroupRow}. Must be a child of the
* {@link wijmo.vue2.grid.multirow.WjMultiRowCell} component. This cell type has an additional <b>value</b> scoped
* slot property available for
* binding. In cases where columns have the <b>aggregate</b> property specified, it contains the unformatted
* aggregate value.
*
* For example, this template shows aggregate's value and kind for group row cells in the "Sales"
* column:
*
* ```html
* <wj-multi-row-cell header="Sales" binding="sales" aggregate="Avg">
*   <wj-multi-row-cell-template cellType="Group" v-slot="cell">
*     Average: {{formatNumber(cell.value, 'N0')}}
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*
* <b>NewCellTemplate</b>
*
* Defines a cell in a new row template. Must be a child of the {@link wijmo.vue2.grid.multirow.WjMultiRowCell} component.
* Note that the <b>cell.item</b> property is undefined for this type of a cell.
* For example, this cell template shows a placeholder in the Date column's cell in the "new row" item:
*
* ```html
* <wj-multi-row-cell header="'Date'" binding="'date'">
*   <wj-multi-row-cell-template cellType="NewCellTemplate">
*     Enter a date here
*   </wj-multi-row-cell-template>
* </wj-multi-row-cell>
* ```
*/
export declare var WjMultiRowCellTemplate: any;
export declare function registerGridMultirow(app: any): void;
