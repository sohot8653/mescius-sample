let spread = GC.Spread;
let designer;
var socket = io();

socket.on('synchronous spreadjs', function(objSpreadChangedInfo) {
  console.log(objSpreadChangedInfo);
  if(typeof objSpreadChangedInfo === 'object')
   spread.commandManager().execute(objSpreadChangedInfo);
});

window.onload = function () {
  $(".content_box_loading").show();
  initRibbon();
  initSpread();
};

function initRibbon() {
  designer = new GC.Spread.Sheets.Designer.Designer("ribbonHost");
}

function initSpread() {
  spread = designer.getWorkbook();

  // spread.bind(GC.Spread.Sheets.Events.ValueChanged, function (e, info) {
  //   console.log('ValueChanged!!!');
  //   console.log(e);
  //   console.log(info);
  //   console.log('--------------');
  // });
  // spread.bind(GC.Spread.Sheets.Events.CellChanged, function (sender, args) {
  //   console.log('CellChanged!!!');
  // });
  // spread.bind(GC.Spread.Sheets.Events.LeaveCell, function (sender, args) {
  //   console.log('EditEnded!!');
  //   // check undo stack
  //   if(spread.undoManager().canUndo()) {
  //     let objSpreadChangedInfo = spread.undoManager().getUndoStack().slice(-1)[0];
  //     socket.emit('synchronous spreadjs', objSpreadChangedInfo);
  //   }
  // });
  // spread.bind(GC.Spread.Sheets.Events.EditEnded, function (sender, args) {
  //   console.log('EditEnded!!');
  //   console.log(sender);
  //   console.log(args);
  //   console.log('-----------');
  //   // check undo stack
  //   if(spread.undoManager().canUndo()) {
  //     let objSpreadChangedInfo = spread.undoManager().getUndoStack().slice(-1)[0];
  //     socket.emit('synchronous spreadjs', objSpreadChangedInfo);
  //   }
  // });

  // spread.bind(GC.Spread.Sheets.Events.LeaveCell, function (sender, args) {
  //   console.log('LeaveCell!!');
  //   console.log(sender);
  //   console.log(args);
  //   console.log('-----------');
  //   // check undo stack
  //   if(spread.undoManager().canUndo()) {
  //     let objSpreadChangedInfo = spread.undoManager().getUndoStack().slice(-1)[0];
  //     socket.emit('synchronous spreadjs', objSpreadChangedInfo);
  //   }
  // });

  spread.bind(GC.Spread.Sheets.Events.EditEnded, function (sender, args) {
    console.log('EditEnded!!');
    console.log(sender);
    console.log(args);
    console.log('-----------');
    // check undo stack
    if(spread.undoManager().canUndo()) {
      let objSpreadChangedInfo = spread.undoManager().getUndoStack().slice(-1)[0];
      socket.emit('synchronous spreadjs', objSpreadChangedInfo);
    }
  });

  // synchronize sheet
  spread.bind(GC.Spread.Sheets.Events.SheetChanged, function (sender, args) {
    var sheet = args.sheet;
    console.log('--SheetChanged--')
    console.log(sender);
    console.log(args);
    console.log('----------------')

    if(args.propertyName === 'insertSheet') {

    }
  });

  fetch("json/Sample0.ssjson")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      spread.fromJSON(jsondata, { incrementalLoading: true });
      spread
        .getActiveSheet()
        .setRowHeight(1, 0, GC.Spread.Sheets.SheetArea.viewport);
      spread
        .getActiveSheet()
        .setRowHeight(6, 0, GC.Spread.Sheets.SheetArea.viewport);
      spread
        .getActiveSheet()
        .setRowHeight(19, 0, GC.Spread.Sheets.SheetArea.viewport);
      return;
    })
    .then(() => {
      $(".content_box_loading").hide();
    });
}
