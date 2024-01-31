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

import{ComponentBase}from"@grapecity/wijmo.react.base";import*as wjcGridImmutable from"@grapecity/wijmo.grid.immutable";export class ImmutabilityProvider extends ComponentBase{constructor(t){super(t,wjcGridImmutable.ImmutabilityProvider,{objectProps:["itemsSource"]});this._parentInCtor=!0}}