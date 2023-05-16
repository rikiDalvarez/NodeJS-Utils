//N1E1
const fs = require("fs");

// function writeSentence(string) {
// 	if (typeof string !== "string") throw new Error("parameter is not a string");
// 	const addToFile = `\u00A0${string}`
// 	fs.writeFile("./sentence.txt", addToFile, { flag: "a+" }, (err) => {
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			console.log(`the sentence ${string} was written on file`)
// 			console.log(`the file now has the following content: ${fs.readFileSync("sentence.txt", "utf8")}`)
// 		}
// 	})
// }

// writeSentence("hello there")

// //N1E2

// function readFile() {
// 	const result = fs.readFileSync("./sentence.txt", "utf8")
// 	return result
// }

// console.log(readFile())

// //N1E3

const zlib = require("zlib");
const path = require("path");
const { ChildProcess } = require("child_process");

// function compressFolder(inputPath, destinationPath) {
// 	const outputStream = fs.createWriteStream(destinationPath);
// 	const gzip = zlib.createGzip();
// 	gzip.pipe(outputStream);

// 	let input;
// 	function readDirRecursive(dir) {
// 		const files = fs.readdirSync(dir);
// 		for (const file of files) {
// 			const filePath = path.join(dir, file);
// 			if (fs.statSync(filePath).isDirectory()) {
// 				readDirRecursive(filePath)
// 			} else {
// 				input = fs.createReadStream(filePath);
// 				input.pipe(gzip, { end: false })
// 					.on("finish", () => { console.log(`compressed ${filePath}`) })
// 			}
// 		}
// 	}

// 	readDirRecursive(inputPath);

// 	gzip.on('end', () => {
// 		console.log(`Compressed ${inputPath} to ${destinationPath}`);
// 	});

// 	gzip.on('error', (err) => {
// 		console.error(`Compression error: ${err}`);
// 	});

// 	input.on('error', (err) => {
// 		console.error(`Read error: ${err}`);
// 	});

// 	input.on("end", () => {
// 		gzip.end()
// 	})
// }

// compressFolder("/Users/rikidutra/Desktop/nodeJs/sprint15", "/Users/rikidutra/Desktop/nodeJs/compressedFiles/output.gz")

//N2E1

// function printRecursive() {
// 	setTimeout(() => {
// 		console.log("hello there");
// 		printRecursive()
// 	}, 1000)
// }

// printRecursive();

//N2E2

// const { spawn } = require("child_process")
// const os = require("os")

// function listContent() {

// 	const dir = os.homedir()
// 	const output = spawn("ls", [dir])

// 	console.log({ output })

// 	output.stdout.on("data", (data) => {
// 		console.log(`content of directory ${data}`)
// 	});

// 	output.stderr.on("error", (data) => {
// 		console.error(`Error: ${data}`)
// 	});

// 	output.on("close", (code) => {
// 		console.log(`process finished with code ${code}`)
// 	})
// }

// listContent()

//N3 E1

// function createCodFiles(fileName) {
// 	const fileContent = fs.readFileSync(fileName);

// 	const hexFileName = `${path.parse(fileName).name}_hex.txt`;
// 	const hexContent = Buffer.from(fileContent).toString('hex');
// 	fs.writeFileSync(hexFileName, hexContent);

// 	const base64FileName = `${path.parse(fileName).name}_base64.txt`;
// 	const base64Content = Buffer.from(fileContent).toString('base64');
// 	fs.writeFileSync(base64FileName, base64Content);
// }

// createCodFiles("./sentence.txt")

const crypto = require("crypto")
function encriptFiles(fileName1, fileName2) {

	//contenido del archivo
	const fileContent1 = fs.readFileSync(fileName1);
	const fileContent2 = fs.readFileSync(fileName2);

	const iv = crypto.randomBytes(16);

	const key = crypto.randomBytes(24);

	//crea un objeto de cifrado con el algorithmomaes-192
	const encrypter = crypto.createCipheriv("aes-192-cbc", key, iv);

	//encripta el contenido del archivo
	const encryptedContent = Buffer.concat([encrypter.update(fileContent1), encrypter.final()]);

	//create the file name update to be created
	const fileUpdate1 = `${path.parse(fileName1).name}_hex_encrypted.txt`

	//add the content to be written in the file
	const hexContent = Buffer.from(encryptedContent).toString("hex")

	//create the file
	fs.writeFileSync(fileUpdate1, hexContent);

	//encrypt content of 2 file
	const encryptedContent2 = Buffer.concat([encrypter.update(fileContent2), encrypter.final()]);

	// //create name path of the secondfile
	const fileUpdate2 = `${path.parse(fileName2).name}_base64_encrypted.txt`

	// //add the content from the 2 file
	const base64Content = Buffer.from(encryptedContent2).toString("base64")

	//create file
	fs.writeFileSync(fileUpdate2, base64Content)

	//delete files
	// fs.unlinkSync()

}

encriptFiles("./sentence_hex.txt", "./sentence_base64.txt")