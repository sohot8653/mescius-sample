if(window.location.host == 'demo.stam.kr') {
  GC.Spread.Sheets.LicenseKey = "*.stam.kr,578524529727283#B11ZgNmUxYVeCZkRQtCW626L5M6avsyThlEWJtmcMp4aG34VExmYwVmVnhjTjVVZC3iN946NygETlJDT4IXQx5WdHJ5clZGN8sEb8BXNKpWMjdXdohndzhUYHZ6alFHSsFHRxkmcoNHRMN4YJplNxlDZxEmUslWW7sCaIxUQxIkeGVEUWh6Sr2Ue78mcwYVe6pUSEp5YyA5VElHTZtmcRBTN8NlU0V5SmNjYFZVevd5aChkNOxGNilGOEpUMkZ7VrZlQPl7V8lVU8cHWVd5dyZUZxZXbmVFepVkVw4GcxE4dGJnNIRkarFjYuZlWMVjeHBHcrZUastmI0IyUiwiIBNjRDZEOBVjI0ICSiwiN7IjNxUDN6ATM0IicfJye35XX3JyVUNkWiojIDJCLiYTMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiI6ITMyUDMgAzMxADNyAjMiojI4J7QiwiI9IDNwQjMwIjI0ICc8VkIsIicr9SbhR7cuoiI0IyctRkIsISTBR5UiojIh94QiwiIzgjM7IzN9ITN4ITN8cTNiojIklkIs4XXiUGbiFGV43mdpBlIbpjInxmZiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TQEtSSMFnUxVjMHlzM7YzZ82mTQNnN4lDb5cTUxUHVDJzSo3mSUlkZ7FTZPdkbyp5KuBTdT5kZ8dFbNZlZWVDeZlERmtUS8dHNPZmcJhmbHpGNYV6N8pUWvRFNMlVb5x";
}
window.onload = function() {
  initCalendar();
  var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 0 });
  initSpread(spread);
}    

function initCalendar() {
// 달력에 표시될 이벤트 생성
let events = getEvents();
//달력 생성
let calendar = document.getElementById('calendar'), tooltip = new wijmo.Tooltip();
//for (let i = 0, start = new Date(); i < 1; i++) {
  let month = createMonthControl(wijmo.DateTime.addMonths(new Date(), 0));
  calendar.appendChild(month);
//}
//월 생성
function createMonthControl(date) {
  // 달력 생성
  let month = wijmo.createElement('<div class="month"></div>'), cal = new wijmo.input.Calendar(month, {
    showHeader: false,
    selectionMode: 'None',
    value: date,
    formatItem: formatDayCell
  });
  cal.refresh();
  // 마우스 휠을 사용하여 월 변경을 비활성화
  cal.removeEventListener(cal.hostElement, 'wheel');
  //사용자 정의 헤더 요소 추가
  let fmt = wijmo.format('<div class="month-header">' +
                         '<div class="month-title">{header}</div>' +
                         '</div>', {
    header: wijmo.Globalize.format(date, 'MMMM yyyy'),
    uptime: getUptime()
  });
  let newHeader = wijmo.createElement(fmt);
  let hdr = cal.hostElement.querySelector('.wj-calendar-header');
  hdr.parentElement.insertBefore(newHeader, hdr);
  // 요일의 첫 글자만 표시
  let cells = cal.hostElement.querySelectorAll('table tr.wj-header td');
  for (let i = 0; i < 7; i++) {
    cells[i].textContent = cells[i].textContent.substr(0, 1);
  }
  return month;
}
// 이벤트를 표시하도록 달력 셀 형식 지정
function formatDayCell(sender, e) {
  let event = getEvent(e.data), html = `<div>${e.data.getDate()}</div>`;
  html += event
    ? `<img src="https://status.slack.com/img/v2/Table${event.type}.png"/>`
  : '<img/>';
  //셀 내용을 구성
  e.item.innerHTML = html;
  // 셀에 툴팁 추가
  let tip = wijmo.format('<div class="event-tip event-type-{eventType}">' +
                         '<div>{date:MMM d, yyyy}</div>' +
                         '<div class="event">{eventMessage}</div>' +
                         '</div>', {
    date: e.data,
    eventMessage: event ? event.msg : '일정 없음',
    eventType: event ? event.type.toLocaleLowerCase() : 'none'
  });
  tooltip.setTooltip(e.item, tip);
}
function getUptime() {
  let tm = [100, 99.75, 99.998, 99.98, 99.996, 99.93];
  return tm[Math.floor(Math.random() * tm.length)];
}
function getEvent(date) {
  for (let i = 0; i < events.length; i++) {
    if (wijmo.DateTime.sameDate(events[i].date, date)) {
      return events[i];
    }
  }
  return null;
}
}


// 지금과 1년 전 사이에 이벤트 생성
function getEvents() {
let arr = [], types = ['Maintenance', 'Incident', 'Notice', 'Outage'], messages = ['SI네트워크/서울/양변기', '우산커뮤니케이션/강원/바닥시공'];
//
//for (let i = 0; i < 120; i++) {
  // let dt = wijmo.DateTime.addDays(new Date(), 0);
  arr.push({
    id: 0,
    date: wijmo.DateTime.addDays(new Date(), 0),
    type: types[0],
    msg: messages[0]
  });
  arr.push({
    id: 1,
    date: wijmo.DateTime.addDays(new Date(), -2),
    type: types[0],
    msg: messages[1]
  });
//}
//
return arr;
}

function initSpread(spread) {
  spread.suspendPaint();
  initGanttSheetWithIdParentIdData(spread);
  // initGanttSheetWithLevelData(spread);
  // initGanttSheetWithChildrenData(spread);
  spread.resumePaint();
}

function initGanttSheetWithIdParentIdData(spread) {
  var tableName = "Gantt_Id";
  var dataManager = spread.dataManager();
  var myTable1 = dataManager.addTable("myTable1", {
      batch: true,
      remote: {
          read: {
              url: 'json/Sample5_Gantt_Id.json'
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
  var ganttSheet = spread.addSheetTab(0, "시공 스케줄", GC.Spread.Sheets.SheetType.ganttSheet);
  var view = myTable1.addView("myView1", [
      { value: "taskNumber", caption: "NO", width: 60, headerStyle: {backColor : "#36495e", foreColor:"white"}},
      { value: '=CONCAT("(L",LEVEL(),"-",LEVELROWNUMBER(),")")', caption: "L", headerStyle: {backColor : "#36495e", foreColor:"white"}},
      { value: "name", caption: "작업명", width: 200, headerStyle: {backColor : "#36495e", foreColor:"white"}},
      { value: "duration", caption: "작업기간", width: 90, headerStyle: {backColor : "#36495e", foreColor:"white"}},
      { value: "resource", caption: "자원량", width: 80, headerStyle: {backColor : "#36495e", foreColor:"white"}},
      { value: "cost", caption: "비용", width: 100, style: { formatter: "0원" }, headerStyle: {backColor : "#36495e", foreColor:"white"}},
      { value: '=IF([@cost]="","",[@cost]/[@resource])', caption: "AVG Cost", width: 100, style: { formatter: "0원" }, headerStyle: {backColor : "#36495e", foreColor:"white"}}
  ]);
  view.fetch().then(function() {
      ganttSheet.bindGanttView(view);
  });  
}