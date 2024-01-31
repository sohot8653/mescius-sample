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
var WjBarcodeCodabar_1,WjBarcodeEan8_1,WjBarcodeEan13_1,WjBarcodeCode39_1,WjBarcodeCode128_1,WjBarcodeGs1_128_1,WjBarcodeUpcA_1,WjBarcodeUpcE0_1,WjBarcodeUpcE1_1,WjBarcodeQrCode_1,__decorate=this&&this.__decorate||function(e,t,o,r){var a,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(n=(i<3?a(n):i>3?a(t,o,n):a(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n},__param=this&&this.__param||function(e,t){return function(o,r){t(o,r,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcBarcodeCommon from"@grapecity/wijmo.barcode.common";var wjBarcodeCodabarMeta={selector:"wj-barcode-codabar",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","labelPosition","nwRatio"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCodabarMeta};let WjBarcodeCodabar=WjBarcodeCodabar_1=class WjBarcodeCodabar extends wjcBarcodeCommon.Codabar{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeCodabar.ɵfac = function WjBarcodeCodabar_Factory(t) { return new (t || WjBarcodeCodabar)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCodabar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCodabar, selectors: [["wj-barcode-codabar"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", checkDigit: "checkDigit", labelPosition: "labelPosition", nwRatio: "nwRatio" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCodabar_1) }, ...wjBarcodeCodabarMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeCodabar_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeCodabar.meta={outputs:wjBarcodeCodabarMeta.outputs};WjBarcodeCodabar=WjBarcodeCodabar_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCodabar);export{WjBarcodeCodabar};var wjBarcodeEan8Meta={selector:"wj-barcode-ean8",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeEan8Meta};let WjBarcodeEan8=WjBarcodeEan8_1=class WjBarcodeEan8 extends wjcBarcodeCommon.Ean8{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeEan8.ɵfac = function WjBarcodeEan8_Factory(t) { return new (t || WjBarcodeEan8)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeEan8.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeEan8, selectors: [["wj-barcode-ean8"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeEan8_1) }, ...wjBarcodeEan8Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeEan8_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeEan8.meta={outputs:wjBarcodeEan8Meta.outputs};WjBarcodeEan8=WjBarcodeEan8_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeEan8);export{WjBarcodeEan8};var wjBarcodeEan13Meta={selector:"wj-barcode-ean13",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","labelPosition","addOn","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeEan13Meta};let WjBarcodeEan13=WjBarcodeEan13_1=class WjBarcodeEan13 extends wjcBarcodeCommon.Ean13{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeEan13.ɵfac = function WjBarcodeEan13_Factory(t) { return new (t || WjBarcodeEan13)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeEan13.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeEan13, selectors: [["wj-barcode-ean13"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", labelPosition: "labelPosition", addOn: "addOn", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeEan13_1) }, ...wjBarcodeEan13Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeEan13_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeEan13.meta={outputs:wjBarcodeEan13Meta.outputs};WjBarcodeEan13=WjBarcodeEan13_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeEan13);export{WjBarcodeEan13};var wjBarcodeCode39Meta={selector:"wj-barcode-code39",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","checkDigit","fullAscii","labelPosition","nwRatio","labelWithStartAndStopCharacter"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCode39Meta};let WjBarcodeCode39=WjBarcodeCode39_1=class WjBarcodeCode39 extends wjcBarcodeCommon.Code39{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeCode39.ɵfac = function WjBarcodeCode39_Factory(t) { return new (t || WjBarcodeCode39)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCode39.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCode39, selectors: [["wj-barcode-code39"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", checkDigit: "checkDigit", fullAscii: "fullAscii", labelPosition: "labelPosition", nwRatio: "nwRatio", labelWithStartAndStopCharacter: "labelWithStartAndStopCharacter" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode39_1) }, ...wjBarcodeCode39Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeCode39_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeCode39.meta={outputs:wjBarcodeCode39Meta.outputs};WjBarcodeCode39=WjBarcodeCode39_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCode39);export{WjBarcodeCode39};var wjBarcodeCode128Meta={selector:"wj-barcode-code128",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","codeSet","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeCode128Meta};let WjBarcodeCode128=WjBarcodeCode128_1=class WjBarcodeCode128 extends wjcBarcodeCommon.Code128{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeCode128.ɵfac = function WjBarcodeCode128_Factory(t) { return new (t || WjBarcodeCode128)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeCode128.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeCode128, selectors: [["wj-barcode-code128"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", codeSet: "codeSet", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode128_1) }, ...wjBarcodeCode128Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeCode128_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeCode128.meta={outputs:wjBarcodeCode128Meta.outputs};WjBarcodeCode128=WjBarcodeCode128_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeCode128);export{WjBarcodeCode128};var wjBarcodeGs1_128Meta={selector:"wj-barcode-gs1_128",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","autoWidth","autoWidthZoom","showLabel","labelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeGs1_128Meta};let WjBarcodeGs1_128=WjBarcodeGs1_128_1=class WjBarcodeGs1_128 extends wjcBarcodeCommon.Gs1_128{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeGs1_128.ɵfac = function WjBarcodeGs1_128_Factory(t) { return new (t || WjBarcodeGs1_128)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeGs1_128.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeGs1_128, selectors: [["wj-barcode-gs1_128"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", autoWidth: "autoWidth", autoWidthZoom: "autoWidthZoom", showLabel: "showLabel", labelPosition: "labelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeGs1_128_1) }, ...wjBarcodeGs1_128Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeGs1_128_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeGs1_128.meta={outputs:wjBarcodeGs1_128Meta.outputs};WjBarcodeGs1_128=WjBarcodeGs1_128_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeGs1_128);export{WjBarcodeGs1_128};var wjBarcodeUpcAMeta={selector:"wj-barcode-upc-a",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeUpcAMeta};let WjBarcodeUpcA=WjBarcodeUpcA_1=class WjBarcodeUpcA extends wjcBarcodeCommon.UpcA{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeUpcA.ɵfac = function WjBarcodeUpcA_Factory(t) { return new (t || WjBarcodeUpcA)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeUpcA.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeUpcA, selectors: [["wj-barcode-upc-a"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", addOn: "addOn", labelPosition: "labelPosition", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeUpcA_1) }, ...wjBarcodeUpcAMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeUpcA_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeUpcA.meta={outputs:wjBarcodeUpcAMeta.outputs};WjBarcodeUpcA=WjBarcodeUpcA_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeUpcA);export{WjBarcodeUpcA};var wjBarcodeUpcE0Meta={selector:"wj-barcode-upc-e0",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeUpcE0Meta};let WjBarcodeUpcE0=WjBarcodeUpcE0_1=class WjBarcodeUpcE0 extends wjcBarcodeCommon.UpcE0{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeUpcE0.ɵfac = function WjBarcodeUpcE0_Factory(t) { return new (t || WjBarcodeUpcE0)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeUpcE0.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeUpcE0, selectors: [["wj-barcode-upc-e0"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", addOn: "addOn", labelPosition: "labelPosition", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeUpcE0_1) }, ...wjBarcodeUpcE0Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeUpcE0_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeUpcE0.meta={outputs:wjBarcodeUpcE0Meta.outputs};WjBarcodeUpcE0=WjBarcodeUpcE0_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeUpcE0);export{WjBarcodeUpcE0};var wjBarcodeUpcE1Meta={selector:"wj-barcode-upc-e1",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","showLabel","addOn","labelPosition","addOnHeight","addOnLabelPosition"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeUpcE1Meta};let WjBarcodeUpcE1=WjBarcodeUpcE1_1=class WjBarcodeUpcE1 extends wjcBarcodeCommon.UpcE1{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeUpcE1.ɵfac = function WjBarcodeUpcE1_Factory(t) { return new (t || WjBarcodeUpcE1)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeUpcE1.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeUpcE1, selectors: [["wj-barcode-upc-e1"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", showLabel: "showLabel", addOn: "addOn", labelPosition: "labelPosition", addOnHeight: "addOnHeight", addOnLabelPosition: "addOnLabelPosition" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeUpcE1_1) }, ...wjBarcodeUpcE1Meta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeUpcE1_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeUpcE1.meta={outputs:wjBarcodeUpcE1Meta.outputs};WjBarcodeUpcE1=WjBarcodeUpcE1_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeUpcE1);export{WjBarcodeUpcE1};var wjBarcodeQrCodeMeta={selector:"wj-barcode-qr-code",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","value","quietZone","renderType","color","backgroundColor","hideExtraChecksum","font","charCode","charset","model","version","errorCorrectionLevel","mask","connection","connectionIndex"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","isValidChangedNg: isValidChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjBarcodeQrCodeMeta};let WjBarcodeQrCode=WjBarcodeQrCode_1=class WjBarcodeQrCode extends wjcBarcodeCommon.QrCode{constructor(e,t,o){super(WjDirectiveBehavior.getHostElement(e,t));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,o,r=!1){let a=WjDirectiveBehavior,i=a.getZone(this);i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,o,r)}):super.addEventListener(e,t,o,r)}};
WjBarcodeQrCode.ɵfac = function WjBarcodeQrCode_Factory(t) { return new (t || WjBarcodeQrCode)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjBarcodeQrCode.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjBarcodeQrCode, selectors: [["wj-barcode-qr-code"]], inputs: { wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", value: "value", quietZone: "quietZone", renderType: "renderType", color: "color", backgroundColor: "backgroundColor", hideExtraChecksum: "hideExtraChecksum", font: "font", charCode: "charCode", charset: "charset", model: "model", version: "version", errorCorrectionLevel: "errorCorrectionLevel", mask: "mask", connection: "connection", connectionIndex: "connectionIndex" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", isValidChangedNg: "isValidChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeQrCode_1) }, ...wjBarcodeQrCodeMeta.providers]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function WjBarcodeQrCode_Template(rf, ctx) { }, encapsulation: 2 });WjBarcodeQrCode.meta={outputs:wjBarcodeQrCodeMeta.outputs};WjBarcodeQrCode=WjBarcodeQrCode_1=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjBarcodeQrCode);export{WjBarcodeQrCode};let moduleExports=[WjBarcodeCodabar,WjBarcodeEan8,WjBarcodeEan13,WjBarcodeCode39,WjBarcodeCode128,WjBarcodeGs1_128,WjBarcodeUpcA,WjBarcodeUpcE0,WjBarcodeUpcE1,WjBarcodeQrCode],WjBarcodeCommonModule=class WjBarcodeCommonModule{};
WjBarcodeCommonModule.ɵfac = function WjBarcodeCommonModule_Factory(t) { return new (t || WjBarcodeCommonModule)(); };
WjBarcodeCommonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjBarcodeCommonModule });
WjBarcodeCommonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCodabar, [{
        type: Component,
        args: [{ selector: wjBarcodeCodabarMeta.selector, template: wjBarcodeCodabarMeta.template, inputs: wjBarcodeCodabarMeta.inputs, outputs: wjBarcodeCodabarMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCodabar_1) }, ...wjBarcodeCodabarMeta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeEan8, [{
        type: Component,
        args: [{ selector: wjBarcodeEan8Meta.selector, template: wjBarcodeEan8Meta.template, inputs: wjBarcodeEan8Meta.inputs, outputs: wjBarcodeEan8Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeEan8_1) }, ...wjBarcodeEan8Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeEan13, [{
        type: Component,
        args: [{ selector: wjBarcodeEan13Meta.selector, template: wjBarcodeEan13Meta.template, inputs: wjBarcodeEan13Meta.inputs, outputs: wjBarcodeEan13Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeEan13_1) }, ...wjBarcodeEan13Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCode39, [{
        type: Component,
        args: [{ selector: wjBarcodeCode39Meta.selector, template: wjBarcodeCode39Meta.template, inputs: wjBarcodeCode39Meta.inputs, outputs: wjBarcodeCode39Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode39_1) }, ...wjBarcodeCode39Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCode128, [{
        type: Component,
        args: [{ selector: wjBarcodeCode128Meta.selector, template: wjBarcodeCode128Meta.template, inputs: wjBarcodeCode128Meta.inputs, outputs: wjBarcodeCode128Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeCode128_1) }, ...wjBarcodeCode128Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeGs1_128, [{
        type: Component,
        args: [{ selector: wjBarcodeGs1_128Meta.selector, template: wjBarcodeGs1_128Meta.template, inputs: wjBarcodeGs1_128Meta.inputs, outputs: wjBarcodeGs1_128Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeGs1_128_1) }, ...wjBarcodeGs1_128Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeUpcA, [{
        type: Component,
        args: [{ selector: wjBarcodeUpcAMeta.selector, template: wjBarcodeUpcAMeta.template, inputs: wjBarcodeUpcAMeta.inputs, outputs: wjBarcodeUpcAMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeUpcA_1) }, ...wjBarcodeUpcAMeta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeUpcE0, [{
        type: Component,
        args: [{ selector: wjBarcodeUpcE0Meta.selector, template: wjBarcodeUpcE0Meta.template, inputs: wjBarcodeUpcE0Meta.inputs, outputs: wjBarcodeUpcE0Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeUpcE0_1) }, ...wjBarcodeUpcE0Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeUpcE1, [{
        type: Component,
        args: [{ selector: wjBarcodeUpcE1Meta.selector, template: wjBarcodeUpcE1Meta.template, inputs: wjBarcodeUpcE1Meta.inputs, outputs: wjBarcodeUpcE1Meta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeUpcE1_1) }, ...wjBarcodeUpcE1Meta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeQrCode, [{
        type: Component,
        args: [{ selector: wjBarcodeQrCodeMeta.selector, template: wjBarcodeQrCodeMeta.template, inputs: wjBarcodeQrCodeMeta.inputs, outputs: wjBarcodeQrCodeMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef(() => WjBarcodeQrCode_1) }, ...wjBarcodeQrCodeMeta.providers] }]
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
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjBarcodeCommonModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: [...moduleExports], exports: [...moduleExports] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjBarcodeCommonModule, { declarations: function () { return [WjBarcodeCodabar, WjBarcodeEan8, WjBarcodeEan13, WjBarcodeCode39, WjBarcodeCode128, WjBarcodeGs1_128, WjBarcodeUpcA, WjBarcodeUpcE0, WjBarcodeUpcE1, WjBarcodeQrCode]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjBarcodeCodabar, WjBarcodeEan8, WjBarcodeEan13, WjBarcodeCode39, WjBarcodeCode128, WjBarcodeGs1_128, WjBarcodeUpcA, WjBarcodeUpcE0, WjBarcodeUpcE1, WjBarcodeQrCode]; } }); })();export{WjBarcodeCommonModule};