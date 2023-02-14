var logo = "../../images/common/logo.png";
var ch_logo = "../../images/common/ch_logo.png";

var search = "../../images/common/search.png";
var sc_search = "../../images/common/sc_search.png";

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    //스크롤이 맨 위 일 경우
    if (scroll < 1) {
      $("header").css("background-color" , "#f7323f");
      $("header").css("box-shadow" , "none");

      $(".top-menu > ul > li").css("color" , "#eaeaea");

      $(".logo > a").css("background-image" , 'url("' + logo + '")');
      $(".logo > a").css("background-size" , "96px 21px");

      $(".search").css("background-image" , 'url("' + search + '")');
    }
    
    // 스크롤이 내려갈 경우 변경
    else{
      $("header").css("background-color" , "#fff");
      $("header").css("box-shadow" , "0 -4px 9px 1px #ccc");

      $(".top-menu > ul > li").css("color" , "#353535");

      $(".logo > a").css("background-image" , 'url("' + ch_logo + '")');

      $(".search").css("background-image" , 'url("' + sc_search + '")');
    }
  })
})

function show_more() {
  $(".top-menu > ul > li:nth-child(3) > ul").css("display", "block")
}
function show_more_del() {
  $(".top-menu > ul > li:nth-child(3) > ul").css("display", "none")
}