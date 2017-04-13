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

   fn($('input:eq(1)'),$('input:eq(1)+i'),/^\d{1,}$/,'请输入支付的金额');
})


 