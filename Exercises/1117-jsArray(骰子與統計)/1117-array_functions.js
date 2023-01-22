var frequency = [ , 0, 0, 0, 0, 0, 0];
		 var totalDice = 0;
		 var dieImages = new Array(12);
		 
	function start()
	{
		var button = document.getElementById( "rollButton" );
		button.addEventListener( "click", rollDice, false );
		var length = dieImages.length;
		
		for (var i = 0; i < length; ++i)
		{
			dieImages[ i ] = document.getElementById( "die" + (i+1) );
		}
	} // end function start
	 
	function rollDice()
	{
		var face;  
		frequency = [ , 0, 0, 0, 0, 0, 0];
		totalDice = 0;
		for ( var i = 0; i < 12; ++i ) 
		{
		   face = Math.floor( 1 + Math.random() * 6 );
		   setImage( i, face ); 
		   tallyRolls( face ); 
		   ++totalDice;  
		} 
		updateFrequencyTable();
	}
	function setImage( dieNumber, face )
	{
	   dieImages[dieNumber].setAttribute( "src", "die" + face + ".png" ); 
	   dieImages[dieNumber].setAttribute( "alt", "die with " + face + " spot(s)" ); 
	} // end function setImage
	
	function tallyRolls( face )
	{
	   frequency[face]++;
		// end switch
	} // end function tallyRolls
	
	function updateFrequencyTable()
	{
		var results = "<table><caption>Die Rolling Frequencies</caption>" + 
			"<thead><th>Face</th><th>Frequency</th>" + "<th>Percent</th></thead><tbody>";
		var length = frequency.length;
		for (var i = 1; i < length; ++i)
		{
			results += "<tr><td>"+i+"</td><td>" + frequency[ i ] + "</td><td>" +
				formatPercent(frequency[i]/totalDice) + "</td></tr>";
		}
		
		results += "</tbody></table>";
		document.getElementById( "frequencyTableDiv" ).innerHTML = results;
	} // end function updateFrequencyTable
	function formatPercent( value )
	{
		value *= 100;
		return value.toFixed(2);
	} // end function formatPercent
	window.addEventListener( "load", start, false );