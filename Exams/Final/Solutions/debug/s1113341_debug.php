<?php
$select = $_POST["select"];
$type = $_POST["type"];
$query = "SELECT * FROM `debug`";
if ( !( $database = mysqli_connect( "localhost", "web", "web" ) ) )
die( "Could not connect to database" );
$database->set_charset("utf8");

if ( !mysqli_select_db($database, 1111Web ) )
die( "Could not open products database" );

if ( !( $result = mysqli_query($database,  $query) ) )
{
	print( "Could not execute query!" );
	die( mysqli_error());
}
mysqli_close( $database );
while ( $row = mysqli_fetch_row( $result ) )
{
	if ($type ==0) {print( "$row[0],$row[3],$row[4],$row[5],$row[6],$row[7],$row[8]\n" );}
	else
	{
		print $row[0];
		for ($i =0;$i<=8;$i++)
		{
			$tmp = $row[$i]/$row[2];
			print "$tmp";
		}
		print "\n";
	}
}
?>

