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

var WjFlexChartAnimation_1,__decorate=this&&this.__decorate||function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var m=t.length-1;m>=0;m--)(n=t[m])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r},__param=this&&this.__param||function(t,e){return function(a,i){e(a,i,t)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior}from"@grapecity/wijmo.angular2legacy.directivebase";import*as wjcChartAnimation from"@grapecity/wijmo.chart.animation";var wjFlexChartAnimationMeta={selector:"wj-flex-chart-animation",template:"",inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]};export{wjFlexChartAnimationMeta};let WjFlexChartAnimation=WjFlexChartAnimation_1=class WjFlexChartAnimation extends wjcChartAnimation.ChartAnimation{constructor(t,e,a){super(a);this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,a);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartAnimation.meta={outputs:wjFlexChartAnimationMeta.outputs};WjFlexChartAnimation=WjFlexChartAnimation_1=__decorate([Component({selector:wjFlexChartAnimationMeta.selector,template:wjFlexChartAnimationMeta.template,inputs:wjFlexChartAnimationMeta.inputs,outputs:wjFlexChartAnimationMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartAnimation_1)},...wjFlexChartAnimationMeta.providers]}),__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjFlexChartAnimation);export{WjFlexChartAnimation};let moduleExports=[WjFlexChartAnimation],WjChartAnimationModule=class WjChartAnimationModule{};WjChartAnimationModule=__decorate([NgModule({imports:[CommonModule],declarations:[...moduleExports],exports:[...moduleExports]})],WjChartAnimationModule);export{WjChartAnimationModule};