	//variables to track current state of app
	var calcArr = [];
	var currentInput = "";
  var fraction = false;


$(document).ready(function () {
	//get input from digit buttons
	$("#zeroButton").click(function(){
		getNumbers(0);
	});
	$("#oneButton").click(function(){
		getNumbers(1);
	});
	$("#twoButton").click(function(){
		getNumbers(2);
	});
		$("#threeButton").click(function(){
		getNumbers(3);
	});
		$("#fourButton").click(function(){
		getNumbers(4);
	});
		$("#fiveButton").click(function(){
		getNumbers(5);
	});
		$("#sixButton").click(function(){
		getNumbers(6);
	});
		$("#sevenButton").click(function(){
		getNumbers(7);
	});
		$("#eightButton").click(function(){
		getNumbers(8);
	});
		$("#nineButton").click(function(){
		getNumbers(9);
	});
	
	//operator buttons
	$("#plusButton").click(function(){
		getNumbers("+");
	});
		$("#minusButton").click(function(){
		getNumbers("-");
	});
		$("#multiplyButton").click(function(){
		getNumbers("*");
	});
		$("#divideButton").click(function(){
		getNumbers("/");
	});
	
	$("#equalsButton").click(function(){
		getNumbers("=");
	});
	$("#ACButton").click(function(){
		getNumbers("AC");
	});	
	$("#CEButton").click(function(){
		getNumbers("CE");
	});
	$("#periodButton").click(function(){
		getNumbers(".");
	});	
});


//input gathering function
function getNumbers(inpt){

    //input is number, add to current string
    if(typeof inpt === "number"){
      if(inpt === 0 && calcArr[calcArr.length-1] === "/" && currentInput === ""){
        console.log("stopped division by zero")
      }
      else{
      currentInput+= inpt;
      }
    }
    //input is period, add to string and set to fraction
    else if(inpt === "."){
      if (fraction === false){
        currentInput += inpt;
        fraction = true;
      }
    }
		//add remaining input to array, call the calculate function
		else if(inpt === "="){
			//add remaining current input to array 
			if(currentInput != ""){calcArr.push(currentInput)};
			//if last element of array is an operator, remove it
			currentInput = calculate(calcArr).toString();
			calcArr = [];
		}
    //complete reset of state on AC press
    else if(inpt === "AC"){
      calcArr = [];
      currentInput = "";
      fraction = false;
    }
    //clear of current input on CE press
    else if(inpt === "CE"){
			if (currentInput!==""){
			currentInput = "";
			fraction = false;
			}
			else{
			calcArr.pop();
			calcArr.pop();
			currentInput = "";
			fraction = false;
			}
			/*if (typeof calcArr[calcArr.length-1] !== "number"){calcArr.pop()}
      currentInput = "";
      fraction = false;*/
    }
    //input is operator
    else{
			if(typeof calcArr[calcArr.length-1] === "number" || currentInput != 0){
			calcArr.push(Number(currentInput));
      calcArr.push(inpt);
      currentInput = "";
      fraction = false;
			}
    }
		if(calcArr[0]===NaN){calcArr = [];}
		if(currentInput==NaN){currentInput = 0;}	
		var displayString = calcArr.join("");
		if (currentInput !== ""){displayString += currentInput;}
		$("#calcDisplay").html(displayString);
		return console.log(calcArr);

  }
	//calculate function
	function calculate(arr){
		if (arr.length === 0){return ""}
		result = Number(arr[0]);
		for (var i = 1; i<arr.length; i+=2){
			switch(arr[i]){
				case "+":
					result+= Number(arr[i+1]);
				break;
				case "-":
					result-= Number(arr[i+1]);
				break;
				case "*":
					result = result * Number(arr[i+1]);
				break;
				case "/":
					result = result / Number(arr[i+1]);
				break;
				default:
			}
		}
		if (isNaN(result)){
		calcArr.pop();
		calculate(calcArr);
		}
		if(result === 0){return ""}
		return parseFloat(result.toFixed(5));
	}