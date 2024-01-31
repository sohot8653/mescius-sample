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

import * as ɵngcc0 from '@angular/core';
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,o,r){var a,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i},__param=this&&this.__param||function(e,t){return function(o,r){t(o,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcBarcodeCommon from"@grapecity/wijmo.barcode.common";var wjBarcodeCodabarMeta={selector:"wj-barcode-codabar",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","labelPosition","nwRatio"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCodabarMeta};var WjBarcodeCodabar=function(e){__extends(WjBarcodeCodabar,e);function WjBarcodeCodabar(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeCodabar;WjBarcodeCodabar.prototype.created=function(){};WjBarcodeCodabar.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeCodabar.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeCodabar.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeCodabar.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeCodabar.meta={outputs:wjBarcodeCodabarMeta.outputs};
WjBarcodeCodabar.ɵfac = function WjBarcodeCodabar_Factory(t) { return new (t || WjBarcodeCodabar)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCodabar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCodabar, selectors: [["wj-barcode-codabar"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", checkDigit: "checkDigit", labelPosition: "labelPosition", nwRatio: "nwRatio" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeCodabarMeta.providers))], decls: 0, vars: 0, template: function WjBarcodeCodabar_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCodabar, [{
        type: Component,
        args: [{ selector: wjBarcodeCodabarMeta.selector, template: wjBarcodeCodabarMeta.template, inputs: wjBarcodeCodabarMeta.inputs, outputs: wjBarcodeCodabarMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeCodabarMeta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeCodabar=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCodabar)}(wjcBarcodeCommon.Codabar);export{WjBarcodeCodabar};var wjBarcodeEan8Meta={selector:"wj-barcode-ean8",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeEan8Meta};var WjBarcodeEan8=function(e){__extends(WjBarcodeEan8,e);function WjBarcodeEan8(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeEan8;WjBarcodeEan8.prototype.created=function(){};WjBarcodeEan8.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeEan8.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeEan8.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeEan8.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeEan8.meta={outputs:wjBarcodeEan8Meta.outputs};
WjBarcodeEan8.ɵfac = function WjBarcodeEan8_Factory(t) { return new (t || WjBarcodeEan8)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeEan8.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeEan8, selectors: [["wj-barcode-ean8"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeEan8Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeEan8_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeEan8, [{
        type: Component,
        args: [{ selector: wjBarcodeEan8Meta.selector, template: wjBarcodeEan8Meta.template, inputs: wjBarcodeEan8Meta.inputs, outputs: wjBarcodeEan8Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeEan8Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeEan8=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeEan8)}(wjcBarcodeCommon.Ean8);export{WjBarcodeEan8};var wjBarcodeEan13Meta={selector:"wj-barcode-ean13",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition","addOn","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeEan13Meta};var WjBarcodeEan13=function(e){__extends(WjBarcodeEan13,e);function WjBarcodeEan13(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeEan13;WjBarcodeEan13.prototype.created=function(){};WjBarcodeEan13.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeEan13.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeEan13.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeEan13.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeEan13.meta={outputs:wjBarcodeEan13Meta.outputs};
WjBarcodeEan13.ɵfac = function WjBarcodeEan13_Factory(t) { return new (t || WjBarcodeEan13)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeEan13.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeEan13, selectors: [["wj-barcode-ean13"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", labelPosition: "labelPosition", addOn: "addOn", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeEan13Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeEan13_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeEan13, [{
        type: Component,
        args: [{ selector: wjBarcodeEan13Meta.selector, template: wjBarcodeEan13Meta.template, inputs: wjBarcodeEan13Meta.inputs, outputs: wjBarcodeEan13Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeEan13Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeEan13=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeEan13)}(wjcBarcodeCommon.Ean13);export{WjBarcodeEan13};var wjBarcodeCode39Meta={selector:"wj-barcode-code39",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","fullAscii","labelPosition","nwRatio","labelWithStartAndStopCharacter"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCode39Meta};var WjBarcodeCode39=function(e){__extends(WjBarcodeCode39,e);function WjBarcodeCode39(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeCode39;WjBarcodeCode39.prototype.created=function(){};WjBarcodeCode39.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeCode39.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeCode39.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeCode39.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeCode39.meta={outputs:wjBarcodeCode39Meta.outputs};
WjBarcodeCode39.ɵfac = function WjBarcodeCode39_Factory(t) { return new (t || WjBarcodeCode39)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCode39.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCode39, selectors: [["wj-barcode-code39"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", checkDigit: "checkDigit", fullAscii: "fullAscii", labelPosition: "labelPosition", nwRatio: "nwRatio", labelWithStartAndStopCharacter: "labelWithStartAndStopCharacter" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeCode39Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeCode39_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCode39, [{
        type: Component,
        args: [{ selector: wjBarcodeCode39Meta.selector, template: wjBarcodeCode39Meta.template, inputs: wjBarcodeCode39Meta.inputs, outputs: wjBarcodeCode39Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeCode39Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeCode39=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCode39)}(wjcBarcodeCommon.Code39);export{WjBarcodeCode39};var wjBarcodeCode128Meta={selector:"wj-barcode-code128",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","codeSet","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCode128Meta};var WjBarcodeCode128=function(e){__extends(WjBarcodeCode128,e);function WjBarcodeCode128(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeCode128;WjBarcodeCode128.prototype.created=function(){};WjBarcodeCode128.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeCode128.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeCode128.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeCode128.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeCode128.meta={outputs:wjBarcodeCode128Meta.outputs};
WjBarcodeCode128.ɵfac = function WjBarcodeCode128_Factory(t) { return new (t || WjBarcodeCode128)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCode128.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCode128, selectors: [["wj-barcode-code128"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", codeSet: "codeSet", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeCode128Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeCode128_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCode128, [{
        type: Component,
        args: [{ selector: wjBarcodeCode128Meta.selector, template: wjBarcodeCode128Meta.template, inputs: wjBarcodeCode128Meta.inputs, outputs: wjBarcodeCode128Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeCode128Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeCode128=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCode128)}(wjcBarcodeCommon.Code128);export{WjBarcodeCode128};var wjBarcodeGs1_128Meta={selector:"wj-barcode-gs1_128",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeGs1_128Meta};var WjBarcodeGs1_128=function(e){__extends(WjBarcodeGs1_128,e);function WjBarcodeGs1_128(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeGs1_128;WjBarcodeGs1_128.prototype.created=function(){};WjBarcodeGs1_128.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeGs1_128.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeGs1_128.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeGs1_128.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeGs1_128.meta={outputs:wjBarcodeGs1_128Meta.outputs};
WjBarcodeGs1_128.ɵfac = function WjBarcodeGs1_128_Factory(t) { return new (t || WjBarcodeGs1_128)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeGs1_128.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeGs1_128, selectors: [["wj-barcode-gs1_128"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeGs1_128Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeGs1_128_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeGs1_128, [{
        type: Component,
        args: [{ selector: wjBarcodeGs1_128Meta.selector, template: wjBarcodeGs1_128Meta.template, inputs: wjBarcodeGs1_128Meta.inputs, outputs: wjBarcodeGs1_128Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeGs1_128Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeGs1_128=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeGs1_128)}(wjcBarcodeCommon.Gs1_128);export{WjBarcodeGs1_128};var wjBarcodeUpcAMeta={selector:"wj-barcode-upc-a",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeUpcAMeta};var WjBarcodeUpcA=function(e){__extends(WjBarcodeUpcA,e);function WjBarcodeUpcA(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeUpcA;WjBarcodeUpcA.prototype.created=function(){};WjBarcodeUpcA.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeUpcA.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeUpcA.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeUpcA.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeUpcA.meta={outputs:wjBarcodeUpcAMeta.outputs};
WjBarcodeUpcA.ɵfac = function WjBarcodeUpcA_Factory(t) { return new (t || WjBarcodeUpcA)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeUpcA.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeUpcA, selectors: [["wj-barcode-upc-a"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", addOn: "addOn", labelPosition: "labelPosition", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeUpcAMeta.providers))], decls: 0, vars: 0, template: function WjBarcodeUpcA_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeUpcA, [{
        type: Component,
        args: [{ selector: wjBarcodeUpcAMeta.selector, template: wjBarcodeUpcAMeta.template, inputs: wjBarcodeUpcAMeta.inputs, outputs: wjBarcodeUpcAMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeUpcAMeta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeUpcA=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeUpcA)}(wjcBarcodeCommon.UpcA);export{WjBarcodeUpcA};var wjBarcodeUpcE0Meta={selector:"wj-barcode-upc-e0",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeUpcE0Meta};var WjBarcodeUpcE0=function(e){__extends(WjBarcodeUpcE0,e);function WjBarcodeUpcE0(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeUpcE0;WjBarcodeUpcE0.prototype.created=function(){};WjBarcodeUpcE0.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeUpcE0.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeUpcE0.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeUpcE0.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeUpcE0.meta={outputs:wjBarcodeUpcE0Meta.outputs};
WjBarcodeUpcE0.ɵfac = function WjBarcodeUpcE0_Factory(t) { return new (t || WjBarcodeUpcE0)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeUpcE0.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeUpcE0, selectors: [["wj-barcode-upc-e0"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", addOn: "addOn", labelPosition: "labelPosition", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeUpcE0Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeUpcE0_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeUpcE0, [{
        type: Component,
        args: [{ selector: wjBarcodeUpcE0Meta.selector, template: wjBarcodeUpcE0Meta.template, inputs: wjBarcodeUpcE0Meta.inputs, outputs: wjBarcodeUpcE0Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeUpcE0Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeUpcE0=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeUpcE0)}(wjcBarcodeCommon.UpcE0);export{WjBarcodeUpcE0};var wjBarcodeUpcE1Meta={selector:"wj-barcode-upc-e1",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeUpcE1Meta};var WjBarcodeUpcE1=function(e){__extends(WjBarcodeUpcE1,e);function WjBarcodeUpcE1(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeUpcE1;WjBarcodeUpcE1.prototype.created=function(){};WjBarcodeUpcE1.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeUpcE1.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeUpcE1.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeUpcE1.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeUpcE1.meta={outputs:wjBarcodeUpcE1Meta.outputs};
WjBarcodeUpcE1.ɵfac = function WjBarcodeUpcE1_Factory(t) { return new (t || WjBarcodeUpcE1)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeUpcE1.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeUpcE1, selectors: [["wj-barcode-upc-e1"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", addOn: "addOn", labelPosition: "labelPosition", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeUpcE1Meta.providers))], decls: 0, vars: 0, template: function WjBarcodeUpcE1_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeUpcE1, [{
        type: Component,
        args: [{ selector: wjBarcodeUpcE1Meta.selector, template: wjBarcodeUpcE1Meta.template, inputs: wjBarcodeUpcE1Meta.inputs, outputs: wjBarcodeUpcE1Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeUpcE1Meta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeUpcE1=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeUpcE1)}(wjcBarcodeCommon.UpcE1);export{WjBarcodeUpcE1};var wjBarcodeQrCodeMeta={selector:"wj-barcode-qr-code",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","charCode","charset","model","version","errorCorrectionLevel","mask","connection","connectionIndex"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeQrCodeMeta};var WjBarcodeQrCode=function(e){__extends(WjBarcodeQrCode,e);function WjBarcodeQrCode(t,o,r){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,o))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,o,r);a.created();return a}t=WjBarcodeQrCode;WjBarcodeQrCode.prototype.created=function(){};WjBarcodeQrCode.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjBarcodeQrCode.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjBarcodeQrCode.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjBarcodeQrCode.prototype.addEventListener=function(t,o,r,a){var n=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[o]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(n,t,o,r,a)})):e.prototype.addEventListener.call(this,t,o,r,a)};var t;WjBarcodeQrCode.meta={outputs:wjBarcodeQrCodeMeta.outputs};
WjBarcodeQrCode.ɵfac = function WjBarcodeQrCode_Factory(t) { return new (t || WjBarcodeQrCode)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeQrCode.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeQrCode, selectors: [["wj-barcode-qr-code"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", charCode: "charCode", charset: "charset", model: "model", version: "version", errorCorrectionLevel: "errorCorrectionLevel", mask: "mask", connection: "connection", connectionIndex: "connectionIndex" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeQrCodeMeta.providers))], decls: 0, vars: 0, template: function WjBarcodeQrCode_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeQrCode, [{
        type: Component,
        args: [{ selector: wjBarcodeQrCodeMeta.selector, template: wjBarcodeQrCodeMeta.template, inputs: wjBarcodeQrCodeMeta.inputs, outputs: wjBarcodeQrCodeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjBarcodeQrCodeMeta.providers) }]
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
            }] }]; }, null); })();return WjBarcodeQrCode=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeQrCode)}(wjcBarcodeCommon.QrCode);export{WjBarcodeQrCode};var moduleExports=[WjBarcodeCodabar,WjBarcodeEan8,WjBarcodeEan13,WjBarcodeCode39,WjBarcodeCode128,WjBarcodeGs1_128,WjBarcodeUpcA,WjBarcodeUpcE0,WjBarcodeUpcE1,WjBarcodeQrCode],WjBarcodeCommonModule=function(){function WjBarcodeCommonModule(){}
WjBarcodeCommonModule.ɵfac = function WjBarcodeCommonModule_Factory(t) { return new (t || WjBarcodeCommonModule)(); };
WjBarcodeCommonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjBarcodeCommonModule });
WjBarcodeCommonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCommonModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjBarcodeCommonModule, { declarations: function () { return [WjBarcodeCodabar, WjBarcodeEan8, WjBarcodeEan13, WjBarcodeCode39, WjBarcodeCode128, WjBarcodeGs1_128, WjBarcodeUpcA, WjBarcodeUpcE0, WjBarcodeUpcE1, WjBarcodeQrCode]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjBarcodeCodabar, WjBarcodeEan8, WjBarcodeEan13, WjBarcodeCode39, WjBarcodeCode128, WjBarcodeGs1_128, WjBarcodeUpcA, WjBarcodeUpcE0, WjBarcodeUpcE1, WjBarcodeQrCode]; } }); })();return WjBarcodeCommonModule}();export{WjBarcodeCommonModule};