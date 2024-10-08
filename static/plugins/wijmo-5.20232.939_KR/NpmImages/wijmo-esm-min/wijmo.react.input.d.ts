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
 * {@module wijmo.react.input}
 * Contains React components for the <b>wijmo.input</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
import * as wjcCore from 'wijmo/wijmo';
/**
 * React component for the {@link wijmo.input.ListBox} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.ListBox} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 */
export declare class ListBox extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isContentHtml?: any;
        maxHeight?: any;
        selectedValuePath?: any;
        itemFormatter?: any;
        displayMemberPath?: any;
        checkedMemberPath?: any;
        caseSensitiveSearch?: any;
        itemsSource?: any;
        virtualizationThreshold?: any;
        showGroups?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        checkedItems?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        formatItem?: any;
        itemsChanged?: any;
        itemChecked?: any;
        selectedIndexChanged?: any;
        checkedItemsChanged?: any;
        [key: string]: any;
    };
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component for the {@link wijmo.input.MultiSelectListBox} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.MultiSelectListBox} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiSelectListBox extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        itemsSource?: any;
        displayMemberPath?: any;
        selectedIndex?: any;
        isContentHtml?: any;
        showGroups?: any;
        checkOnFilter?: any;
        showFilterInput?: any;
        filterInputPlaceholder?: any;
        showSelectAllCheckbox?: any;
        selectAllLabel?: any;
        delay?: any;
        caseSensitiveSearch?: any;
        checkedMemberPath?: any;
        virtualizationThreshold?: any;
        checkedItems?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        selectedIndexChanged?: any;
        checkedItemsChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.ComboBox} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.ComboBox} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 */
export declare class ComboBox extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        displayMemberPath?: any;
        selectedValuePath?: any;
        headerPath?: any;
        isContentHtml?: any;
        isEditable?: any;
        handleWheel?: any;
        maxDropDownHeight?: any;
        maxDropDownWidth?: any;
        itemFormatter?: any;
        showGroups?: any;
        trimText?: any;
        caseSensitiveSearch?: any;
        virtualizationThreshold?: any;
        itemsSource?: any;
        text?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        itemsSourceChanged?: any;
        formatItem?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        selectedIndexChanged?: any;
        [key: string]: any;
    };
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component for the {@link wijmo.input.AutoComplete} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.AutoComplete} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class AutoComplete extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        displayMemberPath?: any;
        selectedValuePath?: any;
        headerPath?: any;
        isContentHtml?: any;
        isEditable?: any;
        handleWheel?: any;
        maxDropDownHeight?: any;
        maxDropDownWidth?: any;
        itemFormatter?: any;
        showGroups?: any;
        trimText?: any;
        caseSensitiveSearch?: any;
        virtualizationThreshold?: any;
        delay?: any;
        maxItems?: any;
        minLength?: any;
        cssMatch?: any;
        itemsSourceFunction?: any;
        searchMemberPath?: any;
        beginsWithSearch?: any;
        itemsSource?: any;
        text?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        itemsSourceChanged?: any;
        formatItem?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        selectedIndexChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.Calendar} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.Calendar} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Calendar extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        monthView?: any;
        showHeader?: any;
        itemFormatter?: any;
        itemValidator?: any;
        firstDayOfWeek?: any;
        max?: any;
        min?: any;
        formatYearMonth?: any;
        formatDayHeaders?: any;
        formatDays?: any;
        formatYear?: any;
        formatMonths?: any;
        selectionMode?: any;
        isReadOnly?: any;
        handleWheel?: any;
        repeatButtons?: any;
        showYearPicker?: any;
        value?: any;
        displayMonth?: any;
        monthCount?: any;
        showMonthPicker?: any;
        weeksBefore?: any;
        weeksAfter?: any;
        rangeEnd?: any;
        rangeMin?: any;
        rangeMax?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        rangeChanged?: any;
        formatItem?: any;
        valueChanged?: any;
        displayMonthChanged?: any;
        rangeEndChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.ColorPicker} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.ColorPicker} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ColorPicker extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        showAlphaChannel?: any;
        showColorString?: any;
        palette?: any;
        value?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        valueChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputMask} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputMask} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputMask extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        mask?: any;
        overwriteMode?: any;
        isRequired?: any;
        isReadOnly?: any;
        promptChar?: any;
        placeholder?: any;
        inputType?: any;
        rawValue?: any;
        value?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        valueChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputColor} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputColor} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputColor extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        showAlphaChannel?: any;
        showColorString?: any;
        value?: any;
        text?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        valueChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.MultiSelect} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.MultiSelect} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 */
