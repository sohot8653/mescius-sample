﻿/*!
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

import * as ɵngcc0 from '@angular/core';
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};import{NgModule,ElementRef,Injector,Directive,ViewContainerRef,TemplateRef,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2.directivebase";import*as wjcGridDetail from"@grapecity/wijmo.grid.detail";var wjFlexGridDetailMeta={selector:"[wjFlexGridDetail]",inputs:["wjFlexGridDetail","maxHeight","keyActionEnter","detailVisibilityMode","rowHasDetail","isAnimated"],outputs:["initialized"],exportAs:"wjFlexGridDetail",providers:[]};export{wjFlexGridDetailMeta};var WjFlexGridDetail=function(e){__extends(WjFlexGridDetail,e);function WjFlexGridDetail(t,i,r,o,a){var n=e.call(this,r)||this;n.isInitialized=!1;n._wjBehaviour=WjDirectiveBehavior.attach(n,t,i,r);n._viewContainerRef=o;n._templateRef=a;n._init();n.created();return n}t=WjFlexGridDetail;WjFlexGridDetail.prototype.created=function(){};WjFlexGridDetail.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexGridDetail.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexGridDetail.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjFlexGridDetail.prototype._init=function(){var e=this;this.createDetailCell=function(i,r){var o=WjDirectiveBehavior.instantiateTemplate(e.grid.hostElement,e._viewContainerRef,e._templateRef,!1,{row:i,col:r,item:i.dataItem}),a=o.viewRef,n=o.rootElement;a.detectChanges();n.parentElement.removeChild(n);n[t._viewRefProp]=a;return n};this.disposeDetailCell=function(i){var r;if(i.detail&&(r=i.detail[t._viewRefProp])){i.detail[t._viewRefProp]=null;var o=e._viewContainerRef.indexOf(r);o>-1&&e._viewContainerRef.remove(o)}}};var t;WjFlexGridDetail._viewRefProp="__wj_viewRef";WjFlexGridDetail.meta={outputs:wjFlexGridDetailMeta.outputs};
WjFlexGridDetail.ɵfac = function WjFlexGridDetail_Factory(t) { return new (t || WjFlexGridDetail)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12), ɵngcc0.ɵɵdirectiveInject(ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(TemplateRef)); };
WjFlexGridDetail.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: WjFlexGridDetail, selectors: [["", "wjFlexGridDetail", ""]], inputs: { wjFlexGridDetail: "wjFlexGridDetail", maxHeight: "maxHeight", keyActionEnter: "keyActionEnter", detailVisibilityMode: "detailVisibilityMode", rowHasDetail: "rowHasDetail", isAnimated: "isAnimated" }, outputs: { initialized: "initialized" }, exportAs: ["wjFlexGridDetail"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexGridDetailMeta.providers))] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjFlexGridDetail, [{
        type: Directive,
        args: [{ selector: wjFlexGridDetailMeta.selector, inputs: wjFlexGridDetailMeta.inputs, outputs: wjFlexGridDetailMeta.outputs, exportAs: wjFlexGridDetailMeta.exportAs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjFlexGridDetailMeta.providers) }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ["WjComponent"]
            }, {
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ViewContainerRef]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [TemplateRef]
            }] }]; }, null); })();return WjFlexGridDetail=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional()),__param(3,Inject(ViewContainerRef)),__param(4,Inject(TemplateRef))],WjFlexGridDetail)}(wjcGridDetail.FlexGridDetailProvider);export{WjFlexGridDetail};var moduleExports=[WjFlexGridDetail],WjGridDetailModule=function(){function WjGridDetailModule(){}
WjGridDetailModule.ɵfac = function WjGridDetailModule_Factory(t) { return new (t || WjGridDetailModule)(); };
WjGridDetailModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjGridDetailModule });
WjGridDetailModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjGridDetailModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjGridDetailModule, { declarations: function () { return [WjFlexGridDetail]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjFlexGridDetail]; } }); })();return WjGridDetailModule}();export{WjGridDetailModule};