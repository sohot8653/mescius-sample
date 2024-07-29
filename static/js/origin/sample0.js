let spread = GC.Spread;
let designer;
// let currentTarget;
let socket = io();

socket.on('synchronous spreadjs', function(objSpreadChangedInfo) {
  if(typeof objSpreadChangedInfo === 'object')
      // spread.setActiveSheet(currentTarget.SheetName);
      // spread.getActiveSheet().setSelection(currentTarget.row, currentTarget.col, 1, 1);
      spread.getActiveSheet().setValue(objSpreadChangedInfo.row, objSpreadChangedInfo.col, objSpreadChangedInfo.newValue);
    // spread.fromJSON(objSpreadChangedInfo);
    // if(currentTarget) {
    //   console.log(currentTarget.row, currentTarget.col);
    //   spread.setActiveSheet(currentTarget.SheetName);
    //   spread.getActiveSheet().setSelection(currentTarget.row, currentTarget.col, 1, 1);
    //   spread.getActiveSheet().setValue(currentTarget.row, currentTarget.col, currentTarget.editingText);
    // }
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


  // spread.bind(GC.Spread.Sheets.Events.EditEnding, function (sender, args) {
  //   console.log(sender);
  //   console.log(args);
  // });
  // spread.bind(GC.Spread.Sheets.Events.EditChange, function (sender, args) {
  //   currentTarget = args;
  // });

  spread.bind(GC.Spread.Sheets.Events.EditEnded, function (sender, args) {
    socket.emit('synchronous spreadjs', spread.getActiveSheet().getDirtyCells());
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
