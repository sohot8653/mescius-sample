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

import{wjFlexGrid}from"wijmo/wijmo.knockout.grid";import*as mKo from"knockout";import*as wjcMultirow from"wijmo/wijmo.grid.multirow";var wjKo=mKo;export class wjMultiRow extends wjFlexGrid{_getControlConstructor(){return wjcMultirow.MultiRow}}wjKo.bindingHandlers.wjMultiRow=new wjMultiRow;