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
* {@module wijmo.angular2.barcode.specialized}
* Contains Angular 2 components for the <b>wijmo.barcode.specialized</b> module.
*
* <b>wijmo.angular2.barcode.specialized</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
*
*
*/
/**
 *
 */
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from 'wijmo/wijmo.angular2.directiveBase';
import * as wjcBarcodeSpecialized from 'wijmo/wijmo.barcode.specialized';
declare var wjBarcodeDataMatrixEcc000Meta: IWjComponentMeta;
export { wjBarcodeDataMatrixEcc000Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.DataMatrixEcc000} control.
 *
 * Use the <b>wj-barcode-data-matrix-ecc000</b> component to add <b>DataMatrixEcc000</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeDataMatrixEcc000</b> component is derived from the <b>DataMatrixEcc000</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeDataMatrixEcc000 extends wjcBarcodeSpecialized.DataMatrixEcc000 implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
declare var wjBarcodeDataMatrixEcc200Meta: IWjComponentMeta;
export { wjBarcodeDataMatrixEcc200Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.DataMatrixEcc200} control.
 *
 * Use the <b>wj-barcode-data-matrix-ecc200</b> component to add <b>DataMatrixEcc200</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeDataMatrixEcc200</b> component is derived from the <b>DataMatrixEcc200</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeDataMatrixEcc200 extends wjcBarcodeSpecialized.DataMatrixEcc200 implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
declare var wjBarcodeCode49Meta: IWjComponentMeta;
export { wjBarcodeCode49Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.Code49} control.
 *
 * Use the <b>wj-barcode-code49</b> component to add <b>Code49</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeCode49</b> component is derived from the <b>Code49</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeCode49 extends wjcBarcodeSpecialized.Code49 implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
declare var wjBarcodeCode93Meta: IWjComponentMeta;
export { wjBarcodeCode93Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.Code93} control.
 *
 * Use the <b>wj-barcode-code93</b> component to add <b>Code93</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeCode93</b> component is derived from the <b>Code93</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeCode93 extends wjcBarcodeSpecialized.Code93 implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
declare var wjBarcodeItf14Meta: IWjComponentMeta;
export { wjBarcodeItf14Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.Itf14} control.
 *
 * Use the <b>wj-barcode-itf14</b> component to add <b>Itf14</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeItf14</b> component is derived from the <b>Itf14</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeItf14 extends wjcBarcodeSpecialized.Itf14 implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
declare var wjBarcodeInterleaved2of5Meta: IWjComponentMeta;
export { wjBarcodeInterleaved2of5Meta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.Interleaved2of5} control.
 *
 * Use the <b>wj-barcode-interleaved2of5</b> component to add <b>Interleaved2of5</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeInterleaved2of5</b> component is derived from the <b>Interleaved2of5</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeInterleaved2of5 extends wjcBarcodeSpecialized.Interleaved2of5 implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
declare var wjBarcodeJapanesePostalMeta: IWjComponentMeta;
export { wjBarcodeJapanesePostalMeta };
/**
 * Angular 2 component for the {@link wijmo.barcode.specialized.JapanesePostal} control.
 *
 * Use the <b>wj-barcode-japanese-postal</b> component to add <b>JapanesePostal</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjBarcodeJapanesePostal</b> component is derived from the <b>JapanesePostal</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjBarcodeJapanesePostal extends wjcBarcodeSpecialized.JapanesePostal implements OnInit, OnDestroy, AfterViewInit {
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
     * Angular (EventEmitter) version of the Wijmo <b>isValidChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isValidChanged</b> Wijmo event name.
     */
    isValidChangedNg: EventEmitter<any>;
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
export declare class WjBarcodeSpecializedModule {
}
