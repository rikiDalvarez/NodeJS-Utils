const fs = require("fs");
const crypto = require("crypto")
const path = require("path")

const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(24)

function encryptFiles(fileName, key, iv) {

	let data = fs.readFileSync(fileName);

	const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);
	let encrypted = cipher.update(data);
	encrypted += cipher.final()

	console.log(encrypted)

	const outputPath = `${path.parse(fileName).name}_encrypted.txt`;

	const dataToWrite = Buffer.from(encrypted).toString("hex")

	fs.writeFileSync(outputPath, dataToWrite)

}

function decryptFile(fileName, key, iv) {
	const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);

	const data = fs.readFileSync(fileName);
	let decrypt = decipher.update(data);
	decrypt += decipher.final();

	const outputFileName = `${path.parse(fileName).name}_decrypted.txt`;
	fs.writeFileSync(outputFileName, decrypt);
}

// encryptFiles("./2023_base64.txt", key, iv)
decryptFile("./2023_encrypted.txt", key, iv)