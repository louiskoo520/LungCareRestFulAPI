$(document).ready(function(){
	$(".sbtn").click(function(){
		var userName = $("input[name='userName']").val();
		var passwd = $("input[name='passwd']").val();
		if(userName==""||userName==null){
			alert("用户名不能为空");
			return;
		}
		if(passwd==""||passwd==null){
			alert("密码不能为空");
			return;
		}
		$.ajax({
			type:"post",
			url:"user/login",
			data:{userName:userName,passwd:passwd,param:"server"},
			dataType:"html",
			success:function(data){
				if(data==1){
					alert("用户名不存在");
				}else if(data==2){
					alert("密码不正确");
				}else{
					data = eval("("+data+")");
					window.location.href = "index.html";
				}
			}
		});
		return false;
	});
	
	/*
	 * 点击事件,显示二维码
	 */
	 $(".erweima-a").click(function(){
		 $(".saomiao").show();
		 $(".login_box").hide();
	 });
	 
	 
	 /*
	  *
	  */
	  
	  $(".saomiao .del-a").click(function(){
		  $(".saomiao").hide();
		 $(".login_box").show();
		  
		  
		});
});






























