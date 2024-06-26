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
* {@module wijmo.angular2.input}
* Contains Angular 2 components for the <b>wijmo.input</b> module.
*
* <b>wijmo.angular2.input</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjInput from 'wijmo/wijmo.angular2.input';
* &nbsp;
* &#64;Component({
*     directives: [wjInput.WjInputNumber],
*     template: '&lt;wj-input-number [(value)]="amount"&gt;&lt;/wj-input-number&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     amount = 0;
* }</pre>
*
*/
/**
 *
 */
export declare var ___keepComment: any;
import { EventEmitter, AfterViewInit, ElementRef, Injector, ViewContainerRef, TemplateRef, OnInit, OnChanges, OnDestroy, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta, IWjDirectiveMeta } from 'wijmo/wijmo.angular2.directiveBase';
import * as ngCore from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcInput from 'wijmo/wijmo.input';
declare var wjListBoxMeta: IWjComponentMeta;
export { wjListBoxMeta };
/**
 * Angular 2 component for the {@link wijmo.input.ListBox} control.
 *
 * Use the <b>wj-list-box</b> component to add <b>ListBox</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjListBox</b> component is derived from the <b>ListBox</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-list-box</b> component may contain a {@link wijmo.angular2.input.WjItemTemplate} child directive.
*/
export declare class WjListBox extends wjcInput.ListBox implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'selectedValue'.
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
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsChanged</b> Wijmo event name.
     */
    itemsChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemChecked</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemChecked</b> Wijmo event name.
     */
    itemCheckedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>checkedItemsChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>checkedItemsChanged</b> Wijmo event name.
     */
    checkedItemsChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>checkedItems</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>checkedItemsChange</b> event name.
     */
    checkedItemsChangePC: EventEmitter<any>;
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
declare var wjMultiSelectListBoxMeta: IWjComponentMeta;
export { wjMultiSelectListBoxMeta };
/**
 * Angular 2 component for the {@link wijmo.input.MultiSelectListBox} control.
 *
 * Use the <b>wj-multi-select-list-box</b> component to add <b>MultiSelectListBox</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMultiSelectListBox</b> component is derived from the <b>MultiSelectListBox</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjMultiSelectListBox extends wjcInput.MultiSelectListBox implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'checkedItems'.
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
     * Angular (EventEmitter) version of the Wijmo <b>checkedItemsChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>checkedItemsChanged</b> Wijmo event name.
     */
    checkedItemsChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>checkedItems</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>checkedItemsChange</b> event name.
     */
    checkedItemsChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
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
declare var wjComboBoxMeta: IWjComponentMeta;
export { wjComboBoxMeta };
/**
 * Angular 2 component for the {@link wijmo.input.ComboBox} control.
 *
 * Use the <b>wj-combo-box</b> component to add <b>ComboBox</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjComboBox</b> component is derived from the <b>ComboBox</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-combo-box</b> component may contain a {@link wijmo.angular2.input.WjItemTemplate} child directive.
*/
export declare class WjComboBox extends wjcInput.ComboBox implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'selectedValue'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
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
declare var wjAutoCompleteMeta: IWjComponentMeta;
export { wjAutoCompleteMeta };
/**
 * Angular 2 component for the {@link wijmo.input.AutoComplete} control.
 *
 * Use the <b>wj-auto-complete</b> component to add <b>AutoComplete</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjAutoComplete</b> component is derived from the <b>AutoComplete</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjAutoComplete extends wjcInput.AutoComplete implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'selectedValue'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
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
declare var wjCalendarMeta: IWjComponentMeta;
export { wjCalendarMeta };
/**
 * Angular 2 component for the {@link wijmo.input.Calendar} control.
 *
 * Use the <b>wj-calendar</b> component to add <b>Calendar</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjCalendar</b> component is derived from the <b>Calendar</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjCalendar extends wjcInput.Calendar implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeEndChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeEndChanged</b> Wijmo event name.
     */
    rangeEndChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>rangeEnd</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>rangeEndChange</b> event name.
     */
    rangeEndChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeChanged</b> Wijmo event name.
     */
    rangeChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>displayMonthChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>displayMonthChanged</b> Wijmo event name.
     */
    displayMonthChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>displayMonth</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>displayMonthChange</b> event name.
     */
    displayMonthChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
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
declare var wjColorPickerMeta: IWjComponentMeta;
export { wjColorPickerMeta };
/**
 * Angular 2 component for the {@link wijmo.input.ColorPicker} control.
 *
 * Use the <b>wj-color-picker</b> component to add <b>ColorPicker</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjColorPicker</b> component is derived from the <b>ColorPicker</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjColorPicker extends wjcInput.ColorPicker implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
declare var wjInputMaskMeta: IWjComponentMeta;
export { wjInputMaskMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputMask} control.
 *
 * Use the <b>wj-input-mask</b> component to add <b>InputMask</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputMask</b> component is derived from the <b>InputMask</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputMask extends wjcInput.InputMask implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>rawValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>rawValueChange</b> event name.
     */
    rawValueChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
