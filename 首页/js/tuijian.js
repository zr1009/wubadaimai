
	$(function(){
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

		$('.zuo p a').click(function(){
			var index=$(this).index();
			$('.you-n>div').eq(index).show().siblings().hide();
			$(this).addClass('hover').siblings().removeClass('hover');
		});

		var aLi=$('.sj li')
		$('.zhuce').hover(function(){
			$('.zhuce ul .zhanghao').stop().slideDown();
			 aLi.addClass('hover');
		},function(){
			$('.zhuce ul .zhanghao').stop().slideUp();
			 aLi.removeClass('hover');
		});

		$('.buxian>ul').hover(function(){
			$('.buxian>ul ul').stop().slideDown();
			$(this).find('input').addClass('hover');
		},function(){
			$('.buxian>ul ul').stop().slideUp();
			$(this).find('input').removeClass('hover');
		});










	});