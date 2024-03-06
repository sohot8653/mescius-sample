let spread;
window.onload = function() {
    $('.content_box_loading').show();
	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    
    spread.suspendPaint();
	initSpread(spread);
    spread.resumePaint();

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

function initSpread(spread) {
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