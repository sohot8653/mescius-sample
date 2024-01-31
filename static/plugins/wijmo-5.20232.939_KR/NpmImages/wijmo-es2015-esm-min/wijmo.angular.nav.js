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

import{WjDirective,WjLink,_registerNgModule,softRefNav}from"wijmo/wijmo.angular.base";import*as mNg from"angular";import*as wjcNav from"wijmo/wijmo.nav";var wjNg=mNg;const wijmoNavName="wj.nav";export const ngModuleName="wj.nav";var wijmoNav=_registerNgModule("wj.nav");if(softRefNav()){wijmoNav.directive("wjTreeView",[function(){return new WjTreeView}]);wijmoNav.directive("wjTabPanel",[function(){return new WjTabPanel}]);wijmoNav.directive("wjTab",[function(){return new WjTab}])}export class WjTreeView extends WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />"}get _controlConstructor(){return wjcNav.TreeView}}export class WjTabPanel extends WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />"}get _controlConstructor(){return wjcNav.TabPanel}_initControl(e){let t=new wjcNav.TabPanel(e,null,!0);t.tabs.beginUpdate();return t}_createLink(){return new WjTabPanelLink}}class WjTabPanelLink extends WjLink{_onChildrenReady(){super._onChildrenReady();let e=this.control;e.tabs.endUpdate();e.selectedIndex<0&&e.tabs.length&&(e.selectedIndex=0)}}export class WjTab extends WjDirective{constructor(){super();this.transclude=!0;this.template="<div ng-transclude />";this.require="^wjTabPanel"}get _controlConstructor(){return wjcNav.Tab}_initControl(e){return new wjcNav.Tab(e.children[0],e.children[1])}}