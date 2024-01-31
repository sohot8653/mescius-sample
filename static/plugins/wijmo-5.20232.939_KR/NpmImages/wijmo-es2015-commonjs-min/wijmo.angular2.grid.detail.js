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

"use strict";var WjFlexGridDetail_1,__decorate=this&&this.__decorate||function(e,t,i,r){var a,l=arguments.length,o=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(l<3?a(o):l>3?a(t,i,o):a(t,i))||o);return l>3&&o&&Object.defineProperty(t,i,o),o},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase"),wjcGridDetail=__importStar(require("wijmo/wijmo.grid.detail"));var wjFlexGridDetailMeta={selector:"[wjFlexGridDetail]",inputs:["wjFlexGridDetail","maxHeight","keyActionEnter","detailVisibilityMode","rowHasDetail","isAnimated"],outputs:["initialized"],exportAs:"wjFlexGridDetail",providers:[]};exports.wjFlexGridDetailMeta=wjFlexGridDetailMeta;let WjFlexGridDetail=WjFlexGridDetail_1=class WjFlexGridDetail extends wjcGridDetail.FlexGridDetailProvider{constructor(e,t,i,r,a){super(i);this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,i);this._viewContainerRef=r;this._templateRef=a;this._init();this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}_init(){this.createDetailCell=(e,t)=>{let i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(this.grid.hostElement,this._viewContainerRef,this._templateRef,!1,{row:e,col:t,item:e.dataItem}),r=i.viewRef,a=i.rootElement;r.detectChanges();a.parentElement.removeChild(a);a[WjFlexGridDetail_1._viewRefProp]=r;return a};this.disposeDetailCell=e=>{let t;if(e.detail&&(t=e.detail[WjFlexGridDetail_1._viewRefProp])){e.detail[WjFlexGridDetail_1._viewRefProp]=null;let i=this._viewContainerRef.indexOf(t);i>-1&&this._viewContainerRef.remove(i)}}}};WjFlexGridDetail._viewRefProp="__wj_viewRef";WjFlexGridDetail.meta={outputs:wjFlexGridDetailMeta.outputs};WjFlexGridDetail=WjFlexGridDetail_1=__decorate([core_1.Directive({selector:wjFlexGridDetailMeta.selector,inputs:wjFlexGridDetailMeta.inputs,outputs:wjFlexGridDetailMeta.outputs,exportAs:wjFlexGridDetailMeta.exportAs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(()=>WjFlexGridDetail_1)},...wjFlexGridDetailMeta.providers]}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional()),__param(3,core_1.Inject(core_1.ViewContainerRef)),__param(4,core_1.Inject(core_1.TemplateRef))],WjFlexGridDetail);exports.WjFlexGridDetail=WjFlexGridDetail;let moduleExports=[WjFlexGridDetail],WjGridDetailModule=class WjGridDetailModule{};WjGridDetailModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGridDetailModule);exports.WjGridDetailModule=WjGridDetailModule;