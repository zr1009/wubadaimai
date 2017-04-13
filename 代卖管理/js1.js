// JavaScript Document
/*$(function(){
	var oLi=$('dh');
	oLi.click(function(){
		$(this).find('ul').toggle();
	})
	$('.dh ul li').mouseover(function(){
		$(this).addClass('hover');	
	}).mouseout(function(){
		$(this).removeClass('hover');	
	})
})*/

//导航
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

//下拉菜单
  var oLi=$('.box ul>li'); 
  oLi.click(function(){
    $(this).find('ul').stop().toggle();
  })
 

//选型卡

	$('.k-s ul li').click(function(){
		var index=$(this).index();
		$('.div1').eq(index).show().siblings().hide();	
	})	
	
	$('.denglu').click(function(){
		$(this).addClass('hover');	
		$('.denglu1').toggle(function(){
			//$('.denglu').removeClass('hover')
		});	
	})
	
//表单验证
	var diname=/./;
	var regpsw=/^\S{6,20}$/;
	var regpsw2=/^\u4E00-\u9FA5/;
	$('.hname').blur(function(){
		var diname1=$('.hname').val();
		if(diname.test(diname1)){
			result=0;
			$('.h-1').html('输入正确');
		}else{
			result=1;
			$('.h-1').html('请输入正确会员名');
		}
	});
	$('.paw').blur(function(){
		var psw=$('.paw').val();
		if(regpsw.test(psw)){
			result=0;
			$('.p-1').html('正确')
			
		}
		else{
			result=1;
			$('.p-1').html('密码错误')
		}
	})
})




