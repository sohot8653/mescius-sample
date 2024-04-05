let spread = GC.Spread;
let designer;

window.onload = function () {
  $(".content_box_loading").show();
  initRibbon();
  initSpread(spread);
};

function initRibbon() {
  designer = new GC.Spread.Sheets.Designer.Designer("ribbonHost");
}

function initSpread(spread) {
  spread = designer.getWorkbook();

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
