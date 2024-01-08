window.onload = function () {
    var spread = new GC.Spread.Sheets.Workbook(_getElementById('ss'), { sheetCount: 2 });
    initSpread(spread);
    var pivotLayoutSheet = spread.getSheet(0);
    initPivotTable(pivotLayoutSheet);
};

function initSpread(spread) {
    spread.suspendPaint();
    let sheet = spread.getSheet(1);
    sheet.name("DataSource");
    sheet.setRowCount(117);
    sheet.setColumnWidth(0, 120);
    sheet.getCell(-1, 0).formatter("YYYY-mm-DD");
    sheet.getRange(-1,4,0,2).formatter("$ #,##0");
    sheet.setArray(0, 0, pivotSales);
    let table = sheet.tables.add('tableSales', 0, 0, 117, 6);
    for(let i=2;i<=117;i++)
    {
      sheet.setFormula(i-1,5,'=D'+i+'*E'+i)
    }
    table.style(GC.Spread.Sheets.Tables.TableThemes["none"]);
    let sheet0 = spread.getSheet(0);
    sheet0.name("PivotLayout");
    spread.resumePaint();
}

function initPivotTable(sheet) {
    let myPivotTable = sheet.pivotTables.add("myPivotTable", "tableSales", 1, 1, GC.Spread.Pivot.PivotTableLayoutType.outline, GC.Spread.Pivot.PivotTableThemes.light8);
    myPivotTable.suspendLayout();
    myPivotTable.options.showRowHeader = true;
    myPivotTable.options.showColumnHeader = true;
    myPivotTable.add("salesperson", "Salesperson", GC.Spread.Pivot.PivotTableFieldType.rowField);
    myPivotTable.add("car", "Cars", GC.Spread.Pivot.PivotTableFieldType.rowField);
    myPivotTable.add("date", "Date", GC.Spread.Pivot.PivotTableFieldType.columnField);
    let groupInfo = { originFieldName: "date", dateGroups: [{ by: GC.Pivot.DateGroupType.quarters }] };
    myPivotTable.group(groupInfo);
    myPivotTable.add("total", "Totals", GC.Spread.Pivot.PivotTableFieldType.valueField, GC.Pivot.SubtotalType.sum);
    var panel = new GC.Spread.Pivot.PivotPanel("myPivotPanel", myPivotTable, document.getElementById("panel"));
    panel.sectionVisibility(GC.Spread.Pivot.PivotPanelSection.fields + GC.Spread.Pivot.PivotPanelSection.area);
    myPivotTable.resumeLayout();
    myPivotTable.autoFitColumn();
}

function _getElementById(id) {
    return document.getElementById(id);
}
