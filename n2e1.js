//N2E1

function printRecursive(message) {
	setTimeout(() => {
		console.log(message);
		printRecursive(message)
	}, 1000)
}

printRecursive("kabum");