var tables = {};
var selectedTable = "order";
var dataTemplate = [
    {
        id: 0,
        name: '기본 컬럼 구조',
        column: [
            [
                "업체코드",
                "업체코드"
            ],
            [
                "업체명",
                "업체명"
            ],
            [
                "오픈일자",
                "오픈일자"
            ],
            [
                "합계",
                "합계"
            ]
        ]
    },
    {
        id: 1,
        name: '계산값 추가',
        column: [
        [
                "업체코드",
                "업체코드"
            ],
            [
                "업체명",
                "업체명"
            ],
            [
                "오픈일자",
                "오픈일자"
            ],
            [
                "합계",
                '=CONCATENATE([@합계],"원")'
            ],
            [
                "합계(VAT+)",
                '=CONCATENATE(ROUND([@합계] + ([@합계] * 0.1), 0),"원")'
            ],
            [
                "시공비 합계",
                '=CONCATENATE(ROUND([@합계] + ([@합계] * 0.1) + ([@합계] * 0.2), 0),"원")'
            ],
            [
                "배송비 합계",
                '=CONCATENATE(ROUND([@합계] + ([@합계] * 0.1) + ([@합계] * 0.2) + 100000, 0),"원")'
            ],
        ]
    }
]
window.onload = function () {
    $('.content_box_loading').show();
    var mainSpread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
    var dataManager = mainSpread.dataManager();
    tables.order = dataManager.addTable("orderTable", {
        data: getData()
    });
    
    var columnsSpread = new GC.Spread.Sheets.Workbook(document.getElementById("sampleDiv3"));
    var sheet = columnsSpread.getActiveSheet();
    columnsSpread.options.tabStripVisible = false;
    columnsSpread.options.showHorizontalScrollbar = false;
    columnsSpread.options.scrollbarMaxAlign = true;
    
    sheet.setColumnCount(2);
    sheet.setRowCount(10);
    sheet.setColumnWidth(0, 100);
    sheet.setColumnWidth(1, "*");
    sheet.setText(0,0,"헤더명",1);
    sheet.setText(0,1,"출력값",1);
    sheet.getRange(-1,1,-1,1).formatter("@");
    
    document.getElementById("setButton").addEventListener("click", function (e) {
        setView();
    }, false);
    document.getElementById("saveButton").addEventListener("click", function (e) {
        insertTemplate();
    }, false);
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    sheet.setArray(0, 0, dataTemplate.find(x => x.id == 1).column);

    var columnsSpread = new GC.Spread.Sheets.Workbook(document.getElementById("sampleDiv4"));
    var sheet = columnsSpread.getActiveSheet();
    columnsSpread.options.tabStripVisible = false;
    columnsSpread.options.showHorizontalScrollbar = false;
    columnsSpread.options.scrollbarMaxAlign = true;
    sheet.setColumnCount(2);
    sheet.setRowCount(dataTemplate.map(x => [x.name]).length);
    sheet.setColumnWidth(0, 60);
    sheet.setColumnWidth(1, "*");
    sheet.setText(0,0,"ID",1);
    sheet.setText(0,1,"템플릿",1);
    sheet.getRange(-1,1,-1,1).formatter("@");
    sheet.setArray(0, 0, dataTemplate.map(x => [x.id, x.name]));
    sheet.options.isProtected = true;
    sheet.selectionPolicy(0);
    sheet.selectionUnit(1);
    sheet.bind(GC.Spread.Sheets.Events.SelectionChanging, function (e, info) {
        switchTable(sheet.getValue(info.newSelections[0].row, 0));
    });

    setView();
};

function switchTable (templateId) {
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    sheet.clear(0, 0, sheet.getRowCount(), sheet.getColumnCount(), GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.StorageType.data);
    sheet.setArray(0, 0, dataTemplate.find(x => x.id == templateId).column);
    setView();
}
function setView () {
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    var rowCount = sheet.getRowCount();
    var fields = [];
    for (var i = 0; i < rowCount; i++) {
        var value = sheet.getValue(i, 1);
        if (value) {
            fields.push({value: value, caption: sheet.getValue(i, 0), width: 200});
        }
    }
    var view = tables[selectedTable].addView("selectedTable"+(new Date()).valueOf(), fields);

    var spread = GC.Spread.Sheets.findControl( document.getElementById("ss"));
    spread.clearSheets();
    spread.clearSheetTabs();
    var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
    sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
    sheet.options.allowAddNew = false;
    sheet.actionColumn.options({ visible: false });
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);
    spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

    view.fetch().then(function(args) {
        sheet.suspendPaint();
        sheet.setDataView(view);
        sheet.resumePaint();
    })
    .then(() => {
        $('.content_box_loading').hide();
    });
}

function insertTemplate() {
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    dataTemplate.push({
        id: Math.max(...dataTemplate.map(x => x.id)) + 1,
        name: document.getElementById('txtTemplateName').value || '이름없음',
        column: sheet.getArray(0, 0, sheet.getRowCount(), sheet.getColumnCount())
    })

    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv4"));
    var sheet = spread.getActiveSheet();
    sheet.clear(0, 0, sheet.getRowCount(), sheet.getColumnCount(), GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.StorageType.data);
    sheet.setRowCount(dataTemplate.map(x => [x.name]).length);
    sheet.setArray(0, 0, dataTemplate.map(x => [x.id, x.name]));
}

function getData() {
  let arr = [];

  for(var i = 1; i < 150; i++) {

      var local = getRandomArrayElement([['서울/경인', '서울 서초구 양재동'], ['경상', '부산광역시 남구'], ['강원', '강원 원주시'], ['경기/수원', '경기 수원시 영통구'], ['경기/이천', '경기 이천시 이천구']]);
      var obj = {};
      obj.업체코드 = Math.floor(Math.random() * (140000 - 110000)) + 110000;
      obj.업체명 = ['디자인앤바스', '위생도기앤델라', '마누스인테리어', '(주)제이유산업', '자람건설', '오티시스템'][Math.floor(Math.random() * 6)];
      obj.오픈일자 = ['2015-01-05', '2018-05-18', '2019-07-25', '1997-02-03', '1999-05-08', '2001-12-18'][Math.floor(Math.random() * 6)];
      obj.합계 = Math.floor(Math.random() * (140000 - 110000)) + 110000;
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