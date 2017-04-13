// JavaScript Document

$(function(){
	
	var oLi=$(".daohang ul>li");
	oLi.hover(function(){
		$(this).find("ul").stop().slideToggle();     //切换
	})

$(".daohang ul li ul li").hover(function(){
	$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
	
	
	$(".a1").click(function(){
	$(".yc").stop().toggle();
  })
  
  
    var oLi=$('.box ul>li');
      oLi.click(function(){
      $(this).find('ul').slideToggle();
      })
})