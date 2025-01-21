let min = 1;
let max = 100;

const number1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Компьютер 1 загадал число: ' + number1);
console.log("");

let number2 = Math.round( (max - min) / 2);

while (number1 != number2) {
	console.log('Компьютер 2: Пробую число ' + number2);
	if (number1 < number2) {
		console.log('Компьютер 1: Меньше\n');
		max = number2;
	}
	else if (number1 > number2) {
		console.log('Компьютер 1: Больше\n');
		min = number2;
	}

	number2 = Math.round( (max - min) / 2) + min;
}

console.log('Компьютер 2: Пробую число ' + number2);
console.log('Компьютер 1: Угадал!');


