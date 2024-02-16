var spread;
window.onload = function() {
	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    
    //spread.suspendPaint();
	initSpread(spread);
    //spread.resumePaint();

    $('#btnChart').on('click', function(e){
        location.href = '/sample?depth1=OMS&depth2=출고요청서&sampleId=16';
    });
    $('#btnSample19').on('click', function(e){
        location.href = '/sample?depth1=OMS&depth2=출고요청서&sampleId=19';
    });
};

function initSpread(spread) {
    fetch('json/Sample11.ssjson')
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
        var data = getData();
        for(var i = 0; i < 15; i++) {
            drawRow((i + 1)*5, spread, sheet, SheetArea, data[i]);
        }
        spread.resumePaint();
        spread.bind(GC.Spread.Sheets.Events.ButtonClicked, function (e, args) {
            var sheet = args.sheet, row = args.row, col = args.col;
            var cellType = sheet.getCellType(row, col);
            if (cellType instanceof GC.Spread.Sheets.CellTypes.Button) {
                switch (cellType._text) {
                    case '배송내역서':
                        location.href = '/sample?depth1=OMS&depth2=출고요청서&sampleId=12';
                        break;
                    case '저장':
                        if(confirm('변경 내용을 저장하시겠습니까?')) {
                            location.reload();
                        }
                        break;
                    case '배송상차관리':
                        location.href = '/sample?depth1=OMS&depth2=출고요청서&sampleId=14';
                        break;
                    case '상세':
                        location.href = '/sample?depth1=OMS&depth2=출고요청서&sampleId=15';
                        break;
                }
            }
        });
        return ;
    });

    function drawRow(startRow, spread, sheet, SheetArea, data) {
        sheet.setValue(startRow, 0, data.c1);       // 수주번호
        sheet.setValue(startRow, 1, data.c2);       // 주문번호
        sheet.setValue(startRow, 2, data.c3);       // 출고일
        sheet.setValue(startRow, 3, data.c4);       // 주문일자
        sheet.setValue(startRow, 4, data.c5);       // 대리점명
        sheet.setValue(startRow, 5, data.c6);       // 영업담당자
        sheet.setValue(startRow, 6, data.c7);       // 출고제목
        sheet.setValue(startRow, 7, data.c8);       // 출고 메모
        sheet.setValue(startRow, 8, data.c19);      // 상위주문번호
        

        sheet.setValue(startRow + 1, 3, data.c9);   // 출고 준비일
        sheet.setValue(startRow + 1, 4, data.c10);    // 공급가액
        sheet.setValue(startRow + 1, 5, data.c11);      // 배송비
        sheet.setValue(startRow + 1, 6, data.c12);  // 고객명 | 연락처 | 고객주소

        sheet.setValue(startRow + 2, 1, data.c13);           // 품목

        
        // combo1 = combo1.items([{ text: "출고 대기", value: "1" }, { text: "배송업체 미배정", value: "2" }, { text: "출고 진행중", value: "3" }, { text: "출고 완료", value: "4" }])
        //     .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        // sheet.getCell(startRow + 2, 3, spreadNS.SheetArea.viewport).cellType(combo1).value(data.c14);     // 출고상태
        sheet.setValue(startRow + 2, 3, data.c14); 
        // combo2 = combo2.items([{ text: "박OO", value: "1" }, { text: "김OO", value: "2" }, { text: "이OO", value: "3" }, { text: "차OO", value: "4" }])
        //     .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        // sheet.getCell(startRow + 2, 4, spreadNS.SheetArea.viewport).cellType(combo2).value(data.c15);     // 물류담당자
        sheet.setValue(startRow + 2, 4, data.c15); 
        // combo3 = combo3.items([{ text: "있음", value: "1" }, { text: "없음", value: "2" }])
        //     .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        // sheet.getCell(startRow + 2, 5, spreadNS.SheetArea.viewport).cellType(combo3).value(data.c16);     // 차량여부
        sheet.setValue(startRow + 2, 5, data.c16); 
        
        // checkBoxList.itemSpacing({horizontal: 5});
        // checkBoxList.items([{text:"긴급",value:1},{text:"왕복",value:2},{text:"세대반입",value:3}]);
        // sheet.setCellType(startRow + 2, 6, checkBoxList, GC.Spread.Sheets.SheetArea.viewport);          // 긴급/왕복/세대반입여부/반입비
        sheet.setValue(startRow + 2, 6, data.c17);       
        sheet.setValue(startRow + 2, 7, data.c18);
                     
        // combo4 = combo4.items([{ text: "배송업체 미배정", value: "0" }, { text: "CJ 택배", value: "1" }, { text: "로젠 택배", value: "2" }, { text: "대한 통운", value: "3" }])
        //     .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        // sheet.getCell(startRow + 3, 3, spreadNS.SheetArea.viewport).cellType(combo4).value(data.c20);      // 배송업체
        sheet.setValue(startRow + 3, 3, data.c20);
        sheet.setValue(startRow + 3, 4, data.c21);                        // 송장번호
        // combo5 = combo5.items([{ text: "선불", value: "0" }, { text: "운임", value: "1" }, { text: "후불", value: "2" }])
        //     .editorValueType(spreadNS.CellTypes.EditorValueType.text);
        // sheet.getCell(startRow + 3, 5, spreadNS.SheetArea.viewport).cellType(combo5).value(data.c22);      // 운임여부
        sheet.setValue(startRow + 3, 5, data.c22);
        sheet.setValue(startRow + 3, 6, data.c23);                        // 물류메모
        // sheet.setCellType(startRow + 3, 8, new GC.Spread.Sheets.CellTypes.Button().text("상세"), GC.Spread.Sheets.SheetArea.viewport);     // 이력조회
        // sheet.setCellType(startRow + 3, 9, new GC.Spread.Sheets.CellTypes.Button().text("저장"), GC.Spread.Sheets.SheetArea.viewport);         // 저장

        // 병합
        // sheet.addSpan(startRow, 0, 4, 1);      // 수주번호
        // sheet.addSpan(startRow, 1, 2, 1);      // 주문번호
        // sheet.addSpan(startRow, 2, 2, 1);      // 출고번호
        // sheet.addSpan(startRow, 8, 2, 2);      // 상위주문번호
        // sheet.addSpan(startRow + 2, 1, 2, 2);      // 품목
        // sheet.addSpan(startRow + 1, 6, 1, 2);      // 고객명 | 연락처 | 고객주소
        // sheet.addSpan(startRow + 3, 6, 1, 2);      // 물류메모
        

        // 스타일
        // var lineStyle = GC.Spread.Sheets.LineStyle.thin;
        // var lineBorder = new GC.Spread.Sheets.LineBorder('black', lineStyle);
        // sheet.getRange(startRow, 0, 4, 10).setBorder(lineBorder, { all: true });
        // sheet.getRange(startRow, 0, 4, 10).vAlign(GC.Spread.Sheets.VerticalAlign.center);
        // sheet.getRange(startRow, 0, 4, 10).hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        // sheet.getRange(startRow, 0, 4, 10).backColor('#FFFFFF');

        
        // sheet.setColumnWidth(6, 220.0, GC.Spread.Sheets.SheetArea.viewport);
        
    }
}