declare var wjInputColorMeta: IWjComponentMeta;
export { wjInputColorMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputColor} control.
 *
 * Use the <b>wj-input-color</b> component to add <b>InputColor</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputColor</b> component is derived from the <b>InputColor</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputColor extends wjcInput.InputColor implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
declare var wjMultiSelectMeta: IWjComponentMeta;
export { wjMultiSelectMeta };
/**
 * Angular 2 component for the {@link wijmo.input.MultiSelect} control.
 *
 * Use the <b>wj-multi-select</b> component to add <b>MultiSelect</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMultiSelect</b> component is derived from the <b>MultiSelect</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-multi-select</b> component may contain a {@link wijmo.angular2.input.WjItemTemplate} child directive.
*/
export declare class WjMultiSelect extends wjcInput.MultiSelect implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'checkedItems'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>checkedItemsChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>checkedItemsChanged</b> Wijmo event name.
     */
    checkedItemsChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>checkedItems</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>checkedItemsChange</b> event name.
     */
    checkedItemsChangePC: EventEmitter<any>;
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
declare var wjMultiAutoCompleteMeta: IWjComponentMeta;
export { wjMultiAutoCompleteMeta };
/**
 * Angular 2 component for the {@link wijmo.input.MultiAutoComplete} control.
 *
 * Use the <b>wj-multi-auto-complete</b> component to add <b>MultiAutoComplete</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMultiAutoComplete</b> component is derived from the <b>MultiAutoComplete</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjMultiAutoComplete extends wjcInput.MultiAutoComplete implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'selectedItems'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedItemsChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedItemsChanged</b> Wijmo event name.
     */
    selectedItemsChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItems</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemsChange</b> event name.
     */
    selectedItemsChangePC: EventEmitter<any>;
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
declare var wjInputNumberMeta: IWjComponentMeta;
export { wjInputNumberMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputNumber} control.
 *
 * Use the <b>wj-input-number</b> component to add <b>InputNumber</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputNumber</b> component is derived from the <b>InputNumber</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputNumber extends wjcInput.InputNumber implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
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
declare var wjInputDateMeta: IWjComponentMeta;
export { wjInputDateMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputDate} control.
 *
 * Use the <b>wj-input-date</b> component to add <b>InputDate</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputDate</b> component is derived from the <b>InputDate</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputDate extends wjcInput.InputDate implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeEndChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeEndChanged</b> Wijmo event name.
     */
    rangeEndChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>rangeEnd</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>rangeEndChange</b> event name.
     */
    rangeEndChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeChanged</b> Wijmo event name.
     */
    rangeChangedNg: EventEmitter<any>;
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
declare var wjInputTimeMeta: IWjComponentMeta;
export { wjInputTimeMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputTime} control.
 *
 * Use the <b>wj-input-time</b> component to add <b>InputTime</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputTime</b> component is derived from the <b>InputTime</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputTime extends wjcInput.InputTime implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
