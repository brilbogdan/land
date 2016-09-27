(function($) {
$(function() {

	$('.faq ul.tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('.faq').find('div.box').hide().eq($(this).index()).fadeIn(150);
	})
    
    $('#accordion ul').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
	})
    
    $('.location ul').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
	})
    

})
})(jQuery);

(function($) {
$(function() {

  $('input, select').styler(); 

});
})(jQuery);


$(function () {
    if($('.popup-modal').length > 0){
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false
	});
    }
});


$(function() {
    
  $(".btn-calc").click(function() {
    $(".btn-calc").addClass("active"); 
  });
  
  $(".inp-calc, .jq-selectbox__select, .location ul li").click(function() {
    $(".btn-calc").removeClass("active"); 
  });
    
    
    
  $(".btn_recl_act").click(function() { 
      
    $("#fullpage").addClass("rekl");
    $('#anime').removeClass().addClass('bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
      
    $("body").delay(1000).removeClass("web_act");
    $("body").delay(1000).addClass("recl_act");  
      
  });
    
    
  $(".btn_web_act").click(function() {
    
      
    $("#fullpage").removeClass("rekl");
      $('#anime').removeClass().addClass('bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
      
    $("body").delay(1000).removeClass("recl_act"); 
    $("body").delay(1000).addClass("web_act");
      
  });
    

  $(".btn-start").click(function() {
    $(this).toggleClass("active"); return false;
  });

    
});

$(function() {
    if($('.datepicker').length > 0){
    $( ".datepicker" ).datepicker({
        dateFormat: "dd.mm.yy"
    });
    };
    
    if($('#tabs').length > 0){
    $('#tabs').tabtab();
    };
});


$(function() {
  $(".btn-next-st-1").click(function() { 
    $("body").removeClass('slide1_active').addClass('slide2_active'); 
    return false;
  });
  $(".btn-next-st-2").click(function() {
    $("body").removeClass('slide2_active').addClass('slide3_active'); 
    return false;
  });
  $(".btn-next-st-3").click(function() {
    $("body").removeClass('slide3_active').addClass('slide4_active'); 
    return false;
  });
  $(".btn-next-st-4").click(function() {
    $("body").removeClass('slide4_active').addClass('slide5_active'); 
    return false;
  });
  $(".btn-next-st-5").click(function() {
    $("body").removeClass('slide5_active').addClass('slide6_active'); 
    return false;
  });
    
  $(".btn-prev-st-5").click(function() {
    $("body").removeClass('slide5_active').addClass('slide4_active'); 
    return false;
  });
  $(".btn-prev-st-4").click(function() {
    $("body").removeClass('slide4_active').addClass('slide3_active'); 
    return false;
  });
  $(".btn-prev-st-3").click(function() {
    $("body").removeClass('slide3_active').addClass('slide2_active'); 
    return false;
  });
  $(".btn-prev-st-2").click(function() {
    $("body").removeClass('slide2_active').addClass('slide1_active'); 
    return false;
  });
    
});






