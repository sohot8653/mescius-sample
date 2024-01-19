/*REPLACE_MARKER*/
/*DO NOT DELETE THESE COMMENTS*/
window.onload = function() {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
    initEvent(spread);
};

function initSpread(spread) {
    spread.suspendPaint();
    spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;
    spread.options.highlightInvalidData = true;

    //init a data manager
    var baseApiUrl = getBaseApiUrl();
    var dataManager = spread.dataManager();
    //add product table
    var productTable = dataManager.addTable("productTable", {
        remote: {
            read: {
                url: baseApiUrl + "/Product"
            }
        }
    });

    //init a table sheet
    var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);
    sheet.options.allowAddNew = false; //hide new row
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);

    //bind a view to the table sheet
    var numericStyle = {};
    numericStyle.formatter = "$ 0.00";
    var formulaRule = {
        ruleType: "formulaRule",
        formula: "@>=50",
        style: {
            font:"bold 12pt Calibri",
            backColor: "#F7D3BA",
            foreColor :"#F09478"
        }
    };
    var positiveNumberValidator = {
        type: "formula",
        formula: '@<50',
        inputTitle: 'Data validation:',
        inputMessage: 'Enter a number smaller than 50.',
        highlightStyle: {
            type: 'icon',
            color: "#F09478",
            position: 'outsideRight',
        }
    };
    var myView = productTable.addView("myView", [
            { value: "Id", caption: "ID", width: 46},
            { value: "ProductName", caption: "Name", width: 200 },
            { value: "UnitPrice", caption: "Unit Price", width: 140, conditionalFormats: [formulaRule], validator: positiveNumberValidator, style: numericStyle },       
            { value: "=SUM([@UnitsInStock] , [@UnitsOnOrder])", caption: "Total Units", width: 140},
            { value: "Discontinued", width: 120, style:{formatter:"[green]✔;;[red]✘"}}
        ]);
    myView.fetch().then(function() {
        sheet.setDataView(myView);
    });

    spread.resumePaint();
}

function initEvent(spread) {

    document.getElementById('toJSON').onclick = function() {
        var json = spread.toJSON({ includeBindingSource: true, saveAsView: true });
        saveAs(new Blob([JSON.stringify(json)], { type: "text/plain;charset=utf-8" }), 'download.ssjson');
    };

    document.getElementById('toSJS').onclick = function() {
        spread.save(function (blob) {
            // save blob to a file
            saveAs(blob, 'download.sjs');
        }, function (e) {
            console.log(e);
        });
    }

    document.getElementById('fromJSONOrSJS').onclick = function() {
        var file = document.getElementById("fileDemo").files[0];
        if (file) {
            var suffix = file.name.substr(file.name.lastIndexOf(".") + 1).toLowerCase();
            if (suffix === "ssjson" || suffix === "json") {
                var reader = new FileReader();
                reader.onload = function () {
                    var json = JSON.parse(this.result);
                    spread.fromJSON(json);
                };
                reader.readAsText(file);
            } else if (suffix === 'sjs') {
                spread.open(file, function () {
                    // success callback to do something
                }, function (e) {
                    console.log(e); // error callback
                });
            }
        }

    };

    document.getElementById('saveExcel').onclick = function() {
        spread.export(function (blob) {
            // save blob to a file
            saveAs(blob, "export.xlsx");
        }, function (e) {
            console.log(e);
        }, {
            fileType: GC.Spread.Sheets.FileType.excel
        });
    };

    document.getElementById('exportPDF').onclick = function() {
        spread.savePDF(function(blob) {
            saveAs(blob, "export.pdf");
        }, function(error) {
            console.log(error);
        }, null, spread.getSheetCount() + spread.getActiveSheetTabIndex());
    };

    document.getElementById('print').onclick = function() {
        spread.print();
    };
}

function getBaseApiUrl() {
    return 'https://demo.mescius.co.kr/spreadjs/learn-spreadjs/features/table-sheet/import-export/purejs'.match(/http.+spreadjs\/learn-spreadjs\//)[0] + 'server/api';
}