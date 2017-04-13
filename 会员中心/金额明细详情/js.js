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
   fn($('input:eq(1)'),$('input:eq(1)+span'),/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,'请输入IP地址');
   fn($('input:eq(2)'),$('input:eq(2)+span'),/^[+-]?\d+(\.\d+)?$/,'请输入数量');
   fn($('input:eq(3)'),$('input:eq(3)+span'),/^[\u4e00-\u9fa5]{2,4}$/,'请输入姓名');
   fn($('input:eq(4)'),$('input:eq(4)+span'),/^[\u4e00-\u9fa5a-z0-9A-Z]{0,50}$/,'备注(50字内)');
   
})


 