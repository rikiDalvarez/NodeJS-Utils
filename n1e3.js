// //N1E3
const fs = require("fs")
const zlib = require("zlib");
const path = require("path");
const { ChildProcess } = require("child_process");

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
