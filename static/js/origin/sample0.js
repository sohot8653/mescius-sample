let spread = GC.Spread;
let designer;

window.onload = function () {
  initRibbon();
  initSpread(spread);
};

function initRibbon() {
  designer = new GC.Spread.Sheets.Designer.Designer('ribbonHost');
}

function initSpread(spread) {
  var spread = designer.getWorkbook();
  var sheet = spread.getSheet(0);

  fetch('json/Sample0.ssjson')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        spread.fromJSON(jsondata);
        return;
    })
}