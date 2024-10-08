document.readyState === 'complete' ? init() : window.onload = init;
//
function init() {
  $('.content_box_loading').show();
  let barchart = new wijmo.chart.FlexChart('#chart', {
    header: '2023-12-13 ~ 2023-12-15 물류현황 (출고 준비일 기준)',
    legend: {
      position: wijmo.chart.Position.None
    },
    bindingX: 'month',
    series: [
      {
        binding: '당일금액',
        name: '당일금액'
      },
      {
        binding: '누적합계',
        name: '누적합계',
        chartType: wijmo.chart.ChartType.Line
      }
    ],
    axisY: {
      axisLine: true,
      origin: -10,
      title: '당일금액(원)'
    },
    itemsSource: getData(),
    palette: [ '#4673a1','#666464']
  });
  //
  let ani = new wijmo.chart.animation.ChartAnimation(barchart);
  //
  // '누적합계' 계열에 대한 추가 Y축 생성 및 적용
  let axisY2 = new wijmo.chart.Axis();
  axisY2.position = wijmo.chart.Position.Right;
  axisY2.title = '누적합계(원)';
  axisY2.axisLine = true;
  axisY2.min = 0;
  barchart.series[1].axisY = axisY2;

  $('.content_box_loading').hide();

  $('#btnGrid').on('click', function(e){
    location.href = `/sample?depth1=${depth1}&depth2=출고요청서&sampleId=11`;
  });
} 

function getData() {
  return [
    { month: '디자인앤바스', '당일금액': 1658400, '누적합계': 101000000 },
    { month: '위생도기앤델라', '당일금액': 2699800, '누적합계': 90000000 },
    { month: '마누스인테리어', '당일금액': 7980000, '누적합계': 205200000 },
    { month: '(주)제이유산업', '당일금액': 8659800, '누적합계': 700050000 },
    { month: '자람건설', '당일금액': 2410000, '누적합계': 314520000 },
    { month: '트리오퍼레이션', '당일금액': 4410000, '누적합계': 310000000 },
    { month: 'TZ화물', '당일금액': 1410000, '누적합계': 105100000 },
  ];
}

function getData2() {
  let arr = [];

  for(var i = 1; i < 15; i++) {
    var date = getRandomArrayElement(['2023-12-05', '2023-12-07', '2023-12-09', '2023-12-10', '2023-12-20', '2023-12-23']);
    var order = getRandomArrayElement([['출고 대기', '배송업체 미배정'], ['배송업체 미배정', '배송업체 미배정'], ['출고 진행중', getRandomArrayElement(["CJ 택배", "로젠 택배", "대한 통운"])], ['출고 완료', getRandomArrayElement(["CJ 택배", "로젠 택배", "대한 통운"])]]);
    var obj = {};
    obj.c1 = 'SN' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c2 = 'OD' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c3 = date;
    obj.c4 = getRandomArrayElement(['2023-12-05 15:20', '2023-12-07 17:20', '2023-12-09 09:20', '2023-12-10 15:20', '2023-12-20 15:50', '2023-12-23 18:20']);
    obj.c5 = getRandomArrayElement(['디자인앤바스', '위생도기앤델라', '마누스인테리어', '(주)제이유산업', '자람건설', '오티시스템']);
    obj.c6 = getRandomArrayElement(["박OO", "김OO", "이OO", "차OO"]);
    obj.c7 = getRandomArrayElement(["05일 06:30", "08일 06:30", "20일 06:30", "30일 06:30"]);
    obj.c8 = getRandomArrayElement(["할인 적용", "할인 미적용", "할인 전환", "일반주문"]);
    obj.c9 = date;
    obj.c10 = getRandomArrayElement(["1,659,800원", "2,699,800원", "259,800원", "51,659,800원"]);
    obj.c11 = getRandomArrayElement(["1,000원", "3,000원", "50,000원", "100,000원"]);
    obj.c12 = getRandomArrayElement(["고OO | 01084416523 | 서울 광진구 뚝섬로 4", "박OO | 01084416523 | 경기도 영통구 영통로 4", "윤OO | 01084416523 | 강원 원주시 명륜로 4", "이OO | 01084416523 | 강원 원주시 명륜로 80"]);
    obj.c13 = getRandomArrayElement(['욕실', '주방', '붙박이/현관장', '마루', '도어', '붙박이', '중문', '현관장']);
    obj.c14 = order[0]
    obj.c15 = getRandomArrayElement(["박OO", "김OO", "이OO", "차OO"]);
    obj.c16 = getRandomArrayElement(["있음", "없음"]);
    obj.c17 = getRandomArrayElement([[1], [1, 2], [2, 3], [1, 3], [3]]);
    obj.c18 = getRandomArrayElement(["없음", "1,000원", "3,000원", "50,000원", "100,000원"]);
    obj.c19 = 'PD' + (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c20 = order[1];
    obj.c21 = (order[1] == '배송업체 미배정') ? '-' : (Math.floor(Math.random() * (2400000000 - 2100000000)) + 2100000000);
    obj.c22 = getRandomArrayElement(["운임", "후불", "선불"]);
    obj.c23 = getRandomArrayElement(["예정일 도착 예정입니다.", "1개 제품이 배송 중 손상되었습니다. 환불 조치하였습니다.", "긴급 전환 요청들어왔습니다."]);

    arr.push(obj);
  }

  function getRandomDate(start, end) {
      const startDate = start.getTime();
      const endDate = end.getTime();
          
      return new Date(startDate + Math.random() * (endDate - startDate));
  }

  function getRandomArrayElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
  }

  return arr;
}