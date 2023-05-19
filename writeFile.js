//N1E1
const fs = require("fs");

function writeSentence(string, filePath) {
	if (!filePath) {
		const content = new Date();
		filePath = `${content.getUTCFullYear()}.txt`;
	}

	//if no folder sentences -> create

	if (typeof string !== "string") throw new Error("parameter is not a string");

	const timeStamp = Math.floor(Date.now() / 1000);
	const addToFile = `\n\u00A0${string} ${timeStamp}`
	fs.writeFile(filePath, addToFile, { flag: "a" }, (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log(`the file now has the following content: ${fs.readFileSync(filePath, "utf8")}`)
		}
	});


}

module.exports = writeSentence