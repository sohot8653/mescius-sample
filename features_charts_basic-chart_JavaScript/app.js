window.onload = function () {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), {sheetCount: 2});
    initSpread(spread);
    _getElementById("insertChart").addEventListener('click',function () {
        insertChart(spread)
    });
    _getElementById("switchRowColumn").addEventListener('click',function () {
        switchRowColumn(spread)
    });
    _getElementById("removeChart").addEventListener('click',function () {
        removeChart(spread)
    });
    _getElementById("removeAllCharts").addEventListener('click',function () {
        removeAllChart(spread)
    });
    _getElementById("groupSelect").addEventListener('change',function () {
        changeTypeSelect();
    });
    _getElementById("displayBlanksCells").addEventListener('change',function () {
        displayBlanksCells(spread, this.value);
    });
    _getElementById("showNAAsBlanks").addEventListener('click',function () {
        showNAAsBlanks(spread, this.checked);
    });
    _getElementById("ignoreHidden").addEventListener('click',function () {
        ignoreHiddenRowAndColumn(spread, this.checked);
    });
    changeTypeSelect();

};

var chartType = [
    [{
        typeDesc: 'Clustered Column',
        type:GC.Spread.Sheets.Charts.ChartType.columnClustered
    },{
        typeDesc: 'Stacked Column',
        type:GC.Spread.Sheets.Charts.ChartType.columnStacked
    },{
        typeDesc: '100% Stacked Column',
        type:GC.Spread.Sheets.Charts.ChartType.columnStacked100
    }],
    [{
        typeDesc: 'Line',
        type:GC.Spread.Sheets.Charts.ChartType.line
    },{
        typeDesc: 'Stacked Line',
        type:GC.Spread.Sheets.Charts.ChartType.lineStacked
    },{
        typeDesc: '100% Stacked Line',
        type:GC.Spread.Sheets.Charts.ChartType.lineStacked100
    },{
        typeDesc: 'Line With Markers',
        type:GC.Spread.Sheets.Charts.ChartType.lineMarkers
    },{
        typeDesc: 'Stacked Line With Markers',
        type:GC.Spread.Sheets.Charts.ChartType.lineMarkersStacked
    },{
        typeDesc: '100% Stacked Line With Markers',
        type:GC.Spread.Sheets.Charts.ChartType.lineMarkersStacked100
    }],
    [{
        typeDesc: 'Pie',
        type:GC.Spread.Sheets.Charts.ChartType.pie
    },{
        typeDesc: 'Doughnut',
        type:GC.Spread.Sheets.Charts.ChartType.doughnut
    }],
    [{
        typeDesc: 'Clustered Bar',
        type:GC.Spread.Sheets.Charts.ChartType.barClustered
    },{
        typeDesc: 'Stacked Bar',
        type:GC.Spread.Sheets.Charts.ChartType.barStacked
    },{
        typeDesc: '100% Stacked Bar',
        type:GC.Spread.Sheets.Charts.ChartType.barStacked100
    }],
    [{
        typeDesc: 'Area',
        type:GC.Spread.Sheets.Charts.ChartType.area
    },{
        typeDesc: 'Stacked Area',
        type:GC.Spread.Sheets.Charts.ChartType.areaStacked
    },{
        typeDesc: '100% Stacked Area',
        type:GC.Spread.Sheets.Charts.ChartType.areaStacked100
    }],
    [{
        typeDesc: 'Scatter',
        type:GC.Spread.Sheets.Charts.ChartType.xyScatter
    },{
        typeDesc: 'Scatter With Smooth Lines And Markers',
        type:GC.Spread.Sheets.Charts.ChartType.xyScatterSmooth
    },{
        typeDesc: 'Scatter With Smooth Lines',
        type:GC.Spread.Sheets.Charts.ChartType.xyScatterSmoothNoMarkers
    },{
        typeDesc: 'Scatter With Straight Lines And Markers',
        type:GC.Spread.Sheets.Charts.ChartType.xyScatterLines
    },{
        typeDesc: 'Scatter With Straight Lines',
        type:GC.Spread.Sheets.Charts.ChartType.xyScatterLinesNoMarkers
    },{
        typeDesc: 'Bubble',
        type:GC.Spread.Sheets.Charts.ChartType.bubble
    }],
    [{
        typeDesc: 'High-Low-Close',
        type:GC.Spread.Sheets.Charts.ChartType.stockHLC
    },{
        typeDesc: 'Open-High-Low-Close',
        type:GC.Spread.Sheets.Charts.ChartType.stockOHLC
    },{
        typeDesc: 'Volume-High-Low-Close',
        type:GC.Spread.Sheets.Charts.ChartType.stockVHLC
    },{
        typeDesc: 'Volume-Open-High-Low-Close',
        type:GC.Spread.Sheets.Charts.ChartType.stockVOHLC
    }]
];