function getData() {
  let arr = [];

  for(var i = 1; i < 16; i++) {
    var date = getRandomArrayElement(['2023-12-05', '2023-12-07', '2023-12-09', '2023-12-10', '2023-12-20', '2023-12-23']);
    var order = getRandomArrayElement([['출고 대기', '배송업체 미배정'], ['배송업체 미배정', '배송업체 미배정'], ['출고 진행중', getRandomArrayElement(["CJ 택배", "로젠 택배", "대한 통운"])], ['출고 완료', getRandomArrayElement(["CJ 택배", "로젠 택배", "대한 통운"])]]);
    var obj = {};
    obj.c1 = 'SN' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = 'OD' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c3 = date;
    obj.c4 = getRandomArrayElement(['2023-12-05 15:20', '2023-12-07 17:20', '2023-12-09 09:20', '2023-12-10 15:20', '2023-12-20 15:50', '2023-12-23 18:20']);
    obj.c5 = getRandomArrayElement(['디자인앤바스', '위생도기앤델라', '마누스인테리어', '(주)제이유산업', '자람건설', '오티시스템']);
    obj.c6 = getRandomArrayElement(["박OO", "김OO", "이OO", "차OO"]);
    obj.c7 = getRandomArrayElement(["05일 06:30", "08일 06:30", "20일 06:30", "30일 06:30"]);
    obj.c8 = getRandomArrayElement(["할인 적용", "할인 미적용", "할인 전환", "일반주문"]);
    obj.c9 = date;
    obj.c10 = getRandomArrayElement(["1,659,800원", "2,699,800원", "259,800원", "51,659,800원"]);
    obj.c11 = getRandomArrayElement(["1,000원", "3,000원", "50,000원", "100,000원"]);
    obj.c12 = getRandomArrayElement(["고OO | 01084416523 | 서울 광진구 뚝섬로 4", "박OO | 01084416523 | 경기도 영통구 영통로 4", "윤OO | 01084416523 | 강원 원주시 명륜로 4", "이OO | 01084416523 | 강원 원주시 명륜로 80"]);
    obj.c13 = getRandomArrayElement(['욕실', '주방', '붙박이/현관장', '마루', '도어', '붙박이', '중문', '현관장']);
    obj.c14 = order[0]
    obj.c15 = getRandomArrayElement(["박OO", "김OO", "이OO", "차OO"]);
    obj.c16 = getRandomArrayElement(["있음", "없음"]);
    obj.c17 = getRandomArrayElement([[1], [1, 2], [2, 3], [1, 3], [3]]);
    obj.c18 = getRandomArrayElement(["없음", "1,000원", "3,000원", "50,000원", "100,000원"]);
    obj.c19 = 'PD' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c20 = order[1];
    obj.c21 = (order[1] == '배송업체 미배정') ? '-' : (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c22 = getRandomArrayElement(["운임", "후불", "선불"]);
    obj.c23 = getRandomArrayElement(["예정일 도착 예정입니다.", "1개 제품이 배송 중 손상되었습니다. 환불 조치하였습니다.", "긴급 전환 요청들어왔습니다."]);

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