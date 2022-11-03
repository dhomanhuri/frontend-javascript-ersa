<?php

$hum = $_GET['hum'];
$temp = $_GET['temp'];
$telur = $_GET['telur'];

$conn = mysqli_connect("promaydo.net","promaydo_ersa","ersa_polinema","promaydo_ersa");
if ($conn -> connect_error) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
$data = mysqli_query($conn,"UPDATE `datasensor` SET `temp` = '$temp',`hum` = '$hum', `telur` = '$telur' WHERE `datasensor`.`id` = 1;");

echo "ss";


?>
