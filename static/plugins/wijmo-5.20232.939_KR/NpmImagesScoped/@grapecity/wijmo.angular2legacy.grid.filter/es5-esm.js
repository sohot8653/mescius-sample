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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,r,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,r,l):o(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l},__param=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2legacy.directivebase";import*as wjcGridFilter from"@grapecity/wijmo.grid.filter";var wjFlexGridFilterMeta={selector:"wj-flex-grid-filter",template:"",inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns","exclusiveValueSearch"],outputs:["initialized","editingFilterNg: editingFilter","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]};export{wjFlexGridFilterMeta};var WjFlexGridFilter=function(e){__extends(WjFlexGridFilter,e);function WjFlexGridFilter(t,r,i){var o=e.call(this,i)||this;o.isInitialized=!1;o._wjBehaviour=WjDirectiveBehavior.attach(o,t,r,i);o.created();return o}t=WjFlexGridFilter;WjFlexGridFilter.prototype.created=function(){};WjFlexGridFilter.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjFlexGridFilter.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjFlexGridFilter.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};var t;WjFlexGridFilter.meta={outputs:wjFlexGridFilterMeta.outputs};return WjFlexGridFilter=t=__decorate([Component({selector:wjFlexGridFilterMeta.selector,template:wjFlexGridFilterMeta.template,inputs:wjFlexGridFilterMeta.inputs,outputs:wjFlexGridFilterMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef((function(){return t}))}].concat(wjFlexGridFilterMeta.providers)}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexGridFilter)}(wjcGridFilter.FlexGridFilter);export{WjFlexGridFilter};var moduleExports=[WjFlexGridFilter],WjGridFilterModule=function(){function WjGridFilterModule(){}return WjGridFilterModule=__decorate([NgModule({imports:[CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],WjGridFilterModule)}();export{WjGridFilterModule};