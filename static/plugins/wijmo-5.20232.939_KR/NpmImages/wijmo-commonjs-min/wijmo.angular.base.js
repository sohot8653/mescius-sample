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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=require("wijmo/wijmo"),wijmo_meta_1=require("wijmo/wijmo.meta"),mNg=__importStar(require("angular")),MetaFactory=function(t){__extends(MetaFactory,t);function MetaFactory(){return null!==t&&t.apply(this,arguments)||this}MetaFactory.CreateProp=function(t,e,i,r,o,n){return new PropDesc(t,e,i,r,o,n)};MetaFactory.CreateEvent=function(t,e){return new EventDesc(t,e)};MetaFactory.CreateComplexProp=function(t,e,i){return new ComplexPropDesc(t,e,i)};MetaFactory.findProp=function(t,e){return wijmo_meta_1.ControlMetaFactory.findProp(t,e)};MetaFactory.findEvent=function(t,e){return wijmo_meta_1.ControlMetaFactory.findEvent(t,e)};MetaFactory.findComplexProp=function(t,e){return wijmo_meta_1.ControlMetaFactory.findComplexProp(t,e)};return MetaFactory}(wijmo_meta_1.ControlMetaFactory);exports.MetaFactory=MetaFactory;var PropDesc=function(t){__extends(PropDesc,t);function PropDesc(e,i,r,o,n,s){var p=t.call(this,e,i,r,o,n,s)||this;p._scopeBindingMode=p.propertyType===wijmo_meta_1.PropertyType.EventHandler?"&":p.bindingMode==wijmo_meta_1.BindingMode.OneWay&&wijmo_meta_1.isSimpleType(p.propertyType)?"@":"=";return p}Object.defineProperty(PropDesc.prototype,"scopeBindingMode",{get:function(){return this._scopeBindingMode},set:function(t){this._scopeBindingMode=t},enumerable:!0,configurable:!0});Object.defineProperty(PropDesc.prototype,"customHandler",{get:function(){return this._customHandler},set:function(t){this._customHandler=t},enumerable:!0,configurable:!0});return PropDesc}(wijmo_meta_1.PropDescBase);exports.PropDesc=PropDesc;var EventDesc=function(t){__extends(EventDesc,t);function EventDesc(){return null!==t&&t.apply(this,arguments)||this}return EventDesc}(wijmo_meta_1.EventDescBase);exports.EventDesc=EventDesc;var ComplexPropDesc=function(t){__extends(ComplexPropDesc,t);function ComplexPropDesc(){return null!==t&&t.apply(this,arguments)||this}return ComplexPropDesc}(wijmo_meta_1.ComplexPropDescBase);exports.ComplexPropDesc=ComplexPropDesc;var wjNg=mNg,_ngModules=[];function _registerNgModule(t){var e=wjNg.module(t,[]);_ngModules.push(t);return e}exports._registerNgModule=_registerNgModule;function getNgModules(){return _ngModules.slice()}exports.getNgModules=getNgModules;var WjDirective=function(){function WjDirective(){this.replace=!0;this.restrict="E";this.template="<div />";this.transclude=!1;this._props=[];this._events=[];this._complexProps=[];var t=this;this._dirId=++WjDirective._dirIdCounter+"";this.link=this._postLinkFn();this.controller=["$scope","$parse","$element",function(e,i,r){t._$parse=i;r[0][WjDirective._elemScopeProp]=e;this[WjDirective._cntrlScopeProp]=e;e[WjDirective._scopeChildrenProp]=[];t._controllerImpl(this,e,r)}];this._initDirective()}WjDirective._versionOk=function(t){var e=wjNg.version,i=[e.major,e.minor,e.dot],r=t.split(".");if(r.length!==i.length)throw"Unrecognizable version number.";for(var o=0;o<r.length;o++){if(i[o]<r[o])return!1;if(i[o]>r[o])return!0}return!0};Object.defineProperty(WjDirective.prototype,"_controlConstructor",{get:function(){throw"Abstract method call"},enumerable:!0,configurable:!0});WjDirective.prototype._getMetaDataId=function(){return this._controlConstructor};WjDirective.prototype._getMetaData=function(){return MetaFactory.getMetaData(this._getMetaDataId())};WjDirective.prototype._initDirective=function(){this._initSharedMeta();this._prepareProps();this._initEvents();this._initScopeEvents();this._initScopeDescription()};WjDirective.prototype._initSharedMeta=function(){var t=this._getMetaData();this._props=t.props;this._events=t.events;this._complexProps=t.complexProps;this._property=t.parentProperty;this._isPropertyArray=t.isParentPropertyArray;this._ownObject=t.ownsObject;this._parentReferenceProperty=t.parentReferenceProperty;this._ngModelProperty=t.ngModelProperty};WjDirective.prototype._initProps=function(){};WjDirective.prototype._initEvents=function(){};WjDirective.prototype._createLink=function(){return new WjLink};WjDirective.prototype._controllerImpl=function(t,e,i){};WjDirective.prototype._initControl=function(t){try{var e=new(0,this._controlConstructor)(t);e.workingAs="Angular";return e}catch(t){return}};WjDirective.prototype._isChild=function(){return this._isParentInitializer()||this._isParentReferencer()};WjDirective.prototype._isParentInitializer=function(){return null!=this._property};WjDirective.prototype._isParentReferencer=function(){return null!=this._parentReferenceProperty};WjDirective.prototype._scopeToAttrName=function(t){var e=this.scope[t];if(e){var i=1,r=e.length;if(r<2)return t;"?"===e.charAt(1)&&(i=2);return r===i?t:e.substr(i)}return t};WjDirective.prototype._getComplexPropDesc=function(t){return MetaFactory.findComplexProp(t,this._complexProps)};WjDirective.prototype._initScopeEvents=function(){for(var t in this._events){var e=this._events[t];this._props.push(new PropDesc(e.eventName,wijmo_meta_1.PropertyType.EventHandler))}};WjDirective.prototype._initScopeDescription=function(){var t=this._props,e={},i=WjDirective._optionalAttr?"=?":"=";if(null!=t)for(var r,o=0;o<t.length;o++){e[(r=t[o]).propertyName]=r.scopeBindingMode;WjDirective._optionalAttr&&"="==r.scopeBindingMode&&(e[r.propertyName]="=?")}e.control=i;e[WjDirective._initPropAttr]=i;e[WjDirective._initEventAttr]="&";e[WjDirective._parPropAttr]="@";e[WjDirective._wjModelPropAttr]="@";this.scope=e};WjDirective.prototype._postLinkFn=function(){var t=this;return function(e,i,r,o){var n=t._createLink();n.directive=t;n.scope=e;n.tElement=i;n.tAttrs=r;if(wijmo_1.isArray(o)){var s=i.parent()[0][WjDirective._elemScopeProp];for(var p in o){var a=o[p];if(null!=a){a[WjDirective._cntrlScopeProp]===e&&(a=i.parent().controller(t._stripRequire(+p)));if(a&&a[WjDirective._cntrlScopeProp]===s){n.controller=a;break}}}}else n.controller=o;n.ngModel=i.controller("ngModel");n._link()}};WjDirective.prototype._prepareProps=function(){this._initProps();var t=[].concat(this._props);this._props.sort((function(e,i){var r=e.priority-i.priority;r||(r=t.indexOf(e)-t.indexOf(i));return r}))};WjDirective.prototype._stripRequire=function(t){if(!this._stripReq){this._stripReq=[];this._stripReq.length=this.require.length}if(!this._stripReq[t]){var e=/^[^A-Za-z]*(.*)/.exec(this.require[t]);this._stripReq[t]=e?e[1]:""}return this._stripReq[t]};WjDirective.prototype._getId=function(){return this._dirId};WjDirective._removeTransclude=function(t){if(!t)return t;var e=document.createElement("div");e.innerHTML=t;var i=e.querySelectorAll("[ng-transclude]");[].forEach.call(i,(function(t,e){t.removeAttribute("ng-transclude")}));return e.innerHTML};WjDirective._parPropAttr="wjProperty";WjDirective._wjModelPropAttr="wjModelProperty";WjDirective._initPropAttr="isInitialized";WjDirective._initEventAttr="initialized";WjDirective._cntrlScopeProp="_cntrlScope";WjDirective._elemScopeProp="_elemCntrl";WjDirective._cntrlLinkProp="$_thisLink";WjDirective._scopeChildrenProp="$_childLinks";WjDirective._dirIdAttr="wj-directive-id";WjDirective._optionalAttr=WjDirective._versionOk("1.1.4");WjDirective._dynaTemplates=WjDirective._optionalAttr;WjDirective._angStripPrefixes=["data","x"];WjDirective._dirIdCounter=0;return WjDirective}();exports.WjDirective=WjDirective;var WjLink=function(){function WjLink(){this._nonAssignable={};this._definedProps={};this._definedEvents={};this._oldValues={};this._isInitialized=!1;this._hasTriggeredInitialized=!1;this._isNgModelInitialized=!1;this._scopeSuspend=0;this._suspendedEvents=[];this._areChlildrenReady=!1;this._isDestroyed=!1;this._isAppliedToParent=!1}WjLink.prototype._link=function(){var t=this.directive,e=this;this.tElement[0].setAttribute(WjDirective._dirIdAttr,t._getId());this.directiveTemplateElement=t.replace?this.tElement:wjNg.element(this.tElement.children()[0]);this._initNonAssignable();if(this._isChild()){this._parentPropDesc=new ComplexPropDesc(t._property,t._isPropertyArray,t._ownObject);this.controller[WjDirective._cntrlScopeProp][WjDirective._scopeChildrenProp].push(this);var i=this.controller[WjDirective._cntrlScopeProp][WjDirective._cntrlLinkProp];i&&i._areChlildrenReady&&this._parentReady(i)}else{this._createInstance();this._notifyReady();this._prepareControl()}this._destroyEhUnreg=this.scope.$on("$destroy",(function(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];e._destroy()}))};WjLink.prototype._onChildrenReady=function(){};WjLink.prototype._createInstance=function(){this.control=this._initControl();this._safeApply(this.scope,"control",this.control)};WjLink.prototype._parentReady=function(t){if(this._isChild()){var e=this;if(!this._isAttrDefined(WjDirective._parPropAttr)||this.scope[WjDirective._parPropAttr]){var i=this._getParentProp(),r=t.directive._getComplexPropDesc(i);r?this._parentPropDesc=r:this._parentPropDesc.propertyName=i;this.parent=t;if(this._useParentObj()){this.control=t.control[i];this._safeApply(this.scope,"control",this.control)}else this._createInstance();this._notifyReady();this._prepareControl();this._initParent();this.directiveTemplateElement[0].style.display="none";this._appliedToParent()}else this.scope.$watch(WjDirective._parPropAttr,(function(){e._parentReady(t)}))}};WjLink.prototype._initParent=function(){if(!this._useParentObj()){this.directive;var t=this._getParentProp(),e=this.parent.control,i=this.control;if(this._isParentInitializer())if(this._isParentArray()){var r=e[t],o=this._getIndex();(o<0||o>=r.length)&&(o=r.length);r.splice(o,0,i);var n=this.tElement[0];this._siblingInsertedMO=new MutationObserver(this._siblingInserted.bind(this));this._siblingInsertedMO.observe(n,{childList:!0});this._siblingInsertedMO.observe(n,{childList:!0})}else e[t]=i;this._isParentReferencer()&&!this._parentInCtor()&&(i[this._getParentReferenceProperty()]=e)}};WjLink.prototype._destroy=function(){if(!this._isDestroyed){this._isDestroyed=!0;var t=this.control;this._destroyEhUnreg&&(this._destroyEhUnreg=null);this._siblingInsertedMO&&this._siblingInsertedMO.disconnect();if(this._isParentArray()&&!this.parent._isDestroyed){var e=this.parent.control,i=this._getParentProp();if(e&&i&&t){var r=e[i];if(r){var o=r.indexOf(t);o>=0&&r.splice(o,1)}}}this.tElement[0][WjDirective._elemScopeProp]=null;t instanceof wijmo_1.Control&&setTimeout((function(){t.hostElement&&t.dispose()}),0)}};WjLink.prototype._siblingInserted=function(t){for(var e=this,i=0,r=t;i<r.length;i++){var o=r[i];if("childList"===o.type&&o.addedNodes.length>0){if(Array.from(o.addedNodes).some((function(t){return t===e.tElement()}))){var n=this._getIndex(),s=this.control,p=this.parent.control[this._getParentProp()],a=p.indexOf(s);if(n>=0&&a>=0&&n!==a){p.splice(a,1);var c=Math.min(n,p.length);p.splice(c,0,s)}}}}};WjLink.prototype._notifyReady=function(){this.scope[WjDirective._cntrlLinkProp]=this;for(var t=[].concat(this.scope[WjDirective._scopeChildrenProp]),e=0;e<t.length;e++)t[e]._parentReady(this);this._areChlildrenReady=!0;this._onChildrenReady()};WjLink.prototype._initControl=function(){return this.directive._initControl(this._parentInCtor()?this.parent.control:this.directiveTemplateElement[0])};WjLink.prototype._prepareControl=function(){this._addEventHandlers();this._addWatchers()};WjLink.prototype._setupScopeWithControlProperties=function(){for(var t,e,i,r,o=this.control,n=this.scope,s=this.directive._props,p=0;p<s.length;p++)if("="===(t=s[p]).scopeBindingMode&&t.isNativeControlProperty&&t.shouldUpdateSource){i=n[e=t.propertyName];r=o[e];var a=t.propertyType==wijmo_meta_1.PropertyType.Function,c=t.propertyType==wijmo_meta_1.PropertyType.EventHandler;!this._canApply(n,t.propertyName)||this._isEqual(r,i)||a||c||(n[t.propertyName]=r)}n.$root.$$phase||n.$apply()};WjLink.prototype._initNonAssignable=function(){var t,e=this.directive._$parse,i=this.directive.scope;for(var r in i)"="===i[r].charAt(0)&&(void 0!==(t=this.tAttrs[this.directive._scopeToAttrName(r)])&&null!=e(t).assign||(this._nonAssignable[r]=!0))};WjLink.prototype._suspendScope=function(){this._scopeSuspend++};WjLink.prototype._resumeScope=function(){this._scopeSuspend>0&&0==--this._scopeSuspend&&this._suspendedEvents.length>0&&this._updateScope()};WjLink.prototype._isScopeSuspended=function(){return this._scopeSuspend>0};WjLink.prototype._isAttrDefined=function(t){return null!=this.tAttrs.$attr[this.directive._scopeToAttrName(t)]};WjLink.prototype._childInitialized=function(t){var e=this.scope[WjDirective._scopeChildrenProp],i=e.indexOf(t);if(i>=0){e.splice(i,1);this._checkRaiseInitialized()}};WjLink.prototype._thisInitialized=function(){this._checkRaiseInitialized()};WjLink.prototype._initialized=function(){};WjLink.prototype._appliedToParent=function(){this._isAppliedToParent=!0;this._checkRaiseInitialized()};WjLink.prototype._checkRaiseInitialized=function(){if(!this._hasTriggeredInitialized&&0===this.scope[WjDirective._scopeChildrenProp].length&&this._isInitialized&&(!this._isChild()||this._isAppliedToParent)){this._hasTriggeredInitialized=!0;this._initialized();this._safeApply(this.scope,WjDirective._initPropAttr,!0);var t=this.scope[WjDirective._initEventAttr],e=this;t&&setTimeout((function(){t({s:e.control,e:void 0})}),0);this._isChild()&&this.parent&&this.parent._childInitialized(this)}};WjLink.prototype._addWatchers=function(){var t=this,e=this.directive._props,i=this.scope;if(e){if(this.ngModel){var r=this.ngModel;r.$pristine&&wijmo_1.addClass(this.tElement[0],"ng-pristine");r.$valid&&wijmo_1.addClass(this.tElement[0],"ng-valid");r.$untouched&&wijmo_1.addClass(this.tElement[0],"ng-untouched");r.$render=this._ngModelRender.bind(this);this._updateNgModelPropDesc();this._isAttrDefined(WjDirective._wjModelPropAttr)&&i.$watch(WjDirective._wjModelPropAttr,(function(){t._updateNgModelPropDesc();t._ngModelRender()}))}var o,n,s;for(o=0;o<e.length;o++){n=(s=e[o]).propertyName;s.propertyType!==wijmo_meta_1.PropertyType.EventHandler&&this._isAttrDefined(n)&&(this._definedProps[n]=s)}var p=this.control;i.$watch((function(e){if(!t._isDestroyed)try{var i={};for(var r in t._definedProps)e[r]!==t._oldValues[r]&&(i[r]=e[r]);for(var r in i){var o=i[r];if(o!==t._oldValues[r]){t._oldValues[r]=o;if(t._isInitialized||void 0!==o){var n=t._definedProps[r],s=t._nullOrValue(t._castValueToType(o,n)),a=p[r];if(!t._isEqual(a,s)){var c=!1;null!=n.customHandler&&(c=n.customHandler(e,p,s,a,t));n.isNativeControlProperty&&!0!==c&&(p[r]=s)}}}}}finally{if(!t._isInitialized){t._isNgModelInitialized=!0;if(t.ngModel)if(void 0!==t.ngModel.$viewValue)t._ngModelRender();else if(t._ngModelPropDesc){t.ngModel.$setViewValue(p[t._ngModelPropDesc.propertyName]);t.ngModel.$setPristine()}t._isInitialized=!0;t._setupScopeWithControlProperties();t._thisInitialized()}}}))}};WjLink.prototype._addEventHandlers=function(){var t,e,i=this.directive._events;for(t=0;t<i.length;t++){e=i[t];this._addEventHandler(e)}};WjLink.prototype._addEventHandler=function(t){var e=this,i=t.eventName,r=this.control[i];if(null==r)throw'Event "'+i+'" not found in '+e.constructor.name;if(this._isAttrDefined(i))this._definedEvents[i]=t;else if(!t.isPropChanged)return;this.scope,this.directive._props;var o=this.control;r.addHandler((function(i,r){var o={eventDesc:t,s:i,e:r};e._isScopeSuspended()?e._suspendedEvents.push(o):e._updateScope(o)}),o)};WjLink.prototype._updateScope=function(t){void 0===t&&(t=null);if(!this._isDestroyed){var e=t?t.eventDesc.isPropChanged:this._suspendedEvents.some((function(t){return t.eventDesc.isPropChanged})),i=this;if(e)for(var r=this.directive._props,o=0;o<r.length;o++){var n=r[o];if("="==n.scopeBindingMode&&n.isNativeControlProperty&&n.shouldUpdateSource){var s=n.propertyName,p=this.control[s];if(this._shouldApply(this.scope,s,p)){this.scope[s]=p;this.directive._$parse(this.tAttrs[this.directive._scopeToAttrName(s)]).assign(this.scope.$parent,p)}this._ngModelPropDesc&&this._isInitialized&&this._ngModelPropDesc.propertyName==s&&this.ngModel.$viewValue!==p&&this.ngModel.$setViewValue(p)}}var a=function(){for(var e=t?[t]:this._suspendedEvents,r=0;r<e.length;r++){var o=e[r],n=o.eventDesc.eventName,s=this.scope[n];i._definedEvents[n]&&s&&s({s:o.s,e:o.e})}t||(this._suspendedEvents.length=0)}.bind(this);if(e)if(this.scope.$root.$$phase)var c=this.scope.$watch("value",(function(){c()}));else this.scope.$apply();a()}};WjLink.prototype._ngModelRender=function(){if(this._isNgModelInitialized){var t=this.ngModel.$viewValue,e=this._ngModelPropDesc;if(e&&(void 0!==t||this._isInitialized)){this._nullOrValue(this._castValueToType(t,e));this._isEqualEx(t,this.control[e.propertyName])||(this.control[e.propertyName]=t)}}};WjLink.prototype._castValueToType=function(t,e){return e.castValueToType(t)};WjLink.prototype._isChild=function(){return this.directive._isChild()};WjLink.prototype._isParentInitializer=function(){return this.directive._isParentInitializer()};WjLink.prototype._isParentReferencer=function(){return this.directive._isParentReferencer()};WjLink.prototype._getParentProp=function(){return this._isParentInitializer()?this.scope[WjDirective._parPropAttr]||this.directive._property:void 0};WjLink.prototype._getParentReferenceProperty=function(){return this.directive._parentReferenceProperty};WjLink.prototype._useParentObj=function(){return!this._isParentReferencer()&&this._isParentInitializer()&&!this._parentPropDesc.isArray&&!this._parentPropDesc.ownsObject};WjLink.prototype._isParentArray=function(){return this._isParentInitializer()&&this._parentPropDesc.isArray};WjLink.prototype._parentInCtor=function(){return this._isParentReferencer()&&""==this._getParentReferenceProperty()};WjLink.prototype._getNgModelProperty=function(){return this.scope[WjDirective._wjModelPropAttr]||this.directive._ngModelProperty};WjLink.prototype._updateNgModelPropDesc=function(){var t=this._getNgModelProperty();this._ngModelPropDesc=wijmo_1.isNullOrWhiteSpace(t)?null:MetaFactory.findProp(t,this.directive._props)};WjLink.prototype._safeApply=function(t,e,i){if(this._shouldApply(t,e,i)){t[e]=i;t.$root.$$phase||t.$apply();return!0}return!1};WjLink.prototype._shouldApply=function(t,e,i){return this._canApply(t,e)&&!this._isEqual(i,t[e])};WjLink.prototype._canApply=function(t,e){return!this._nonAssignable[e]};WjLink.prototype._isEqual=function(t,e){return t==e||this._isSpValEq(t,e)};WjLink.prototype._isEqualEx=function(t,e){return t===e||this._isSpValEq(t,e)};WjLink.prototype._isSpValEq=function(t,e){return wijmo_1.DateTime.equals(t,e)};WjLink.prototype._nullOrValue=function(t){return null!=t?t:null};WjLink.prototype._getIndex=function(){var t=this.tElement[0],e=t.parentElement;if(!e)return-1;for(var i=e.childNodes,r=-1,o=this.directive._getId(),n=0;n<i.length;n++){var s=i[n];if(1==s.nodeType&&s.getAttribute(WjDirective._dirIdAttr)==o){++r;if(s===t)return r}}return-1};return WjLink}();exports.WjLink=WjLink;function softRefChart(){return wijmo_1._getModule("wijmo.chart")}exports.softRefChart=softRefChart;function softRefChartAnalytics(){return wijmo_1._getModule("wijmo.chart.analytics")}exports.softRefChartAnalytics=softRefChartAnalytics;function softRefChartAnimation(){return wijmo_1._getModule("wijmo.chart.animation")}exports.softRefChartAnimation=softRefChartAnimation;function softRefChartAnnotation(){return wijmo_1._getModule("wijmo.chart.annotation")}exports.softRefChartAnnotation=softRefChartAnnotation;function softRefChartFinance(){return wijmo_1._getModule("wijmo.chart.finance")}exports.softRefChartFinance=softRefChartFinance;function softRefChartFinanceAnalytics(){return wijmo_1._getModule("wijmo.chart.finance.analytics")}exports.softRefChartFinanceAnalytics=softRefChartFinanceAnalytics;function softRefChartHierarchical(){return wijmo_1._getModule("wijmo.chart.hierarchical")}exports.softRefChartHierarchical=softRefChartHierarchical;function softRefChartInteraction(){return wijmo_1._getModule("wijmo.chart.interaction")}exports.softRefChartInteraction=softRefChartInteraction;function softRefChartRadar(){return wijmo_1._getModule("wijmo.chart.radar")}exports.softRefChartRadar=softRefChartRadar;function softRefGauge(){return wijmo_1._getModule("wijmo.gauge")}exports.softRefGauge=softRefGauge;function softRefGrid(){return wijmo_1._getModule("wijmo.grid")}exports.softRefGrid=softRefGrid;function softRefGridDetail(){return wijmo_1._getModule("wijmo.grid.detail")}exports.softRefGridDetail=softRefGridDetail;function softRefGridFilter(){return wijmo_1._getModule("wijmo.grid.filter")}exports.softRefGridFilter=softRefGridFilter;function softRefGridGrouppanel(){return wijmo_1._getModule("wijmo.grid.grouppanel")}exports.softRefGridGrouppanel=softRefGridGrouppanel;function softRefGridMultirow(){return wijmo_1._getModule("wijmo.grid.multirow")}exports.softRefGridMultirow=softRefGridMultirow;function softRefGridSheet(){return wijmo_1._getModule("wijmo.grid.sheet")}exports.softRefGridSheet=softRefGridSheet;function softRefNav(){return wijmo_1._getModule("wijmo.nav")}exports.softRefNav=softRefNav;function softRefOlap(){return wijmo_1._getModule("wijmo.olap")}exports.softRefOlap=softRefOlap;function softRefViewer(){return wijmo_1._getModule("wijmo.viewer")}exports.softRefViewer=softRefViewer;function softRefInput(){return wijmo_1._getModule("wijmo.input")}exports.softRefInput=softRefInput;