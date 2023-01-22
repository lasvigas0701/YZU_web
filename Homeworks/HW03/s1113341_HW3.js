var max; //input的最大值，也就是要生成max*max的矩陣
var output; //計數、儲存、轉移和輸出的工作矩陣
var temp; //交換時的暫存矩陣
var buffer; // 把已經做過的row column清空避免再做
function progress(){
	max = 0;
	var txt = document.form.txt.value;
	var actual = txt.split("\n"); // 每一行內容
	var actual_num = actual.length; // 共有幾行
	output = new Array();
	numTable(actual);
	for (var i = 0; i<actual_num; i++)
	{
	    var seq = actual[i].split(" "); //seq[0]: 實際類別, seq[1] : 預測類別
		setOutput(seq);
	}
	
	change(output);
	
	var out="<table>"; // 結果存在變數out, 用table顯示
	// YOUR CODE START
	out += "<tr><td></td>";
	for (var i = 1; i <= max; i++)
		out += "<td>"+i+"</td>";
	out += "</tr>";
	
	for (var num = 1; num <= max; num++){
		out += "<tr><td>"+num+"</td>";
			for (var j = 0; j < max; j++){
				out += "<td>"+output[num - 1][j]+"</td>";
			}
			out += "</tr>";			
	}
		
	// YOUR CODE END
	out=out+"</table>"
	document.getElementById('out').innerHTML=out; // 顯示結果
}

function numTable(arr) { // 存測資中所有input的最大值（max），代表要輸出幾個元素的table
	for (var i = 0; i < arr.length; i++){
		var eachactual = arr[i].split(" ");
		for (var j = 0; j < 2; j++) { //eachactual.length is 2
			if (eachactual[j] > max)
				max = eachactual[j];
		}
	}	

	for (var i = 0; i < max; i++){ //初始化陣列output
		output[i] = new Array(max);
		for (var j = 0; j < max; j++)
			output[i][j] = 0;
	}
}

function setOutput(arr) { // 存初步轉換之混淆矩陣
	var realClass = arr[0];
	var preClass = arr[1];
	
	//計算矩陣中各個predict的數值
	for (var countR = 1; countR <= max; countR++){ //判斷實際類別 which row
		if (realClass == countR){ 
			for (var countP = 1; countP <= max; countP++){ //判斷預測類別 which column
				if (preClass == countP)
					output[countR - 1][countP - 1]++;
			}
		}
	}	
}

function change(output){
	var canDo = new Array(max); //一個boolean陣列，預設皆為true=>可以執行轉換
	for (var i = 0; i < max; i++){
		canDo[i] = new Array(max);
		for (var j = 0; j < max; j++){
			canDo[i][j] = true;
		}
	}
	
	for (k = 0; k < max; k++){
		var totalMax = 0, predict = 0, actual = 0;
		for (var i = 0; i < max; i++){ //存最大值和其在該行的predict（預測類別）及第幾行（actual/實際類別）
			for (var j = 0; j < max; j++){
				if (canDo[i][j] == true && output[i][j] > totalMax){	
					totalMax = output[i][j];
					predict = j;
					actual = i;
				}
			}
		}
		
		temp = new Array(max); 
		for (var i = 0; i < max; i++){
			temp[i] = output[i][predict];
			output[i][predict] = output[i][actual];
			output[i][actual] = temp[i];
			
			// temp[i] = buffer[i][predict];
			// buffer[i][predict] = buffer[i][actual];
			// buffer[i][actual] = temp[i];
		}
		
		for (var i = 0; i < max; i++){
			canDo[i][actual] = false; //對應完之後就不能再被交換，所以該直欄的狀態皆要設為false（不能被執行）
			canDo[actual][i] = false; //避免下一個大的數字跟目前的totalMax在同列，不設為false就會重複執行
		}
		
	}
	
}