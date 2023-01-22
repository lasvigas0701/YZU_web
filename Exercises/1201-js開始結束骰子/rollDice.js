var interval = null;

function run()
{
   var x = document.images;
   for (var i = 0; i <= 4; i++)
   {
	   var j = Math.floor ( 1 + Math.random() * 6 );
	   x[i].src = "die"+j+".png";
   }
}
function display()
{
   // if ( interval )
      // return;
 
   interval = window.setInterval( "run()", 50 );
}

 
function start()
{
   var start = document.getElementById( "startRoll" );
   start.addEventListener( "click", display, false);
   var stop = document.getElementById ( "stopRoll" );
   stop.addEventListener ( "click", show, false);
}

function show()
{
	window.clearInterval( interval );
	// interval = null;
}
 
window.addEventListener( "load", start, false );