function initSpread(spread) {
    var sheet1 = spread.sheets[0];
    sheet1.name("Common Chart");
    var sheet2 = spread.sheets[1];
    sheet2.name("Custom Chart");
    initSheet(sheet1);
    initSheet(sheet2);
    //add chart
    initChart(sheet1);
    initChart(sheet2);
    //custom chart
    customChartStyle(sheet2);
}

function initSheet(sheet){
    sheet.suspendPaint();
    //prepare data for chart
    var dataArray = [
        ["", 'Chrome', 'FireFox', 'IE', 'Safari', 'Edge', 'Opera', 'Other'],
        ["2015", 0.5651, 0.1734, 0.1711, 0.427, 0, 0.184, 0.293],
        ["2016", 0.6230, 0.1531, 0.1073, 0.464, 0.311, 0.166, 0.225],
        ["2017", 0.6360, 0.1304, 0.834, 0.589, 0.443, 0.223, 0.246]
    ];
    sheet.setArray(0, 0, dataArray);
    sheet.resumePaint();
}

function initChart(sheet) {
    //add common chart
    sheet.charts.add('Chart1', GC.Spread.Sheets.Charts.ChartType.columnClustered, 0, 100, 800, 300, "A1:H4");
}

function customChartStyle(sheet){
    var changeChart = sheet.charts.all()[0];
    changeChartStyle(changeChart);
}

function changeChartStyle(chart) {
    //change orientation
    switchOrientation(chart);
    //change legend
    changeChartLegend(chart);
    //change chartArea
    changeChartArea(chart);
    //change chartTitle
    changeChartTitle(chart);
    //change dataLabels
    changeChartDataLabels(chart);
    //change axisTitles
    changeChartAxisTitles(chart);
    //change axesLine
    changeChartAxesLine(chart);
    //change series
    changeSeries(chart);
    //change gridLine
    changeGridLine(chart);
    //change seriesBorder
    changeSeriesBorder(chart);
}

function switchOrientation(chart){
    chart.switchDataOrientation();
}

function ignoreHiddenRowAndColumn(spread, value){
    var activeSheet = spread.getActiveSheet();
    var activeChart = getActiveChart(activeSheet);
    activeChart && activeChart.ignoreHidden(value);
}

function displayBlanksCells(spread, value) {
    var activeSheet = spread.getActiveSheet();
    var activeChart = getActiveChart(activeSheet);
    var index = parseInt(value);
    if (index !== null && index !== undefined) {
        activeChart && activeChart.displayBlanksAs(index);
    }
}

function showNAAsBlanks(spread, value){
    var activeSheet = spread.getActiveSheet();
    var activeChart = getActiveChart(activeSheet);
    activeChart && activeChart.displayNaAsBlank(value);
}

function changeChartLegend(chart) {
    var legend = chart.legend();
    legend.visible = true;
    var legendPosition = GC.Spread.Sheets.Charts.LegendPosition;
    legend.position = legendPosition.top;
    chart.legend(legend);
}

function changeChartArea(chart) {
    var chartArea = chart.chartArea();
    chartArea.backColor = "rgba(93,93,93,1)";
    chartArea.color = "rgba(255,255,255,1)";
    chartArea.fontSize = 14;
    chart.chartArea(chartArea);
}

function changeChartTitle(chart) {
    var title = chart.title();
    title.text = "Browser Market Share";
    title.fontSize = 18;
    chart.title(title);
}

