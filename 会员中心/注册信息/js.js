//JavaScript Document
$(function(){
	$('.nav ul li').hover(function(){
		$(this).find('ul').stop().slideToggle()
	})
	var sjx=$('#span')
	sjx.hover(function(){
		$('.div').stop().slideToggle()
	})
})


 