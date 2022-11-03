<?php
$mysqli = new mysqli("promaydo.net","promaydo_ersa","ersa_polinema","promaydo_ersa");
$hum = $_GET['hum'];
$temp = $_GET['temp'];
$telur = $_GET['telur'];

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
$query = "UPDATE `datasensor` SET `temp` = '$temp', `hum` = '$hum',`telur` = '$telur' WHERE `datasensor`.`id` = 1;";

mysqli_query($mysqli, $query);
echo "success";
?>
