var openOptions = [
    { propName: "openMode", type: "select", displayText: "OpenMode", options: [{name: 'normal', value: 0}, {name: 'lazy', value: 1}, {name: 'incremental', value: 2}], default: 0 },
    { propName: "includeStyles", type: "boolean", default: true },
    { propName: "includeFormulas", type: "boolean", default: true },
    { propName: "fullRecalc", type: "boolean", default: false },
    { propName: "dynamicReferences", type: "boolean", default: true },
    { propName: "calcOnDemand", type: "boolean", default: false },
    { propName: "includeUnusedStyles", type: "boolean", default: true },
];

var importXlsxOptions = [
    { propName: "openMode", type: "select", displayText: "OpenMode", options: [{name: 'normal', value: 0}, {name: 'lazy', value: 1}, {name: 'incremental', value: 2}], default: 0 },
    { propName: "includeStyles", type: "boolean", default: true },
    { propName: "includeFormulas", type: "boolean", default: true },
    { propName: "frozenColumnsAsRowHeaders", type: "boolean", default: false },
    { propName: "frozenRowsAsColumnHeaders", type: "boolean", default: false },
    { propName: "fullRecalc", type: "boolean", default: false },
    { propName: "dynamicReferences", type: "boolean", default: true },
    { propName: "calcOnDemand", type: "boolean", default: false },
    { propName: "includeUnusedStyles", type: "boolean", default: true },
];

var importSSJsonOptions = [
    { propName: "includeStyles", type: "boolean", default: true },
    { propName: "includeFormulas", type: "boolean", default: true },
    { propName: "frozenColumnsAsRowHeaders", type: "boolean", default: false },
    { propName: "frozenRowsAsColumnHeaders", type: "boolean", default: false },
    { propName: "fullRecalc", type: "boolean", default: false },
    { propName: "incrementalLoading", type: "boolean", default: false }
];

var importCsvOptions = [
    { propName: "encoding", type: "string", default: "UTF-8" },
    { propName: "rowDelimiter", type: "string", default: "\r\n" },
    { propName: "columnDelimiter", type: "string", default: "," }
];

var saveOptions = [
    { propName: "includeBindingSource", type: "boolean", default: false },
    { propName: "includeStyles", type: "boolean", default: true },
    { propName: "includeFormulas", type: "boolean", default: true },
    { propName: "saveAsView", type: "boolean", default: false },
    { propName: "includeAutoMergedCells", type: "boolean", default: false },
    { propName: "includeCalcModelCache", type: "boolean", default: false },
    { propName: "includeUnusedNames", type: "boolean", default: true },
    { propName: "includeEmptyRegionCells", type: "boolean", default: true },
];

var exportXlsxOptions = [
    { propName: "includeBindingSource", type: "boolean", default: false },
    { propName: "includeStyles", type: "boolean", default: true },
    { propName: "includeFormulas", type: "boolean", default: true },
    { propName: "saveAsView", type: "boolean", default: false },
    { propName: "rowHeadersAsFrozenColumns", type: "boolean", default: false },
    { propName: "columnHeadersAsFrozenRows", type: "boolean", default: false },
    { propName: "includeAutoMergedCells", type: "boolean", default: false },
    { propName: "includeCalcModelCache", type: "boolean", default: false },
    { propName: "includeUnusedNames", type: "boolean", default: true },
    { propName: "includeEmptyRegionCells", type: "boolean", default: true },
];

var exportSSJsonOptions = [
    { propName: "includeBindingSource", type: "boolean", default: false },
    { propName: "includeStyles", type: "boolean", default: true },
    { propName: "includeFormulas", type: "boolean", default: true },
    { propName: "saveAsView", type: "boolean", default: false },
    { propName: "rowHeadersAsFrozenColumns", type: "boolean", default: false },
    { propName: "columnHeadersAsFrozenRows", type: "boolean", default: false },
    { propName: "includeAutoMergedCells", type: "boolean", default: false },
];

