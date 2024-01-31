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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.default=e;return r};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_vue2_base_1=require("wijmo/wijmo.vue2.base"),wjcGridGrouppanel=__importStar(require("wijmo/wijmo.grid.grouppanel"));class WjGroupPanelBehavior extends wijmo_vue2_base_1.WjComponentBehavior{}WjGroupPanelBehavior.tag="wj-group-panel";WjGroupPanelBehavior.props=["isDisabled","tabOrder","hideGroupedColumns","showDragGlyphs","maxGroups","placeholder","filter","groupDescriptionCreator","grid"];WjGroupPanelBehavior.events=["initialized","gotFocus","lostFocus","refreshing","refreshed","invalidInput"];WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel};exports.WjGroupPanel=WjGroupPanelBehavior.register();function registerV3WjGroupPanel(e){e.component(WjGroupPanelBehavior.tag,exports.WjGroupPanel)}function registerGridGrouppanel(e){wijmo_vue2_base_1.VueApi.isV3Plus&&registerV3WjGroupPanel(e)}exports.registerGridGrouppanel=registerGridGrouppanel;