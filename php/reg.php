<?php
	require "conn.php";//引入数据库连接的文件
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$name=@$_POST['name'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from user where username='$name'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo true;//有重复
	}else{
		echo false;//没有重复
	}
	
	if(isset($_POST['submit'])){
		$name=$_POST['username'];//username：表单的名称
		$pass=md5($_POST['password']);
		$query="insert user values(null,'$name','$pass')";
		mysql_query($query);
		header('location:../html/login.html');
	}
	
?>