function changeChartDataLabels(chart) {
    var dataLabels = chart.dataLabels();
    dataLabels.showValue = true;
    dataLabels.showSeriesName = false;
    dataLabels.showCategoryName = false;
    dataLabels.format = "0.00%";
    var dataLabelPosition = GC.Spread.Sheets.Charts.DataLabelPosition;
    dataLabels.position = dataLabelPosition.outsideEnd;
    chart.dataLabels(dataLabels);
    var series0 = chart.series().get(0);
    series0.dataLabels= {
         showSeriesName: true,
         showCategoryName: true,
         separator: ";",
         position: GC.Spread.Sheets.Charts.DataLabelPosition.Center,
         color: "red",
         backColor: "white",
         borderColor: "blue",
         borderWidth: 2
    };
   chart.series().set(0, series0);

   var series2 = chart.series().get(2);
   series2.dataLabels= {
        showSeriesName: true,
        separator: "/",
        position: GC.Spread.Sheets.Charts.DataLabelPosition.insideEnd,
        color: "yellow",
        backColor: "white",
        borderColor: "green",
        borderWidth: 1
   };
  chart.series().set(2, series2);

  var series4 = chart.series().get(4);
  series4.dataLabels= {
        showCategoryName: true,
        separator: ":",
        position: GC.Spread.Sheets.Charts.DataLabelPosition.above,
        color: "blue",
        backColor: "white",
        borderColor: "red",
        borderWidth: 2.5
   };
  chart.series().set(4, series4);
}

function changeChartAxisTitles(chart) {
    var axes = chart.axes();
    axes.primaryCategory.title.text = 'Year';
    axes.primaryCategory.title.fontSize = 14;
    chart.axes(axes);
}

function changeChartAxesLine(chart) {
    var axes = chart.axes();
    axes.primaryValue.format = "0%";
    chart.axes(axes);
}

function changeSeries(chart) {
    var series = chart.series();
    var seriesItem = series.get(6);
    seriesItem.backColor = "#a3cf62";
    series.set(6, seriesItem);
}

function changeGridLine(chart) {
    var axes = chart.axes();
    axes.primaryCategory.majorGridLine.visible = false;
    axes.primaryValue.majorGridLine.visible = false;
    chart.axes(axes);
}

function changeSeriesBorder(chart) {
    var series = chart.series().get();
    for (var i = 0; i < series.length; i++) {
        var seriesItem = series[i];
        seriesItem.border.color = 'rgb(255,255,255)';
        seriesItem.border.width = 1;
        chart.series().set(i, seriesItem);
    }
}

function insertChart(spread) {
    var activeSheet = spread.getActiveSheet();
    var dataRange = activeSheet.getSelections()[0];
    if(dataRange && !judgeIsEmptyOneCell(activeSheet,dataRange)){
        var rangeToFormula = GC.Spread.Sheets.CalcEngine.rangeToFormula;
        var dataFormula = rangeToFormula(dataRange);
        var groupIndex = parseInt(_getElementById('groupSelect').value);
        var typeIndex = parseInt(_getElementById('typeSelect').value);
        if(groupIndex < chartType.length){
            var typeArray = chartType[groupIndex];
            if(typeIndex < typeArray.length){
                var type = typeArray[typeIndex].type;
                try{
                    activeSheet.charts.add('', type, 30, 120, 500, 300,dataFormula , GC.Spread.Sheets.Charts.RowCol.rows);
                }catch(e){
                    alert(e.message);
                }
            }
        }
    }
}

function switchRowColumn(spread) {
    var activeSheet = spread.getActiveSheet();
    var activeChart = getActiveChart(activeSheet);
    if(activeChart){
        var isSwitched = activeChart.switchDataOrientation();
        if (!isSwitched) {
            alert("'Can't switch row/column");
        }
    }
}

function removeChart(spread) {
    var activeSheet = spread.getActiveSheet();
    var activeChart = getActiveChart(activeSheet);
    if(activeChart){
        activeSheet.charts.remove(activeChart.name());
    }
}

function removeAllChart(spread) {
    var activeSheet = spread.getActiveSheet();
    activeSheet.charts.clear();
}

function getActiveChart(sheet) {
    var activeChart = null;
    sheet.charts.all().forEach(function (chart) {
        if (chart.isSelected()) {
            activeChart = chart;
        }
    });
    return activeChart;
}

function judgeIsEmptyOneCell(sheet,range){
    if(range.rowCount === 1 && range.colCount === 1){
        var cell = sheet.getCell(range.row, range.col);
        if(!cell.text()){
            return true;
        }
    }
    return false;
}

function changeTypeSelect(){
    var index = parseInt(_getElementById('groupSelect').value);
    if(index!==null && index!==undefined && index < chartType.length){
        _getElementById('typeSelect').innerHTML='';
        var typeArray = chartType[index];
        for(var i=0;i<typeArray.length;i++){
            var item = typeArray[i];
            var option = document.createElement('option');
            var value = document.createAttribute('value');
            value.nodeValue=i;
            option.setAttributeNode(value);
            option.innerHTML=item.typeDesc;
            _getElementById('typeSelect').appendChild(option);
        }
    }
}

function _getElementById(id){
    return document.getElementById(id);
}