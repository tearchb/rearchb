<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
require('db.php');
//1、接收客户端的数据
$user = $_GET['user'];
$pwd = $_GET['pwd'];
$search = "UPDATE user SET pwd = '$pwd' WHERE username = '$user'";
//执行sql语句
$conn->query($search);
//关闭数据库
$conn->close();
echo '1';
?>