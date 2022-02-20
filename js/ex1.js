const operation = prompt("Enter 2 numbers then a mathematical operation (+, -, *, /)");
const validOperator = ["+", "-", "*", "/"];

let arr = operation.split(",");

arr = arr.map((val) => val.trim());

if (parseFloat(arr[0]) && parseFloat(arr[1])) {
	if (validOperator.includes(arr[2])) {
		console.log("OKOK");
	}
	switch (arr[2]) {
		case "+":
			const add = Number(arr[0]) + Number(arr[1]);
			console.log(arr[0], "+", arr[1], "=", add);
			break;
		case "-":
			const sub = Number(arr[0]) - Number(arr[1]);
			console.log(arr[0], "-", arr[1], "=", sub);
			break;
		case "*":
			const mul = Number(arr[0]) * Number(arr[1]);
			console.log(arr[0], "*", arr[1], "=", mul);
			break;
		case "/":
			const div = Number(arr[0]) / Number(arr[1]);
			console.log(arr[0], "/", arr[1], "=", div);
			break;
		default:
			console.log("Invalid operator");
	}
} else {
	console.log("First 2 elements should be numbers");
}
