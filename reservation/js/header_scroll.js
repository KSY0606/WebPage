var logo = "images/pf.png";
var sc_logo = "images/호텔.png";
var search = "images/search.png";
var sc_search = "images/sc_search.png";

$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      //스크롤이 맨 위 일 경우
      if (scroll < 1) {
        $("header").css("background-color" , "#f94848");
        $("header").css("border-bottom" , "");

        $(".top-menu > ul > li").css("color" , "#eaeaea");

        $(".logo > a").css("background-image" , 'url("' + logo + '")');
        $(".logo > a").css("background-size" , "130px 54px");

        $(".search").css("background-image" , 'url("' + search + '")');
      }
      
      // 스크롤이 내려갈 경우 변경
      else{
        $("header").css("background-color" , "#fff");
        $("header").css("box-shadow" , "0 -4px 9px 1px #ccc");

        $(".top-menu > ul > li").css("color" , "#353535");

        $(".logo > a").css("background-image" , 'url("' + logo + '")');

        $(".search").css("background-image" , 'url("' + sc_search + '")');
      }
    })
  })