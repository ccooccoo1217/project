<?php  
	//怎样链接数据库
	$conn=mysql_connect('localhost','root');

	//选择数据库
	mysql_select_db('test');

	//设置字符集
	mysql_query('SET NAMES UTF8');

	
	//定义sql语句
	$query='select * from pic';
	//执行sql语句
	$result=mysql_query($query);



	$arr=array();

	for($i=0;$i<mysql_num_rows($result);$i++){//mysql_num_rows($result):数据库记录条数
		$arr[$i]=mysql_fetch_array($result);//mysql_fetch_array($result); 按照顺序逐条获取记录
	}

	echo json_encode($arr);

?>