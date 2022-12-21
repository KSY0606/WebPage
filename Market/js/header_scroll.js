
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      //스크롤이 맨 위 일 경우
      if (scroll < 1) {
        $("#top_header").css("display" , "block");
      }
      
      // 스크롤이 내려갈 경우 변경
      else{
        $("#bot_header_border").css("position" , "sticky");
        
      }
    })
  })