declare var wjInputDateTimeMeta: IWjComponentMeta;
export { wjInputDateTimeMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputDateTime} control.
 *
 * Use the <b>wj-input-date-time</b> component to add <b>InputDateTime</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputDateTime</b> component is derived from the <b>InputDateTime</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputDateTime extends wjcInput.InputDateTime implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeEndChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeEndChanged</b> Wijmo event name.
     */
    rangeEndChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>rangeEnd</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>rangeEndChange</b> event name.
     */
    rangeEndChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeChanged</b> Wijmo event name.
     */
    rangeChangedNg: EventEmitter<any>;
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
declare var wjInputDateRangeMeta: IWjComponentMeta;
export { wjInputDateRangeMeta };
/**
 * Angular 2 component for the {@link wijmo.input.InputDateRange} control.
 *
 * Use the <b>wj-input-date-range</b> component to add <b>InputDateRange</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjInputDateRange</b> component is derived from the <b>InputDateRange</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputDateRange extends wjcInput.InputDateRange implements OnInit, OnDestroy, AfterViewInit {
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
     * Default value is 'value'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>valueChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>valueChanged</b> Wijmo event name.
     */
    valueChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeEndChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeEndChanged</b> Wijmo event name.
     */
    rangeEndChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>rangeEnd</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>rangeEndChange</b> event name.
     */
    rangeEndChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>rangeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>rangeChanged</b> Wijmo event name.
     */
    rangeChangedNg: EventEmitter<any>;
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
declare var wjMenuMeta: IWjComponentMeta;
export { wjMenuMeta };
/**
 * Angular 2 component for the {@link wijmo.input.Menu} control.
 *
 * Use the <b>wj-menu</b> component to add <b>Menu</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjMenu</b> component is derived from the <b>Menu</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-menu</b> component may contain the following child components:
 * {@link wijmo.angular2.input.WjMenuItem}
 * , {@link wijmo.angular2.input.WjMenuSeparator}
 *  and {@link wijmo.angular2.input.WjItemTemplate}.
*/
export declare class WjMenu extends wjcInput.Menu implements OnInit, OnDestroy, AfterViewInit, OnChanges, AfterContentInit {
    private _value;
    private _definedHeader;
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
     * Default value is 'selectedValue'.
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
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanging</b> Wijmo event name.
     */
    isDroppedDownChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>isDroppedDownChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>isDroppedDownChanged</b> Wijmo event name.
     */
    isDroppedDownChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>isDroppedDown</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>isDroppedDownChange</b> event name.
     */
    isDroppedDownChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>textChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>textChanged</b> Wijmo event name.
     */
    textChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>text</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>textChange</b> event name.
     */
    textChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemsSourceChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemsSourceChanged</b> Wijmo event name.
     */
    itemsSourceChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>formatItem</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>formatItem</b> Wijmo event name.
     */
    formatItemNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>selectedIndexChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>selectedIndexChanged</b> Wijmo event name.
     */
    selectedIndexChangedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedIndex</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedIndexChange</b> event name.
     */
    selectedIndexChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedItem</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedItemChange</b> event name.
     */
    selectedItemChangePC: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>selectedValue</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>selectedValueChange</b> event name.
     */
    selectedValueChangePC: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>itemClicked</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>itemClicked</b> Wijmo event name.
     */
    itemClickedNg: EventEmitter<any>;
    /**
     * This event is used to implement two-way binding to the <b>value</b> property.
     * It's triggered when the property value changes, with the event argument holding the new property value.
     * You can bind handlers to this event in templates using the <b>valueChange</b> event name.
     */
    valueChangePC: EventEmitter<any>;
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
    value: any;
    ngOnChanges(changes: {
        [key: string]: ngCore.SimpleChange;
    }): void;
    ngAfterContentInit(): void;
    onItemClicked(e?: wjcCore.EventArgs): void;
    refresh(fullUpdate?: boolean): void;
    private _attachToControl;
    private _loadingItems;
    private _fmtItem;
    private _updateHeader;
}
declare var wjMenuItemMeta: IWjComponentMeta;
export { wjMenuItemMeta };
/**
 * Angular 2 directive for {@link wijmo.angular2.input.WjMenu} items.
 *
 * The <b>wj-menu-item</b> component must be
 * contained in a {@link wijmo.angular2.input.WjMenu} component.
 *
 * Use the <b>wj-menu-item</b> component to add <b></b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
*/
export declare class WjMenuItem implements OnInit, OnDestroy, AfterViewInit {
    private viewContainerRef;
    value: any;
    cmd: any;
    cmdParam: any;
    header: string;
    _ownerMenu: wjcInput.Menu;
    templateDir: WjMenuItemTemplateDir;
    contentRoot: HTMLElement;
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
     * Gets or sets a name of a property that this component is assigned to.
     * Default value is 'itemsSource'.
     */
    wjProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, viewContainerRef: ViewContainerRef);
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
    added(toItem: HTMLElement): void;
}
export declare class WjMenuItemTemplateDir implements ngCore.AfterContentInit {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef<any>;
    elRef: ElementRef;
    wjMenuItemTemplateDir: any;
    ownerItem: WjMenuItem;
    contentRoot: HTMLElement;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, elRef: ElementRef, injector: Injector, menuItem: WjMenuItem, menuSeparator: WjMenuSeparator);
    ngAfterContentInit(): void;
}
declare var wjMenuSeparatorMeta: IWjComponentMeta;
export { wjMenuSeparatorMeta };
/**
 * Angular 2 directive for {@link wijmo.angular2.input.WjMenu} item separators.
 *
 * The <b>wj-menu-separator</b> component must be
 * contained in a {@link wijmo.angular2.input.WjMenu} component.
 *
 * Use the <b>wj-menu-separator</b> component to add <b></b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
*/
export declare class WjMenuSeparator extends WjMenuItem implements OnInit, OnDestroy, AfterViewInit {
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, viewContainerRef: ViewContainerRef);
    added(toItem: HTMLElement): void;
}
declare var wjItemTemplateMeta: IWjDirectiveMeta;
export { wjItemTemplateMeta };
/**
 * Angular 2 directive for item templates of item list components.
 *
 * The <b>[wjItemTemplate]</b> directive must be
 * contained in one of the following components:
 * {@link wijmo.angular2.input.WjListBox}
 * , {@link wijmo.angular2.input.WjMenu}
 * , {@link wijmo.angular2.input.WjComboBox}
 *  or {@link wijmo.angular2.input.WjMultiSelect}.
 *
 * The <b>[wjItemTemplate]</b> directive defines a template for items of a component
 * that it's nested in.
 * The template may contain an arbitrary HTML fragment with Angular 2 bindings and directives.
 * The local <b>item</b>, <b>itemIndex</b> and <b>control</b> template variables can be used in Angular 2
 * bindings that refer to the data item, its index, and the owner control. For example:
 *
 *<pre>&lt;wj-list-box style="max-height:300px;width:250px;"
 *             [itemsSource]="musicians"&gt;
 *   &lt;ng-template wjItemTemplate let-item="item" let-itemIndex="itemIndex"&gt;
 *       {&#8203;{itemIndex + 1}}. &lt;b&gt;{&#8203;{item.name}}&lt;/b&gt;
 *       &lt;div *ngIf="item.photo"&gt;
 *           &lt;img [src]="item.photo" height="100" /&gt;
 *           &lt;br /&gt;
 *           &lt;a href="https://www.google.com/#newwindow=1&q=The+Beatles+"
 *              target="_blank"
 *              style="color:red"&gt;go there!&lt;/a&gt;
 *       &lt;/div&gt;
 *   &lt;/ng-template&gt;
 * &lt;/wj-list-box&gt;</pre>
*/
export declare class WjItemTemplate implements OnInit, OnDestroy, AfterViewInit {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef<any>;
    wjItemTemplate: any;
    ownerControl: wjcCore.Control;
    listBox: wjcInput.ListBox;
    private _cdRef;
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
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, cdRef: ChangeDetectorRef);
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
    private _attachToControl;
    private _loadingItems;
    private _fmtItem;
    private _instantiateTemplate;
    private static _getListBox;
}
declare var wjPopupMeta: IWjComponentMeta;
export { wjPopupMeta };
/**
 * Angular 2 component for the {@link wijmo.input.Popup} control.
 *
 * Use the <b>wj-popup</b> component to add <b>Popup</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjPopup</b> component is derived from the <b>Popup</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjPopup extends wjcInput.Popup implements OnInit, OnDestroy, AfterViewInit, OnChanges {
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
     * Angular (EventEmitter) version of the Wijmo <b>showing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>showing</b> Wijmo event name.
     */
    showingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>shown</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>shown</b> Wijmo event name.
     */
    shownNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>hiding</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>hiding</b> Wijmo event name.
     */
    hidingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>hidden</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>hidden</b> Wijmo event name.
     */
    hiddenNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>resizing</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>resizing</b> Wijmo event name.
     */
    resizingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>sizeChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>sizeChanging</b> Wijmo event name.
     */
    sizeChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>sizeChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>sizeChanged</b> Wijmo event name.
     */
    sizeChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>resized</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>resized</b> Wijmo event name.
     */
    resizedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>dragging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>dragging</b> Wijmo event name.
     */
    draggingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>positionChanging</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>positionChanging</b> Wijmo event name.
     */
    positionChangingNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>positionChanged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>positionChanged</b> Wijmo event name.
     */
    positionChangedNg: EventEmitter<any>;
    /**
     * Angular (EventEmitter) version of the Wijmo <b>dragged</b> event for programmatic access.
     * Use this event name if you want to subscribe to the Angular version of the event in code.
     * In template bindings use the conventional <b>dragged</b> Wijmo event name.
     */
    draggedNg: EventEmitter<any>;
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
    ngOnChanges(changes: {
        [key: string]: ngCore.SimpleChange;
    }): void;
    dispose(): void;
}
/**
    * Angular 2 directive for context menus.
    *
    * Use the <b>wjContextMenu</b> directive to add context menus to elements
    * on the page. The wjContextMenu directive is based on the <b>wj-menu</b>
    * component; it displays a popup menu when the user performs a context menu
    * request on an element (usually a right-click).
    *
    * The wjContextMenu directive is specified as a parameter added to the
    * element that the context menu applies to. The parameter value is a
    * reference to the <b>wj-menu</b> component. For example:
    *
    * <pre>&lt;!-- paragraph with a context menu --&gt;
    *&lt;p [wjContextMenu]="menu" &gt;
    *  This paragraph has a context menu.&lt;/p&gt;
    *
    *&lt;!-- define the context menu (hidden and with an id) --&gt;
    *&lt;wj-menu #menu style="display:none"&gt;
    *  &lt;wj-menu-item [cmd]="cmdOpen" [cmdParam] ="1"&gt;Open...&lt;/wj-menu-item&gt;
    *  &lt;wj-menu-item [cmd]="cmdSave" [cmdParam]="2"&gt;Save &lt;/wj-menu-item&gt;
    *  &lt;wj-menu-item [cmd]="cmdSave" [cmdParam]="3"&gt;Save As...&lt;/wj-menu-item&gt;
    *  &lt;wj-menu-item [cmd]="cmdNew" [cmdParam] ="4"&gt;New...&lt;/wj-menu-item&gt;
    *  &lt;wj-menu-separator&gt;&lt;/wj-menu-separator&gt;
    *  &lt;wj-menu-item [cmd]="cmdExit" [cmdParam]="5"&gt;Exit&lt;/wj-menu-item&gt;
    *&lt;/wj-menu &gt;</pre>
    */
