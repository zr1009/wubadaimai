	$(function(){
		var oLi=$('.nav ul:eq(0)>li');
		oLi.hover(function(){
			$(this).find('ul:eq(0)').stop().slideToggle();//切换 Toggle
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

		// 轮播图
		var aLi=$('.banner ul:eq(0) li');
		var oUl=$('.banner ul:eq(0)');
		var index=0;
		var timer=null;
		var num=0;
		var aLia=$('.banner ul:eq(1) li');
		oUl.width(aLi.width()*5);
		$('.banner').hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
				oUl.not(':animated').animate({'left':-775},900,function(){
					$('.banner ul:eq(0) li:first').appendTo(oUl);
					oUl.css({'left':0})
				});
				num=index+1;
				index++;
				if(index==aLi.length){
					index=0;
				}
				aLia.stop().eq(index).addClass('hover').siblings().removeClass('hover');
			},2000);
		}).trigger('mouseleave');
		$('.banner b').click(function(){
			oUl.not(':animated').animate({'left':-775},1000,function(){
				$('.banner ul:eq(0) li:first').appendTo(oUl);
				oUl.css({'left':0});
			});
			index=num+1;
			num++;
			if(num==aLi.length){
				num=0;
			}
			aLia.stop().eq(num).addClass('hover').siblings().removeClass('hover');
		});
		$('.banner s').click(function(){
			index=num-1;
			num--;
			if(num==-1){
				num=0;
			}
			aLia.stop().eq(num).addClass('hover').siblings().removeClass('hover');
			$('.banner ul:eq(0) li:last').prependTo(oUl);
			oUl.css({'left':-775});
			oUl.not(':animated').animate({'left':0},1000);
		});	





















	});