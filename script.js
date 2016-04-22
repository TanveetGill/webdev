$(document).ready(function() {
	
	$(".pic").hover(function(){
		$(this).css("border-style", "dashed");
		$(this).css("border-width", "1px");
	});

	$("#muffin_anim").draggable();

	// $("img").css("border-style", "solid");

	$(".check").click(function() {
		$(this).addClass("checkJump");
	});

});