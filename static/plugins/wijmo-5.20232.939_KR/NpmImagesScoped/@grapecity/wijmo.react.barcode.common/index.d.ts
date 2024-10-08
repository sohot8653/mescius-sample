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
 * {@module wijmo.react.barcode.common}
 * Contains React components for the <b>wijmo.barcode.common</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.barcode.common.Codabar} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.Codabar} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeCodabar extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        autoWidth?: any;
        autoWidthZoom?: any;
        showLabel?: any;
        checkDigit?: any;
        labelPosition?: any;
        nwRatio?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.Ean8} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.Ean8} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeEan8 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        showLabel?: any;
        labelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.Ean13} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.Ean13} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeEan13 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        showLabel?: any;
        labelPosition?: any;
        addOn?: any;
        addOnHeight?: any;
        addOnLabelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.Code39} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.Code39} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeCode39 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        autoWidth?: any;
        autoWidthZoom?: any;
        showLabel?: any;
        checkDigit?: any;
        fullAscii?: any;
        labelPosition?: any;
        nwRatio?: any;
        labelWithStartAndStopCharacter?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.Code128} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.Code128} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeCode128 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        autoWidth?: any;
        autoWidthZoom?: any;
        showLabel?: any;
        codeSet?: any;
        labelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.Gs1_128} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.Gs1_128} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeGs1_128 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        autoWidth?: any;
        autoWidthZoom?: any;
        showLabel?: any;
        labelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.UpcA} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.UpcA} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeUpcA extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        showLabel?: any;
        addOn?: any;
        labelPosition?: any;
        addOnHeight?: any;
        addOnLabelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.UpcE0} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.UpcE0} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeUpcE0 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        showLabel?: any;
        addOn?: any;
        labelPosition?: any;
        addOnHeight?: any;
        addOnLabelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.UpcE1} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.UpcE1} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeUpcE1 extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        showLabel?: any;
        addOn?: any;
        labelPosition?: any;
        addOnHeight?: any;
        addOnLabelPosition?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.barcode.common.QrCode} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.barcode.common.QrCode} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class BarcodeQrCode extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        value?: any;
        quietZone?: any;
        renderType?: any;
        color?: any;
        backgroundColor?: any;
        hideExtraChecksum?: any;
        font?: any;
        charCode?: any;
        charset?: any;
        model?: any;
        version?: any;
        errorCorrectionLevel?: any;
        mask?: any;
        connection?: any;
        connectionIndex?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        isValidChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
