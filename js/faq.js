$(document).ready(function() {
  //general classes
    var active = "wpb-current",
        wrapper = ".wpb-tab-content",
        heading = "wpb-heading";

    // code for creating accodion heading
    $('<h2></h2>', {
        class: heading+' wpb-destophide',
    }).insertBefore(wrapper);
    // code for creating accodion panel
        $(".wpb-tabs-menu a").each(function () {
	        var tab = $(this).attr("href");
	        $(this).clone().appendTo($(tab).prev($('.'+heading)));
	    });
    // code For tabs
    $(".wpb-tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).addClass(active);
        $(this).parent().siblings().children().removeClass(active);
        var tab = $(this).attr("href");
        $(wrapper).not(tab).css("display", "none").removeClass('active');
        $(tab).fadeIn().addClass('active');

        $(".wpb-tabs-menu a").each(function () {
	        var tab = $(this).attr("href");
	        $(this).clone().appendTo($(tab).prev($('.'+heading)));
	    });
	    $('.'+heading+ ' a').prev().remove();
    });


    // code for accodion function
    $(document).on('click', '.wpb-heading a', function (e) {
        e.preventDefault();
        if(!$(this).hasClass(active)){
            $(this).addClass(active);
            $(this).parent().siblings('.'+heading).children().removeClass(active);
            $(this).parent().next().slideDown();
            $(this).parent().next().siblings(wrapper).slideUp();
        }
        else{
            $(this).removeClass(active);
            $(this).parent().next().slideUp();
        }
    });
  
    // code for back to desktopview
    if($(window).width()>=768){
        $(".wpb-tabs-menu  a.wpb-current").each(function () {
            var tab = $(this).attr("href");
            $(tab).fadeIn();
            $(tab).siblings().hide();
        });
    }
});

    $(window).on('resize', function () {
  
    // code for back to desktopview
    if($(window).width()>=768){
        $(".wpb-tabs-menu  a.wpb-current").each(function () {
            var tab = $(this).attr("href");
            $(tab).fadeIn();
            $(tab).siblings().hide();
        });
    }
});