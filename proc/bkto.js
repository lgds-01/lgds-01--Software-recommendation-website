$(function(){$(".backto").click(function(){$("html,body").animate({scrollTop:"0px"},"normal")})});$(window).scroll(function(){$height=$("html,body").scrollTop();if($("html,body").scrollTop()<130){$(".backto").stop().hide(1)}else{$(".backto").stop().show(1)}});