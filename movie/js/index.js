$(function() {
    var index = 0;
    var auto;
    var sw = false;
    moveSlider(index);
    autoSlider();

    // 컨트롤 버튼 이벤트
    $(".control_button").click(function() {
        index = $(this).index();
        moveSlider(index);
    });

    //좌측 버튼 이벤트
    $(".left_control").click(function() {
        index --;
        moveSlider(index);
    });

    //우측 버튼 이벤트
    $(".right_control").click(function() {
        index ++;
        moveSlider(index);
    });

    // 슬라이드 캔버스 영역에 이벤트
    $(".slider_panel").hover(function() {
        clearInterval(auto);
    }, function() {
        autoSlider();
    });
    
    // 이미지 슬라이더 구현 함수
    function moveSlider(index) {
        if(index < 4 && index > 0) {
            $(".left_control").fadeIn(500);
            $(".right_control").fadeIn(500);
        }
        if(index == 4) {
            $(".right_control").fadeOut(500);
            $(".left_control").fadeIn(500);
        }
        if(index == 0) {
            $(".left_control").fadeOut(500);
            $(".right_control").fadeIn(500);
        }
        $(".slider_panel").animate({
            left : -(index*1100)
        }, "slow");
        $(".control_button").removeClass("active");
        $(".control_button").eq(index).addClass("active");
        $(".slider_text").hide();
        $(".slider_text").eq(index).fadeIn("slow");
    }
    // 자동으로 이미지 슬라이드 구현 함수
    function autoSlider() {
        auto = setInterval(function() {
            if(index < 4 && sw == false) {
                $(".right_control").trigger("click");
            }else {
                sw = true;
            }
            if(index > 0 && sw == true) {
                $(".left_control").trigger("click");
            }else {
                sw = false;
            }
        }, 3500);
    }
});