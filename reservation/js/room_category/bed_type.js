// .style.top = "-21px";
function click_bed_type() {
    const single = document.querySelector(".bed_type > div > p:nth-child(1) > span:nth-child(1) > img");
    const double = document.querySelector(".bed_type > div > p:nth-child(2) > span:nth-child(1) > img");
    const twin = document.querySelector(".bed_type > div > p:nth-child(3) > span:nth-child(1) > img");
    const ondor = document.querySelector(".bed_type > div > p:nth-child(4) > span:nth-child(1) > img");


    if(single) {
        single.style.top = "-21px";
    }else if(double) {
        double.style.top = "-21px";
    }else if(twin) {
        twin.style.top = "-21px";
    }else {
        ondor.style.top = "-21px";
    }
}