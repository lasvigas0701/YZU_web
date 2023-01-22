function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      }
      tbody.appendChild( row );
   }
   
   document.getElementById( "canvas" ).addEventListener(
      "mousemove", processMouseMove, false );
}
function processMouseMove( e )
{
	var x = document.forms;
	var col = x[0].col.value;
	
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "style", "background-color: white" );
      }
      if ( e.shiftKey )
      {
         e.target.setAttribute( "style", "background-color: " + col );
      }
   }
}
window.addEventListener( "load", createCanvas, false );
