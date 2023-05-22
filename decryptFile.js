
const fs = require("fs");
const crypto = require("crypto")
const path = require("path")


// function decryptFile(fileName, key, iv) {

// 	const dataStream = fs.createReadStream(fileName);
// 	const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);
// 	const outputFileName = `${path.parse(fileName).name}_decrypted.txt`;
// 	let outputDataStream = fs.createWriteStream(outputFileName)
// 	let decrypted;
// 	dataStream.on("data", (data) => {
// 		decrypted = decipher.update(data);

// 		outputDataStream.write(decrypted);
// 	})
// 	dataStream.on("end", () => {
// 		outputDataStream.end()
// 	})

// }

async function decryptFile(fileName1, filename2, key, iv) {
	const encryptedData = fs.readFileSync(fileName1);
	const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);
	const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString();

	const decodedText = Buffer.from(decryptedData, "hex").toString("utf8")
	const outputFileName = `${path.parse(fileName1).name}_decrypted.txt`;
	fs.writeFileSync(outputFileName, decodedText, "utf8");

	const encryptedData2 = fs.readFileSync(filename2);
	const decipher2 = crypto.createDecipheriv("aes-192-cbc", key, iv);
	const decryptedData2 = Buffer.concat([decipher2.update(encryptedData2), decipher2.final()]).toString();

	const decodedText2 = Buffer.from(decryptedData2, "base64").toString("utf8")
	const outputFileName2 = `${path.parse(filename2).name}_decrypted.txt`;
	fs.writeFileSync(outputFileName2, decodedText2, "utf8");


	console.log("File decrypted successfully.");
}





module.exports = decryptFile;