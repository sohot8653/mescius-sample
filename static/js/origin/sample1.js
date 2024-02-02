var tables = {};
var selectedTable = "order";
var dataTemplate = [
    {
        id: 0,
        name: '기본 컬럼 구조',
        column: [
            [
                "품목코드",
                "품목코드"
            ],
            [
                "중량",
                "중량"
            ],
            [
                "공장도가",
                '=CONCATENATE([@공장도가], "원")'
            ],
            [
                "표준원가",
                '=CONCATENATE([@표준원가], "원")'
            ],
            [
                "총원가",
                '=CONCATENATE([@총원가], "원")'
            ]
        ]
    },
    {
        id: 1,
        name: '원가율 추가',
        column: [
            [
                "품목코드",
                "품목코드"
            ],
            [
                "중량",
                "중량"
            ],
            [
                "공장도가",
                '=CONCATENATE([@공장도가], "원")'
            ],
            [
                "표준원가",
                '=CONCATENATE([@표준원가], "원")'
            ],
            [
                "총원가",
                '=CONCATENATE([@총원가], "원")'
            ],
            [
                "원가율",
                "=ROUND(([@총원가] - [@표준원가]) / [@표준원가] * 100, 2)"
            ]
        ]
    }
]

window.onload = function () {
    var mainSpread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
    var dataManager = mainSpread.dataManager();
    tables.order = dataManager.addTable("orderTable", {
        remote: {
            read: {
                url: 'json/Sample.json'
            }
        }
    });
    
    var columnsSpread = new GC.Spread.Sheets.Workbook(document.getElementById("sampleDiv3"));
    var sheet = columnsSpread.getActiveSheet();
    columnsSpread.options.tabStripVisible = false;
    columnsSpread.options.showHorizontalScrollbar = false;
    columnsSpread.options.scrollbarMaxAlign = true;
    
    sheet.setColumnCount(2);
    sheet.setRowCount(10);
    sheet.setColumnWidth(0, 100);
    sheet.setColumnWidth(1, "*");
    sheet.setText(0,0,"헤더명",1);
    sheet.setText(0,1,"출력값",1);
    sheet.getRange(-1,1,-1,1).formatter("@");
    
    document.getElementById("setButton").addEventListener("click", function (e) {
        setView();
    }, false);
    document.getElementById("saveButton").addEventListener("click", function (e) {
        insertTemplate();
    }, false);
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    sheet.setArray(0, 0, dataTemplate.find(x => x.id == 0).column);

    var columnsSpread = new GC.Spread.Sheets.Workbook(document.getElementById("sampleDiv4"));
    var sheet = columnsSpread.getActiveSheet();
    columnsSpread.options.tabStripVisible = false;
    columnsSpread.options.showHorizontalScrollbar = false;
    columnsSpread.options.scrollbarMaxAlign = true;
    sheet.setColumnCount(2);
    sheet.setRowCount(dataTemplate.map(x => [x.name]).length);
    sheet.setColumnWidth(0, 60);
    sheet.setColumnWidth(1, "*");
    sheet.setText(0,0,"ID",1);
    sheet.setText(0,1,"템플릿",1);
    sheet.getRange(-1,1,-1,1).formatter("@");
    sheet.setArray(0, 0, dataTemplate.map(x => [x.id, x.name]));
    sheet.options.isProtected = true;
    sheet.selectionPolicy(0);
    sheet.selectionUnit(1);
    sheet.bind(GC.Spread.Sheets.Events.SelectionChanging, function (e, info) {
        switchTable(sheet.getValue(info.newSelections[0].row, 0));
    });

    setView();
};

function switchTable (templateId) {
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    sheet.clear(0, 0, sheet.getRowCount(), sheet.getColumnCount(), GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.StorageType.data);
    sheet.setArray(0, 0, dataTemplate.find(x => x.id == templateId).column);
    setView();
}
function setView () {
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    var rowCount = sheet.getRowCount();
    var fields = [];
    for (var i = 0; i < rowCount; i++) {
        var value = sheet.getValue(i, 1);
        if (value) {
            fields.push({value: value, caption: sheet.getValue(i, 0), width: 200});
        }
    }
    var view = tables[selectedTable].addView("selectedTable"+(new Date()).valueOf(), fields);

    var spread = GC.Spread.Sheets.findControl( document.getElementById("ss"));
    spread.clearSheets();
    spread.clearSheetTabs();
    var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
    sheet.applyTableTheme(GC.Spread.Sheets.Tables.TableThemes.professional4);
    sheet.options.allowAddNew = false;
    sheet.actionColumn.options({ visible: false });
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);
    spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

    view.fetch().then(function(args) {
        sheet.suspendPaint();
        sheet.setDataView(view);
        sheet.resumePaint();
    });
}

function insertTemplate() {
    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv3"));
    var sheet = spread.getActiveSheet();
    dataTemplate.push({
        id: Math.max(...dataTemplate.map(x => x.id)) + 1,
        name: document.getElementById('txtTemplateName').value || '이름없음',
        column: sheet.getArray(0, 0, sheet.getRowCount(), sheet.getColumnCount())
    })

    var spread = GC.Spread.Sheets.findControl( document.getElementById("sampleDiv4"));
    var sheet = spread.getActiveSheet();
    sheet.clear(0, 0, sheet.getRowCount(), sheet.getColumnCount(), GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.StorageType.data);
    sheet.setRowCount(dataTemplate.map(x => [x.name]).length);
    sheet.setArray(0, 0, dataTemplate.map(x => [x.id, x.name]));
}