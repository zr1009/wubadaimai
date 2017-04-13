//JavaScript Document
$(function(){
	$('.nav ul li').hover(function(){
		$(this).find('ul').stop().slideToggle()
	})
	
	var sjx=$('#span')
	sjx.hover(function(){
		$('.div').stop().slideToggle()
	})
	var result=0
	function fn(obj,obj1,reg,text){
          obj.focus(function(){
		  obj1.html(text)
	}) 
          var RegExp=reg;
          
          obj.blur(function(){    //失去焦点	
	    var name=obj.val();  //val   value
	    if(RegExp.test(name)){
	        obj1.html('输入正确')
	          result=0
	    }else{
	        obj1.html('输入错误,请重新输入')
	          result=1
	    }
	    if(obj.val()==''){
	        obj1.html('')
	    }
	}) 
    }

   fn($('input:eq(1)'),$('input:eq(1)+span'),/^[\u4e00-\u9fa5]{2,4}$/,'请输入姓名');
   fn($('input:eq(2)'),$('input:eq(2)+span'),/^1[3|4|5|7|8][0-9]\d{4,8}$/,'请输入手机号码');
   fn($('input:eq(3)'),$('input:eq(3)+span'),/^\d{1,}$/,'请输入充值金额');
   fn($('input:eq(6)'),$('input:eq(6)+span'),/^\d{1,}$/,'请输入充值现金额(同上)');
   fn($('input:eq(7)'),$('input:eq(7)+span'),/^[\u4e00-\u9fa5a-z0-9A-Z]{2,}$/,'请输入金额详情');

$('input:eq(5)').click(function(){
  	$('input:eq(1)').val('')
  	$('input:eq(2)').val('')
  	$('input:eq(3)').val('')
  	$('input:eq(1)+span').html('')
  	$('input:eq(2)+span').html('')
  	$('input:eq(3)+span').html('')
  })


	sjx.mouseout(function(){
		$('.div').stop().slideUp();
	})
	$('.div').hover(function(){
		$(this).stop().slideDown();
	},function(){
		$(this).stop().slideUp();
	})
	

   
})


 