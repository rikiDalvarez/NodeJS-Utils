//N3 E1
//encodificar archivo a hex y a base64
const fs = require("fs")
const path = require("path")


function createCodFileHexBase(fileName) {


	const fileContent = fs.readFileSync(fileName);
	console.log(fileContent)

	const hexFileName = `${path.parse(fileName).name}_hex.txt`;
	// const hexContent = Buffer.from(fileContent).toString('hex');
	const hexContent = fileContent.toString("hex");
	fs.writeFileSync(hexFileName, hexContent);

	const base64FileName = `${path.parse(fileName).name}_base64.txt`;
	const base64Content = Buffer.from(fileContent).toString('base64');
	fs.writeFileSync(base64FileName, base64Content);
}

module.exports = createCodFileHexBase;


//encrypt file	
// const crypto = require("crypto")
// function encriptFiles(fileName1, fileName2) {

// 	//contenido del archivo
// 	const fileContent1 = fs.readFileSync(fileName1);
// 	const fileContent2 = fs.readFileSync(fileName2);

// 	const iv = crypto.randomBytes(16);

// 	const key = crypto.randomBytes(24);

// 	//crea un objeto de cifrado con el algorithmomaes-192
// 	const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);

// 	//encripta el contenido del archivo
// 	const encryptedContent = Buffer.concat([cipher.update(fileContent1), cipher.final()]);

// 	//create the file name update to be created
// 	const fileUpdate1 = `${path.parse(fileName1).name}_hex_encrypted.txt`

// 	//add the content to be written in the file
// 	const hexContent = Buffer.from(encryptedContent).toString("hex")

// 	//create the file
// 	fs.writeFileSync(fileUpdate1, hexContent);

// 	//encrypt content of 2 file
// 	const encryptedContent2 = Buffer.concat([cipher.update(fileContent2), cipher.final()]);

// 	// //create name path of the secondfile
// 	const fileUpdate2 = `${path.parse(fileName2).name}_base64_encrypted.txt`

// 	// //add the content from the 2 file
// 	const base64Content = Buffer.from(encryptedContent2).toString("base64")

// 	//create file
// 	fs.writeFileSync(fileUpdate2, base64Content)

// 	//delete files
// 	// fs.unlinkSync()

// }

// encriptFiles("./sentence_hex.txt", "./sentence_base64.txt")

