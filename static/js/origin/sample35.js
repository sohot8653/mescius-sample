var sheet, data;
window.onload = function() {
    $('.content_box_loading').show();
    $('#btnGrid').on('click', function(e){
        location.href = `/sample?depth1=${depth1}&depth2=しゅっこ ようせいしょ&sampleId=27`;
    });

    data = getData();
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
    
    document.getElementById('save').onclick = function () {
        var fileName = '配送明細書_SN2262608796.xlsx';
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
        { value: "c1", width: 100, caption :['発注番号', '配送番号'] },
        { value: "c2", width: '*', caption :['発注番号', '住所'] },
        { value: "c3", width: 120, caption :['発注番号', '供給価格(VAT+)'], style: {formatter: '#,##0¥'}},
        { value: "c4", width: 120, caption :['配送情報', '配送業者'] },
        { value: "c5", width: 100, caption :['配送情報', '現場配送'] },
        { value: "c6", width: 120, caption :['配送情報', '幹線比'] , style: {formatter: '#,##0¥'}},
        { value: "c7", width: 120, caption :['配送情報', '現場送料'] , style: {formatter: '#,##0¥'}},
        { value: "c8", width: 120, caption :['配送情報', '世帯搬入費'] , style: {formatter: '#,##0¥'}},
        { value: "=[@c6]+[@c7]+[@c8]", width: 120, caption :['配送情報', '送料合計'] , style: {formatter: '#,##0¥'}},
        { value: "c10", width: 120, caption :['配送情報', '緊急出庫費'] , style: {formatter: '#,##0¥'}},
        { value: "c11", width: 120, caption :['配送情報', 'コース節減'] , style: {formatter: '#,##0¥'}},
        { value: "c12", width: 120, caption :['配送情報', '状態'] },
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
    var order = getRandomArrayElement([["なし", 0], ["なし", 0], ["なし", 0], ["なし", 0], ["1トン", 100000], ["2トン", 150000]]);
    let obj = {};
    obj.c1 = 'DL' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = getRandomArrayElement(['地域1', '地域2', '地域3', '地域3']);
    obj.c3 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c4 = getRandomArrayElement(["宅配業者1", "宅配業者2", "宅配業者3"]);
    obj.c5 = order[0];
    obj.c6 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c7 = order[1];
    obj.c8 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c9 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c10 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c11 = (Math.floor(Math.random() * (2400 - 2100)) + 2100) * 100;
    obj.c12 = getRandomArrayElement(["出庫前", "配送完了", "配送中"]);

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