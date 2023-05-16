//encrypt file
const crypto = require("crypto")
const fs = require("fs")
const path = require("path")


function encriptFiles(fileName1) {

	//contenido del archivo
	const fileContent1 = fs.readFileSync(fileName1);

	const iv = crypto.randomBytes(16);

	const key = crypto.randomBytes(24);

	//crea un objeto de cifrado con el algorithmomaes-192
	const encrypter = crypto.createCipheriv("aes-192-cbc", key, iv);

	//encripta el contenido del archivo
	const encryptedContent = Buffer.concat([encrypter.update(fileContent1), encrypter.final()]);

	//create the file name update to be created
	const fileUpdateName = `${path.parse(fileName1).name}_hex_encrypted.txt`

	//add the content to be written in the file
	const hexContent = Buffer.from(encryptedContent).toString("hex")

	//create the file
	fs.writeFileSync(fileUpdateName, hexContent);

	// //encrypt content of 2 file
	// const encryptedContent2 = Buffer.concat([encrypter.update(fileContent2), encrypter.final()]);

	// // //create name path of the secondfile
	// const fileUpdate2 = `${path.parse(fileName2).name}_base64_encrypted.txt`

	// // //add the content from the 2 file
	// const base64Content = Buffer.from(encryptedContent2).toString("base64")

	// //create file
	// fs.writeFileSync(fileUpdate2, base64Content)

	//delete files
	fs.unlinkSync(fileName1)

}

encriptFiles("./sentence_hex.txt")

