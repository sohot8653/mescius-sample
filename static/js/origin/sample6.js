let spread;
window.onload = function() {
    $('.content_box_loading').show();
    spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
};


function initSpread(spread) {
  spread.suspendPaint();
  spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;
  spread.bind(GC.Spread.Sheets.Events.InvalidOperation, function (e, args) {
      alert(args.message);
  });

  //init a data manager
  var dataManager = spread.dataManager();
  //add product table
  var productTable = dataManager.addTable("productTable", {
      data: getData()
  });

  //init a table sheet
  var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
  sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
  sheet.options.allowAddNew = false; //hide new row
  sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);

  //bind a view to the table sheet
  var style = { formatter: 'yyyy/MM/dd' };
  var myView = productTable.addView("myView", [
      { value: "c1", width: 120, caption :"구분" },
      { value: "c2", width: 120, caption :"권역" },
      { value: "c3", width: 120, caption :"영업담당자" },
      { value: "c4", width: 120, caption :"업체코드" },
      { value: "c5", width: 200, caption :"대리점/제휴점명" },
      { value: "c6", width: 200, caption :"상호" },
      { value: "c7", width: 120, caption :"대표자" },
      { value: "c8", width: '*', caption :"주소" },
      { value: "c9", width: 120, caption :"전화번호" },
      { value: "c10", width: 120, caption :"상태" },

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

  for(var i = 1; i < 150; i++) {

      var local = getRandomArrayElement([['서울/경인', '서울 서초구 양재동'], ['경상', '부산광역시 남구'], ['강원', '강원 원주시'], ['경기/수원', '경기 수원시 영통구'], ['경기/이천', '경기 이천시 이천구']]);
      var obj = {};
      obj.c1 = ['대리점', '제휴점'][Math.floor(Math.random() * 2)];
      obj.c2 = local[0];
      obj.c3 = ['김', '강', '고', '박', '윤', '이'][Math.floor(Math.random() * 6)] + 'OO';
      obj.c4 = Math.floor(Math.random() * (140000 - 110000)) + 110000;
      obj.c5 = ['디자인앤바스', '위생도기앤델라', '마누스인테리어', '(주)제이유산업', '자람건설', '오티시스템'][Math.floor(Math.random() * 6)];
      obj.c6 = ['디자인앤바스', '위생도기앤델라', '마누스인테리어', '(주)제이유산업', '자람건설', '오티시스템'][Math.floor(Math.random() * 6)];
      obj.c7 = ['김', '강', '고', '박', '윤', '이'][Math.floor(Math.random() * 6)] + 'OO';
      obj.c8 = local[1];
      obj.c9 = ['02-123-4545', '031-125-4515', '051-551-4545', '', '', ''][Math.floor(Math.random() * 6)];
      obj.c10 = ['활성', '활성', '활성', '비활성'][Math.floor(Math.random() * 4)];
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