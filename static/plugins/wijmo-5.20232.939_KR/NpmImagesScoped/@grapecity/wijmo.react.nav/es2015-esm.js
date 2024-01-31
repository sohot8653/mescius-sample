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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as React from"react";import*as wjcCore from"@grapecity/wijmo";import*as wjcNav from"@grapecity/wijmo.nav";export class TreeView extends ComponentBase{constructor(e){super(e,wjcNav.TreeView,{objectProps:["childItemsPath","displayMemberPath","imageMemberPath","checkedMemberPath","itemsSource","selectedItem","selectedNode","checkedItems"]})}}export class TabPanel extends ComponentBase{constructor(e){super(e,wjcNav.TabPanel,{objectProps:["selectedTab"]})}_createControl(){const e=new wjcNav.TabPanel(this._getElement(),null,!1,!0);e.tabs.beginUpdate();return e}componentDidMount(){super.componentDidMount();setTimeout(()=>{let e=this.control,t=e.selectedIndex,n=e.tabs;if(t>-1&&t<n.length){wjcCore.addClass(n[t].header,"wj-state-active");e.onSelectedIndexChanged()}n.endUpdate()},300)}}export class Tab extends ComponentBase{constructor(e){super(e,wjcNav.Tab);this._parentProp="tabs"}_createControl(){this._renderImpl();const e=this._getElement().children;return new wjcNav.Tab(e[0],e[1])}_renderImpl(){return React.createElement("div",{ref:this._hostRef},this.props.children)}}export class Accordion extends ComponentBase{constructor(e){super(e,wjcNav.Accordion,{objectProps:["selectedPane"]})}_createControl(){const e=new wjcNav.Accordion(this._getElement(),null,!0);e.panes.beginUpdate();return e}componentDidMount(){super.componentDidMount();setTimeout(()=>{const e=this.control,t=e.panes;e.selectedIndex<0&&t.length&&(e.selectedIndex=0);t.endUpdate()},300)}}export class AccordionPane extends ComponentBase{constructor(e){super(e,wjcNav.AccordionPane);this._parentProp="panes"}_createControl(){const e=this._getElement().children;return new wjcNav.AccordionPane(e[0],e[1])}_renderImpl(){return React.createElement("div",{ref:this._hostRef},this.props.children)}}