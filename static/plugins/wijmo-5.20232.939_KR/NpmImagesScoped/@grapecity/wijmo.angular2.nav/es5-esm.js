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

var _c0 = ["*"];
var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__decorate=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},__param=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};import{Component,NgModule,ElementRef,Injector,Optional,forwardRef,Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjValueAccessorFactory}from"@grapecity/wijmo.angular2.directivebase";import*as wjcCore from"@grapecity/wijmo";import*as wjcNav from"@grapecity/wijmo.nav";var wjTreeViewMeta={selector:"wj-tree-view",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","isContentHtml","showCheckboxes","autoCollapse","isAnimated","isReadOnly","allowDragging","checkOnClick","expandOnClick","collapseOnClick","expandOnLoad","lazyLoadFunction","itemsSource","selectedItem","selectedNode","checkedItems"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","itemsSourceChangedNg: itemsSourceChanged","loadingItemsNg: loadingItems","loadedItemsNg: loadedItems","itemClickedNg: itemClicked","selectedItemChangedNg: selectedItemChanged","selectedItemChangePC: selectedItemChange","selectedNodeChangePC: selectedNodeChange","checkedItemsChangedNg: checkedItemsChanged","checkedItemsChangePC: checkedItemsChange","isCollapsedChangingNg: isCollapsedChanging","isCollapsedChangedNg: isCollapsedChanged","isCheckedChangingNg: isCheckedChanging","isCheckedChangedNg: isCheckedChanged","formatItemNg: formatItem","dragStartNg: dragStart","dragOverNg: dragOver","dropNg: drop","dragEndNg: dragEnd","nodeEditStartingNg: nodeEditStarting","nodeEditStartedNg: nodeEditStarted","nodeEditEndingNg: nodeEditEnding","nodeEditEndedNg: nodeEditEnded"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTreeViewMeta};var WjTreeView=function(e){__extends(WjTreeView,e);function WjTreeView(t,n,o){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,o);a.created();return a}t=WjTreeView;WjTreeView.prototype.created=function(){};WjTreeView.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTreeView.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTreeView.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjTreeView.prototype.addEventListener=function(t,n,o,a){var r=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[n]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(r,t,n,o,a)})):e.prototype.addEventListener.call(this,t,n,o,a)};var t;WjTreeView.meta={outputs:wjTreeViewMeta.outputs,changeEvents:{selectedItemChanged:["selectedItem","selectedNode"],checkedItemsChanged:["checkedItems"]}};
WjTreeView.ɵfac = function WjTreeView_Factory(t) { return new (t || WjTreeView)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTreeView.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTreeView, selectors: [["wj-tree-view"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", childItemsPath: "childItemsPath", displayMemberPath: "displayMemberPath", imageMemberPath: "imageMemberPath", checkedMemberPath: "checkedMemberPath", isContentHtml: "isContentHtml", showCheckboxes: "showCheckboxes", autoCollapse: "autoCollapse", isAnimated: "isAnimated", isReadOnly: "isReadOnly", allowDragging: "allowDragging", checkOnClick: "checkOnClick", expandOnClick: "expandOnClick", collapseOnClick: "collapseOnClick", expandOnLoad: "expandOnLoad", lazyLoadFunction: "lazyLoadFunction", itemsSource: "itemsSource", selectedItem: "selectedItem", selectedNode: "selectedNode", checkedItems: "checkedItems" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", itemsSourceChangedNg: "itemsSourceChanged", loadingItemsNg: "loadingItems", loadedItemsNg: "loadedItems", itemClickedNg: "itemClicked", selectedItemChangedNg: "selectedItemChanged", selectedItemChangePC: "selectedItemChange", selectedNodeChangePC: "selectedNodeChange", checkedItemsChangedNg: "checkedItemsChanged", checkedItemsChangePC: "checkedItemsChange", isCollapsedChangingNg: "isCollapsedChanging", isCollapsedChangedNg: "isCollapsedChanged", isCheckedChangingNg: "isCheckedChanging", isCheckedChangedNg: "isCheckedChanged", formatItemNg: "formatItem", dragStartNg: "dragStart", dragOverNg: "dragOver", dropNg: "drop", dragEndNg: "dragEnd", nodeEditStartingNg: "nodeEditStarting", nodeEditStartedNg: "nodeEditStarted", nodeEditEndingNg: "nodeEditEnding", nodeEditEndedNg: "nodeEditEnded" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTreeViewMeta.providers))], decls: 0, vars: 0, template: function WjTreeView_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTreeView, [{
        type: Component,
        args: [{ selector: wjTreeViewMeta.selector, template: wjTreeViewMeta.template, inputs: wjTreeViewMeta.inputs, outputs: wjTreeViewMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTreeViewMeta.providers) }]
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
            }] }]; }, null); })();return WjTreeView=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTreeView)}(wjcNav.TreeView);export{WjTreeView};var wjTabPanelMeta={selector:"wj-tab-panel",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","isAnimated","autoSwitch","selectedIndex","selectedTab"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedTabChangePC: selectedTabChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjTabPanelMeta};var WjTabPanel=function(e){__extends(WjTabPanel,e);function WjTabPanel(t,n,o){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,o);a.created();return a}t=WjTabPanel;WjTabPanel.prototype.created=function(){};WjTabPanel.prototype.ngOnInit=function(){this.tabs.beginUpdate();this._wjBehaviour.ngOnInit()};WjTabPanel.prototype.ngAfterViewInit=function(){this.selectedIndex<0&&this.tabs.length&&(this.selectedIndex=0);this._wjBehaviour.ngAfterViewInit()};WjTabPanel.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjTabPanel.prototype.addEventListener=function(t,n,o,a){var r=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[n]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(r,t,n,o,a)})):e.prototype.addEventListener.call(this,t,n,o,a)};WjTabPanel.prototype.ngAfterContentInit=function(){var e=this.selectedIndex,t=this.tabs;e>-1&&e<t.length&&wjcCore.addClass(t[e].header,"wj-state-active");t.endUpdate()};var t;WjTabPanel.meta={outputs:wjTabPanelMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex","selectedTab"]}};
