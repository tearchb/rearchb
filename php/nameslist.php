<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php

	//防止被未授权调用
	define('AAA', 'hello');
	require_once ('db.php');
	//1、接收数据
	$name = $_GET['name'];
	
	// 执行查询
	$sql = "SELECT * FROM user WHERE username='$name'";
	$query = $conn -> query($sql);
	$res = $query -> num_rows;
	if($res>0){
		$str = "";
		while ($row = $query -> fetch_array(MYSQLI_ASSOC)) {
			$str = $str . $row['pwd'];
		}
		echo $str;
	}else{
		echo '0';
	}
	//最后一步，关闭数据库
	mysqli_close($conn);
?>

