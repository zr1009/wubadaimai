// JavaScript Document
$(function(){
var $sub=$(':submit');
	var aName=/^[\u4e00-\u9fa5]{2,4}$/;	
	$('input:eq(2)').blur(function(){
		var aNa=$('input:eq(2)').val();
		if(aName.test(aNa)){
			$('input:eq(2)+span').html('恭喜您，用户名可以使用！')
		}else{
			$('input:eq(2)+span').html('请输入6-12位用户名')
		}
	})
	
	
	var regpsw=/^\S{6,20}$/
	var regpsw2=/^\u4E00-\u9FA5/
	$('input:eq(3)').blur(function(){
		var psw=$('input:eq(3)').val();
		if(regpsw.test(psw)){
			$('input:eq(3)+span').html('输入正确')
		}else{
			$('input:eq(3)+span').html('密码至少6位')
		}
	})
	
	$('input:eq(4)').blur(function(){
		var psw=$('input:eq(3)').val();
		var rpsw=$('input:eq(4)').val();
		if(psw==rpsw){
			$('input:eq(4)+span').html('输入正确')
		}else{
			$('input:eq(4)+span').html('两次密码输入不一致')
		}
	})
	
	var mail=/^\S+@[a-z0-9]{2,3}\.[a-z]{2,3}$/;
	$('input:eq(6)').blur(function(){
		var tel=$('input:eq(6)').val();
		if(mail.test(tel)){
			$('input:eq(6)+span').html('输入正确')
		}else{
			$('input:eq(6)+span').html('输入正确email')
		}
	})
	
	
	var shenfen=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{3})([0-9]|X)$/;
	$('input:eq(7)').blur(function(){
		var shen=$('input:eq(7)').val();
		if(shenfen.test(shen)){
			$('input:eq(7)+span').html('输入正确')
		}else{
			$('input:eq(7)+span').html('请输入正确身份证号')
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