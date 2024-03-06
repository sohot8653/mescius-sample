let spread;
window.onload = function() {
    $('.content_box_loading').show();
	spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    
    spread.suspendPaint();
	initSpread(spread);
    spread.resumePaint();

    $('#btnGrid').on('click', function(e) {
        location.href = `/sample?depth1=${depth1}&depth2=はいそう うちわけしょ&sampleId=28`;
    });

    $('#btnSave').on('click', function(e) {
        
        if($('#txtNum').val() == '') {
            alert('注文番号を入力してください。');
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

        if(localStorage.getItem("sample30Index") == null) {
            localStorage.setItem("sample30Index", 0);
            localStorage.setItem("sample30Num" + "0", $('#txtNum').val());
            localStorage.setItem("sample30Json" + "0", jsonStr);
        } else {
            var sample30IndexNew = Number(localStorage.getItem("sample30Index")) + 1;
            localStorage.setItem("sample30Index", sample30IndexNew);
            localStorage.setItem("sample30Num" + sample30IndexNew, $('#txtNum').val());
            localStorage.setItem("sample30Json" + sample30IndexNew, jsonStr);
        }
        
        alert('保存されました。');
        location.href = `/sample?depth1=${depth1}&depth2=はいそう うちわけしょ&sampleId=28`;
    });
};

function initSpread(spread) {
    if(!localStorage.getItem('templateName_jp') || !localStorage.getItem('templateJson_jp')) {
        fetch('json/Sample30.ssjson')
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            localStorage.setItem("templateName_jp", '配送要請書_2024');
            localStorage.setItem("templateJson_jp", JSON.stringify(jsondata));
            return;
        })
        .then(x => {
            spread.fromJSON(JSON.parse(localStorage.getItem('templateJson_jp')));
        })
        .then(() => {
            $('.content_box_loading').hide();
        });
    } else {
        spread.fromJSON(JSON.parse(localStorage.getItem('templateJson_jp')));
        $('.content_box_loading').hide();
    }
}