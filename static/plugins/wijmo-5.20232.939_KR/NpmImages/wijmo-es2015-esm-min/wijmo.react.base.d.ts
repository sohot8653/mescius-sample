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
* {@module wijmo.react.base}
 * Contains base classes for all Wijmo for React directives.
 */
/**
 *
 */
export declare var ___keepComment: any;
import { Event, EventArgs } from 'wijmo/wijmo';
import * as React from 'react';
/**
 * Base class for all Wijmo components for React.
 */
export declare class ComponentBase extends React.Component<any, any> {
    static readonly _propsParent = "$parent";
    static readonly _typeSiblingIdProp = "_wjSiblingIdProp";
    static _siblingDirId: number;
    static _reactMajorVersion: number;
    private _objPropHash;
    protected _isMounted: boolean;
    private _mountedCBs;
    private _siblingInsertedMO;
    controlType: any;
    props: any;
    control: any;
    parent: ComponentBase;
    protected _parentProp: string;
    protected _parentInCtor: boolean;
    protected _siblingId: string;
    protected _hostRef: (ref: any) => any;
    protected _hostRefValue: HTMLElement;
    timer: any;
    renderResult: any;
    private _appliedClassName;
    constructor(props: any, controlType: any, meta?: any);
    render(): any;
    componentDidMount(): any;
    static elemRootMap: any[];
    static selectiveDomRender(component: any, host: HTMLElement, pushStackMap?: boolean): HTMLElement;
    static selectiveDomUnmount(host?: HTMLElement): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: any): boolean;
    componentDidUpdate(prevProps: any): void;
    _mountedCB(cb: () => void): void;
    protected _renderImpl(): any;
    readonly _beforeRender: Event<any, EventArgs>;
    protected _onBeforeRender(e?: EventArgs): void;
    readonly _afterRender: Event<any, EventArgs>;
    protected _onAfterRender(e?: EventArgs): void;
    readonly _beforeWillUnmount: Event<any, EventArgs>;
    protected _onBeforeWillUnmount(e?: EventArgs): void;
    readonly _afterWillUnmount: Event<any, EventArgs>;
    protected _onAfterWillUnmount(e?: EventArgs): void;
    readonly _beforeDidUpdate: Event<any, EventArgs>;
    protected _onBeforeDidUpdate(e?: EventArgs): void;
    readonly _afterDidUpdate: Event<any, EventArgs>;
    protected _onAfterDidUpdate(e?: EventArgs): void;
    protected _createControl(): any;
    private _prepareControl;
    protected _initParent(): void;
    private _setParent;
    private _isChild;
    private _isParentInCtor;
    private _getParentProp;
    private _getSiblingIndex;
    private _siblingInserted;
    private _copy;
    private _setHostAttribute;
    private _sameValue;
    private _isEvent;
    protected _getElement(): HTMLElement;
    private _ignoreProp;
    private static _copyAttrs;
    static isInStrictMode(component: any): boolean;
}
