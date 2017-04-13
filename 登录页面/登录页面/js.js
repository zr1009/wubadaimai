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
	var oLi=$('.dh ul li');
	oLi.hover(function(){
		$(this).find('ul').stop().slideToggle();
	})
	
	/*$('.box ul li ul li').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	})*/
	$('.dh ul li ul li').mouseover(function(){
		$(this).addClass('hover');	
	}).mouseout(function(){
		$(this).removeClass('hover');	
	})
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
	
	
		var $sub=$(':submit');
		var aName=/./;	
		$('.y').blur(function(){
			var aNa=$('.y').val();
			if(aName.test(aNa)){
				$('.y-1').html('恭喜您，用户名可以使用！')
			}else{
				$('.y-1').html('请输入6-12位用户名')
			}
		})
		var regpsw=/^\S{6,20}$/
		var regpsw2=/^\u4E00-\u9FA5/
		$('.q').blur(function(){
			var psw=$('.q').val();
			if(regpsw.test(psw)){
				$('.q-1').html('输入正确')
			}else{
				$('.q-1').html('密码至少6位')
			}
		})
		
		$('.q2').blur(function(){
			var psw=$('.q2').val();
			var rpsw=$('.q').val();
			if(psw==rpsw){
				$('.q2-1').html('输入正确')
			}else{
				$('.q2-1').html('两次密码输入不一致')
			}
		})
		
		var mail=/^\S+@[a-z0-9]{2,3}\.[a-z]{2,3}$/;		
		$('.em').blur(function(){
			var tel=$('.em').val();
			if(mail.test(tel)){
				$('.em-1').html('输入正确')
			}else{
				$('.em-1').html('输入正确email')
			}
		})
		
		
		var shenfen=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{3})([0-9]|X)$/;
		$('.s').blur(function(){
			var shen=$('.s').val();
			if(shenfen.test(shen)){
				$('.s-1').html('输入正确')
			}else{
				$('.s-1').html('请输入正确身份证号')
			}
		})
		
		
		$sub.click(function(e){
			if(0){
				l.submit();
			}else{
				e.preventDefault();
			}
	})

})




