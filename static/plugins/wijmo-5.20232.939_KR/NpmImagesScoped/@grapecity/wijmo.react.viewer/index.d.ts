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
 * {@module wijmo.react.viewer}
 * Contains React components for the <b>wijmo.viewer</b> module.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { ComponentBase } from '@grapecity/wijmo.react.base';
/**
 * React component for the {@link wijmo.viewer.ReportViewer} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.viewer.ReportViewer} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class ReportViewer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        serviceUrl?: any;
        filePath?: any;
        fullScreen?: any;
        zoomFactor?: any;
        zoomMode?: any;
        mouseMode?: any;
        viewMode?: any;
        requestHeaders?: any;
        parameters?: any;
        paginated?: any;
        reportName?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        pageIndexChanged?: any;
        queryLoadingData?: any;
        beforeSendRequest?: any;
        fullScreenChanged?: any;
        zoomFactorChanged?: any;
        zoomModeChanged?: any;
        mouseModeChanged?: any;
        viewModeChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
/**
 * React component for the {@link wijmo.viewer.PdfViewer} control.
 *
 * The component supports all properties and events of the pure JavaScript {@link wijmo.viewer.PdfViewer} control it represents.
 *
 * The component includes an <b>initialized</b> event that is raised when the control is initialized after it is added to the page.
 * You can use this event to perform further initialization in addition to setting properties in JSX.
 * The signature of the handler function is the same as any other Wijmo event handlers.
 */
export declare class PdfViewer extends ComponentBase {
    props: {
        template?: any;
        children?: any;
        isDisabled?: any;
        tabOrder?: any;
        serviceUrl?: any;
        filePath?: any;
        fullScreen?: any;
        zoomFactor?: any;
        zoomMode?: any;
        mouseMode?: any;
        viewMode?: any;
        requestHeaders?: any;
        initialized?: any;
        gotFocus?: any;
        lostFocus?: any;
        refreshing?: any;
        refreshed?: any;
        invalidInput?: any;
        pageIndexChanged?: any;
        queryLoadingData?: any;
        beforeSendRequest?: any;
        fullScreenChanged?: any;
        zoomFactorChanged?: any;
        zoomModeChanged?: any;
        mouseModeChanged?: any;
        viewModeChanged?: any;
        [key: string]: any;
    };
    constructor(props: any);
}
