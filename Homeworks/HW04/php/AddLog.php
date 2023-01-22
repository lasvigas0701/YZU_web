<?php

$ip=$_POST["ip"];
$t=$_POST["t"];

echo $ip;
include("config.php");

$sql = "UPDATE `connectList` SET `time`=".$t." WHERE `ip`='".$ip."'" ;

if($t == 1){
    $sql = "INSERT INTO `connectList`(`ip`, `time`) VALUES ('".$ip."',1)";
}

if(!$result=mysqli_query($database,$sql))
    echo "add Fail";
else
    echo "add succes";

?>