var exportCsvOptions = [
    { propName: "encoding", type: "string", default: "UTF-8" },
    { propName: "rowDelimiter", type: "string", default: "\r\n" },
    { propName: "columnDelimiter", type: "string", default: "," },
    { propName: "sheetIndex", type: "number", default: 0 },
    { propName: "row", type: "number", default: 0 },
    { propName: "column", type: "number", default: 0 },
    { propName: "rowCount", type: "number", default: 200 },
    { propName: "columnCount", type: "number", default: 20 },
];

var FileType  = {
    SJS: 'sjs',
    Excel: 'xlsx',
    SSJson: 'ssjson',
    Csv: 'csv',
}

var openOptionsDict = {};
openOptionsDict[FileType.SJS] = openOptions;
openOptionsDict[FileType.Excel] = importXlsxOptions;
openOptionsDict[FileType.SSJson] = importSSJsonOptions;
openOptionsDict[FileType.Csv] = importCsvOptions;

var saveOptionsDict = {};
saveOptionsDict[FileType.SJS] = saveOptions;
saveOptionsDict[FileType.Excel] = exportXlsxOptions;
saveOptionsDict[FileType.SSJson] = exportSSJsonOptions;
saveOptionsDict[FileType.Csv] = exportCsvOptions;

let spread;
let designer;
window.onload = function () {
    $('.content_box_loading').show();
    initRibbon();
    spread = designer.getWorkbook();

    initDefaultOptions();

    var selectedFileElement = document.querySelector('#selectedFile');
    selectedFileElement.addEventListener("change", function() {
        // var file = selectedFileElement.files[0];
        // updateOptions('open', getFileType(file));

        var file = document.querySelector('#selectedFile').files[0];
        if (!file) {
            return;
        }

        var fileType = getFileType(file);
        var options = getOptions('open');

        if (fileType === FileType.SJS) {
            spread.open(file, function() {}, function() {}, options);
        } else {
            spread.import(file, function() {}, function() {}, options);
        }
    });

    var saveFileType = document.querySelector('#saveFileType');
    saveFileType.addEventListener("change", function() {
        var fileType = saveFileType.value;
        updateOptions('save', fileType);
    });

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
            $('#txtTemplateName').text(localStorage.getItem('templateName'));
            spread.fromJSON(JSON.parse(localStorage.getItem('templateJson')));
        })
        .then(() => {
            $('.content_box_loading').hide();
        });
    } else {
        $('#txtTemplateName').text(localStorage.getItem('templateName'));
        spread.fromJSON(JSON.parse(localStorage.getItem('templateJson')));
        $('.content_box_loading').hide();
    }

    $('#txtTemplateName').on('click', function(e) {
        spread.fromJSON(JSON.parse(localStorage.getItem('templateJson')));
        $('#selectedFile').val('');
    });

    $('#btnSave').on('click', function(e) {
        if($('#txtName').val() == '') {
            alert('템플릿명을 입력해주세요.');
            return;
        }

        var serializationOption = {
			ignoreFormula: false,
			ignoreStyle: false,
			rowHeadersAsFrozenColumns: false,
			columnHeadersAsFrozenRows: false
		};
		var jsonStr = JSON.stringify(spread.toJSON(serializationOption));

        alert('저장되었습니다.');
        localStorage.setItem("templateName", $('#txtName').val());
        localStorage.setItem("templateJson", jsonStr);
        location.reload(true);
    });

    $('#btnGrid').on('click', function(e) {
        location.href = `/sample?depth1=${depth1}&depth2=배송내역서&sampleId=21`;
    });
};

function initRibbon() {
    designer = new GC.Spread.Sheets.Designer.Designer('ss');
}

