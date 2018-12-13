<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	require('db.php');
	$user=$_POST['user'];
	$pwd=$_POST['pwd'];	
	$search = "SELECT `username` FROM user WHERE username='$user'";
//	echo $search;
	//获取记录集
	$res = $conn -> query($search);
//	echo $res -> num_rows;
	if ($res -> num_rows > 0) {
		echo $res -> num_rows;
	}else{
		$sql="insert into user(username,pwd) values ('$user','$pwd')";
		echo $res -> num_rows;
		$conn->query($sql);
	}
		$conn->close();
?>	