let spread;
let spread2;
let spread3;
let spread4;
window.onload = function() {
    $('.content_box_loading').show();
    $('#btnGrid').on('click', function(e){
        location.href = `/sample?depth1=${depth1}&depth2=しゅっこ ようせいしょ&sampleId=27`;
    });

	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    
	initSpread();

    document.getElementById('save').onclick = function () {
        var fileName = '配送オーダー_DL2262608796.xlsx';
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

        spread2.export(function(blob) { saveAs(blob, fileName); }, function() {}, options);
    };
    document.getElementById('save2').onclick = function () {
        var spread3 = GC.Spread.Sheets.findControl(document.getElementById('ss3'));
        var fileName = '配送要請書_DC85120015611.xlsx';
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

        spread3.export(function(blob) { saveAs(blob, fileName); }, function() {}, options);
    };
    document.getElementById('save3').onclick = function () {
        var spread4 = GC.Spread.Sheets.findControl(document.getElementById('ss4'));
        var fileName = 'ピッキングリスト_OD85120015611.xlsx';
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

        spread4.export(function(blob) { saveAs(blob, fileName); }, function() {}, options);
    };

    $('.btn_close').on('click', function(e) {
        $('#' + $(this).data('parent') + ' a.close-modal').click();
    });
};
var time = [];

