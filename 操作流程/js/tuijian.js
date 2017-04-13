
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

		$.ajax({
			type:"post",
			url:"json.json",
			data:"data",
			dataType:"json",
			success:function(data){
				console.log(data);
				$.each(data,function(x,y){
					// console.log(x);
					// console.log(y);
					$("<li class='"+ x +"'>"+x+"<span>+</span>"+"<ul class='y"+ x +"' style='display:none;'>"+"</ul>"+"<li>").append(".box");
					// $.each(y,function(a,b){
					// 	console.log(a);
					// 	console.log(b);
					// 	$.each(b,function(d,f){
					// 		console.log(f);
					// 	});
					// });
				$(".box").append("<ul class='x'></ul>");
				});
			}
		});













	});