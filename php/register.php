<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
require('db.php');
//1、接收客户端的数据
$user = $_GET['user'];
$pwd = $_GET['pwd'];
$search = "SELECT `username` FROM user WHERE username='$user' and pwd='$pwd'";
//获取记录集
$res = $conn -> query($search);
if ($res -> num_rows > 0) {
	echo "1";//能找到
} else {
	echo '0';//没找到
}
//最后一步，关闭数据库
mysqli_close($conn);
?>