export declare class MultiSelect extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        displayMemberPath?: any;
        selectedValuePath?: any;
        headerPath?: any;
        isContentHtml?: any;
        isEditable?: any;
        handleWheel?: any;
        maxDropDownHeight?: any;
        maxDropDownWidth?: any;
        itemFormatter?: any;
        showGroups?: any;
        trimText?: any;
        caseSensitiveSearch?: any;
        virtualizationThreshold?: any;
        checkedMemberPath?: any;
        maxHeaderItems?: any;
        headerFormat?: any;
        headerFormatter?: any;
        showSelectAllCheckbox?: any;
        selectAllLabel?: any;
        showFilterInput?: any;
        filterInputPlaceholder?: any;
        checkOnFilter?: any;
        delay?: any;
        itemsSource?: any;
        checkedItems?: any;
        text?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        itemsSourceChanged?: any;
        formatItem?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        selectedIndexChanged?: any;
        checkedItemsChanged?: any;
        [key: string]: any;
    };
    wjItemTemplate: ItemTemplateRender;
    constructor(props: any);
    componentDidMount(): any;
}
/**
 * React component for the {@link wijmo.input.MultiAutoComplete} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.MultiAutoComplete} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MultiAutoComplete extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        displayMemberPath?: any;
        selectedValuePath?: any;
        headerPath?: any;
        isContentHtml?: any;
        isEditable?: any;
        handleWheel?: any;
        maxDropDownHeight?: any;
        maxDropDownWidth?: any;
        itemFormatter?: any;
        showGroups?: any;
        trimText?: any;
        caseSensitiveSearch?: any;
        virtualizationThreshold?: any;
        delay?: any;
        maxItems?: any;
        minLength?: any;
        cssMatch?: any;
        itemsSourceFunction?: any;
        searchMemberPath?: any;
        beginsWithSearch?: any;
        maxSelectedItems?: any;
        selectedItems?: any;
        itemsSource?: any;
        selectedMemberPath?: any;
        text?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        itemsSourceChanged?: any;
        formatItem?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        selectedIndexChanged?: any;
        selectedItemsChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputNumber} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputNumber} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputNumber extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        showSpinner?: any;
        repeatButtons?: any;
        max?: any;
        min?: any;
        step?: any;
        isRequired?: any;
        placeholder?: any;
        inputType?: any;
        format?: any;
        isReadOnly?: any;
        handleWheel?: any;
        value?: any;
        text?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        valueChanged?: any;
        textChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputDate} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputDate} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputDate extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        selectionMode?: any;
        format?: any;
        mask?: any;
        max?: any;
        min?: any;
        repeatButtons?: any;
        showYearPicker?: any;
        itemValidator?: any;
        itemFormatter?: any;
        monthCount?: any;
        handleWheel?: any;
        showMonthPicker?: any;
        showHeader?: any;
        weeksBefore?: any;
        weeksAfter?: any;
        rangeMin?: any;
        rangeMax?: any;
        separator?: any;
        alwaysShowCalendar?: any;
        predefinedRanges?: any;
        closeOnSelection?: any;
        text?: any;
        value?: any;
        rangeEnd?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        rangeChanged?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        valueChanged?: any;
        rangeEndChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputTime} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputTime} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputTime extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        displayMemberPath?: any;
        selectedValuePath?: any;
        headerPath?: any;
        isContentHtml?: any;
        isEditable?: any;
        handleWheel?: any;
        maxDropDownHeight?: any;
        maxDropDownWidth?: any;
        itemFormatter?: any;
        showGroups?: any;
        trimText?: any;
        caseSensitiveSearch?: any;
        virtualizationThreshold?: any;
        max?: any;
        min?: any;
        step?: any;
        format?: any;
        mask?: any;
        itemsSource?: any;
        text?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        value?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        itemsSourceChanged?: any;
        formatItem?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        selectedIndexChanged?: any;
        valueChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputDateTime} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputDateTime} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputDateTime extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        selectionMode?: any;
        format?: any;
        mask?: any;
        max?: any;
        min?: any;
        repeatButtons?: any;
        showYearPicker?: any;
        itemValidator?: any;
        itemFormatter?: any;
        monthCount?: any;
        handleWheel?: any;
        showMonthPicker?: any;
        showHeader?: any;
        weeksBefore?: any;
        weeksAfter?: any;
        rangeMin?: any;
        rangeMax?: any;
        separator?: any;
        alwaysShowCalendar?: any;
        predefinedRanges?: any;
        closeOnSelection?: any;
        timeMax?: any;
        timeMin?: any;
        timeStep?: any;
        timeFormat?: any;
        text?: any;
        value?: any;
        rangeEnd?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        rangeChanged?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        valueChanged?: any;
        rangeEndChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.InputDateRange} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.InputDateRange} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class InputDateRange extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        selectionMode?: any;
        format?: any;
        mask?: any;
        max?: any;
        min?: any;
        repeatButtons?: any;
        showYearPicker?: any;
        itemValidator?: any;
        itemFormatter?: any;
        monthCount?: any;
        handleWheel?: any;
        showMonthPicker?: any;
        showHeader?: any;
        weeksBefore?: any;
        weeksAfter?: any;
        rangeMin?: any;
        rangeMax?: any;
        separator?: any;
        alwaysShowCalendar?: any;
        predefinedRanges?: any;
        closeOnSelection?: any;
        text?: any;
        value?: any;
        rangeEnd?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        rangeChanged?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        valueChanged?: any;
        rangeEndChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.input.Menu} control.
 *
 * The <b>menu</b> component may contain
 * the following child components:
 * {@link wijmo.react.input.MenuItem}
 * and {@link wijmo.react.input.MenuSeparator}.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.Menu} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 *
 * The component includes a <b>wjItemTemplate</b> property which is used to define list item template.
 * The template is a function with single argument. The argument is a plain object with keys of
 * <b>control</b> (list control, owner of the list item),
 * <b>item</b> (item data for the list item) and
 * <b>itemIndex</b> (zero-based index of the list item).
 *
 * The component includes a <b>contextMenuOf</b> property which is used to assign context menu to elements or controls.
 * Value of the property can be id attribute of HTMLElement, reference or array of HTMLElement/ReactComponent.
 */
