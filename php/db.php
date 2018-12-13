<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	define('DB_HOS','localhost');
	define('DB_USER','root');  
	define('DB_PWD','root');  
	define('DB_NAME','miimoo');  
	$conn=new mysqli(DB_HOS,DB_USER,DB_PWD,DB_NAME);
 	$conn->query('set names utf8');
 	if($conn->connect_error){
 		die("连接失败：".$conn->connect_error);
 	}
?>
