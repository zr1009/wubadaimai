// JavaScript Document
$(function(){
var oLi=$('#nav ul>li')
oLi.hover(function(){
	$(this).find('ul').stop().slideToggle('slow');
	})
});
