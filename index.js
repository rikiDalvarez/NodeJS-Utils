
//n1e1
// const writeFile = require("./writeFile")
// writeFile("break line")

// //n1e2
// const readFile = require("./readFile")
// console.log(readFile());

//n1e3
// const compressFile = require("./compressFile")
// compressFile("./2023.txt",)

//n2e1
// const printRecursive = require("./printRecursive");
// printRecursive()

//n2e2
// const listContent = require("./listContent")
// listContent()

//n3
// codificar archivo a hex y base64
// const createCodFileHexBase = require("./createCodFileHexBase")
// createCodFileHexBase("2023.txt")

// encrypt file with algo aes-192-cbc and delete inicial file
const crypto = require("crypto")
const password = "0000"
const iv = Buffer.alloc(16, 0)
const key = crypto.scryptSync(password, "salt", 24);
const encryptFiles = require("./encryptFiles")
function encryptFilesAndDelete(filename1, filename2) {
	encryptFiles(filename1, key, iv);
	encryptFiles(filename2, key, iv);
}

encryptFilesAndDelete("./2023_hex.txt", "./2023_base64.txt");