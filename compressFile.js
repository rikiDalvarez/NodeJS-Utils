// //N1E3
const fs = require("fs")
const zlib = require("zlib");
const path = require("path");
const { ChildProcess } = require("child_process");

function compressFile(filePath, destinationPath) {

	if (!destinationPath) {
		const temp = new Date();
		destinationPath = path.join(__dirname, `${temp.getUTCFullYear()}_compress.gz`);
	}

	if (!filePath) {
		temp = new Date()
		filePath = `${temp.getUTCFullYear()}.txt`
	}

	const inputStream = fs.createReadStream(filePath)
	const outputStream = fs.createWriteStream(destinationPath);
	const gzip = zlib.createGzip();

	inputStream.
		pipe(gzip).
		pipe(outputStream)

	gzip.on('end', () => {
		console.log(`Compressed ${filePath} to ${destinationPath}`);
	});

	gzip.on('error', (err) => {
		console.error(`Compression error: ${err}`);
	});

}

module.exports = compressFile
