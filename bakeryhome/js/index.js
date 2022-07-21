function partpopup() {
    window.open("popup.html", "", "width = 450, height = 455");
}
function info() {
    alert("DD베이커리 홈페이지를 찾아주셔서 고맙습니다. \n종로에 4호점이 오픈되었습니다. \n많이 이용해주세요.");
}

setTimeout(function () {
    info();
}, 3000);

$(function() {
    $(".dropdown").hover(function() {
       // $(this).find(".dropdown_content").stop().slideDown();
       $(".dropdown_content").stop().slideDown();
    }, function() {
       // $(this).find(".dropdown_content").stop().slideUp();
       $(".dropdown_content").slideUp();
    });
});