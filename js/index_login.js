$(()=>{
	$.getJSON("data/users/index_login.php").then(data=>{
		if(data.ok===0){
			$("#login1").show().next().hide();
		}else{
			$("#login1").hide().next().show();
			$("#img11").attr("src",data.avatar);
			$("#uname1").html(data.user_name);
		}		
	});
});