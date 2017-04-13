//JavaScript Document
$(function(){
	$('.nav ul li').hover(function(){
		$(this).find('ul').stop().slideToggle()
	})
	
	var sjx=$('#span')
	sjx.hover(function(){
		$('.div').stop().slideToggle()
	})
	$('.xx a:eq(0)').click(function(){
		$('.xx a:eq(0)').addClass('hov').siblings().removeClass('hov')
		$('.xdh a:eq(0)').addClass('hov')
	})
	$('.xx a:eq(1)').click(function(){
		$('.xx a:eq(1)').addClass('hov').siblings().removeClass('hov')
		$('.xdh a:eq(0)').addClass('hov')
	})
	$('.xx a:eq(2)').click(function(){
		$(this).addClass('hov').siblings().removeClass('hov')
		$('.xdh a:eq(0)').addClass('hov')
	})

	$('.xdh a:eq(3)').click(function(){
		$(this).addClass('hov').siblings().removeClass('hov')
	})
	$('.xdh a:eq(2)').click(function(){
		$(this).addClass('hov').siblings().removeClass('hov')
	})
	$('.xdh a:eq(1)').click(function(){
		$(this).addClass('hov').siblings().removeClass('hov')
	})
   
    function fn(obj,obj1,reg,text){
          obj.focus(function(){
		  obj1.html(text)
		  obj1.addClass('red');
	}) 
          var RegExp=reg;
          var result=0
          obj.blur(function(){    //失去焦点	
	    var name=obj.val();  //val   value
	    if(RegExp.test(name)){
	        obj1.html('输入正确');
	        obj1.addClass('green');
	          result=0
	    }else{
	        obj1.html('输入错误,请重新输入');
	          result=1
	          obj1.addClass('red');
	    }
	    if(obj.val()==''){
	        obj1.html('不能为空,请输入内容');
	        obj1.addClass('red');
	    }
	}) 
    }

   fn($('input:eq(1)'),$('input:eq(1)+span'),/^[\u4e00-\u9fa5]{2,4}$/,'请输入姓名');
   fn($('input:eq(2)'),$('input:eq(2)+span'),/^[\u4e00-\u9fa5a-z0-9A-Z]{2,12}$/,'请输入昵称');
   fn($('input:eq(3)'),$('input:eq(3)+span'),/^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1]))$/,'输入格式(xxxx-xx-xx)');
   fn($('input:eq(4)'),$('input:eq(4)+span'),/^0\d{2,3}-\d{5,7}$/,'请输入格式(区号-电话号码)');
   fn($('input:eq(5)'),$('input:eq(5)+span'),/^\d{5,7}$/,'请输入电话号码');
   fn($('input:eq(6)'),$('input:eq(6)+span'),/^0\d{2,3}-\d{5,7}$/,'请输入传真');
   fn($('input:eq(7)'),$('input:eq(7)+span'),/^1[3|4|5|7|8][0-9]\d{4,8}$/,'请输入手机号码');
   fn($('input:eq(8)'),$('input:eq(8)+span'),/^(0[0-9]{8,11})$|^((13|15|18|14|17)[0-9]{9})$/,'请输入号码');
   fn($('input:eq(11)'),$('input:eq(11)+span'),/^[\u4e00-\u9fa5\da-zA-Z]{20,50}$/,'请输入具体地址');
   fn($('input:eq(13)'),$('input:eq(13)+span'),/^[0-9]\d{5}(?!\d)$/,'请输入邮政编码');
   fn($('input:eq(14)'),$('input:eq(14)+span'),/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{3})([0-9]|X)$/,'请输入身份证号码'); 
   fn($('input:eq(15)'),$('input:eq(15)+span'),/[^(a-zA-Z0-9\u4e00-\u9fa5)]/,'请输入个人主页'); 
   fn($('input:eq(16)'),$('input:eq(16)+span'),/^\d{5,10}$/,'请输入QQ号码');
   fn($('input:eq(17)'),$('input:eq(17)+span'),/\S+@[a-z0-9]{2,}\.+[a-z]{2,}/,'请输入MSN账号');
   fn($('input:eq(18)'),$('input:eq(18)+span'),/\S/,'请输入账号');
   fn($('input:eq(19)'),$('input:eq(19)+span'),/^[\u4e00-\u9fa5a-z0-9A-Z]{2,}$/,'请输入公司名称');
   fn($('input:eq(20)'),$('input:eq(20)+span'),/\S+[a-z0-9]{2,}\.+[a-z]{2,}/,'请输入UC号码');
   fn($('input:eq(21)'),$('input:eq(21)+span'),/^[\u4e00-\u9fa5]{2,}$/,'请输入您的职务');
   fn($('input:eq(22)'),$('input:eq(22)+span'),/^([1-9]{1}|[1-9][0-9]{2}|[1-9][0-9]{3})-[0-9]{3}-[0-9]{3}$/,'请输入您的ICQ');
   fn($('input:eq(23)'),$('input:eq(23)+span'),/^[1-9][0-9]{2}$/,'请输入头像宽度(px)');
   fn($('input:eq(24)'),$('input:eq(24)+span'),/^[1-9][0-9]{2}$/,'请输入头像高度(px)');
   


    
	



































	})


 