WjTabPanel.ɵfac = function WjTabPanel_Factory(t) { return new (t || WjTabPanel)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTabPanel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTabPanel, selectors: [["wj-tab-panel"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", isAnimated: "isAnimated", autoSwitch: "autoSwitch", selectedIndex: "selectedIndex", selectedTab: "selectedTab" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", selectedIndexChangedNg: "selectedIndexChanged", selectedIndexChangePC: "selectedIndexChange", selectedTabChangePC: "selectedTabChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTabPanelMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjTabPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTabPanel, [{
        type: Component,
        args: [{ selector: wjTabPanelMeta.selector, template: wjTabPanelMeta.template, inputs: wjTabPanelMeta.inputs, outputs: wjTabPanelMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTabPanelMeta.providers) }]
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
            }] }]; }, null); })();return WjTabPanel=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTabPanel)}(wjcNav.TabPanel);export{WjTabPanel};var wjTabMeta={selector:"wj-tab",template:"<ng-content></ng-content>",inputs:["wjProperty","isDisabled","isVisible"],outputs:["initialized"],providers:[]};export{wjTabMeta};var WjTab=function(e){__extends(WjTab,e);function WjTab(t,n,o){var a=e.call(this,document.createElement("div"),document.createElement("div"))||this;a.isInitialized=!1;a.wjProperty="tabs";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,o);a.created();return a}t=WjTab;WjTab.prototype.created=function(){};WjTab.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjTab.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjTab.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjTab.prototype.ngAfterContentInit=function(){var e=this._wjBehaviour.elementRef.nativeElement;this._setParts(e.children[0],e.children[1])};var t;WjTab.meta={outputs:wjTabMeta.outputs};
WjTab.ɵfac = function WjTab_Factory(t) { return new (t || WjTab)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjTab.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjTab, selectors: [["wj-tab"]], inputs: { wjProperty: "wjProperty", isDisabled: "isDisabled", isVisible: "isVisible" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTabMeta.providers))], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WjTab_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjTab, [{
        type: Component,
        args: [{ selector: wjTabMeta.selector, template: wjTabMeta.template, inputs: wjTabMeta.inputs, outputs: wjTabMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjTabMeta.providers) }]
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
            }] }]; }, null); })();return WjTab=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjTab)}(wjcNav.Tab);export{WjTab};var wjAccordionMeta={selector:"wj-accordion",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","tabOrder","isAnimated","autoSwitch","selectedIndex","selectedPane","showIcons","allowCollapseAll","allowExpandMany"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","invalidInputNg: invalidInput","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export{wjAccordionMeta};var WjAccordion=function(e){__extends(WjAccordion,e);function WjAccordion(t,n,o){var a=e.call(this,WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1;a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,o);a.created();return a}t=WjAccordion;WjAccordion.prototype.created=function(){};WjAccordion.prototype.ngOnInit=function(){this.panes.beginUpdate();this._wjBehaviour.ngOnInit()};WjAccordion.prototype.ngAfterViewInit=function(){this.selectedIndex<0&&this.panes.length&&(this.selectedIndex=0);this._wjBehaviour.ngAfterViewInit()};WjAccordion.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjAccordion.prototype.addEventListener=function(t,n,o,a){var r=this;void 0===a&&(a=!1);var i=WjDirectiveBehavior,c=i.getZone(this);c&&i.outsideZoneEvents[n]?c.runOutsideAngular((function(){e.prototype.addEventListener.call(r,t,n,o,a)})):e.prototype.addEventListener.call(this,t,n,o,a)};WjAccordion.prototype.ngAfterContentInit=function(){var e=this.selectedIndex,t=this.panes;e>-1&&e<t.length&&wjcCore.addClass(t[e].header,"wj-state-active");t.endUpdate()};var t;WjAccordion.meta={outputs:wjAccordionMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex"]}};
