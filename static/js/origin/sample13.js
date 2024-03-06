var sheet, data;
let spread;
window.onload = function() {
    $('.content_box_loading').show();
    data = getData();
    spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);

    document.getElementById('save').onclick = function () {
        var fileName = '배송내역서_SN2262608796.xlsx';
        var fileType = 'xlsx';
        var options = {
            "includeBindingSource": false,
            "includeStyles": true,
            "includeFormulas": true,
            "saveAsView": false,
            "rowHeadersAsFrozenColumns": false,
            "columnHeadersAsFrozenRows": false,
            "includeAutoMergedCells": false,
            "includeCalcModelCache": false,
            "includeUnusedNames": true,
            "includeEmptyRegionCells": true,
            "fileType": 0
        }

        spread.export(function(blob) { saveAs(blob, fileName); }, function() {}, options);
    };
};


function initSpread(spread) {
    spread.suspendPaint();
    spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

    //init a data manager
    var dataManager = spread.dataManager();
    //add product table
    var productTable = dataManager.addTable("productTable", {
        data: data
    });

    //init a table sheet
    sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
    sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
    sheet.options.allowAddNew = false; //hide new row
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);

    //bind a view to the table sheet
    var style = { formatter: 'yyyy/MM/dd' };
    var myView = productTable.addView("myView", [
        { value: "c1", width: 100, caption :['발주번호', '배송번호'] },
        { value: "c2", width: '*', caption :['발주번호', '주소'] },
        { value: "c3", width: 120, caption :['발주번호', '공급가(VAT+)'], style: {formatter: '#,##0원'}},
        { value: "c4", width: 120, caption :['배송정보', '배송업체'] },
        { value: "c5", width: 100, caption :['배송정보', '현장배송'] },
        { value: "c6", width: 120, caption :['배송정보', '간선비'] , style: {formatter: '#,##0원'}},
        { value: "c7", width: 120, caption :['배송정보', '현장배송비'] , style: {formatter: '#,##0원'}},
        { value: "c8", width: 120, caption :['배송정보', '세대반입비'] , style: {formatter: '#,##0원'}},
        { value: "=[@c6]+[@c7]+[@c8]", width: 120, caption :['배송정보', '배송비합계'] , style: {formatter: '#,##0원'}},
        { value: "c10", width: 120, caption :['배송정보', '긴급출고비'] , style: {formatter: '#,##0원'}},
        { value: "c11", width: 120, caption :['배송정보', '코스절감'] , style: {formatter: '#,##0원'}},
        { value: "c12", width: 120, caption :['배송정보', '상태'] },
    ]);
    myView.fetch().then(function() {
        sheet.setDataView(myView);
    })
    .then(() => {
        $('.content_box_loading').hide();
    });

    spread.resumePaint();
}

function getData() {
  let arr = [];
  for(var i = 1; i < 200; i++) {
    var order = getRandomArrayElement([["없음", 0], ["없음", 0], ["없음", 0], ["없음", 0], ["1톤", 100000], ["2톤", 150000]]);
    let obj = {};
    obj.c1 = 'DL' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = getRandomArrayElement(['서울 강북구 수유동', '서울 강북구 4.19로', '서울 영등포구 버드나루로', '강원 원주시 명륜동']);
    obj.c3 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c4 = getRandomArrayElement(["CJ 택배", "로젠 택배", "대한 통운"]);
    obj.c5 = order[0];
    obj.c6 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c7 = order[1];
    obj.c8 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c9 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c10 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c11 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c12 = getRandomArrayElement(["출고전", "배송완료", "배송중"]);

    arr.push(obj);
  }

  function getRandomDate(start, end) {
      const startDate = start.getTime();
      const endDate = end.getTime();
          
      return new Date(startDate + Math.random() * (endDate - startDate));
  }

  function getRandomArrayElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
  }

  return arr;
}