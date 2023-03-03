// codebase breakdown...
// 1. collected all button fields, inputfields and output fields
// 2. created event listeners on each button with a corresponding action
// 3. created a function to solve simple problems using if statements and output the results
// 4. (thoughts)....code could be less repetitive and more streamlined.....

// pop up on load
window.addEventListener("load", tipCheck);

// function to display alert
function tipCheck() {
	// checking if the alert doesn't exist in local storage
	if (!localStorage.getItem("alertGiven")) {
		// giving alert
		alert("******************************\nTips for version 1.0\n\nIMPORTANT\n******************************\n\n1. Clear your result using the 'AC' (All Clear) results displayed after one has been rendered to avoid errors\n\n2. You can use your keyboard to type but the number keys are more\n\nPs: You won't get this alert again XD");
		// creating alert memory in local storage by setting flag
		localStorage.setItem("alertGiven", true);
	}
}

// getting input field
let inputValue = document.getElementById("field1");

// getting each button individually
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");
let btn5 = document.getElementById("button5");
let btn6 = document.getElementById("button6");
let btn7 = document.getElementById("button7");
let btn8 = document.getElementById("button8");
let btn9 = document.getElementById("button9");
let btn0 = document.getElementById("button0");

// adding listener and function to key 1
btn1.addEventListener("click", keyOne);
function keyOne() {
	inputValue.value += btn1.innerText;
}

// adding listener and function to key 2
btn2.addEventListener("click", keyTwo);
function keyTwo() {
	inputValue.value += btn2.innerText;
}

// adding listener and function to key 3
btn3.addEventListener("click", keyThree);
function keyThree() {
	inputValue.value += btn3.innerText;
}

// adding listener and function to key 4
btn4.addEventListener("click", keyFour);
function keyFour() {
	inputValue.value += btn4.innerText;
}

// adding listener and function to key 5
btn5.addEventListener("click", keyFive);
function keyFive() {
	inputValue.value += btn5.innerText;
}

// adding listener and function to key 6
btn6.addEventListener("click", keySix);
function keySix() {
	inputValue.value += btn6.innerText;
}

// adding listener and function to key 7
btn7.addEventListener("click", keySeven);
function keySeven() {
	inputValue.value += btn7.innerText;
}

// adding listener and function to key 8
btn8.addEventListener("click", keyEight);
function keyEight() {
	inputValue.value += btn8.innerText;
}

// adding listener and function to key 9
btn9.addEventListener("click", keyNIne);
function keyNIne() {
	inputValue.value += btn9.innerText;
}

// adding listener and function to key 0
btn0.addEventListener("click", keyZero);
function keyZero() {
	inputValue.value += btn0.innerText;
}

// setting clear button, it also sets the clearing action
let clear = document.getElementById("clearbtn");
clear.addEventListener("click", erase);
function erase() {
	inputValue.value = "";
	document.getElementById("resultpara").innerText = "Result: ";
}

// adding addition button event
let add = document.getElementById("addbtn");
add.addEventListener("click", addMe);
function addMe() {
	inputValue.value += "+";
}

// subtraction
let subtract = document.getElementById("minusbtn");
subtract.addEventListener("click", subtractMe);
function subtractMe() {
	inputValue.value += "-";
}

// multiplication
let multiply = document.getElementById("multiplybtn");
multiply.addEventListener("click", multiplyMe);
function multiplyMe() {
	inputValue.value += "*";
}

// division
let divide = document.getElementById("dividebtn");
divide.addEventListener("click", divideMe);
function divideMe() {
	inputValue.value += "/";
}

let solve = document.getElementById("equalbtn");
solve.addEventListener("click", solveMe);
function solveMe(addMe) {
	// working with strings alone
	let rawValues = inputValue.value;
	// creating indexes of operations
	let plus = rawValues.indexOf("+");
	let sub = rawValues.indexOf("-");
	let multi = rawValues.indexOf("*");
	let divid = rawValues.indexOf("/");
	// initializing number sets
	let firstSet;
	let secondSet;
	// checking the indexes, creating the groups and solving them
	if (plus !== -1) {
		//addition
		firstSet = Number(rawValues.slice(0, plus));
		secondSet = Number(rawValues.slice(plus + 1));
		document.getElementById("resultpara").innerText += " " + (firstSet + secondSet) + "\n";
	} else if (sub !== -1) {
		// subtraction
		firstSet = Number(rawValues.slice(0, sub));
		secondSet = Number(rawValues.slice(sub + 1));
		document.getElementById("resultpara").innerText += " " + (firstSet - secondSet) + "\n";
	} else if (multi !== -1) {
		// multiplication
		firstSet = Number(rawValues.slice(0, multi));
		secondSet = Number(rawValues.slice(multi + 1));
		document.getElementById("resultpara").innerText += " " + firstSet * secondSet + "\n";
	} else if (divid !== -1) {
		// division
		firstSet = Number(rawValues.slice(0, divid));
		secondSet = Number(rawValues.slice(divid + 1));
		document.getElementById("resultpara").innerText += " " + firstSet / secondSet + "\n";
	} else {
		// returning only numbers if no operation has been added
		document.getElementById("resultpara").innerText += " " + Number(rawValues) + "\n";
	}
}
