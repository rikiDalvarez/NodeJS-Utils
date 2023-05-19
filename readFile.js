
//N1E2
const fs = require("node:fs");


function readFile(filePath) {
	if (!filePath) {
		content = new Date();
		filePath = `${content.getUTCFullYear()}.txt`
	}
	return fs.readFileSync(filePath, "utf8")
}

module.exports = readFile;