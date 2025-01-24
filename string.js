//1. Функция, которая меняет первую букву строки на заглавную

function firstLetterUppercase(inputText) {
	return inputText = inputText[0].toUpperCase() + inputText.slice(1);
}


//2. Метод, который возвращает, по необходимости, укороченную строку с … в конце

let longString = {
	cutString(inputString, maxLength) {
		if (inputString.length > maxLength) {
			for (let i = maxLength - 1; i >= 0; i--) {
				if (" .,!?;:".includes(inputString[i])) {
					inputString = inputString.substring(0, i) + '…';
					break;
				}
			};
		};
		return inputString;
	}
}


//3. Функция на вход получает 2 строки, а на выходе возвращает true/false 
// в зависимости от того, является хотя бы одна из строк подстрокой другой строки.

function isSubstring(string1, string2) {
	let answer = string1.includes(string2) || string2.includes(string1);
	return answer;
}