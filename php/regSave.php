<?php
	header("Content-type:text/html;charset=utf-8");
	$username = $_GET['user'];
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		echo "连接数据库失败";
	}else{
		mysql_select_db("miimoo",$conn);

		$sqlstr="select * from user where username='$username'";
		$result = mysql_query($sqlstr,$conn);
		mysql_close($conn);

//		$rows = mysql_num_rows($result);
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>