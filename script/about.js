$(document).ready(function(){
	$(".anim-about").click(show);
function show(e){
	$(".contain-about").removeClass("activ-about").find(".fa").removeClass("fa-caret-down");
	$(this).closest(".contain-about").addClass("activ-about").find(".fa-2x").addClass("fa-caret-down");
	showdiw($(this).attr('id'));
}
function showdiw(ident){
	$(".testing").css("display","none");
	$("."+ident).css("display","block");
}

})