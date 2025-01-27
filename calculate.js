function simpleCalculate(number1, number2, operation) {
	return operation(number1,number2)
}

const addition = function (a, b) {
	return a + b;
};

const subtraction = function (a, b) {
	return a - b;
};

const multiplication = function (a, b) {
	return a * b;
};

const division = function (a, b) {
	return a / b;
};

const operations = {
	add: addition,
	subtract: subtraction,
	multiply: multiplication,
	divide: division
};

const selectedOperation = "divide";
console.log(simpleCalculate(6, 3, operations[selectedOperation])); 