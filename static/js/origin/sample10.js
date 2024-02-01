var sheet, data;
window.onload = function() {
    data = getData();
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);

    $('#saveRow').on('click', function() {
        if(sheet.getChanges().length == 0) {
            alert('변경 사항이 없습니다.');
        } else {
            alert(sheet.getChanges().length + '개의 행이 저장되었습니다.');
        }
    });

    $('#addRow').on('click', function() {
        sheet.addRow({c1:'',c2:'',c3:'',c4:''});
    });
};


function initSpread(spread) {
    spread.suspendPaint();
    spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

    //init a data manager
    var dataManager = spread.dataManager();
    //add product table
    var productTable = dataManager.addTable("productTable", {
        data: data,
        schema: {
            columns: {
                c1: { lookup: ["서울 남부", "서울 북부", "경기 북부", "경기 남부", "강원 전지역"] },
                c2: { lookup: ["박OO", "김OO", "이OO", "차OO"] }
            }
        }
    });

    //init a table sheet
    sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
    sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
    sheet.options.allowAddNew = false; //hide new row
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);

    //bind a view to the table sheet
    var style = { formatter: 'yyyy/MM/dd' };
    var myView = productTable.addView("myView", [
        { value: "c1", width: 200, caption :"파트" },
        { value: "c2", width: 200, caption :"영업담당자" },
        { value: "c3", width: '*', caption :"금주업무" },
        { value: "c4", width: '*', caption :"차주업무" },
    ]);
    myView.fetch().then(function() {
        sheet.setDataView(myView);
    });

    spread.resumePaint();
}

function getData() {
  let arr = [];

  for(var i = 1; i < 6; i++) {
    let obj = {};
    obj.c1 = getRandomArrayElement(["서울 남부", "서울 북부", "경기 북부", "경기 남부", "강원 전지역"]);
    obj.c2 = getRandomArrayElement(["박OO", "김OO", "이OO", "차OO"]);
    obj.c3 = getRandomArrayElement(['GO건설 바닥 시공 공수 산정', '지역 대리점 방문', 'GO건설 영업 일지 문서화', '신입 OJT 교육', '금년 계획 PT']);
    obj.c4 = getRandomArrayElement(['GO건설 바닥 시공 공수 산정', '지역 대리점 방문', 'GO건설 영업 일지 문서화', '신입 OJT 교육', '금년 계획 PT']);

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

function traverseSelectionsRowsWithOperation(operation) {
    if (selections) {
        selections.sort(function(a, b){
            return b.row - a.row;
        });
        for (var i = 0; i < selections.length; i++) {
            var selection = selections[i];
            var row = selection.row;
            var rowCount = selection.rowCount;
            for (var r = row + rowCount - 1; r >= row; r--) {
                operation(r);
            }
        }
    }
}