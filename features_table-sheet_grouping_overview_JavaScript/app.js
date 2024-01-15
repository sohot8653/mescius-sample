/*REPLACE_MARKER*/
/*DO NOT DELETE THESE COMMENTS*/
window.onload = function() {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
};

function initSpread(spread) {
    spread.suspendPaint();
    spread.options.autoFitType = GC.Spread.Sheets.AutoFitType.cellWithHeader;

    //init a data manager
    var dataManager = spread.dataManager();
    var ordersTable = dataManager.addTable("ordersTable", {
        data: orderDataSource,
        schema: {
            type: "csv",
            columns: {
                OrderDate: { dataType: "date" },
                ShipDate: { dataType: "date" },
                Quantity: { dataType: "number" },
                Amount: { dataType: "number" }
            }
        }
    });

    //init a table sheet
    var sheet = spread.addSheetTab(0, "TableSheet1", GC.Spread.Sheets.SheetType.tableSheet);    
    sheet.setDefaultRowHeight(40, GC.Spread.Sheets.SheetArea.colHeader);
    sheet.options.allowAddNew = false; //hide new row

    //bind a view to the table sheet
    ordersTable.fetch().then(function () {
        var myView = ordersTable.addView("myView", [
            { value: "OrderID", caption: "ID", width: 100 },
            { value: "Product", width: 150 },
            { value: "OrderDate", caption: "Order Date", width: 105 },
            { value: "ShipDate", caption: "Ship Date", width: 105 },
            { value: "Quantity", width: 100 },
            { value: "Amount", width: 100 },
            { value: "Office", width: 100 },
            { value: "Category", width: 150 }
        ]);
        spread.suspendPaint();
        sheet.setDataView(myView);
        groupCallback();
        spread.resumePaint();
    });

    spread.resumePaint();

    var groupCallback = function () {
        sheet.groupBy([
            {
                caption: "Category", field: "Category", width: 120, style: { backColor: "#D0CECE" }, summaryFields: [
                    {
                        caption: "Σ(Quantity)",
                        formula: "=SUM([Quantity])",
                        slice: {field: "Office", width: 70, style: {backColor: "#D9E1F2"}},
                        width: 105,
                        style: {backColor: "#D9E1F2"}
                    },
                    {
                        caption: "μ(Amount)",
                        formula: "=AVERAGE([Amount])",
                        slice: {field: "=YEAR([@OrderDate])", width: 80, style: {backColor: "#E2EFDA", formatter: "$ #,##0.00"}},
                        width: 100,
                        style: {backColor: "#E2EFDA", formatter: "$ #,##0.00"}
                    }
                ]
            }
        ]);
    };
    var groupButton = document.getElementById("groupButton");
    groupButton.addEventListener("click", groupCallback);
    var removeGroupButton = document.getElementById("removeGroupButton");
    removeGroupButton.addEventListener("click", function () {
        sheet.removeGroupBy();
    });
}