//Datepicker
function datepicker() {
    $.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년',
      currentText: '오늘',
      showOn: "button",
      buttonImage: "../images/ico_calendar.png", //버튼 이미지 경로
      buttonImageOnly: true, //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
      //changeYear : true , changeMonth : true,
      closeText:'취소',
      showButtonPanel: true,
        onClose: function () {
            if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
                $(this).val('');
            }
        }
    });

    $('.datepicker').datepicker('setDate', 'today'); 

    $.datepicker._gotoToday = function(id) { 
        $(id).datepicker('setDate', new Date()).datepicker('hide').blur(); 
    };

    $('.datepicker').datepicker();
}

// Left Menu
$(function(){
  $('.left_nav li .depth1').on("click", function() {
    $(this).toggleClass('on');
  });
  $('.left_nav li .depth2').on("click", function() {
    $(this).toggleClass('on');
  });
});

//화면 높이 vh 
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

function contentBoxHeight(){
  var headerHeight;
  var srchHeight;
  var minusHeight;

  $(window).ready(function () {
    $('.btn_fold').on("click", function() {  
      if($(this).hasClass('unfold')){
        $(this).removeClass('unfold');
        $(this).text("열기");
        $(".search_box").removeClass('active');
        if (document.body.clientWidth > 1700) {
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 157;
          $('.content_box').css('height','calc(100vh - ' + minusHeight + 'px)');
        }else{
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 119;
          $('.content_box').css('height','calc(100vh - ' + minusHeight + 'px)');
        }
      }else{
        $(this).addClass('unfold');
        $(this).text("접기");
        $(".search_box").addClass('active');
        if (document.body.clientWidth > 1700) {
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 176;
          $('.content_box').css('height','calc(100% - ' + 356 + 'px)');
        }else{
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 136;
          $('.content_box').css('height','calc(100% - ' + 344 + 'px)');
        }
      }
    });
  });
  $(window).resize(function () {
    $('.btn_fold').on("click", function() {  
      if($(this).hasClass('unfold')){
        $(this).removeClass('unfold');
        $(this).text("열기");
        $(".search_box").removeClass('active');
        if (document.body.clientWidth > 1700) {
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 157;
          $('.content_box').css('height','calc(100vh - ' + minusHeight + 'px)');
        }else{
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 119;
          $('.content_box').css('height','calc(100vh - ' + minusHeight + 'px)');
        }
      }else{
        $(this).addClass('unfold');
        $(this).text("접기");
        $(".search_box").addClass('active');
        if (document.body.clientWidth > 1700) {
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 176;
          $('.content_box').css('height','calc(100% - ' + 356 + 'px)');
        }else{
          headerHeight = $('.header').innerHeight();
          srchHeight = $('.search_box').innerHeight();
          minusHeight = headerHeight + srchHeight + 136;
          $('.content_box').css('height','calc(100% - ' + 344 + 'px)');
        }
      }
    });
  });
}