var num = window.prompt( "Please input a number" );
num = parseInt(num);
num++;
var arr = new Array();
arr[0] = new Array();
arr[0][0]=1;
var output = "";
output+="<p>1</p>"
for (var i = 1 ;i < num-1;i++)
{
	   arr[i]= new Array(i+1);
	   arr[i][0]=1;
	   output+="<p>1 "
	   for (var j = 1; j < i; j++)
	   {
		   var m = i - 1;
		   var n = j - 1;
		   arr[i][j]=arr[m][j]+arr[m][n];
		   output += arr[i][j]+" ";
		 }
		 arr[i][i] = 1;
		 output=output+"1</p>"
	 }
	 document.writeln( output );
