
//N1E2
const fs = require("node:fs")
function readFile(filePath) {
	const result = fs.readFileSync(filePath, "utf8")
	return result
}

console.log(readFile("sentence.txt"))