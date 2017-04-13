window.onload=function(){
  var oS=document.getElementById('s1');	
  var oCon=document.getElementById('con');	
  var timer=null;
	function show(){
	   clearInterval(timer);	
	   oCon.style.display='block';
	}
	function hide(){
	   timer=setTimeout(function(){
	     oCon.style.display='none';
	   },500);	
	}
	oS.onmouseover=show;
	oS.onmouseout=hide;
	oCon.onmouseover=show;
	oCon.onmouseout=hide;
}
$(function(){
	$('.xszn').click(function(){
		$(this).nextAll().toggle();
	})
    $('.xszn2').click(function(){
		$(this).nextAll().toggle();
	})
	$('.xszn3').click(function(){
		$(this).nextAll().toggle();
	})
   	$('.xszn4').click(function(){
		$(this).nextAll().toggle();
	})
	$('.xszn5').click(function(){
		$(this).nextAll().toggle();
	})

})
$(function(){
	var oLi=$('.box ul>li');
	oLi.hover(function(){
		$(this).find('ul').stop().slideToggle();
	})
})
$(function(){
	$(window).scroll(function(){
		var headH=$('.top').height()+$('.nav').height()+$('#cen').height();
		if($(document).scrollTop() > headH){
			$('#cen').slideDown();
		}else{
			$('#cen').slideUp();
		}
	})
	$(window).scroll(function(){
		if($(document).scrollTop()>$(window).height()){
			$('.back').slideDown();
		}else{
			$('.back').slideUp();
		}
	})
	$('.back').click(function(){
		$('body,html').animate({'scrollTop':0},1000)
	})
})