for(var i = 6; i < 25; i++) {
    time.push({text: i + '時', value: i});
    time.push({text: i + '時 30分', value: i+'_half'});
}
function initSpread() {
    fetch('json/Sample32.ssjson')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        spread.fromJSON(jsondata);
        return;
    })
    .then(x => {
        spread.suspendPaint();
        var sheet = spread.getSheetFromName('Sheet1');
        var SheetArea = GC.Spread.Sheets.SheetArea;
        spread.options.showHorizontalScrollbar = false;
        spread.options.backColor = "#e6e6e6";
        spread.options.grayAreaBackColor = "#e6e6e6";
        sheet.options.rowHeaderVisible = false;
        sheet.options.colHeaderVisible = false;
        spread.options.scrollByPixel = true;
        spread.options.scrollPixel = 36.2;
        sheet.scroll(-1000, 0);

        // 데이터 보정
        sheet.setValue(0, 7, '配送オーダー');

        sheet.setColumnWidth(4, "*");
        sheet.frozenRowCount(2);
        sheet.getRange(0, 0, 2, 9).backColor('#36495e');

        var data = getData();
        for(var i = 0; i < data.length; i++) {
            drawRow((i + 1)*3, spread, sheet, SheetArea, data[i]);
        }

        spread.resumePaint();
        spread.bind(GC.Spread.Sheets.Events.ButtonClicked, function (e, args) {
            var sheet = args.sheet, row = args.row, col = args.col;
            var cellType = sheet.getCellType(row, col);
            if (cellType instanceof GC.Spread.Sheets.CellTypes.Button) {
                switch (cellType._text) {
                    case '貯蔵':
                        if(confirm('変更内容を保存しますか？')) {
                            location.reload();
                        }
                        break;
                    case '配送オーダー':
                        $("#modal1").modal({
                            // escapeClose: false,
                            // clickClose: false,
                            // showClose: false
                        });
                        spread2 = new GC.Spread.Sheets.Workbook(document.getElementById('ss2'));
                        spread2.suspendPaint();
                        var sheetModal = spread2.getSheetFromName('Sheet1');
                        var SheetArea = GC.Spread.Sheets.SheetArea;
                        spread2.options.showVerticalScrollbar = false;
                        spread2.options.showHorizontalScrollbar = false;
                        spread2.options.scrollByPixel = true;
                        sheetModal.options.rowHeaderVisible = false;
                        sheetModal.options.colHeaderVisible = false;
                        sheetModal.options.selectionBorderColor = "transparent";
                        sheetModal.setRowCount(7, SheetArea.viewport);
                        sheetModal.setColumnCount(3, SheetArea.viewport);
                        sheetModal.getCell(0, 1).text(sheet.getCell(row, 0).value()).font('bold normal 24px normal');
                        sheetModal.setText(1, 1, '配送業者');
                        sheetModal.setText(2, 1, "到着時間");
                        sheetModal.setText(3, 1, 'パレット数量');
                        sheetModal.setText(4, 1, "住所");
                        sheetModal.setText(1, 2, sheet.getCell(row, 3).value());
                        sheetModal.setText(2, 2, "午前 6時 30分");
                        sheetModal.setText(3, 2, '3EA');
                        sheetModal.setText(5, 1, sheet.getCell(row, 6).value());
                        sheetModal.setText(6, 1, sheet.getCell(row, 4).value());

                        sheetModal.setColumnWidth(0, 1.0);
                        sheetModal.setColumnWidth(1, "*");
                        sheetModal.setColumnWidth(2, "*");

                        var lineStyle = GC.Spread.Sheets.LineStyle.thin;
                        var lineBorder = new GC.Spread.Sheets.LineBorder('black', lineStyle);
                        sheetModal.getRange(0, 1, 7, 2).setBorder(lineBorder, { all: true });
                        sheetModal.getRange(0, 1, 7, 2).vAlign(GC.Spread.Sheets.VerticalAlign.center);
                        sheetModal.getRange(0, 1, 7, 2).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
                        sheetModal.getRange(0, 1, 5, 1).backColor('#36495e');
                        sheetModal.getRange(0, 1, 5, 1).foreColor('#FFFFFF');
                        sheetModal.setRowHeight(0, 90.0, SheetArea.viewport);
                        for(var i = 1; i < 7; i++) {
                            sheetModal.setRowHeight(i, 50.0, SheetArea.viewport);
                        }

                        sheetModal.addSpan(0, 1, 1, 2);
                        sheetModal.addSpan(4, 1, 1, 2);
                        sheetModal.addSpan(5, 1, 1, 2);
                        sheetModal.addSpan(6, 1, 1, 2);
                        spread2.resumePaint();
                        break;
                    case '配送要請書':
                        $("#modal2").modal({
                            // escapeClose: false,
                            // clickClose: false,
                            // showClose: false
                        });
                        $('.content_box_loading').show();
                        spread3 = new GC.Spread.Sheets.Workbook(document.getElementById('ss3'));
                         
                        fetch('json/Sample33.ssjson')
                        .then(response => {
                            return response.json();
                        })
                        .then(jsondata => {
                            spread3.fromJSON(jsondata);
                            return;
                        })
                        .then(x => {
                            spread3.suspendPaint();
                            var sheetModal = spread3.getSheetFromName('Sheet1');
                            spread3.options.showVerticalScrollbar = false;
                            spread3.options.showHorizontalScrollbar = false;
                            spread3.options.scrollByPixel = true;
                            sheetModal.options.rowHeaderVisible = false;
                            sheetModal.options.colHeaderVisible = false;
                            sheetModal.options.selectionBorderColor = "transparent";
                            sheetModal.setColumnWidth(5, "*");
                            sheetModal.setColumnWidth(6, "*");

                            sheetModal.getCell(0, 4).text('12/01上車、12/02下車').font('bold normal 18px normal');
                            sheetModal.setText(2, 0, '1');
                            sheetModal.setText(2, 1, 'DC85120015611');
                            sheetModal.setText(2, 2, '11時 30分');
                            sheetModal.setText(2, 3, '06時 30分');
                            sheetModal.setText(2, 4, '[15165]地域 32');
                            
                            sheetModal.setText(4, 0, '[法人] 51-4523');
                            sheetModal.setText(4, 1, 'Y');
                            sheetModal.setText(4, 2, 'Y');
                            sheetModal.setText(4, 4, '50,000¥');

                            sheetModal.setText(6, 1, '強化ガラス 2500 (2500*2000) パーティション用');
                            sheetModal.setText(6, 5, '1');
                            sheetModal.setText(7, 1, '強化ガラス 2500 (2500*2000) パーティション用');
                            sheetModal.setText(7, 5, '1');
                            sheetModal.setText(8, 1, '強化ガラス 2500 (2500*2000) パーティション用');
                            sheetModal.setText(8, 5, '1');

                            sheetModal.getRange(6, 1, 3, 5).backColor('#fff9c4');

                            sheetModal.setText(10, 1, 'サイドボード 1000 (1000*2000) 天井材');
                            sheetModal.setText(10, 5, '1');
                            sheetModal.setText(11, 1, 'サイドボード 1000 (1000*2000) 天井材');
                            sheetModal.setText(11, 5, '1');
                            sheetModal.setText(12, 1, 'サイドボード 1000 (1000*2000) 天井材');
                            sheetModal.setText(12, 5, '1');

                            sheetModal.getRange(10, 1, 3, 5).backColor('#fff9c4');

                            sheetModal.setText(14, 1, '中央版1000 (1350*1750)天井材');
                            sheetModal.setText(14, 5, '1');
                            sheetModal.setText(15, 1, '中央版1000 (1350*1750)天井材');
                            sheetModal.setText(15, 5, '1');

                            sheetModal.getRange(14, 1, 2, 5).backColor('#fff9c4');

                            sheetModal.setText(18, 1, 'バスタブ700(900*250) SDF-122');
                            sheetModal.setText(18, 5, '1');

                            sheetModal.getRange(18, 1, 1, 5).backColor('#fff9c4');

                            sheetModal.setText(22, 1, 'お客様への連絡後、配送を進める必要があります。 他の特異事項はなく、時間厳守でお願いします。');
                            spread3.resumePaint();
                        })
                        .then(() => {
                            $('.content_box_loading').hide();
                        });
                        break;
                    case 'ピッキングリスト':
                    $("#modal3").modal({
                        // escapeClose: false,
                        // clickClose: false,
                        // showClose: false
                    });
                    $('.content_box_loading').show();
                    spread4 = new GC.Spread.Sheets.Workbook(document.getElementById('ss4'));
                    
                    fetch('json/Sample34.ssjson')
                    .then(response => {
                        return response.json();
                    })
                    .then(jsondata => {
                        spread4.fromJSON(jsondata);
                        return;
                    })
                    .then(x => {
                        spread4.suspendPaint();
                        var sheetModal = spread4.getSheetFromName('Sheet1');
                        var SheetArea = GC.Spread.Sheets.SheetArea;
                        spread4.options.showVerticalScrollbar = false;
                        spread4.options.showHorizontalScrollbar = false;
                        spread4.options.scrollByPixel = true;
                        sheetModal.options.rowHeaderVisible = false;
                        sheetModal.options.colHeaderVisible = false;
                        sheetModal.options.selectionBorderColor = "transparent";
                        sheetModal.setColumnWidth(5, "*");
                        sheetModal.frozenRowCount(4);

                        var data = getData2();
                        var startCell = 4;
                        var endCell = 4;
                        var sum = 0;
                        data.forEach(x => {
                            sheetModal.addRows(sheetModal.getRowCount(SheetArea.viewport), 1);
                            sheetModal.setText(endCell, 0, x.c1 + '');
                            sheetModal.setText(endCell, 1, x.c2);
                            sheetModal.setText(endCell, 2, x.c3);
                            sheetModal.setText(endCell, 3, x.c4);
                            sheetModal.setValue(endCell, 4, x.c5 );
                            sheetModal.setText(endCell, 5, x.c6);
                            endCell += 1;
                            sum += x.c5;
                        });

                        sheetModal.addRows(sheetModal.getRowCount(SheetArea.viewport), 1);
                        sheetModal.getCell(endCell, 0).text('総合').font('bold normal 14px normal');
                        sheetModal.getCell(endCell, 4).text(sum + '').font('bold normal 14px normal');
                        sheetModal.addSpan(endCell, 1, 1, 3);
                        sheetModal.getRange(endCell, 0, 1, 6).backColor('#fff9c4');
                        endCell += 1;

                        

                        var lineStyle = GC.Spread.Sheets.LineStyle.thin;
                        var lineBorder = new GC.Spread.Sheets.LineBorder('black', lineStyle);
                        sheetModal.getRange(3, 0, endCell, 6).setBorder(lineBorder, { all: true });
                        spread4.resumePaint();
                    })
                    .then(() => {
                        $('.content_box_loading').hide();
                    });
                    break;
                }
                
            }
        });
        return ;
    })
    .then(() => {
        $('.content_box_loading').hide();
    });
    
    function drawRow(startRow, spread, sheet, SheetArea, data) {
        var spreadNS = GC.Spread.Sheets;
        var combo = new spreadNS.CellTypes.ComboBox();
        var checkBoxList = new GC.Spread.Sheets.CellTypes.CheckBoxList();


        sheet.addRows(sheet.getRowCount(SheetArea.viewport), 3);
        sheet.setRowHeight(startRow - 1, 5.0, SheetArea.viewport);

        sheet.setValue(startRow, 0, data.c1);       // 배송번호
        sheet.setValue(startRow, 1, data.c2);       // 주문번호
        sheet.setValue(startRow, 2, data.c3);       // 주문유형
        sheet.setValue(startRow, 3, data.c4);       // 배송업체
        sheet.setValue(startRow, 4, data.c5);       // 요청사항
        sheet.setValue(startRow, 5, data.c6);       // 고객명
        sheet.setValue(startRow, 6, data.c7);       // 고객주소
        sheet.setCellType(startRow, 7, new GC.Spread.Sheets.CellTypes.Button().text("配送オーダー"), GC.Spread.Sheets.SheetArea.viewport);     // 배송오더
        sheet.setCellType(startRow, 8, new GC.Spread.Sheets.CellTypes.Button().text("配送要請書"), GC.Spread.Sheets.SheetArea.viewport);   // 배송요청서
        sheet.setValue(startRow + 1, 1, data.c8);   // 출고일자
        combo.items(time)
            .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        sheet.getCell(startRow + 1, 2, spreadNS.SheetArea.viewport).cellType(combo).value(data.c9);      // 상차시간
        combo.items([{ text: "PARK", value: "1" }, { text: "KIM", value: "2" }, { text: "LEE", value: "3" }, { text: "CHA", value: "4" }])
            .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        sheet.getCell(startRow + 1, 3, spreadNS.SheetArea.viewport).cellType(combo).value(data.c10);     // 상차담당자
        sheet.setValue(startRow + 1, 6, data.c11);   // 물류비고
        sheet.setCellType(startRow + 1, 7, new GC.Spread.Sheets.CellTypes.Button().text("ピッキングリスト"), GC.Spread.Sheets.SheetArea.viewport);         // 피킹리스트
        sheet.setCellType(startRow + 1, 8, new GC.Spread.Sheets.CellTypes.Button().text("貯蔵"), GC.Spread.Sheets.SheetArea.viewport);              // 저장

        // 병합
        sheet.addSpan(startRow, 0, 2, 1);      // 배송번호
        sheet.addSpan(startRow, 4, 2, 1);      // 요청번호
        sheet.addSpan(startRow, 5, 2, 1);      // 고객명

        // 스타일
        var lineStyle = GC.Spread.Sheets.LineStyle.thin;
        var lineBorder = new GC.Spread.Sheets.LineBorder('black', lineStyle);
        sheet.getRange(startRow, 0, 4, 10).setBorder(lineBorder, { all: true });
        sheet.getRange(startRow, 0, 4, 10).vAlign(GC.Spread.Sheets.VerticalAlign.center);
        sheet.getRange(startRow, 0, 4, 10).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        sheet.getRange(startRow, 0, 4, 10).backColor('#FFFFFF');

        
        sheet.setColumnWidth(6, 220.0, GC.Spread.Sheets.SheetArea.viewport);
        
    }
}

