

// function test(message) {
// 	const dir = path.join(__dirname, "logs");
// 	if (!dir) fs.mkdir(dir);
// 	// const dataStream = fs.createWriteStream(`${path.normalize(__dirname, "logs.txt")}`, "utf8")
// 	fs.writeFile(`${path.normalize(__dirname, "logs.txt")}`, message, (err) => {
// 		if (err) {
// 			console.log(err)
// 		}
// 	})

// };

// test("hello there")

const fs = require("fs");
const crypto = require("crypto")
const path = require("path")

const password = "0000"
const iv = Buffer.alloc(16, 0)
const key = crypto.scryptSync(password, "salt", 24);

function encryptFiles(fileName, key, iv) {

	const outputPath = `${path.parse(fileName).name}_encrypted.txt`;

	let dataStream = fs.ReadStream(fileName);
	let outputDataStream = fs.createWriteStream(outputPath)

	const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);

	let encrypted;

	dataStream.on("data", (data) => {
		encrypted = cipher.update(data, "utf-8", "hex");
		outputDataStream.write(encrypted);
	})

	dataStream.on("end", () => {
		outputDataStream.end();
	})
}

function decryptFile(fileName, key, iv) {

	const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);


	const outputFileName = `${path.parse(fileName).name}_decrypted.txt`;

	const dataStream = fs.ReadStream(fileName);
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

// encryptFiles("./2023.txt", key, iv)
decryptFile("./2023_encrypted.txt", key, iv)