/* 자주 묻는 질문 카테고리 선택시 공지 목록 변경 */

function select_change_color(tar) {
    $('.menu_name_area > span').css('color', 'black');
    $('.menu_name_area > span').css('font-weight', 'normal');

    $(tar).css('color', '#E61C51');
    $(tar).css('font-weight', 'bold');

    
    $('.faq_contents_area').css('display', 'none');
}

$(document).ready(function(){
    $(".menu_name_area > span:nth-child(1)").click(function(){
        select_change_color(this);

        $('.menu_contents_area > div:nth-child(1)').css('display', 'block');
    })
})
$(document).ready(function(){
    $(".menu_name_area > span:nth-child(2)").click(function(){
        select_change_color(this);

        $('.menu_contents_area > div:nth-child(2)').css('display', 'block');
    })
})

$(document).ready(function(){
    $(".menu_name_area > span:nth-child(3)").click(function(){
        select_change_color(this);
        
        $('.menu_contents_area > div:nth-child(3)').css('display', 'block');
    })
})

$(document).ready(function(){
    $(".menu_name_area > span:nth-child(4)").click(function(){
        select_change_color(this);
        
        $('.menu_contents_area > div:nth-child(4)').css('display', 'block');
    })
})

$(document).ready(function(){
    $(".menu_name_area > span:nth-child(5)").click(function(){
        select_change_color(this);
        
        $('.menu_contents_area > div:nth-child(5)').css('display', 'block');
    })
})