function getData() {
  let arr = [];

  for(var i = 1; i < 20; i++) {
    var date = getRandomArrayElement(['2023-12-05', '2023-12-07', '2023-12-09', '2023-12-10', '2023-12-20', '2023-12-23']);
    var order = getRandomArrayElement([['出庫待ち', '配送業者 未割り当て'], ['配送業者 未割り当て', '配送業者 未割り当て'], ['出荷進行中', getRandomArrayElement(["宅配業者1", "宅配業者2", "宅配業者3"])], ['出庫完了', getRandomArrayElement(["宅配業者1", "宅配業者2", "宅配業者3"])]]);
    var obj = {};
    obj.c1 = 'DL' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = 'OD' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c3 = getRandomArrayElement(["割引注文", "一般注文"]);
    obj.c4 = getRandomArrayElement(["宅配業者1", "宅配業者2", "宅配業者3"]);
    obj.c5 = getRandomArrayElement(["15時以降にお越しください。", "物流管理室に配送してください。", "連絡前に物流担当者にご連絡ください。"]);
    obj.c6 = getRandomArrayElement(["PARK", "KIM", "LEE", "CHA"]);
    obj.c7 = getRandomArrayElement(['地域1', '地域2', '地域3', '地域4']);
    obj.c8 = date;
    obj.c9 = getRandomArrayElement(time).text;
    obj.c10 = getRandomArrayElement(["PARK", "KIM", "LEE", "CHA"]);
    obj.c11 = getRandomArrayElement(["予定日到着予定です。", "1つの製品が配送中に損傷しました。 払い戻し措置を取りました", "緊急転換の要請が入りました。"]);
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

  for(var i = 1; i < 30; i++) {
    var order = getRandomArrayElement([["別相差", "別相差"], [getRandomArrayElement(["副01", "副02", "副03", "A01", "A02", "A03"]) + '-' + (Math.floor(Math.random() * (50 - 10)) + 10) + '-' + (Math.floor(Math.random() * (50 - 10)) + 10),"副資材"]]);
    var obj = {};
    obj.c1 = i;
    obj.c2 = order[0];
    obj.c3 = getRandomArrayElement(["FFVFDVDDF", "GDFSGDFVSD", "EWRWRW", "ASVSCXV", "AQKUTVDVDS"]) + (Math.floor(Math.random() * (5000 - 1000)) + 1000);
    obj.c4 = getRandomArrayElement(["ペスタル一体型 PL-2120", "洗面器アンカーボルト", "ガラスコーナーの棚(2段)", "ガラスコーナーの棚(3段)", "4品 アクセサリー BP-5123 タオル掛け", "4品 アクセサリー BP-5123 石鹸台", "4品 アクセサリー BP-5123 カップ台"]);
    obj.c5 = (Math.floor(Math.random() * (10 - 1)) + 1);
    obj.c6 = order[1];
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