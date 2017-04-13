// JavaScript Document
$(function(){
	var xiangyun=$('.xiangyun')
	xiangyun.mouseover(function(){
		$('.div').stop().slideDown();
	})
	xiangyun.mouseout(function(){
		$('.div').stop().slideUp();
	})
	$('.div').hover(function(){
		$(this).stop().slideDown();
	},function(){
		$(this).stop().slideUp();
	})
	var oLi=$('.nav ul>li');
	oLi.hover(function(){
		$(this).find('ul').stop().slideToggle();//切换 Toggle
	});
	$('.nav ul:eq(0) li ul li a').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
	$('.nav ul:eq(0) li').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
	var oLi=$('.content1-left ul li');
	oLi.click(function(){
		$(this).find('ol').toggle();
	})	
})