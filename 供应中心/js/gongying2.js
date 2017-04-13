	$(function(){
		var oLi=$('.nav ul:eq(0)>li');
		oLi.hover(function(){
			$(this).find('ul:eq(0)').stop().slideToggle();//切换 Toggle
		});
		
		$('.nav ul:eq(0) li ul li a').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		})
		$('.nav ul:eq(0) li').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		})

		var zc=$('.zhuce');
		var zh=$('.zhuce ul:eq(0) .zhanghao');
		var sj=$('.sj li');
		zc.hover(function(){
			zh.stop().slideDown();
			sj.addClass('hover');
		},function(){
			zh.stop().slideUp();
			sj.removeClass('hover');
		});

		var bx=$('.buxian li');
		var city=$('.city');
		$('.buxian').hover(function(){
			city.stop().slideDown();
			bx.addClass('hover');
			$('.buxian>ul>li b').addClass('hover');
		},function(){
			bx.removeClass('hover');
			city.stop().slideUp();
			$('.buxian>ul>li b').removeClass('hover');
		});

		var sJ=$('.shijian li');
		sJ.hover(function(){
			$(this).find('ul').stop().slideDown();
			$(this).find('b').addClass('hover');
			$(this).find('p').addClass('hover');
		},function(){
			$(this).find('ul').stop().slideUp();
			$(this).find('b').removeClass('hover');
			$(this).find('p').removeClass('hover');
		});
		var oUli=$('.yeshu ul li')
		oUli.hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover');
		})











	})