export declare class Menu extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        isDroppedDown?: any;
        showDropDownButton?: any;
        autoExpandSelection?: any;
        placeholder?: any;
        dropDownCssClass?: any;
        isAnimated?: any;
        isReadOnly?: any;
        isRequired?: any;
        inputType?: any;
        clickAction?: any;
        displayMemberPath?: any;
        selectedValuePath?: any;
        headerPath?: any;
        isContentHtml?: any;
        isEditable?: any;
        handleWheel?: any;
        maxDropDownHeight?: any;
        maxDropDownWidth?: any;
        itemFormatter?: any;
        showGroups?: any;
        trimText?: any;
        caseSensitiveSearch?: any;
        virtualizationThreshold?: any;
        header?: any;
        commandParameterPath?: any;
        commandPath?: any;
        subItemsPath?: any;
        openOnHover?: any;
        closeOnLeave?: any;
        isButton?: any;
        itemsSource?: any;
        text?: any;
        selectedIndex?: any;
        selectedItem?: any;
        selectedValue?: any;
        value?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isDroppedDownChanging?: any;
        itemsSourceChanged?: any;
        formatItem?: any;
        isDroppedDownChanged?: any;
        textChanged?: any;
        selectedIndexChanged?: any;
        itemClicked?: any;
        [key: string]: any;
    };
    wjItemTemplate: ItemTemplateRender;
    private _definedHeader;
    private _value;
    private _contextMenuData;
    readonly contextMenuProp = "contextMenuOf";
    constructor(props: any);
    value: any;
    componentDidMount(): any;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    protected _createControl(): any;
    private _updateHeader;
    private _fmtItem;
    private _contextMenuGetElementsIfChanged;
    private _contextMenuGetElements;
    private _contextMenuBindListeners;
    private _contextMenuUnbindListeners;
}
/**
 * React component that represents an item in a {@link wijmo.react.input.Menu} control.
 *
 * The <b>menu-item</b> component should be contained in
 * a {@link wijmo.react.input.Menu} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link } class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MenuItem extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        value?: any;
        cmd?: any;
        cmdParam?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    contentRoot: HTMLElement;
    value: any;
    cmd: any;
    cmdParam: any;
    constructor(props: any);
    protected _createControl(): any;
    _renderImpl(): any;
    added(toItem: HTMLElement): void;
}
/**
* React component that represents an item separator in a {@link wijmo.react.input.Menu} control.
 *
 * The <b>menu-separator</b> component should be contained in
 * a {@link wijmo.react.input.Menu} component.
 *
 * The component supports all properties and events of the pure JavaScript {@link } class it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class MenuSeparator extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        initialized?: any;
        [key: string]: any;
    };
    _parentProp: string;
    _siblingId: string;
    contentRoot: HTMLElement;
    constructor(props: any);
    protected _createControl(): any;
    _renderImpl(): any;
    added(toItem: HTMLElement): void;
}
/**
 * TBD
 */
export interface ItemTemplateContext {
    control: wjcCore.Control;
    item: any;
    itemIndex: number;
}
/**
 * TBD
 */
export declare type ItemTemplateRender = (context: ItemTemplateContext) => any;
/**
 * React component for the {@link wijmo.input.Popup} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.Popup} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class Popup extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        owner?: any;
        showTrigger?: any;
        hideTrigger?: any;
        fadeIn?: any;
        fadeOut?: any;
        isDraggable?: any;
        isResizable?: any;
        dialogResultEnter?: any;
        dialogResultSubmit?: any;
        modal?: any;
        removeOnHide?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        showing?: any;
        shown?: any;
        hiding?: any;
        hidden?: any;
        resizing?: any;
        sizeChanging?: any;
        sizeChanged?: any;
        resized?: any;
        dragging?: any;
        positionChanging?: any;
        positionChanged?: any;
        dragged?: any;
        [key: string]: any;
    };
    private _sEl;
    private _pEl;
    private _v17;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    _renderImpl(): any;
}
/**
 * React component for the {@link wijmo.input.CollectionViewNavigator} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.input.CollectionViewNavigator} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class CollectionViewNavigator extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        cv?: any;
        byPage?: any;
        headerFormat?: any;
        repeatButtons?: any;
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
