// JavaScript Document
$(function(){
var oLi=$('#nav ul>li')
oLi.hover(function(){
	$(this).stop().find('ul').slideToggle('slow');
	})
});
