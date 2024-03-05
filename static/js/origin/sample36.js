document.readyState === 'complete' ? init() : window.onload = init;
//
let countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'], products = ['Widget', 'Gadget', 'Doohickey'];

function init() {
    let excelIOSheet = new wijmo.grid.sheet.FlexSheet('#excelIOSheet');
    excelIOSheet.addBoundSheet('Country', getData(50));
    excelIOSheet.addUnboundSheet('Unbound', 20, 8);
    excelIOSheet.deferUpdate(() => {
        let sheetIdx, sheetName, colIdx, rowIdx;
        for (sheetIdx = excelIOSheet.sheets.length - 1; sheetIdx >= 0; sheetIdx--) {
            excelIOSheet.selectedSheetIndex = sheetIdx;
            sheetName = excelIOSheet.selectedSheet.name;
            if (sheetName === 'Country') {
                // 바운드 시트에 대한 dataMap을 초기화
                initDataMapForBindingSheet(excelIOSheet);
            }
            else {
                for (colIdx = 0; colIdx < excelIOSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < excelIOSheet.rows.length; rowIdx++) {
                        excelIOSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            }
        }
    });
    onClick('loadXlsx', () => {
        let fileInput = document.querySelector('#importFile');
        debugger;
        if (fileInput.files[0]) {
            excelIOSheet.loadAsync(fileInput.files[0]);
        }
    });
    onClick('saveXlsx', () => {
        let fileName = document.querySelector('#fileName').value;
        if (fileName == null || fileName === '') {
            fileName = 'FlexSheet.xlsx';
        }
        excelIOSheet.saveAsync(fileName);
    });
    // 바운드 시트에 대한 dataMap을 초기화
    function initDataMapForBindingSheet(flexSheet) {
        let column;
        if (flexSheet) {
            column = flexSheet.columns.getColumn('countryId');
            if (column && !column.dataMap) {
                column.dataMap = buildDataMap(getCountries());
            }
            column = flexSheet.columns.getColumn('productId');
            if (column && !column.dataMap) {
                column.dataMap = buildDataMap(getProducts());
            }
            column = flexSheet.columns.getColumn('amount');
            if (column) {
                column.format = 'c2';
            }
        }
    }
    // 인덱스를 키로 사용하여 문자열 배열에서 데이터 맵을 작성
    function buildDataMap(items) {
        let map = [];
        for (let i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    }
    function onClick(id, fn) {
        document.querySelector('#' + id).addEventListener('click', fn);
    }
}

function getData(count) {
    let data = [], i = 0, countryId, productId;
    for (; i < count; i++) {
        countryId = Math.floor(Math.random() * countries.length);
        productId = Math.floor(Math.random() * products.length);
        data.push({
            id: i,
            countryId: countryId,
            productId: productId,
            date: new Date(2014, i % 12, i % 28),
            amount: Math.random() * 10000,
            active: i % 4 === 0
        });
    }
    return data;
}
function getCountries() {
    return countries;
}
function getProducts() {
    return products;
}
