$(document).ready(function(){
    $("figure").mouseenter(goAnim).mouseleave(noAnim);
    $(".scroll-down").onclick(scroll);
    function scroll(){
        $(window).scrollTo(400);
    }
   function goAnim(){
    $(this).find('p').addClass("animated fadeInUp");
    $(this).find('img').css("opacity","0.4")
   }
   function noAnim(){
    $(this).find('p').removeClass("animated fadeInUp")
     $(this).find('img').css("opacity","1")
   }
});