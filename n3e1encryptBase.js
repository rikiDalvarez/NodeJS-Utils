const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

const iv = crypto.randomBytes(16);

const key = crypto.randomBytes(24);

function encryptBase(filePath, iv, key) {
	const content = fs.readFileSync(filePath)
	console.log(content);

	const cipheriv = crypto.createCipheriv("aes-192-cbc", key, iv);

	const contentEncrypted = Buffer.concat([cipheriv.update(content), cipheriv.final()])

	const fileUpdatedName = `${path.parse(filePath).name}_encrypted.txt`;

	const baseContent = Buffer.from(contentEncrypted).toString("base64");

	fs.writeFileSync(fileUpdatedName, baseContent)

	fs.unlinkSync(filePath)

}

encryptBase("./sentence_base64.txt", iv, key)