//N1E1
const fs = require("fs");

function writeSentence(string, filePath) {
	if (typeof string !== "string") throw new Error("parameter is not a string");
	const addToFile = `\u00A0${string}`
	fs.writeFile(filePath, addToFile, { flag: "a+" }, (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log(`the sentence ${string} was written on file`)
			console.log(`the file now has the following content: ${fs.readFileSync(filePath, "utf8")}`)
		}
	})

}

writeSentence("tch", "sentence.txt")