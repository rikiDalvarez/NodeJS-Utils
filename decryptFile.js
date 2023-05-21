
const fs = require("fs");
const crypto = require("crypto")
const path = require("path")


function decryptFile(fileName, key, iv) {

	const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);


	const outputFileName = `${path.parse(fileName).name}_decrypted.txt`;

	const dataStream = fs.createReadStream(fileName);
	let outputDataStream = fs.createWriteStream(outputFileName)

	let decrypted;

	dataStream.on("data", (data) => {
		decrypted = decipher.update(data);
		outputDataStream.write(decrypted);
	})

	dataStream.on("end", () => {
		outputDataStream.end()
	})

}

module.exports = decryptFile;