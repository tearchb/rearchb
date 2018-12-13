<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	require('db.php');
	$bgimg=$_GET['bgimg'];
	$shopInfo=$_GET['shopInfo'];	
	$price=$_GET['price'];
	$sql="insert into shoping(url,shopname,price) values ('$bgimg','$shopInfo','$price')";
	$conn->query($sql);
	$conn->close();
	echo "1";
?>