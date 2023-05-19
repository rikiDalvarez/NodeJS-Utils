//N2E1

function printRecursive(message) {
	if (!message) {
		message = "hello there?"
	}
	setTimeout(() => {
		console.log(message);
		printRecursive(message)
	}, 1000)
}

module.exports = printRecursive