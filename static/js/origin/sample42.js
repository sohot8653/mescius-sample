var sheet, data;
let spread;
window.onload = function () {
  $(".content_box_loading").show();
  $("#btnGrid").on("click", function (e) {
    location.href = `/sample?depth1=${depth1}&depth2=Release request form&sampleId=41`;
  });

  data = getData();
  spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), {
    sheetCount: 0,
  });
  initSpread(spread);

  document.getElementById("save").onclick = function () {
    var fileName = "DELIVERY MGT_SN2262608796.xlsx";
    var fileType = "xlsx";
    var options = {
      includeBindingSource: false,
      includeStyles: true,
      includeFormulas: true,
      saveAsView: false,
      rowHeadersAsFrozenColumns: false,
      columnHeadersAsFrozenRows: false,
      includeAutoMergedCells: false,
      includeCalcModelCache: false,
      includeUnusedNames: true,
      includeEmptyRegionCells: true,
      fileType: 0,
    };

    spread.export(
      function (blob) {
        saveAs(blob, fileName);
      },
      function () {},
      options
    );
  };
};

function initSpread(spread) {
  spread.suspendPaint();
  spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

  //init a data manager
  var dataManager = spread.dataManager();
  //add product table
  var productTable = dataManager.addTable("productTable", {
    data: data,
  });

  //init a table sheet
  sheet = spread.addSheetTab(
    0,
    "TableSheet1",
    GC.Spread.Sheets.SheetType.tableSheet
  );
  sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
  sheet.options.allowAddNew = false; //hide new row
  sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);

  //bind a view to the table sheet
  var style = { formatter: "yyyy/MM/dd" };
  var myView = productTable.addView("myView", [
    { value: "c1", width: 100, caption: ["ORDER NUMBER", "DELIVERY NUMBER"] },
    { value: "c2", width: "*", caption: ["ORDER NUMBER", "ADDRESS"] },
    {
      value: "c3",
      width: 125,
      caption: ["ORDER NUMBER", "A SUPPLY PRICE(VAT+)"],
      style: { formatter: "$#,##0" },
    },
    {
      value: "c4",
      width: 125,
      caption: ["SHIPPING INFORMATION", "SHIPPING COMPANY"],
    },
    {
      value: "c5",
      width: 125,
      caption: ["SHIPPING INFORMATION", "ON-SITE DELIVERY"],
    },
    {
      value: "c6",
      width: 125,
      caption: ["SHIPPING INFORMATION", "COST OF TRUNK LINE"],
      style: { formatter: "$#,##0" },
    },
    {
      value: "c7",
      width: 125,
      caption: ["SHIPPING INFORMATION", "ON-SITE DELIVERY"],
      style: { formatter: "$#,##0" },
    },
    {
      value: "c8",
      width: 125,
      caption: [
        "SHIPPING INFORMATION",
        "THE COST OF BRINGING IN HOUSEHOLDS COSTS",
      ],
      style: { formatter: "$#,##0" },
    },
    {
      value: "=[@c6]+[@c7]+[@c8]",
      width: 125,
      caption: ["SHIPPING INFORMATION", "TOTAL DELIVERY COST"],
      style: { formatter: "$#,##0" },
    },
    {
      value: "c10",
      width: 125,
      caption: ["SHIPPING INFORMATION", "EMERGENCY SHIPPING COSTS"],
      style: { formatter: "$#,##0" },
    },
    {
      value: "c11",
      width: 125,
      caption: ["SHIPPING INFORMATION", "COURSE REDUCTION"],
      style: { formatter: "$#,##0" },
    },
    { value: "c12", width: 125, caption: ["SHIPPING INFORMATION", "STATE"] },
  ]);
  myView
    .fetch()
    .then(function () {
      sheet.setDataView(myView);
    })
    .then(() => {
      $(".content_box_loading").hide();
    });

  spread.resumePaint();
}

function getData() {
  let arr = [];
  for (var i = 1; i < 200; i++) {
    var order = getRandomArrayElement([
      ["None", 0],
      ["None", 0],
      ["None", 0],
      ["None", 0],
      ["1ton", 100000],
      ["2ton", 150000],
    ]);
    let obj = {};
    obj.c1 =
      "DL" +
      (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = getRandomArrayElement(["Local1", "Local2", "Local3", "Local4"]);
    obj.c3 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c4 = getRandomArrayElement([
      "courier service1",
      "courier service2",
      "courier service3",
    ]);
    obj.c5 = order[0];
    obj.c6 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c7 = order[1];
    obj.c8 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c9 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c10 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c11 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c12 = getRandomArrayElement([
      "Before shipment",
      "Delivery completed",
      "In transit",
    ]);

    arr.push(obj);
  }

  function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
  }

  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return arr;
}