export declare class WjContextMenu {
    private elRef;
    wjContextMenu: wjcInput.Menu;
    constructor(elRef: ElementRef);
    onContextMenu(e: MouseEvent): void;
}
declare var wjCollectionViewNavigatorMeta: IWjComponentMeta;
export { wjCollectionViewNavigatorMeta };
/**
 * Angular 2 component for the {@link wijmo.input.CollectionViewNavigator} control.
 *
 * Use the <b>wj-collection-view-navigator</b> component to add <b>CollectionViewNavigator</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>.
 *
* The <b>WjCollectionViewNavigator</b> component is derived from the <b>CollectionViewNavigator</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjCollectionViewNavigator extends wjcInput.CollectionViewNavigator implements OnInit, OnDestroy, AfterViewInit {
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
declare var wjCollectionViewPagerMeta: IWjComponentMeta;
export { wjCollectionViewPagerMeta };
/**
    * Obsolete. Use wj-collection-view-navigator with [byPage]="true" instead.
    *
    * Angular 2 component for an {@link ICollectionView} pager element.
    *
    * Use the <b>wj-collection-view-pager</b> component to add an element
    * that allows users to navigate through the pages in a paged {@link ICollectionView}.
    * For details about Angular 2 markup syntax, see
    * <a href="/wijmo/docs/GettingStarted/Angular-Components">Angular 2 Markup</a>. For example:
    *
    * <pre>&lt;wj-collection-view-pager
    *   [cv]="myCollectionView"&gt;
    * &lt;/wj-collection-view-pager&gt;</pre>
    */
export declare class WjCollectionViewPager extends wjcInput.CollectionViewNavigator implements OnInit, OnDestroy, AfterViewInit {
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
export declare class WjInputModule {
}
