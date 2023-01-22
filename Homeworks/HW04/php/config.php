<?php

    $host="localhost";
    $dbuser="root";
    $dbpassword="0000";
    $dbname="hw4";
    $today=date("Y-m-d");

    if ( !( $database = mysqli_connect( $host , $dbuser, $dbpassword ) ) )
        print( "<p>Could not connect to database</p>" );
    if ( !mysqli_select_db($database,$dbname ) ) 
        print( "<p>Could not open products database</p>" );
    // if(!($result=mysqli_query($database,$sql)))
        // print("<p>Cannt execute the query</p>");

?>