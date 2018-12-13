<?php header('Content-Type: text/html; charset=utf-8')
?>
<?php
	require('db.php');
	$id=$_GET["id"];
	$sql="delete from shoping where id='$id'";
	$conn->query($sql);
	$conn->close();
	echo "1";
?>