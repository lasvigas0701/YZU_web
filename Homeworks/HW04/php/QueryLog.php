<?php
    $ip=$_POST["IP"];
    include("config.php");
    $sql = "SELECT time FROM `connectList` WHERE ip='".$ip."'" ;
    //$sql = "SELECT time FROM `connectList` WHERE ip='140.138.6.99'";
    $result=mysqli_query($database,$sql);
    $times = 0;
    while ($row = mysqli_fetch_assoc($result))
    {
        $times = $row['time'];
    }

    echo $times;

?>