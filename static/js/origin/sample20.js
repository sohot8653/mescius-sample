let spread;
window.onload = function() {
    $('.content_box_loading').show();
    spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
  
    $('#btnSave').on('click', function(e) {
      if(confirm('변경 내용을 저장하시겠습니까?')) {
          location.reload();
      }
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
        data: getData(),
        schema: {
              columns: {
                  c2: {
                      lookup: {
                          name: 'category', columns: [
                              { value: "c0", width: 60, caption: 'ID' },
                              { value: "c1", width: 100, caption: '온/오프라인' },
                              { value: "c2", width: 100, caption: '대분류' },
                              { value: "c3", width: 100, caption: '중분류' },
                              { value: "c4", width: 100, caption: '소분류' }
                          ]
                      }
                  }
              }
          }
    });
  
    var categoryTable = dataManager.addTable("categoryTable", {
        data: getData2()
    });
  
    dataManager.addRelationship(productTable, "c2", "category", categoryTable, "c0", "product");
  
    //init a table sheet
    var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
    sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
    sheet.options.allowAddNew = false; //hide new row
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);
  
    var multiSelectStyle = {
          formatter: '{{=CONCAT([@category.c1], " > ", [@category.c2], " > ", [@category.c3], " > ", [@category.c4])}}', // convert the object to string
      };
  
    var columnList = [
        { value: "c1", width: 120, caption :"품목" },
        { value: "c2", width: '*', caption :"카테고리", style: multiSelectStyle},
        { value: "c3", width: 180, caption :"상품번호" },
        { value: "c4", width: 180, caption :"상품명" },
        { value: "c5", width: 180, caption :"위치" },
        { value: "c6", width: 180, caption :"비고" },
    ];
  
    
  
    var myView = productTable.addView("myView", columnList);
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
  
    for(var i = 1; i < 80; i++) {
        var obj = {};
        obj.c0 = String(i);
        obj.c1 = getRandomArrayElement(["욕실", "바닥", "유리", "판넬"]);
        obj.c2 = Math.floor(Math.random() * (79 - 1)) + 1;
        obj.c3 = getRandomArrayElement(["FFVFDVDDF", "GDFSGDFVSD", "EWRWRW", "ASVSCXV", "AQKUTVDVDS"]) + (Math.floor(Math.random() * (5000 - 1000)) + 1000);
        obj.c4 = getRandomArrayElement(["페스탈 일체형 PL-2120", "세면기 앙카볼트", "유리코너선반(2단)", "유리코너선반(3단)", "4품 악세사리 BP-5123 수건걸이", "4품 악세사리 BP-5123 비누대", "4품 악세사리 BP-5123 컵대"]);
        obj.c5 = getRandomArrayElement(["부01", "부02", "부03", "A01", "A02", "A03"]) + '-' + (Math.floor(Math.random() * (50 - 10)) + 10) + '-' + (Math.floor(Math.random() * (50 - 10)) + 10);
        obj.c6 = getRandomArrayElement(["부자재", "위생도기"]);
  
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
  
  function getData2() {
    let arr = [];
  
    for(var i = 1; i < 80; i++) {
        var obj = {};
        obj.c0 = String(i);
        obj.c1 = getRandomArrayElement(["온라인", "오프라인"]);
        obj.c2 = getRandomArrayElement(["아이템"]);
        obj.c3 = getRandomArrayElement(["욕실", "바닥", "유리", "판넬"]);
        obj.c4 = getRandomArrayElement(["부자재(법인)", "부자재(대리점)", "부자재(외부몰)", "부자재(직매)", "위생도기"]);
  
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