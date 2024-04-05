let spread;
window.onload = function () {
  $(".content_box_loading").show();
  spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));

  spread.suspendPaint();
  initSpread(spread);
  spread.resumePaint();

  $("#btnGrid").on("click", function (e) {
    location.href = `/sample?depth1=${depth1}&depth2=Shipping statement&sampleId=47`;
  });

  $("#btnSave").on("click", function (e) {
    if ($("#txtNum").val() == "") {
      alert("Please enter your order number.");
      return;
    }

    var serializationOption = {
      ignoreFormula: false,
      ignoreStyle: false,
      rowHeadersAsFrozenColumns: false,
      columnHeadersAsFrozenRows: false,
    };
    var spread1 = GC.Spread.Sheets.findControl(document.getElementById("ss"));
    var jsonStr = JSON.stringify(spread1.toJSON(serializationOption));

    if (localStorage.getItem("sample48Index") == null) {
      localStorage.setItem("sample48Index", 0);
      localStorage.setItem("sample48Num" + "0", $("#txtNum").val());
      localStorage.setItem("sample48Json" + "0", jsonStr);
    } else {
      var sample48IndexNew = Number(localStorage.getItem("sample48Index")) + 1;
      localStorage.setItem("sample48Index", sample48IndexNew);
      localStorage.setItem(
        "sample48Num" + sample48IndexNew,
        $("#txtNum").val()
      );
      localStorage.setItem("sample48Json" + sample48IndexNew, jsonStr);
    }

    alert("It's been saved.");
    location.href = `/sample?depth1=${depth1}&depth2=Shipping statement&sampleId=47`;
  });
};

function initSpread(spread) {
  if (
    !localStorage.getItem("templateName_en") ||
    !localStorage.getItem("templateJson_en")
  ) {
    fetch("json/Sample48.ssjson")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        localStorage.setItem("templateName_en", "Delivery Request_2024");
        localStorage.setItem("templateJson_en", JSON.stringify(jsondata));
        return;
      })
      .then((x) => {
        spread.fromJSON(JSON.parse(localStorage.getItem("templateJson_en")));
      })
      .then(() => {
        $(".content_box_loading").hide();
      });
  } else {
    spread.fromJSON(JSON.parse(localStorage.getItem("templateJson_en")));
    $(".content_box_loading").hide();
  }
}
