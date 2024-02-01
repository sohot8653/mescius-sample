window.onload = function() {
	var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), {
		sheetCount: 2,
	});
    
    spread.suspendPaint();
	initSpread(spread);
    spread.resumePaint();

    $('#btnEnroll').on('click', function(e) {
        location.href = '/sample?depth1=OMS&depth2=배송내역서&sampleId=23';
    });

    $('#btnTemplate').on('click', function(e) {
        location.href = '/sample?depth1=OMS&depth2=배송내역서&sampleId=22';
    });
};

function initSpread(spread) {
    fetch('json/Sample21.ssjson')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        spread.fromJSON(jsondata);
        return;
    })
    .then(x => {
        var spread = GC.Spread.Sheets.findControl(document.getElementById('ss'));
        var sheet = spread.getSheetFromName('Sheet1');
        var SheetArea = GC.Spread.Sheets.SheetArea;
        var spreadNS = GC.Spread.Sheets;
        spread.options.showHorizontalScrollbar = false;
        spread.options.backColor = "#e6e6e6";
        spread.options.grayAreaBackColor = "#e6e6e6";
        sheet.options.rowHeaderVisible = false;
        sheet.options.colHeaderVisible = false;
        sheet.setColumnCount(5, GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.UsedRangeType.style);
        sheet.setColumnWidth(0, "*");
        sheet.setColumnWidth(1, "*");
        sheet.setColumnWidth(2, "*");
        sheet.setColumnWidth(3, 200.0);
        sheet.setColumnWidth(4, 0);
        sheet.getRange(0, 0, 1, 5).foreColor('#ffffff');
        sheet.getRange(0, 0, 1, 5).backColor('#36495e');
        sheet.frozenRowCount(1);

        
        var data = getData();
        var dataAdd = [];
        
        if(localStorage.getItem('sample23Index') != null) {
            var idx = Number(localStorage.getItem('sample23Index'));

            for(var i = 0; i < idx + 1; i++) {
                dataAdd.push({
                    c1: localStorage.getItem('sample23Num' + i),
                    c2: '테스터',
                    c3: getToday(),
                    c4: i
                })
            }

            dataAdd = dataAdd.reverse()
        }

        data = dataAdd.concat(data);

        for(var i = 0; i < data.length; i++) {
            drawRow((i + 1), spread, sheet, SheetArea, data[i]);
        }

        spread.bind(GC.Spread.Sheets.Events.ButtonClicked, function (e, args) {
            var sheet = args.sheet, row = args.row, col = args.col;
            var cellType = sheet.getCellType(row, col);
            if (cellType instanceof GC.Spread.Sheets.CellTypes.Button) {
                switch (cellType._text) {
                    case '상세':
                        if(sheet.getCell(row, col + 1).text() != '') {
                            location.href = '/sample?depth1=OMS&depth2=배송내역서&sampleId=15&sample23Index='+sheet.getCell(row, col + 1).text();
                        } else {
                            location.href = '/sample?depth1=OMS&depth2=배송내역서&sampleId=15';
                        }
                        break;
                }
            }
        });
        return ;
    });

    function drawRow(startRow, spread, sheet, SheetArea, data) {
        var spreadNS = GC.Spread.Sheets;
        var combo = new spreadNS.CellTypes.ComboBox();
        var checkBoxList = new GC.Spread.Sheets.CellTypes.CheckBoxList();

        sheet.addRows(sheet.getRowCount(SheetArea.viewport), 5);

        sheet.setValue(startRow, 0, data.c1);       // 주문번호
        sheet.setValue(startRow, 1, data.c2);       // 작성자
        sheet.setValue(startRow, 2, data.c3);       // 작성일
        sheet.setCellType(startRow, 3, new GC.Spread.Sheets.CellTypes.Button().text("상세"), GC.Spread.Sheets.SheetArea.viewport);
        sheet.setValue(startRow, 4, data.c4);       // 작성일
        
        var lineStyle = GC.Spread.Sheets.LineStyle.thin;
        var lineBorder = new GC.Spread.Sheets.LineBorder('black', lineStyle);
        sheet.getRange(startRow, 0, 1, 5).setBorder(lineBorder, { all: true });
        sheet.getRange(startRow, 0, 1, 5).backColor('#FFFFFF');

        
        sheet.setColumnWidth(6, 220.0, GC.Spread.Sheets.SheetArea.viewport);
        
    }
}

function getData() {
  let arr = [];

  for(var i = 1; i < 60; i++) {

    var local = getRandomArrayElement([['서울/경인', '서울 서초구 양재동'], ['경상', '부산광역시 남구'], ['강원', '강원 원주시'], ['경기/수원', '경기 수원시 영통구'], ['경기/이천', '경기 이천시 이천구']]);
    var obj = {};
    obj.c1 = 'OD' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = getRandomArrayElement(['김', '강', '고', '박', '윤', '이']) + 'OO';
    obj.c3 = '2024-01-29';

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

function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}