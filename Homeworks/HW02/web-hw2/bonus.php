<?php

$host = '140.138.77.70';
$dbuser ='CS380B';
$dbpassword = '1111CS380B';
$dbname = 'CS380B';

// $sql = "SET NAMES UTF8";
$sql = "SELECT COUNT(NAME) as num , SUM(plan)+SUM(bonus) AS sum FROM s1113341";


if ( !( $database = mysqli_connect( $host,$dbuser,$dbpassword ) ) )
	die( "Could not connect to database" );
if ( !mysqli_select_db($database,$dbname ) )
	die( "Could not open CS380B database" );
if ( !( $result = mysqli_query($database, $sql) ) )
{
	print( "<p>Could not execute query!</p>" );
}
mysqli_close( $database );

$sum = 0;
$num = 0;
while ($row = mysqli_fetch_assoc($result) )
{
    $sum=$row['sum'];
    $num = $row['num'];
}

echo $sum;



?>