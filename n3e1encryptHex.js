//encrypt file
const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

const iv = crypto.randomBytes(16);

const key = crypto.randomBytes(24);

function encriptFiles(fileName1, iv, key) {

	//contenido del archivo
	const fileContent1 = fs.readFileSync(fileName1);

	//crea un objeto de cifrado con el algorithmomaes-192
	const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);

	console.log({ cipher })

	//encripta el contenido del archivo
	const encryptedContent = Buffer.concat([cipher.update(fileContent1), cipher.final()]);

	//create the file name update to be created
	const fileUpdateName = `${path.parse(fileName1).name}_hex_encrypted.txt`

	//add the content to be written in the file
	const hexContent = Buffer.from(encryptedContent).toString("hex")

	//create the file
	fs.writeFileSync(fileUpdateName, hexContent);

	//delete files
	// fs.unlinkSync(fileName1)

}

encriptFiles("./sentence.txt", iv, key)

function decryptFile(filePath, key, iv) {
	const fileContent = fs.readFileSync(filePath);
	const decrypterCipher = crypto.createDecipheriv("aes-192-cbc", key, iv)
	const decrypted = Buffer.concat([decrypterCipher.update(fileContent), decrypterCipher.final()])

	const fileUpdatedName = `${path.parse(filePath).name}_new.txt`
	const hexContent = Buffer.from(decrypted).toString()

	fs.writeFileSync(fileUpdatedName, hexContent);

}

decryptFile("./sentence_hex_hex_encrypted.txt", key, iv)

