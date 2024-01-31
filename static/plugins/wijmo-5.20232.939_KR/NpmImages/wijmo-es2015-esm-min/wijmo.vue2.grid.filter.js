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

import{VueApi,WjComponentBehavior}from"wijmo/wijmo.vue2.base";import*as wjcGridFilter from"wijmo/wijmo.grid.filter";class WjFlexGridFilterBehavior extends WjComponentBehavior{}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter";WjFlexGridFilterBehavior.parentInCtor=!0;WjFlexGridFilterBehavior.props=["showFilterIcons","showSortButtons","defaultFilterType","exclusiveValueSearch","filterColumns"];WjFlexGridFilterBehavior.events=["initialized","editingFilter","filterChanging","filterChanged","filterApplied"];WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter};export var WjFlexGridFilter=WjFlexGridFilterBehavior.register();function registerV3WjFlexGridFilter(e){e.component(WjFlexGridFilterBehavior.tag,WjFlexGridFilter)}export function registerGridFilter(e){VueApi.isV3Plus&&registerV3WjFlexGridFilter(e)}