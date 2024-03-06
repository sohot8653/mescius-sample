let spread;
window.onload = function() {
    $('.content_box_loading').show();
    spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
  
    $('#btnGrid').on('click', function(e){
        location.href = `/sample?depth1=${depth1}&depth2=출고요청서&sampleId=11`;
    });
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
  
  
    var columnList = [
        { value: "c1", width: 120, caption :"창고위치" },
        { value: "c2", width: 150, caption :"상품코드" },
        { value: "c3", width: 180, caption :"상품명" },
    ]
  
    var startColumnNum = 4;
    for(var i = 1; i < 21; i++) {
      columnList.push(
        { value: "c" + startColumnNum, width: 80, caption : "12/" + String(i).padStart(2, "0")}
      );
      startColumnNum += 1;
    }
  
    var myView = productTable.addView("myView", columnList);
    myView.fetch().then(function() {
        sheet.setDataView(myView);
        sheet.togglePinnedColumns([0, 1, 2]);
    })
    .then(() => {
        $('.content_box_loading').hide();
    });
  
    
  
    spread.resumePaint();
  }
  
  function getData() {
    let arr = [];
  
    for(var i = 1; i < 80; i++) {
        var obj = {};
        obj.c1 = getRandomArrayElement(["부01", "부02", "부03", "A01", "A02", "A03"]) + '-' + (Math.floor(Math.random() * (50 - 10)) + 10) + '-' + (Math.floor(Math.random() * (50 - 10)) + 10);
        obj.c2 = getRandomArrayElement(["FFVFDVDDF", "GDFSGDFVSD", "EWRWRW", "ASVSCXV", "AQKUTVDVDS"]) + (Math.floor(Math.random() * (5000 - 1000)) + 1000);
        obj.c3 = getRandomArrayElement(["페스탈 일체형 PL-2120", "세면기 앙카볼트", "유리코너선반(2단)", "유리코너선반(3단)", "4품 악세사리 BP-5123 수건걸이", "4품 악세사리 BP-5123 비누대", "4품 악세사리 BP-5123 컵대"]);
        
        var startColumnNum = 4;
        for(var j = 1; j < 21; j++) {
          obj["c" + startColumnNum] = Math.floor(Math.random() * (5));
          startColumnNum += 1;
        }  
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