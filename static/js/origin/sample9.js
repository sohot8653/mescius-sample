let spread;
window.onload = function() {
    $('.content_box_loading').show();
    spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
};

function initSpread(spread) {
  spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

  //init a data manager
  var dataManager = spread.dataManager();
  var ordersTable = dataManager.addTable("ordersTable", {
      data: getData()
  });

  //init a table sheet
  var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);    
  sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
  sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);
  sheet.options.allowAddNew = false; //hide new row

  //bind a view to the table sheet
  ordersTable.fetch().then(function () {
      var myView = ordersTable.addView("myView", [
          { value: "c1", caption: '영업 담당자', width: 100 },
          { value: "c2", caption: '대리점/제휴점명', width: 140 },
          { value: "c3", caption: ['총 매출(VAT+)','욕실'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c4", caption: ['총 매출(VAT+)','주방'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c5", caption: ['총 매출(VAT+)','마루'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c6", caption: ['총 매출(VAT+)','도어'], width: 100, style: {formatter: '#,##0원'} },
          { value: "=[@c3]+[@c4]+[@c5]+[@c6]", caption: ['총 매출(VAT+)','합계'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c7", caption: ['할인오더(VAT+)','욕실'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c8", caption: ['할인오더(VAT+)','주방'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c9", caption: ['할인오더(VAT+)','마루'], width: 100, style: {formatter: '#,##0원'} },
          { value: "c10", caption: ['할인오더(VAT+)','도어'], width: 100, style: {formatter: '#,##0원'} },
          { value: "=[@c7]+[@c8]+[@c9]+[@c10]", caption: ['할인오더(VAT+)','합계'], width: 100, style: {formatter: '#,##0원'} },
      ]);
      spread.suspendPaint();
      sheet.setDataView(myView);
      groupCallback();
      spread.resumePaint();
  })
  .then(() => {
      $('.content_box_loading').hide();
  });

  var groupCallback = function () {
      sheet.groupBy([
          {
              caption: "영업 담당자", field: "c1", width: 120, style: { backColor: "#D0CECE" }, 
              summaryFields: [
                  {
                      caption: "총 매출합계",
                      formula: "=SUM([c3], [c4], [c5], [c6])",
                      width: 120,
                      style: {backColor: "#D9E1F2", formatter: '#,###원'}
                  },
                  {
                      caption: "총 할인오더합계",
                      formula: "=SUM([c7], [c8], [c9], [c10])",
                      width: 120,
                      style: {backColor: "#D9E1F2", formatter: '#,###원'}
                  },
              ]
          }
      ]);
  };
  var groupButton = document.getElementById("groupButton");
  groupButton.addEventListener("click", groupCallback);
  var removeGroupButton = document.getElementById("removeGroupButton");
  removeGroupButton.addEventListener("click", function () {
      sheet.removeGroupBy();
  });
}

function getData() {
  let arr = [];

  for(var i = 1; i < 150; i++) {

    var local = getRandomArrayElement([['서울/경인', '서울 서초구 양재동'], ['경상', '부산광역시 남구'], ['강원', '강원 원주시'], ['경기/수원', '경기 수원시 영통구'], ['경기/이천', '경기 이천시 이천구']]);
    var obj = {};
    obj.c1 = getRandomArrayElement(['김', '강', '고', '박', '윤', '이']) + 'OO';
    obj.c2 = getRandomArrayElement(['디자인앤바스', '위생도기앤델라', '마누스인테리어', '(주)제이유산업', '자람건설', '오티시스템']);
    obj.c3 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c4 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c5 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c6 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c7 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c8 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c9 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);
    obj.c10 = getRandomArrayElement([Math.floor(Math.random() * (24000000 - 21000000)) + 21000000, 0]);

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