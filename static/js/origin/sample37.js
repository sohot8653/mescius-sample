let spread = GC.Spread;
let designer;

window.onload = function () {
  initSpread(spread);
};


function initSpread(spread) {
  $.ajax({
      url:"/api/sample37",
      dataType : "json",
      error : function(){
          alert("에러!!!!");
      },
      success : function(data){   
        console.log(data);
        spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
         
        // workbook.suspendPaint();
        // workbook.suspendCalcService();
        // workbook.suspendEvent();
         
        spread.fromJSON(data);
         
        // workbook.resumeEvent();
        // workbook.resumeCalcService();
        // workbook.resumePaint();
    }
  });
}