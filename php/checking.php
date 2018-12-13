<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	require('db.php');
	$user=$_GET['user'];
	$search = "SELECT `username` FROM user WHERE username='$user'";
//	echo $search;
	//获取记录集
	$res = $conn -> query($search);
//	echo $res -> num_rows;
	if($res -> num_rows > 0){
		echo '1';
	}else{
		echo '0';
	}
		$conn->close();
?>	