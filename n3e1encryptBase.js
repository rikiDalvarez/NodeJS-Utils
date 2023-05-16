const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

function encryptBase(filePath) {
	const content = fs.readFileSync(filePath)
	console.log(content);

	const iv = crypto.randomBytes(16);

	const key = crypto.randomBytes(24);

	const objEncrypt = crypto.createCipheriv("aes-192-cbc", key, iv);

	const contentEncrypted = Buffer.concat([objEncrypt.update(content), objEncrypt.final()])

	const fileUpdatedName = `${path.parse(filePath).name}_encrypted.txt`;

	const baseContent = Buffer.from(contentEncrypted).toString("base64");

	fs.writeFileSync(fileUpdatedName, baseContent)

	fs.unlinkSync(filePath)

}

encryptBase("./sentence_base64.txt")