let spread = GC.Spread;
let designer;

window.onload = function () {
  $('.content_box_loading').show();
  initRibbon();
  initSpread(spread);
};

function initRibbon() {
  designer = new GC.Spread.Sheets.Designer.Designer('ribbonHost');
}

function initSpread(spread) {
  var spread = designer.getWorkbook();

  fetch('json/Sample24.ssjson')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        spread.fromJSON(jsondata, {incrementalLoading: true});
        return;
    })
    .then(() => {
        $('.content_box_loading').hide();
    });
}