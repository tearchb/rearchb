<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_POST['user'];
	$userpass = $_POST['pwd'];
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		echo "数据库连接失败";
	}else{
		mysql_select_db("miimoo",$conn);
		$sqlstr = "select * from user where username='$name'";
		$result = mysql_query($sqlstr,$conn);
//		$rows = mysql_num_rows($result);
		if(mysql_num_rows($result)==0){
			$sqlstr = "insert into user(username,pwd) values ('$name','$userpass')";
			$result = mysql_query($sqlstr,$conn);
			echo '0';
		}else{
			echo "1";
		}
		mysql_close($conn);
	}
	
?>