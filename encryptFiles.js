const fs = require("fs");
const crypto = require("crypto")
const path = require("path")


function encryptFiles(fileName, key, iv) {

	const outputPath = `${path.parse(fileName).name}_encrypted.txt`;

	let dataStream = fs.createReadStream(fileName);
	let outputDataStream = fs.createWriteStream(outputPath)

	const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);

	let encrypted;

	dataStream.on("data", (data) => {
		encrypted = cipher.update(data);
		outputDataStream.write(encrypted);
	})

	//wasnt working with the params "utf-8", "hex"
	// dataStream.on("data", (data) => {
	// 	encrypted = cipher.update(data, "utf-8", "hex");
	// 	outputDataStream.write(encrypted);
	// })

	dataStream.on("end", () => {
		outputDataStream.end();
	})

	fs.unlinkSync(fileName)
}

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

module.exports = encryptFiles;
