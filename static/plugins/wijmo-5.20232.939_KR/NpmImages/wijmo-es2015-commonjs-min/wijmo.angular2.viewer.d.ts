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
* {@module wijmo.angular2.viewer}
* Contains Angular 2 components for the <b>wijmo.viewer</b> module.
*
* <b>wijmo.angular2.viewer</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjViewer from 'wijmo/wijmo.angular2.viewer';
* &nbsp;
* &#64;Component({
*     directives: [wjViewer.WjReportViewer, wjViewer.WjPdfViewer],
*     template: `
*       &lt;wj-report-viewer [reportName]="sales" [serviceUrl]="'webserviceApi'"&gt;
*       &lt;/wj-report-viewer;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
/**
 *
 */
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from 'wijmo/wijmo.angular2.directiveBase';
import * as wjcViewer from 'wijmo/wijmo.viewer';
declare var wjReportViewerMeta: IWjComponentMeta;
export { wjReportViewerMeta };
/**
 * Angular 2 component for the {@link wijmo.viewer.ReportViewer} control.
 *
 * Use the <b>wj-report-viewer</b> component to add <b>ReportViewer</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjReportViewer</b> component is derived from the <b>ReportViewer</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjReportViewer extends wjcViewer.ReportViewer implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pageIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pageIndexChanged</b> Wijmo event name.
     */
    pageIndexChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>viewModeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>viewModeChanged</b> Wijmo event name.
     */
    viewModeChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>viewMode</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>viewModeChange</b> event name.
     */
    viewModeChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>mouseModeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>mouseModeChanged</b> Wijmo event name.
     */
    mouseModeChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>mouseMode</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>mouseModeChange</b> event name.
     */
    mouseModeChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>fullScreenChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>fullScreenChanged</b> Wijmo event name.
     */
    fullScreenChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>fullScreen</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>fullScreenChange</b> event name.
     */
    fullScreenChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>zoomFactorChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>zoomFactorChanged</b> Wijmo event name.
     */
    zoomFactorChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>zoomFactor</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>zoomFactorChange</b> event name.
     */
    zoomFactorChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>zoomModeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>zoomModeChanged</b> Wijmo event name.
     */
    zoomModeChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>zoomMode</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>zoomModeChange</b> event name.
     */
    zoomModeChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>queryLoadingData</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>queryLoadingData</b> Wijmo event name.
     */
    queryLoadingDataNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>beforeSendRequest</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>beforeSendRequest</b> Wijmo event name.
     */
    beforeSendRequestNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
}
declare var wjPdfViewerMeta: IWjComponentMeta;
export { wjPdfViewerMeta };
/**
 * Angular 2 component for the {@link wijmo.viewer.PdfViewer} control.
 *
 * Use the <b>wj-pdf-viewer</b> component to add <b>PdfViewer</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjPdfViewer</b> component is derived from the <b>PdfViewer</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjPdfViewer extends wjcViewer.PdfViewer implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    /**
     * Defines a name of a property represented by [(ngModel)] directive (if specified).
     * Default value is ''.
     */
    wjModelProperty: string;
    /**
     * Allows you to override the global <b>WjOptions.asyncBindings</b> setting for this specific component.
     * See the <b>WjOptions.</b>{@link WjOptions.asyncBindings} property description for details.
     */
    asyncBindings: boolean;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>gotFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>gotFocus</b> Wijmo event name.
     */
    gotFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>lostFocus</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>lostFocus</b> Wijmo event name.
     */
    lostFocusNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshing</b> Wijmo event name.
     */
    refreshingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>refreshed</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>refreshed</b> Wijmo event name.
     */
    refreshedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>invalidInput</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>invalidInput</b> Wijmo event name.
     */
    invalidInputNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>pageIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>pageIndexChanged</b> Wijmo event name.
     */
    pageIndexChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>viewModeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>viewModeChanged</b> Wijmo event name.
     */
    viewModeChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>viewMode</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>viewModeChange</b> event name.
     */
    viewModeChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>mouseModeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>mouseModeChanged</b> Wijmo event name.
     */
    mouseModeChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>mouseMode</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>mouseModeChange</b> event name.
     */
    mouseModeChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>fullScreenChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>fullScreenChanged</b> Wijmo event name.
     */
    fullScreenChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>fullScreen</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>fullScreenChange</b> event name.
     */
    fullScreenChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>zoomFactorChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>zoomFactorChanged</b> Wijmo event name.
     */
    zoomFactorChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>zoomFactor</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>zoomFactorChange</b> event name.
     */
    zoomFactorChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>zoomModeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>zoomModeChanged</b> Wijmo event name.
     */
    zoomModeChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>zoomMode</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>zoomModeChange</b> event name.
     */
    zoomModeChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>queryLoadingData</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>queryLoadingData</b> Wijmo event name.
     */
    queryLoadingDataNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>beforeSendRequest</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>beforeSendRequest</b> Wijmo event name.
     */
    beforeSendRequestNg: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
}
export declare class WjViewerModule {
}
