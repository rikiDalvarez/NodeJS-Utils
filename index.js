//N1E1
const fs = require("fs");

function writeSentence(string) {
	if (typeof string !== "string") throw new Error("parameter is not a string");
	const addToFile = `\u00A0${string}`
	fs.writeFile("./sentence.txt", addToFile, { flag: "a+" }, (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log(`the sentence ${string} was written on file`)
			console.log(`the file now has the following content: ${fs.readFileSync("sentence.txt", "utf8")}`)
		}
	})
}

writeSentence("hello there")

//N1E2

function readFile() {
	const result = fs.readFileSync("./sentence.txt", "utf8")
	return result
}

console.log(readFile())

//N1E3

const zlib = require("zlib");
const path = require("path");

function compressFolder(inputPath, destinationPath) {
	const outputStream = fs.createWriteStream(destinationPath);
	const gzip = zlib.createGzip();
	gzip.pipe(outputStream);

	let input;
	function readDirRecursive(dir) {
		const files = fs.readdirSync(dir);
		for (const file of files) {
			const filePath = path.join(dir, file);
			if (fs.statSync(filePath).isDirectory()) {
				readDirRecursive(filePath)
			} else {
				input = fs.createReadStream(filePath);
				input.pipe(gzip, { end: false })
					.on("finish", () => { console.log(`compressed ${filePath}`) })
			}
		}
	}

	readDirRecursive(inputPath);

	gzip.on('end', () => {
		console.log(`Compressed ${inputPath} to ${destinationPath}`);
	});

	gzip.on('error', (err) => {
		console.error(`Compression error: ${err}`);
	});

	input.on('error', (err) => {
		console.error(`Read error: ${err}`);
	});

	input.on("end", () => {
		gzip.end()
	})
}

compressFolder("/Users/rikidutra/Desktop/nodeJs/sprint15", "/Users/rikidutra/Desktop/nodeJs/compressedFiles/output.gz")

//N2E1
