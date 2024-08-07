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
 * {@module wijmo.react.grid.search}
 * Contains React components for the <b>wijmo.grid.search</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from 'wijmo/wijmo.react.base';
/**
 * React component for the {@link wijmo.grid.search.FlexGridSearch} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.grid.search.FlexGridSearch} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class FlexGridSearch extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        text?: any;
        delay?: any;
        searchAllColumns?: any;
        placeholder?: any;
        cssMatch?: any;
        grid?: any;
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