function initOptions (options, fileType, mode) {
    var container = document.createElement('div');
    container.className = fileType;
    container.style.display = 'none';

    options.forEach(function (prop) {
        var item = document.createElement('div');
        item.className = 'item';

        var id = getElementId(mode, fileType, prop.propName);
        var label = document.createElement("label");
        label.innerText =  prop.displayText || prop.propName;
        label.for = id;

        if (prop.type === 'select') {
            var select = document.createElement('select');
            prop.options.forEach(function(p) {
                var option = document.createElement('option');
                option.value = p.value;
                option.text = p.name;
                select.appendChild(option);
            });

            select.id = id;
            select.value = prop.default;
            item.appendChild(label);
            item.appendChild(select);
        } else {
            var input = document.createElement('input');
            input.id = getElementId(mode, fileType, prop.propName);

            if (prop.type === 'boolean') {
                input.type ='checkbox';
                input.checked = prop.default;
    
                item.appendChild(input);
                item.appendChild(label);
            } else if (prop.type === 'number') {
                input.type = 'number';
                input.value = prop.default;
    
                item.appendChild(label);
                item.appendChild(input);
            } else if (prop.type === 'string') {
                input.type = 'text';
                input.value = prop.default;
    
                item.appendChild(label);
                item.appendChild(input);
            }
        }

        container.appendChild(item);
    });

    return container;
}

function initDefaultOptions () {
    var container = document.querySelector('.open-options');
    var mode = 'open';

    container.appendChild(initOptions(openOptions, FileType.SJS, mode));
    container.appendChild(initOptions(importXlsxOptions, FileType.Excel, mode));
    container.appendChild(initOptions(importSSJsonOptions, FileType.SSJson, mode));
    container.appendChild(initOptions(importCsvOptions, FileType.Csv, mode));

    container = document.querySelector('.save-options');
    mode = 'save';
    container.appendChild(initOptions(saveOptions, FileType.SJS, mode));
    container.appendChild(initOptions(exportXlsxOptions, FileType.Excel, mode));
    container.appendChild(initOptions(exportSSJsonOptions, FileType.SSJson, mode));
    container.appendChild(initOptions(exportCsvOptions, FileType.Csv, mode));

    updateOptions('save', FileType.SJS);
}

function updateOptions (mode, fileType) {
    var container = document.querySelector('.' + mode + '-options');
    var oldFileType = container.getAttribute('data-file-type');
    if (oldFileType === fileType) {
        return;
    }

    if (oldFileType) {
        container.querySelector('.' + oldFileType).style.display = 'none';
    }
    if (fileType) {
        container.querySelector('.' + fileType).style.display = '';
    }
    container.setAttribute('data-file-type', fileType);
}

function getOptions (mode) {
    var container = document.querySelector('.' + mode + '-options');
    var fileType = container.getAttribute('data-file-type');
    if (!fileType) {
        return;
    }

    var options = {};
    var props = mode === 'open' ? openOptionsDict[fileType] : saveOptionsDict[fileType];
    container = container.querySelector('.' + fileType);

    props.forEach(function(prop) {
        var element = container.querySelector('#' + getElementId(mode, fileType, prop.propName));
        var value;
        if (prop.type === 'boolean') {
            value = element.checked;
        } else if (prop.type === 'number') {
            value = +element.value;
        } else if (prop.type === 'string') {
            value = element.value;
        } else if (prop.type === 'select') {
            value = +element.value;
        }
        options[prop.propName] = value;
    });

    return options;
}

function getElementId (mode, fileType, propName) {
    return mode + '-' + fileType + '-' + propName;
}

function getFileType (file) {
    if (!file) {
        return;
    }

    var fileName = file.name;
    var extensionName = fileName.substring(fileName.lastIndexOf(".") + 1);

    if (extensionName === 'sjs') {
        return FileType.SJS;
    } else if (extensionName === 'xlsx' || extensionName === 'xlsm') {
        return FileType.Excel;
    } else if (extensionName === 'ssjson' || extensionName === 'json') {
        return FileType.SSJson;
    } else if (extensionName === 'csv') {
        return FileType.Csv;
    }
}