WjAccordion.ɵfac = function WjAccordion_Factory(t) { return new (t || WjAccordion)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjAccordion.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjAccordion, selectors: [["wj-accordion"]], inputs: { asyncBindings: "asyncBindings", wjModelProperty: "wjModelProperty", isDisabled: "isDisabled", tabOrder: "tabOrder", isAnimated: "isAnimated", autoSwitch: "autoSwitch", selectedIndex: "selectedIndex", selectedPane: "selectedPane", showIcons: "showIcons", allowCollapseAll: "allowCollapseAll", allowExpandMany: "allowExpandMany" }, outputs: { initialized: "initialized", gotFocusNg: "gotFocus", lostFocusNg: "lostFocus", refreshingNg: "refreshing", refreshedNg: "refreshed", invalidInputNg: "invalidInput", selectedIndexChangedNg: "selectedIndexChanged", selectedIndexChangePC: "selectedIndexChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjAccordionMeta.providers))], ngContentSelectors: _c0, decls: 2, vars: 0, template: function WjAccordion_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjAccordion, [{
        type: Component,
        args: [{ selector: wjAccordionMeta.selector, template: wjAccordionMeta.template, inputs: wjAccordionMeta.inputs, outputs: wjAccordionMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjAccordionMeta.providers) }]
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
            }] }]; }, null); })();return WjAccordion=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjAccordion)}(wjcNav.Accordion);export{WjAccordion};var wjAccordionPaneMeta={selector:"wj-accordion-pane",template:"<ng-content></ng-content>",inputs:["wjProperty","isDisabled","isVisible","isCollapsed"],outputs:["initialized"],providers:[]};export{wjAccordionPaneMeta};var WjAccordionPane=function(e){__extends(WjAccordionPane,e);function WjAccordionPane(t,n,o){var a=e.call(this,document.createElement("div"),document.createElement("div"))||this;a.isInitialized=!1;a.wjProperty="panes";a._wjBehaviour=WjDirectiveBehavior.attach(a,t,n,o);a.created();return a}t=WjAccordionPane;WjAccordionPane.prototype.created=function(){};WjAccordionPane.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()};WjAccordionPane.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()};WjAccordionPane.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()};WjAccordionPane.prototype.ngAfterContentInit=function(){var e=this._wjBehaviour.elementRef.nativeElement;this._setParts(e.children[0],e.children[1])};var t;WjAccordionPane.meta={outputs:wjAccordionPaneMeta.outputs};
WjAccordionPane.ɵfac = function WjAccordionPane_Factory(t) { return new (t || WjAccordionPane)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(Injector), ɵngcc0.ɵɵdirectiveInject("WjComponent", 12)); };
WjAccordionPane.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: WjAccordionPane, selectors: [["wj-accordion-pane"]], inputs: { wjProperty: "wjProperty", isDisabled: "isDisabled", isVisible: "isVisible", isCollapsed: "isCollapsed" }, outputs: { initialized: "initialized" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjAccordionPaneMeta.providers))], ngContentSelectors: _c0, decls: 1, vars: 0, template: function WjAccordionPane_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjAccordionPane, [{
        type: Component,
        args: [{ selector: wjAccordionPaneMeta.selector, template: wjAccordionPaneMeta.template, inputs: wjAccordionPaneMeta.inputs, outputs: wjAccordionPaneMeta.outputs, providers: [{ provide: "WjComponent", useExisting: forwardRef((function () { return t; })) }].concat(wjAccordionPaneMeta.providers) }]
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
            }] }]; }, null); })();return WjAccordionPane=t=__decorate([,__param(0,Inject(ElementRef)),__param(1,Inject(Injector)),__param(2,Inject("WjComponent")),__param(2,SkipSelf()),__param(2,Optional())],WjAccordionPane)}(wjcNav.AccordionPane);export{WjAccordionPane};var moduleExports=[WjTreeView,WjTabPanel,WjTab,WjAccordion,WjAccordionPane],WjNavModule=function(){function WjNavModule(){}
WjNavModule.ɵfac = function WjNavModule_Factory(t) { return new (t || WjNavModule)(); };
WjNavModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: WjNavModule });
WjNavModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WjNavModule, [{
        type: NgModule,
        args: [{ imports: [CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice() }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WjNavModule, { declarations: function () { return [WjTreeView, WjTabPanel, WjTab, WjAccordion, WjAccordionPane]; }, imports: function () { return [CommonModule]; }, exports: function () { return [WjTreeView, WjTabPanel, WjTab, WjAccordion, WjAccordionPane]; } }); })();return WjNavModule}();export{WjNavModule};