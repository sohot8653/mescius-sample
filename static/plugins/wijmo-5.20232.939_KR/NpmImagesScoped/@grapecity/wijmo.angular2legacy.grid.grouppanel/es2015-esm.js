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

var WjGroupPanel_1,__decorate=this&&this.__decorate||function(e,r,o,t){var a,n=arguments.length,i=n<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,t);else for(var p=e.length-1;p>=0;p--)(a=e[p])&&(i=(n<3?a(i):n>3?a(r,o,i):a(r,o))||i);return n>3&&i&&Object.defineProperty(r,o,i),i},__param=this&&this.__param||function(e,r){return function(o,t){r(o,t,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2legacy.directivebase";import*as wjcGridGrouppanel from"@grapecity/wijmo.grid.grouppanel";var wjGroupPanelMeta={selector:"wj-group-panel",template:"",inputs:["wjModelProperty","isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjGroupPanelMeta};let WjGroupPanel=WjGroupPanel_1=class WjGroupPanel extends wjcGridGrouppanel.GroupPanel{constructor(e,r,o){super(WjDirectiveBehavior.getHostElement(e,r));this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,r,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,r,o,t=!1){let a=WjDirectiveBehavior,n=a.getZone(this);n&&a.outsideZoneEvents[r]?n.runOutsideAngular(()=>{super.addEventListener(e,r,o,t)}):super.addEventListener(e,r,o,t)}};WjGroupPanel.meta={outputs:wjGroupPanelMeta.outputs};WjGroupPanel=WjGroupPanel_1=__decorate([Component({selector:wjGroupPanelMeta.selector,template:wjGroupPanelMeta.template,inputs:wjGroupPanelMeta.inputs,outputs:wjGroupPanelMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjGroupPanel_1)},...wjGroupPanelMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjGroupPanel);export{WjGroupPanel};let moduleExports=[WjGroupPanel],WjGridGrouppanelModule=class WjGridGrouppanelModule{};WjGridGrouppanelModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjGridGrouppanelModule);export{WjGridGrouppanelModule};