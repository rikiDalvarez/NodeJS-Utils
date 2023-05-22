
//N1E2
const fs = require("node:fs");


function readFile(filePath) {
	if (!filePath) {
		content = new Date();
		filePath = `${content.getUTCFullYear()}.txt`
	}
	let test = fs.readFileSync(filePath, "utf8")
	console.log(test)
	return test
}

module.exports = readFile;