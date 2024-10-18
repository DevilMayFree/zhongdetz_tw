
// 下滑時顯示右側 icons
$(document).ready(function(){

	// Go to top 按鈕隱藏/顯示
	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			if (!$(".icon-container").hasClass("appear")) {
				$(".icon-container").toggleClass("appear");
			}
		} else {
			if ($(".icon-container").hasClass("appear")) {
				$(".icon-container").toggleClass("appear");
			}
		}
	});

	// 回到最上層
	$("#gotop").click(function(){
		$("html, body").animate({scrollTop: 0},500);
	});

});