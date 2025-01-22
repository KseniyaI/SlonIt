//arr.slice([start], [end])
function mySlice(arr, start, end) {
	newArray = [];
	for (let i = start; i < end; i++ ) {
		newArray.push(arr[i]);
	}
	return newArray;
}

//arr.indexOf(item, from)
function myIndexOf(arr, item, from) {
	for (let i = from; i < arr.length; i++ ) {
		if (arr[i] == item) {
			return(i);
		}
	}
	return(-1);
}

//arr.includes(item, from)
function myIncludes(arr, item, from) {
	for (let i = from; i < arr.length; i++ ) {
		if (arr[i] == item) {
			return(true);
		}
	}
	return(false);
}