<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	require('db.php');
	$search="select * from shoping";
	$query = $conn -> query($search);
	$str = "";
	while ($row = $query -> fetch_array(MYSQLI_ASSOC)) {
		$str = $str.'{"bgimg":"' . $row['url'] . '","shopInfo":"' . $row['shopname'] . '","id":"' . $row['id'] . '","price":"' . $row['price'] .'"}#';
	}
	echo $str;
//最后一步，关闭数据库
mysqli_close($conn);
?>