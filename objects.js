//Метод, который на вход получает объект, а на выходе возвращает число, 
// соответствующее сумме всех числовых полей.

let user = {
	name: 'Vasya',
	friends: 55,
	likes: 19,
	projects: 27
};

user.sumNumericFields = function() {
	let sum = 0;
	for (let field in user) {
		if (typeof user[field] === "number") {
			sum += user[field];
		}
	}	
	return sum;
};
console.log(user.sumNumericFields());


//Метод, который возвращает массив с названиями полей, 
// причем эти названия полей отсортированы по убыванию.

user.arrNameFields = function() {
	let arr = [];
	for (let field in user) {
		if (typeof user[field] === "number") {
			arr[user[field]] = field;
		}
	}	
	return arr.filter(item => item != 0).reverse();
};

console.log(user.arrNameFields());

