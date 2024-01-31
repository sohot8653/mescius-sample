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

"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_1=require("@grapecity/wijmo"),wijmo_grid_1=require("@grapecity/wijmo.grid"),selfModule=__importStar(require("@grapecity/wijmo.undo"));class UndoableAction{constructor(t){this._target=t}undo(){if(this._actions)for(var t=this._actions.length-1;t>=0;t--)this._actions[t].undo();this.applyState(this._oldState)}redo(){this.applyState(this._newState);this._actions&&this._actions.forEach(t=>{t.redo()})}close(){return!0}applyState(t){}shouldAddAsChildAction(t){return!1}addChildAction(t){this._actions||(this._actions=[]);this._actions.push(t)}get target(){return this._target}_focusScroll(){const t=this._target;if(t instanceof wijmo_1.Control){t.hostElement&&t.hostElement.scrollIntoView();t.focus()}else if(t instanceof HTMLElement){t.focus();wijmo_1.isFunction(t.select)&&t.select()}}}exports.UndoableAction=UndoableAction;class _UndoStackHTML{static addTarget(t,e){const i=_UndoStackHTML;if(e instanceof HTMLInputElement)return i._addInputElement(t,e);if(e instanceof HTMLTextAreaElement)return i._addTextAreaElement(t,e);if(e instanceof HTMLSelectElement)return i._addSelectElement(t,e);{let i=!1;for(let n=0;n<e.children.length;n++){let o=e.children[n];o instanceof HTMLElement&&t.addTarget(o)&&(i=!0)}return i}}static _addInputElement(t,e){let i=null;if("checkbox"==e.type)e.addEventListener("click",e=>{t.pushAction(new CheckboxClickAction(e))});else{if("radio"==e.type){e.addEventListener("mousedown",t=>{i=new RadioClickAction(t)},!0);let n=_UndoStackHTML._getLabel(e);n&&n.addEventListener("mousedown",t=>{i=new RadioClickAction({target:e})},!0);e.addEventListener("focus",t=>{i instanceof RadioClickAction&&i.target==t.target||(i=new RadioClickAction(t))});e.addEventListener("click",e=>{if(i instanceof RadioClickAction){t.pushAction(i);i=null}});return!0}if("range"==e.type){e.addEventListener("mousedown",t=>{let n=wijmo_1.getActiveElement();n instanceof HTMLElement&&n!=e&&n.blur();i=new InputChangeAction(t)});e.addEventListener("mouseup",n=>{if(i instanceof InputChangeAction&&wijmo_1.getActiveElement()!=e){i._focus=!1;t.pushAction(i);i=null}})}e.addEventListener("focus",t=>{null==i&&(i=new InputChangeAction(t))});e.addEventListener("blur",e=>{if(i instanceof InputChangeAction){t.pushAction(i);i=null}})}return!0}static _addTextAreaElement(t,e){let i=null;e.addEventListener("focus",t=>{i=new InputChangeAction(t)});e.addEventListener("blur",e=>{if(i instanceof InputChangeAction){t.pushAction(i);i=null}});return!0}static _addSelectElement(t,e){let i=null;e.addEventListener("focus",t=>{i=new InputChangeAction(t)});e.addEventListener("blur",e=>{if(i instanceof InputChangeAction){t.pushAction(i);i=null}});return!0}static _getLabel(t){let e=t.parentElement;e instanceof HTMLLabelElement||(e=document.querySelector('label[for="'+t.id+'"'));return e}}exports._UndoStackHTML=_UndoStackHTML;class InputChangeAction extends UndoableAction{constructor(t){super(t.target);this._focus=!0;this._oldState=this._target.value}close(){this._newState=this._target.value;return this._newState!=this._oldState}applyState(t){let e=this._target;e.value=t;e.dispatchEvent(UndoStack._evtInput);this._focus&&this._focusScroll()}}exports.InputChangeAction=InputChangeAction;class CheckboxClickAction extends UndoableAction{constructor(t){super(t.target);wijmo_1.assert("checkbox"==this._target.type,"checkbox expected");this._newState=this._target.checked;this._oldState=!this._newState}applyState(t){this._target.checked=t;this._target.focus()}}exports.CheckboxClickAction=CheckboxClickAction;class RadioClickAction extends UndoableAction{constructor(t){super(t.target);let e=this._target.type;wijmo_1.assert("radio"==e,"radio button expected");this._oldState=this._getState()}close(){this._newState=this._getState();return this._newState!=this._oldState}applyState(t){if(t){t.checked=!0;t.focus()}}_getState(){let t='input[name="'+this._target.name+'"]',e=document.querySelectorAll(t);for(let t=0;t<e.length;t++)if(e[t].checked)return e[t];return null}}exports.RadioClickAction=RadioClickAction;class UndoStack{constructor(t,e){this._autoKbd=!0;this._stack=[];this._maxActions=1e3;this._ptr=0;this.addingTarget=new wijmo_1.Event;this.addedTarget=new wijmo_1.Event;this.addingAction=new wijmo_1.Event;this.addedAction=new wijmo_1.Event;this.undoingAction=new wijmo_1.Event;this.undoneAction=new wijmo_1.Event;this.redoingAction=new wijmo_1.Event;this.redoneAction=new wijmo_1.Event;this.stateChanged=new wijmo_1.Event;if(!UndoStack._evtInput){let t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!1);UndoStack._evtInput=t}wijmo_1.copy(this,e);t=wijmo_1.getElement(t||document.body);this.addTarget(t);document.addEventListener("keydown",e=>{var i=navigator.platform.toUpperCase().indexOf("MAC")>=0?e.metaKey:e.ctrlKey;if(this._autoKbd&&i&&!e.defaultPrevented&&wijmo_1.contains(t,e.target))if(e.shiftKey&&90===e.keyCode){if(this.canRedo){wijmo_1.getActiveElement().blur();setTimeout(()=>this.redo(),100)}e.preventDefault()}else switch(e.keyCode){case 90:if(this.canUndo){wijmo_1.getActiveElement().blur();setTimeout(()=>this.undo(),100)}e.preventDefault();break;case 89:if(this.canRedo){wijmo_1.getActiveElement().blur();setTimeout(()=>this.redo(),100)}e.preventDefault()}},wijmo_1.getEventOptions(!0,!1))}addTarget(t){let e=!1;if(wijmo_1.isString(t)){let e=document.querySelectorAll(t),i=!1;for(let t=0;t<e.length;t++)this.addTarget(e[t])&&(i=!0);return i}wijmo_1.assert(t instanceof HTMLElement,"Undo target should be an HTML element");let i=new AddTargetEventArgs(t);i.cancel=wijmo_1.hasClass(t,"wj-no-undo");if(this.onAddingTarget(i)){let n=wijmo_1.Control.getControl(t);n&&(e=_UndoStackWijmo.addTarget(this,n));e||(e=_UndoStackHTML.addTarget(this,t));e&&this.onAddedTarget(i)}return e}get autoKeyboard(){return this._autoKbd}set autoKeyboard(t){this._autoKbd=wijmo_1.asBoolean(t)}get isDisabled(){return this._disabled}set isDisabled(t){this._disabled=wijmo_1.asBoolean(t)}get maxActions(){return this._maxActions}set maxActions(t){if(t!=this._maxActions){this._maxActions=wijmo_1.asNumber(t,!1,!0);this.clear()}}get actionCount(){return this._stack.length}get canUndo(){return this._stack.length>0&&this._ptr>0&&!this._disabled}get canRedo(){return this._stack.length>0&&this._ptr<this._stack.length&&!this._disabled}undo(){if(this.canUndo){let t=this._stack[this._ptr-1],e=new UndoActionEventArgs(t);if(this.onUndoingAction(e)){this._ptr--;this._undoing=!0;t.undo();this._undoing=!1;this._pendingAction=null;this.onUndoneAction(e);this.onStateChanged()}}}redo(){if(this.canRedo){let t=this._stack[this._ptr],e=new UndoActionEventArgs(t);if(this.onRedoingAction(e)){this._ptr++;this._undoing=!0;t.redo();this._undoing=!1;this._pendingAction=null;this.onRedoneAction(e);this.onStateChanged()}}}clear(){this._ptr=0;this._stack.splice(0,this._stack.length);this.onStateChanged()}pushAction(t){this._pendingAction=t;this.pushPendingAction()}onAddingTarget(t){this.addingTarget.raise(this,t);return!t.cancel}onAddedTarget(t){this.addedTarget.raise(this,t)}onAddingAction(t){this.addingAction.raise(this,t);return!t.cancel}onAddedAction(t){this.addedAction.raise(this,t)}onUndoingAction(t){this.undoingAction.raise(this,t);return!t.cancel}onUndoneAction(t){this.undoneAction.raise(this,t)}onRedoingAction(t){this.redoingAction.raise(this,t);return!t.cancel}onRedoneAction(t){this.redoneAction.raise(this,t)}onStateChanged(){this.stateChanged.raise(this,wijmo_1.EventArgs.empty)}pushPendingAction(){if(!this._disabled&&!this._undoing&&this._pendingAction&&this._pendingAction.close()){this._stack.splice(this._ptr,this._stack.length-this._ptr);wijmo_1.assert(this._stack.length==this._ptr,"should be at the end of the stack");if(this._stack.length){let t=this._stack[this._ptr-1];if(t.shouldAddAsChildAction(this._pendingAction)){t.addChildAction(this._pendingAction);this._pendingAction=null;this.onStateChanged();return}}let t=new UndoActionEventArgs(this._pendingAction);if(!this.onAddingAction(t))return;this._stack.push(this._pendingAction);this._ptr++;this._pendingAction=null;let e=this._stack.length-this._maxActions;if(e>0){this._stack.splice(0,e);this._ptr-=e;wijmo_1.assert(this._ptr>=0,"pointer should not be negative")}this.onStateChanged()}}}exports.UndoStack=UndoStack;class AddTargetEventArgs extends wijmo_1.CancelEventArgs{constructor(t){super();this._target=t}get target(){return this._target}}exports.AddTargetEventArgs=AddTargetEventArgs;class UndoActionEventArgs extends wijmo_1.CancelEventArgs{constructor(t){super();this._action=t}get action(){return this._action}}exports.UndoActionEventArgs=UndoActionEventArgs;function softInput(){return wijmo_1._getModule("wijmo.input")}exports.softInput=softInput;function softGrid(){return wijmo_1._getModule("wijmo.grid")}exports.softGrid=softGrid;function softGauge(){return wijmo_1._getModule("wijmo.gauge")}exports.softGauge=softGauge;function softNav(){return wijmo_1._getModule("wijmo.nav")}exports.softNav=softNav;class _UndoStackWijmo{static addTarget(t,e){const i=_UndoStackWijmo;return softGrid()&&e instanceof softGrid().FlexGrid?i._addFlexGrid(t,e):softGauge()&&e instanceof softGauge().Gauge?i._addGauge(t,e):softNav()&&e instanceof softNav().TreeView?i._addTreeView(t,e):!!i._isInputControl(e)&&i._addInputControl(t,e)}static _isInputControl(t){const e=softInput();return!!e&&(t instanceof e.DropDown||t instanceof e.InputMask||t instanceof e.InputNumber||t instanceof e.Calendar||t instanceof e.ColorPicker)}static _addInputControl(t,e){let i=null;e.gotFocus.addHandler(()=>{i=new InputControlChangeAction({target:e})});e.lostFocus.addHandler(()=>{if(i instanceof InputControlChangeAction){t.pushAction(i);i=null}});return!0}static _addGauge(t,e){if(!e.isReadOnly){let i=null;e.hostElement.addEventListener("focus",()=>{i||(i=new GaugeChangeAction(e))});e.lostFocus.addHandler(()=>{if(i instanceof GaugeChangeAction){t.pushAction(i);i=null}});return!0}return!1}static _addTreeView(t,e){let i=null;e.nodeEditStarted.addHandler((t,e)=>{i=new TreeViewEditAction(t,e)});e.nodeEditEnded.addHandler((e,n)=>{if(i instanceof TreeViewEditAction){t.pushAction(i);i=null}});e.isCheckedChanging.addHandler((t,e)=>{i=new TreeViewCheckAction(t,e)});e.isCheckedChanged.addHandler((e,n)=>{if(i instanceof TreeViewCheckAction){t.pushAction(i);i=null}});return!0}static _addFlexGrid(t,e){let i=null;e.beginningEdit.addHandler((t,e)=>{i=e.getRow()instanceof wijmo_grid_1._NewRowTemplate?null:new GridEditAction(t,e)});e.cellEditEnded.addHandler((e,n)=>{if(i instanceof GridEditAction){t.pushAction(i);i=null}});e.pastingCell.addHandler((t,e)=>{i=e.getRow()?new GridEditAction(t,e):null});e.pastedCell.addHandler((e,n)=>{if(i instanceof GridEditAction){t.pushAction(i);i=null}});e.sortingColumn.addHandler((t,e)=>{i=new GridSortAction(t,e)});e.sortedColumn.addHandler((e,n)=>{if(i instanceof GridSortAction){t.pushAction(i);i=null}});e.resizingColumn.addHandler((t,e)=>{i instanceof GridResizeAction||(i=new GridResizeAction(t,e))});e.resizedColumn.addHandler(()=>{if(i instanceof GridResizeAction){t.pushAction(i);i=null}});e.autoSizingColumn.addHandler((t,e)=>{i=new GridResizeAction(t,e)});e.autoSizedColumn.addHandler(()=>{if(i instanceof GridResizeAction){t.pushAction(i);i=null}});e.draggingColumn.addHandler((t,e)=>{i=new GridDragAction(t,e)});e.draggedColumn.addHandler((e,n)=>{if(i instanceof GridDragAction){t.pushAction(i);i=null}});e.rowAdded.addHandler((e,i)=>{i.cancel||t.pushAction(new GridAddRowAction(e,i))});e.deletingRow.addHandler((e,i)=>{i.cancel||t.pushAction(new GridRemoveRowAction(e,i))});e.columnGroupCollapsedChanging.addHandler((t,e)=>{i=new ExpandCollapseColumnGroupAction(t,e)});e.columnGroupCollapsedChanged.addHandler((e,n)=>{if(i instanceof ExpandCollapseColumnGroupAction){t.pushAction(i);i=null}});return!0}}exports._UndoStackWijmo=_UndoStackWijmo;class InputControlChangeAction extends InputChangeAction{constructor(t){super(t);this._ctl=t.target;this._oldState=this._getControlState()}get control(){return this._ctl}close(){this._timeStamp=Date.now();this._newState=this._getControlState();return!this._sameContent(this._oldState,this._newState)}shouldAddAsChildAction(t){if(t instanceof InputControlChangeAction&&t.target==this.target&&t._timeStamp-this._timeStamp<500){this._timeStamp=Date.now();return!0}return!1}applyState(t){let e=this._ctl,i=softInput();if(i){let n=e instanceof i.Calendar||e instanceof i.InputDate;n&&e.selectionMode!=i.DateSelectionMode.Range&&(n=!1);if(e instanceof i.MultiSelect)e.checkedItems=t;else if(e instanceof i.MultiAutoComplete)e.selectedItems=t;else if(n){e.value=t[0];e.rangeEnd=t[1]}else"value"in e?e.value=t:"text"in e?e.text=t:wijmo_1.assert(!1,"can't apply control state?");e.focus()}}_getControlState(){let t=this._ctl,e=softInput();if(e){let i=t instanceof e.Calendar||t instanceof e.InputDate;i&&t.selectionMode!=e.DateSelectionMode.Range&&(i=!1);if(t instanceof e.MultiSelect)return t.checkedItems.slice();if(t instanceof e.MultiAutoComplete)return t.selectedItems.slice();if(i)return[t.value,t.rangeEnd];if("value"in t)return t.value;if("text"in t)return t.text;wijmo_1.assert(!1,"can't get control state?")}}_sameContent(t,e){if(wijmo_1.isArray(t)&&wijmo_1.isArray(e)){if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!=e[i])return!1;return!0}return wijmo_1.isDate(t)||wijmo_1.isDate(e)?wijmo_1.DateTime.sameDate(t,e):t==e}}class GaugeChangeAction extends UndoableAction{constructor(t){super(t);this._oldState=t.value}get control(){return this._target}close(){this._newState=this._target.value;return this._newState!=this._oldState}applyState(t){let e=this._target;e.value=t;e.focus()}}class GridEditAction extends UndoableAction{constructor(t,e){super(t);this._dataItems=[];let i=t.collectionView,n=this._rng=e.range;for(let e=n.topRow;e<=n.bottomRow;e++)this._dataItems.push(t.rows[e].dataItem);this._page=i instanceof wijmo_1.CollectionView?i.pageIndex:-1;this._oldState=t.getCellData(e.row,e.col,!1)}get control(){return this._target}get range(){return this._rng.clone()}get row(){return this._rng.topRow}get col(){return this._rng.leftCol}get dataItem(){return this._dataItems[0]}get dataItems(){return this._dataItems}close(){let t=this._target.collectionView;if(t&&t.currentAddItem)return!1;this._timeStamp=Date.now();this._newState=this._target.getCellData(this.row,this.col,!1);return this._newState!=this._oldState}applyState(t){let e=this._target,i=e.editableCollectionView;if(i){i instanceof wijmo_1.CollectionView&&this._page>-1&&i.moveToPage(this._page);e.deferUpdate(()=>{this._dataItems.forEach(n=>{i.editItem(n);for(let i=this._rng.leftCol;i<=this._rng.rightCol;i++){let o=e.columns[i],s=e._getBindingColumn(e.cells,this.row,o);s&&s._binding&&s._binding.setValue(n,t)}i.commitEdit()})})}e.select(e.selection.row,this.col);this._focusScroll()}shouldAddAsChildAction(t){return t instanceof GridEditAction&&t.target==this.target&&t._timeStamp-this._timeStamp<100}}class GridSortAction extends UndoableAction{constructor(t,e){super(t);let i=this._target.collectionView;i&&(this._oldState=i.sortDescriptions.slice())}get control(){return this._target}close(){let t=this._target.collectionView;if(t){this._newState=t.sortDescriptions.slice();return!0}return!1}applyState(t){let e=this._target.collectionView;e&&e.deferUpdate(()=>{let i=e.sortDescriptions;i.clear();t.forEach(t=>{i.push(t)})});this._focusScroll()}}class GridResizeAction extends UndoableAction{constructor(t,e){super(t);this._col=t.columns[e.col];this._oldState=this._col.renderWidth}get control(){return this._target}get col(){return this._col}close(){this._timeStamp=Date.now();this._newState=this._col.renderWidth;return this._newState!=this._oldState}applyState(t){this._col.width=t;this._focusScroll()}shouldAddAsChildAction(t){return t instanceof GridResizeAction&&t.target==this.target&&t._timeStamp-this._timeStamp<100}}class GridDragAction extends UndoableAction{constructor(t,e){super(t);this._col=e.getColumn(!0);this._oldState=this._getState(this._col)}get control(){return this._target}get col(){return this._col}close(){this._newState=this._getState(this._col);return!this._areStatesEqual(this._newState,this._oldState)}applyState(t){const e=this._col;e.grid.deferUpdate(()=>{const i=this._getState(e);i.coll.splice(i.idx,1);t.coll.splice(t.idx,0,e)});this._focusScroll()}_getState(t){const e=t instanceof wijmo_grid_1.ColumnGroup?t.parentGroup?t.parentGroup.columns:this.target.getColumnGroups():t.grid.columns;return{coll:e,idx:e.indexOf(t)}}_areStatesEqual(t,e){return t.coll===e.coll&&t.idx===e.idx}}class GridAddRowAction extends UndoableAction{constructor(t,e){super(t);let i=this._target.collectionView;if(i&&i.currentAddItem){let t=i.currentAddItem,e=i.sourceCollection.indexOf(t),n=i.currentPosition;this._oldState={item:t,index:e,position:n};this._newState={index:e,position:n}}}get control(){return this._target}close(){return null!=this._oldState}applyState(t){let e=this._target.collectionView;if(e){let i=e.sourceCollection;if(t.item){i.splice(t.index,1);if(e instanceof wijmo_1.CollectionView&&e.trackChanges){let i=t.item;wijmo_1.assert(e.itemsAdded.indexOf(i)>-1,"item should be in the itemsAdded list");e.itemsAdded.remove(i)}}else{let n=this._oldState.item;i.splice(t.index,0,n);if(e instanceof wijmo_1.CollectionView&&e.trackChanges){wijmo_1.assert(e.itemsAdded.indexOf(n)<0,"item should not be in the itemsAdded list");e.itemsAdded.push(n)}}e.refresh();e.moveCurrentToPosition(t.position);this._focusScroll()}}}class GridRemoveRowAction extends UndoableAction{constructor(t,e){super(t);this._edtIndex=-1;let i=this._target.collectionView;if(i){let n=t.rows[e.row].dataItem,o=i.sourceCollection.indexOf(n),s=i.currentPosition;i instanceof wijmo_1.CollectionView&&i.trackChanges&&(this._edtIndex=i.itemsEdited.indexOf(n));this._oldState={item:n,index:o,position:s};this._newState={index:o,position:s}}}get control(){return this._target}get dataItem(){return this._oldState.item}close(){this._timeStamp=Date.now();return null!=this._oldState}applyState(t){let e=this._target,i=e.collectionView;if(i){let n=i.sourceCollection;if(t.item){n.splice(t.index,0,t.item);if(i instanceof wijmo_1.CollectionView&&i.trackChanges){let e=t.item;wijmo_1.assert(i.itemsRemoved.indexOf(e)>-1,"item should be in the itemsRemoved list");i.itemsRemoved.remove(e);this._edtIndex>-1&&i.itemsEdited.indexOf(e)<0&&i.itemsEdited.push(e)}}else{n.splice(t.index,1);if(i instanceof wijmo_1.CollectionView&&i.trackChanges){let t=this._oldState.item;wijmo_1.assert(i.itemsRemoved.indexOf(t)<0,"item should not be in the itemsRemoved list");i.itemsRemoved.push(t)}}i.refresh();i.moveCurrentToPosition(t.position);let o=new(softGrid().CellRange)(t.position,0,t.position,e.columns.length-1);e.select(o);this._focusScroll()}}shouldAddAsChildAction(t){return t instanceof GridRemoveRowAction&&t.target==this.target&&t._timeStamp-this._timeStamp<100}}class ExpandCollapseColumnGroupAction extends UndoableAction{constructor(t,e){super(t);this._group=e.data;this._oldState=this._group.isCollapsed}get control(){return this._target}get group(){return this._group}close(){this._newState=this._group.isCollapsed;return this._newState!=this._oldState}applyState(t){this._group.isCollapsed=t;this._focusScroll()}}class TreeViewEditAction extends UndoableAction{constructor(t,e){super(t);this._nd=e.node;this._oldState=this._getNodeText()}get control(){return this._target}get node(){return this._nd}close(){this._newState=this._getNodeText();return this._newState!=this._oldState}applyState(t){this._nd.select();this._setNodeText(t);this._target.focus()}_getNodeText(){let t=this._nd.dataItem[this._getDisplayMemberPath()];return null!=t?t.toString():""}_setNodeText(t){let e=this._nd,i=e.dataItem,n=this._getDisplayMemberPath(),o=e.element.querySelector(".wj-node-text");i[n]=t;e.treeView.isContentHtml?o.innerHTML=t:o.textContent=t}_getDisplayMemberPath(){let t=this._nd,e=t.treeView.displayMemberPath;e instanceof Array&&(e=e[t.level]);return e}}class TreeViewCheckAction extends UndoableAction{constructor(t,e){super(t);this._nd=e.node;this._oldState=this._nd.isChecked}get control(){return this._target}get node(){return this._nd}close(){this._newState=this._nd.isChecked;return this._newState!=this._oldState}applyState(t){this._nd.select();this._nd.isChecked=t;this._target.focus()}}wijmo_1._registerModule("wijmo.undo",selfModule);