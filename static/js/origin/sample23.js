let spread;
let socket = io();
let lastChangedTime = 0;

socket.on('synchronous spreadjs', function(arrSpreadChangedInfo) {
    console.log(arrSpreadChangedInfo);
    let arrSpreadChangedInfoFiltered = arrSpreadChangedInfo.filter(x => x.changeTime > lastChangedTime);
    arrSpreadChangedInfoFiltered.forEach((e, i) => {
        spread.getActiveSheet().setValue(e.row, e.col, e.newValue);
        if(i === arrSpreadChangedInfoFiltered.length - 1) lastChangedTime = e.changeTime;
    });
});

window.onload = function() {
    $('.content_box_loading').show();
	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    
    spread.suspendPaint();
	initSpread();
    spread.resumePaint();
    socket.emit('init synchronous spreadjs');

    spread.bind(GC.Spread.Sheets.Events.ValueChanged, function (e, info) {
        let objSpreadChangedInfo = {col: info.col, row: info.row, newValue: info.newValue, changeTime: Date.now()};
        socket.emit('synchronous spreadjs', objSpreadChangedInfo);
    });

    $('#btnGrid').on('click', function(e) {
        location.href = `/sample?depth1=${depth1}&depth2=배송내역서&sampleId=21`;
    });

    $('#btnSave').on('click', function(e) {
        
        if($('#txtNum').val() == '') {
            alert('주문번호를 입력해주세요.');
            return;
        }

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
}