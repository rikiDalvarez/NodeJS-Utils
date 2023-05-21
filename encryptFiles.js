const fs = require("fs");
const crypto = require("crypto")
const path = require("path")
const iv = Buffer.alloc(16, 0)
const password = "0000"
const key = crypto.scryptSync(password, "salt", 24);


async function encryptFiles(fileName, key, iv) {

	const outputPath = `${path.parse(fileName).name}_encrypted.txt`;
	const dataStream = fs.createReadStream(fileName);
	const outputDataStream = fs.createWriteStream(outputPath)
	const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);
	let encrypted;
	dataStream.on("data", (data) => {
		encrypted = cipher.update(data);
		outputDataStream.write(encrypted);
	})
	dataStream.on("end", () => {
		outputDataStream.end();
	})
}

//wasnt working with the params "utf-8", "hex"
// dataStream.on("data", (data) => {
// 	encrypted = cipher.update(data, "utf-8", "hex");
// 	outputDataStream.write(encrypted);
// })

module.exports = encryptFiles;
