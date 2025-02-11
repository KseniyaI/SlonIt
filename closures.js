//logger
function createLogger() {
	let logsArray = [];
	return {
		log: (message) => {
			logsArray.push(message);
		},
		getLogs: () => {
			console.log(logsArray);
		}
	}
}

//random number generator
function createRandomGenerator(min, max) {
	return function() {
			return Math.random() * (max - min) + min
	}
}