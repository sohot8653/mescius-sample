let spread;
let socket = io();
let lastChangedTime = 0;
let dateNow = Date.now();
let userName = 'user' + dateNow;
let disabledFlagForRangeChanged = 0;
const backgroundColors = [
    "#0077B6", // 파란색
    "#008000", // 녹색
    "#800080", // 보라색
    "#FF6347", // 주황색
    "#4169E1", // 로얄블루
    "#8B008B", // 다크마젠타
    "#00CED1", // 다크터쿼이즈
    "#FF8C00", // 다크오렌지
    "#7B68EE", // 미디엄슬레이트블루
    "#00FA9A"  // 미디엄스프링그린
];

// receive spreadJS event value changed
// 값 동기화 이벤트 수행
socket.on('synchronous spreadjs valueChanged', function(arrSpreadChangedInfo) {
    let arrSpreadChangedInfoFiltered = arrSpreadChangedInfo.filter(x => x.changeTime > lastChangedTime);
    disabledFlagForRangeChanged = 1;
    arrSpreadChangedInfoFiltered.forEach((e, i) => {
        spread.getActiveSheet().clear(e.row,e.col,1,1, GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.StorageType.data);
        if(e.newValue !== '') {
            if(e.hasFormula) {
                spread.getActiveSheet().setFormula(e.row, e.col, e.newValue);
            } else {
                spread.getActiveSheet().setValue(e.row, e.col, e.newValue);
            }
        }
        spread.getActiveSheet().getCell(e.row, e.col).locked(false);
        if(i === arrSpreadChangedInfoFiltered.length - 1) lastChangedTime = e.changeTime;
    });
    disabledFlagForRangeChanged = 0;
});

// receive spreadJS event editStarting
// "커서 표기 이벤트" + "수정 셀 locked" 
socket.on('synchronous spreadjs editStarting other', function(arrSpreadEditingCell) {
    let arrSpreadEditingCellFiltered = arrSpreadEditingCell.filter(x => x.userName !== userName);
    spread.getActiveSheet().comments.clear();
    arrSpreadEditingCellFiltered.forEach((e, i) => {

        let idx = Number(String(dateNow)[String(dateNow).length-1]);

        // 커서 표기 이벤트
        let comment = spread.getActiveSheet().comments.add(e.row, e.col, e.userName);
        comment.width(140);
        comment.height(30);
        comment.foreColor('white');
        comment.backColor(backgroundColors[idx]);
        comment.opacity(0.6);
        comment.location(new GC.Spread.Sheets.Point(0, 0));
        comment.indicatorColor(backgroundColors[idx]);
        comment.locked(true).displayMode(1);

        // 수정 셀 locked
        spread.getActiveSheet().getRange(0, 0, spread.getActiveSheet().getRowCount(), spread.getActiveSheet().getColumnCount()).locked(false);
        spread.getActiveSheet().getCell(e.row, e.col).locked(true);
    });
});

window.onload = function() {
    $('.content_box_loading').show();
	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    
    spread.suspendPaint();
	initSpread();
    spread.resumePaint();
    socket.emit('synchronous spreadjs init');

    spread.bind(GC.Spread.Sheets.Events.ValueChanged, function (e, info) {
        socket.emit('synchronous spreadjs valueChanged', [{col: info.col, row: info.row, newValue: info.newValue, changeTime: Date.now(), userName}]);
    });

    spread.bind(GC.Spread.Sheets.Events.RangeChanged, function (e, info) {
        if(disabledFlagForRangeChanged == 1) {
            return;
        }
        let changeTime = Date.now();
        // action
        // 1: 마우스 끌기
        // 2: delete key
        // 3: PAST
        // 6: 수식
        if(info.action === 2) {
            socket.emit('synchronous spreadjs valueChanged', 
                info.changedCells.map(element => {
                    let returnObj = {col: element.col, row: element.row, changeTime, userName};
                    returnObj.newValue = '';
                    returnObj.hasFormula = false;
                    return returnObj;
                })
            );
        } else if([1,3,6].indexOf(info.action) !== -1) {
            socket.emit('synchronous spreadjs valueChanged', 
                info.changedCells.map(element => {
                    let returnObj = {col: element.col, row: element.row, changeTime, userName};
                    if(spread.getActiveSheet().hasFormula(element.row, element.col)) {  // 수식 여부 체크
                        returnObj.newValue = spread.getActiveSheet().getCell(element.row, element.col).formula();
                        returnObj.hasFormula = true;
                    } else {
                        returnObj.newValue = spread.getActiveSheet().getCell(element.row, element.col).text();
                        returnObj.hasFormula = false;
                    }
                    return returnObj;
                })
            );
        }
    });

    spread.bind(GC.Spread.Sheets.Events.EditStarting, function (sender, args) {
        socket.emit('synchronous spreadjs editStarting', {col: args.col, row: args.row, userName});
    });

    $('#btnGrid').on('click', function(e) {
        location.href = `/sample?depth1=${depth1}&depth2=배송내역서&sampleId=21`;
    });

    $('#btnSave').on('click', function(e) {
        
        if($('#txtNum').val() == '') {
            alert('주문번호를 입력해주세요.');
            return;
        }

        spread.getActiveSheet().comments.clear();

        var serializationOption = {
			ignoreFormula: false,
			ignoreStyle: false,
			rowHeadersAsFrozenColumns: false,
			columnHeadersAsFrozenRows: false
		};
        var spread1 = GC.Spread.Sheets.findControl(document.getElementById('ss'));
		var jsonStr = JSON.stringify(spread1.toJSON(serializationOption));

        if(localStorage.getItem("sample23Index") == null) {
            localStorage.setItem("sample23Index", 0);
            localStorage.setItem("sample23Num" + "0", $('#txtNum').val());
            localStorage.setItem("sample23Json" + "0", jsonStr);
        } else {
            var sample23IndexNew = Number(localStorage.getItem("sample23Index")) + 1;
            localStorage.setItem("sample23Index", sample23IndexNew);
            localStorage.setItem("sample23Num" + sample23IndexNew, $('#txtNum').val());
            localStorage.setItem("sample23Json" + sample23IndexNew, jsonStr);
        }
        
        alert('저장되었습니다.');
        location.href = `/sample?depth1=${depth1}&depth2=배송내역서&sampleId=21`;
    });
};

function initSpread() {
    if(!localStorage.getItem('templateName') || !localStorage.getItem('templateJson')) {
        fetch('json/Sample22.ssjson')
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            localStorage.setItem("templateName", '배송요청서_2024');
            localStorage.setItem("templateJson", JSON.stringify(jsondata));
            return;
        })
        .then(x => {
            spread.fromJSON(JSON.parse(localStorage.getItem('templateJson')));
        })
        .then(() => {
            $('.content_box_loading').hide();
        });
    } else {
        spread.fromJSON(JSON.parse(localStorage.getItem('templateJson')));
        $('.content_box_loading').hide();
    }

    
    for(let i = 0; i < spread.getSheetCount(); i++) {
        spread.getSheet(i).options.isProtected = true;
        spread.getSheet(i).getRange(0, 0, spread.getSheet(i).getRowCount(), spread.getSheet(i).getColumnCount()).locked(false);
    }
}