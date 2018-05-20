//表单验证-用户名
$(function(){
	var bstop=true;//不通过
	var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
	$('#username').on('blur',function(){
		var username=$(this).val();
		if(username!=''){
			if(usereg.test(username)){
				$.ajax({
					type:'post',
					url:'../php/reg.php',
					data:{
						name:username
					},
					success:function(data){
						if(!data){
							$('span').eq(0).html('');
							bstop=false;
						}else{
							$('span').eq(0).css('color','red').html('该用户名已经存在');
							bstop=true;
						}
					}
				})
				}else{
					$('span').eq(0).html('格式不正确');
				bstop=true;
			}
		}else{
			$('span').eq(0).css('color','red').html('用户名不能为空');
			bstop=true;
		}
	});
	var psdreg=/^([0-9]|[a-z]|[\W\_]){6,16}$/i;
	$('#password').on('blur',function(){
		var psd=$(this).val();
		if(psd!=''){
			if(psdreg.test(psd)){
				$('span').eq(1).html('');
				bstop=false;
				}else{
					$('span').eq(1).html('格式不正确');
				bstop=true;
			}
		}else{
			$('span').eq(1).css('color','red').html('密码为6-16个');
			bstop=true;
		}
	});
	
	$('form').on('submit',function(){
		if(bstop){
			return false;//阻止按钮跳转。
			}
	});
});
var aSpan=document.getElementsByTagName('span');
var aText=document.querySelectorAll('input');
aText[4].onblur=function(){
	if(this.value!=''){
		if(this.value==aSpan[2].innerHTML){
			aSpan[3].innerHTML='';
		}
		else{
			aSpan[3].innerHTML='输入有误';
		}
	}
	else{
		aSpan[3].innerHTML='验证码不能为空';
	}
}
aSpan[2].onclick=function(){
	aText[4].select();
	var arr=[];
	for(var i=48;i<=57;i++){
		arr.push(String.fromCharCode(i));
	}
	for(var i=97;i<=122;i++){
		arr.push(String.fromCharCode(i));
	}
	var str='';
	for(var i=0;i<4;i++){
		var index=parseInt(Math.random()*arr.length);
		if(index>9){
			var bstop=Math.random()>0.5?true:false;
			if(bstop){
				str+=arr[index].toUpperCase();
			}else{
				str+=arr[index];
			}
		}else{
			str+=arr[index];
		}
	}
	this.innerHTML=str;
}
