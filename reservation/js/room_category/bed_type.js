// .style.top = "-21px";
function single_bed_click() {
    const single = document.querySelector(".bed_type > div > p:nth-child(1) > span:nth-child(1) > img");
    const single_name = document.querySelector(".bed_type > div > p:nth-child(1) > span:nth-child(2)");

    if(single.style.top == "-21px") {
        single.style.top = "2px";
        single_name.style.color = "rgba(0,0,0,0.87)";
    }else {
        single.style.top = "-21px";
        single_name.style.color = "rgb(242,17,76)";   
    }
}

function double_bed_click() {
    const double = document.querySelector(".bed_type > div > p:nth-child(2) > span:nth-child(1) > img");
    const double_name = document.querySelector(".bed_type > div > p:nth-child(2) > span:nth-child(2)");

    if(double.style.top == "-21px") {
        double.style.top = "2px";
        double_name.style.color = "rgba(0,0,0,0.87)";
    }else {
        double.style.top = "-21px";
        double_name.style.color = "rgb(242,17,76)";   
    }
}

function twin_bed_click() {
    const twin = document.querySelector(".bed_type > div > p:nth-child(3) > span:nth-child(1) > img");
    const twin_name = document.querySelector(".bed_type > div > p:nth-child(3) > span:nth-child(2)");

    if(twin.style.top == "-21px") {
        twin.style.top = "2px";
        twin_name.style.color = "rgba(0,0,0,0.87)";
    }else {
        twin.style.top = "-21px";
        twin_name.style.color = "rgb(242,17,76)";   
    }
}

function ondor_bed_click() {
    const ondor = document.querySelector(".bed_type > div > p:nth-child(4) > span:nth-child(1) > img");
    const ondor_name = document.querySelector(".bed_type > div > p:nth-child(4) > span:nth-child(2)");

    if(ondor.style.top == "-21px") {
        ondor.style.top = "2px";
        ondor_name.style.color = "rgba(0,0,0,0.87)";
    }else {
        ondor.style.top = "-21px";
        ondor_name.style.color = "rgb(242,17,76)";   
    }
}