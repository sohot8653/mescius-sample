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
 * {@module wijmo.vue2.core}
 * Contains Vue 2 and 3 components for the <b>wijmo</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component that includes a given HTML fragment into the document.
 *
 * The <b>wj-include</b> component takes a <b>src</b> attribute that
 * specifies a file to load and include into the document. For example:
 *
 * <pre>&lt;wj-popup control="modalDialog" :modal="true" :hide-trigger="None"&gt;
 *   &lt;wj-include src="includes/dialog.htm"&gt;&lt;/wj-include&gt;
 * &lt;/wj-popup&gt;</pre>
 */
export declare var WjInclude: any;
export declare var wjFormat: (value: any, format: any) => string;
/**
 * Vue filter that applies globalized formatting to dates and numbers.
 *
 * For example, the code below uses the <b>wj-format</b> filter to format
 * a number as a currency value and a date as a short date using the
 * current Wijmo culture:
 *
 * <pre>&lt;p&gt;value: {&#8203;{ theAmount | wj-format('c') }}&lt;/p&gt;
 * &lt;p&gt;date: {&#8203;{ theDate | wj-format('d') }}&lt;/p&gt;</pre>
 */
export declare var WjFormat: any;
/**
* Vue directive for the {@link Tooltip} class.
*
* Use the **wjTooltip** directive to add tooltips to elements on the page.
* The wjTooltip directive supports HTML content, smart positioning, and touch.
*
* The wjTooltip directive is specified as a **v-wjTooltip** attribute added to the
* element that the tooltip applies to. The parameter value is the tooltip
* text or the id of an element that contains the text.
*
* You can also specify the tooltip with additional properties. In this case
* the directive value is an object with property values. The possible properties
* are:
* - **tooltip** - tooltip text or element id.
* - **position** - represents the {@link Tooltip.position} property.
*
* For example:
* ```html
* <p v-wjTooltip="'Just a string'">
*     Paragraph with a string tooltip.
* </p>
* <p v-wjTooltip="{tooltip: '#fineprint', position: 'Left'}>
*     Paragraph with a tooltip defined as an element.
* </p>
* ...
* <div id="fineprint" style="display:none">
*   <h3>Important Note</h3>
*   <p>
*     Data for the current quarter is estimated
*     by pro-rating etc.</p>
* </div>
* ```
*/
export declare var WjTooltip: any;
export declare function registerCore(app: any): void;
