window.onload = function() {
	// host the workbook control in a DIV element with id "ss"
	var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), {
		sheetCount: 2,
	});
    
	initSpread(spread);
};

function initSpread(spread) {
    fetch('json/Sample4.ssjson')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        spread.fromJSON(jsondata);
        return;
    })
    .then(x => {
        spread.suspendPaint();
        var spread = GC.Spread.Sheets.findControl(document.getElementById('ss'));
        spread.options.showVerticalScrollbar = false;
        spread.options.showHorizontalScrollbar = false;
        spread.options.backColor = "#e6e6e6";
        spread.options.grayAreaBackColor = "#e6e6e6";
        var sheet = spread.getSheetFromName('Sheet1');
        sheet.options.rowHeaderVisible = false;
        sheet.options.colHeaderVisible = false;
        sheet.options.selectionBorderColor = "transparent";
        sheet.setColumnWidth(9, 22.0);
        sheet.setColumnWidth(13, 22.0);
        sheet.setColumnWidth(17, 22.0);
        sheet.setColumnWidth(1, "*");
        sheet.scroll(-1000, 0);
        spread.resumePaint();
        return;
    });
}