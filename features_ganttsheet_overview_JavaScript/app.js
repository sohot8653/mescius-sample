/*REPLACE_MARKER*/
/*DO NOT DELETE THESE COMMENTS*/

window.onload = function() {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
    initSpread(spread);
};

function initSpread(spread) {
    spread.suspendPaint();
    initGanttSheetWithIdParentIdData(spread);
    initGanttSheetWithLevelData(spread);
    initGanttSheetWithChildrenData(spread);
    spread.resumePaint();
}

function initGanttSheetWithIdParentIdData(spread) {
    var tableName = "Gantt_Id";
    var baseApiUrl = getBaseApiUrl();
    var apiUrl = baseApiUrl + "/" + tableName;
    var dataManager = spread.dataManager();
    var myTable1 = dataManager.addTable("myTable1", {
        batch: true,
        remote: {
            read: {
                url: apiUrl
            }
        },
        schema: {
            hierarchy: {
                type: "Parent",
                column: "parentId"
            },
            columns: {
                id: { isPrimaryKey: true },
                taskNumber: { dataType: "rowOrder" }
            }
        }
    });
    var ganttSheet = spread.addSheetTab(0, "GanttSheet1", GC.Spread.Sheets.SheetType.ganttSheet);
    var view = myTable1.addView("myView1", [
        { value: "taskNumber", caption: "NO", width: 60 },
        { value: '=CONCAT("(L",LEVEL(),"-",LEVELROWNUMBER(),")")', caption: "L" },
        { value: "name", caption: "Task Name", width: 200 },
        { value: "duration", caption: "Duration", width: 90 },
        { value: "predecessors", caption: "Predecessors", width: 60 },
        { value: "resource", caption: "Resource", width: 80 },
        { value: "cost", caption: "Cost", style: { formatter: "$0" } },
        { value: '=IF([@cost]="","",[@cost]/[@resource])', caption: "AVG Cost", width: 100, style: { formatter: "$0" } }
    ]);
    view.fetch().then(function() {
        ganttSheet.bindGanttView(view);
    });
}

function initGanttSheetWithLevelData(spread) {
    var tableName = "Gantt_Level";
    var baseApiUrl = getBaseApiUrl();
    var apiUrl = baseApiUrl + "/" + tableName;
    var dataManager = spread.dataManager();
    var myTable1 = dataManager.addTable("myTable1", {
        batch: true,
        remote: {
            read: {
                url: apiUrl
            }
        },
        schema: {
            hierarchy: {
                type: "Level",
                column: "level"
            }
        }
    });
    var ganttSheet = spread.addSheetTab(1, "GanttSheet2", GC.Spread.Sheets.SheetType.ganttSheet);
    var view = myTable1.addView("myView1", [
        { value: "taskNumber", caption: "NO.", width: 60 },
        { value: "name", caption: "Task Name", width: 200 },
        { value: "duration", caption: "Duration", width: 90 },
        { value: "predecessors", caption: "Predecessors", width: 120 }
    ]);
    view.fetch().then(function() {
        ganttSheet.bindGanttView(view);
    });
}

function initGanttSheetWithChildrenData(spread) {
    var tableName = "Gantt_Children";
    var baseApiUrl = getBaseApiUrl();
    var apiUrl = baseApiUrl + "/" + tableName;
    var dataManager = spread.dataManager();
    var myTable1 = dataManager.addTable("myTable1", {
        batch: true,
        remote: {
            read: {
                url: apiUrl
            }
        },
        schema: {
            hierarchy: {
                type: "ChildrenPath",
                column: "children"
            }
        }
    });
    var ganttSheet = spread.addSheetTab(2, "GanttSheet3", GC.Spread.Sheets.SheetType.ganttSheet);
    var view = myTable1.addView("myView1", [
        { value: "taskNumber", caption: "NO.", width: 60 },
        { value: "name", caption: "Task Name", width: 200 },
        { value: "duration", caption: "Duration", width: 90 },
        { value: "predecessors", caption: "Predecessors", width: 120 }
    ]);
    view.fetch().then(function() {
        ganttSheet.bindGanttView(view);
    });
}

function getBaseApiUrl() {
    return 'https://demo.mescius.co.kr/spreadjs/learn-spreadjs/features/ganttsheet/overview/purejs'.match(/http.+spreadjs\/learn-spreadjs\//)[0] + 'server/api';
}