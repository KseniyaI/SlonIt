function myFilter(array, callback) {
	let filteredArray = [];
	for (i = 0; i < array.length; i++) {
		if (callback(array[i]) === true) {
			filteredArray.push(array[i]);
		}
	}
	return filteredArray;
}