document.readyState === 'complete' ? init() : window.onload = init;
function init () {
    $('.content_box_loading').show();
    initGrid();
    initChart();
    $('.content_box_loading').hide();
}
function initGrid() {
  // 총계 표시를 위한 그룹 생성
  var grandTotalsGroup = new wijmo.collections.PropertyGroupDescription('총합', function (item, propName) {
    return '';
  });
  //
  // 사용자 정의 집계를 가진 그리드
  var theGrid = new wijmo.grid.FlexGrid('#theGrid', {
    autoGenerateColumns: false,
    allowDragging: false,
    columns: [
      { binding: 'c1', header: '지역', width: '*', isReadOnly: true },
      { binding: 'c2', header: '직군', width: '*', isReadOnly: true },
      { binding: 'c3', header: '성별', width: '*', isReadOnly: true },
      { binding: 'c4', header: '인원', width: '*', isReadOnly: true, aggregate: 'Sum'}
    ],
    itemsSource: new wijmo.collections.CollectionView(_dataGrid1, {
      groupDescriptions: [
        grandTotalsGroup,
        'c1',
        'c2'
      ]
    })
  });
  //
  // 축소 시작
  theGrid.collapseGroupsToLevel(3);

  let selector = new wijmo.grid.selector.Selector(theGrid, {
    showCheckAll: false,
    itemChecked: (e, a) => {
        _flexPie.itemsSource = e._grid.selectedItems;
    }
  });
}
let _flexPie;
function initChart() {
    //
    _flexPie = new wijmo.chart.FlexPie('#chart', {
    header: '직군별 인원현황',
    bindingName: 'c0',
    binding: 'c4',
    innerRadius: 0,
    palette: getRandomPalette(),
    itemsSource: _dataGrid1.filter(x => x.c1 == '서울'),
    dataLabel: {
      position: wijmo.chart.PieLabelPosition.Center,
      content: (ht) => {
        return `${ht.name}`;
      }
    },
    palette: [
        '#f94144', '#f3722c', '#f8961e', '#f9c74f',
        '#90be6d', '#43aa8b','#577590',
        '#355070', '#5f0f40', 
    ]
    });
    //
    // 파이 애니메이션
    let pieAnimation = new wijmo.chart.animation.ChartAnimation(_flexPie, {
        animationMode: wijmo.chart.animation.AnimationMode.Point,
        easing: wijmo.chart.animation.Easing.Swing,
        duration: 400
    });
}

function getRandomPalette() {
  let palettes = Object.getOwnPropertyNames(wijmo.chart.Palettes)
  .filter(prop => typeof wijmo.chart.Palettes[prop] === 'object' && prop !== 'prototype');
  let rand = Math.floor(Math.random() * palettes.length);
  //
  return wijmo.chart.Palettes[palettes[rand]];
}

let _dataGrid1 = [
    {c1:'서울', c2:'관리직', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'서울', c2:'관리직', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'서울', c2:'생산직(일급)', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'서울', c2:'생산직(일급)', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'서울', c2:'생산직(월급)', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'서울', c2:'생산직(월급)', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'경기', c2:'관리직', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'경기', c2:'관리직', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'경기', c2:'생산직(일급)', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'경기', c2:'생산직(일급)', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'경기', c2:'생산직(월급)', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'경기', c2:'생산직(월급)', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'강원', c2:'관리직', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'강원', c2:'관리직', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'강원', c2:'생산직(일급)', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'강원', c2:'생산직(일급)', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},

    {c1:'강원', c2:'생산직(월급)', c3:'남', c4:Math.floor(Math.random() * 200 + 1)},
    {c1:'강원', c2:'생산직(월급)', c3:'여', c4:Math.floor(Math.random() * 200 + 1)},
];
_dataGrid1 = _dataGrid1.map(x => {
    return {
        ...x,
        c0: `${x.c1}/${x.c2}/${x.c3}` 
    }
})

////////////////////

//데이터
function getData() {
  let data = new wijmo.collections.ObservableArray();
  //
  for (let i = 0; i < 5; i++) {
    console.log(getRandomData('random' + getRandomValue(1000)));
    data.push(getRandomData('random' + getRandomValue(1000)));
  }
  //
  return data;
}
//
function getRandomData(id) {
  return {
    id: id,
    y0: getRandomValue(200),
    y1: getRandomValue(400),
    y2: getRandomValue(600),
    y3: getRandomValue(800),
    y4: getRandomValue(1000)
  };
}
//
function getRandomValue(max) {
  return Math.round(Math.random() * max);
}