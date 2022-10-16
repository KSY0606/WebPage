var logo = "images/pf.png";
var sc_logo = "images/호텔.png";
var search = "images/search.png";
var sc_search = "images/sc_search.png";

$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      //스크롤이 맨 위 일 경우
      if (scroll < 1) {
        $("header").css("background-color" , "#FF3636");

        $(".top-menu > ul > li").css("color" , "#eaeaea");

        $(".logo > a").css("background-image" , 'url("' + logo + '")');
        $(".logo > a").css("background-size" , "130px 54px");
        
        $(".search").css("background-image" , 'url("' + search + '")');
      }
      // 스크롤이 내려갈 경우 변경
      else{
        $("header").css("background-color" , "#fff");

        $(".top-menu > ul > li").css("color" , "#353535");

        $(".logo > a").css("background-image" , 'url("' + sc_logo + '")');
        $(".logo > a").css("background-size" , "130px 54px");

        $(".search").css("background-image" , 'url("' + sc_search + '")');
      }
    })
  })