$(document).ready(function(){
    $(window).scroll(function(){
        var move = $(window).scrollTop();
        $("#left").css({
        	"transform":"translate(0%," + -move/40 + "%"
        })
        $(".home_mt").css({
            "transform":"translate(0%," + move/3     + "%"
        })
         $(".start").css({
            "transform":"translate(0%," + move/2 + "%"
        })

    });
});