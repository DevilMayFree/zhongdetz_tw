// 打開隱藏菜單
$(document).ready(function(){

    $('.linker').on('click', function (e) {
        e.preventDefault();
        const anchor = $(this).attr('href');
        var linkScroll = $(anchor).offset().top;
        $("html, body").stop().animate({scrollTop: linkScroll-60},700);
      });

});