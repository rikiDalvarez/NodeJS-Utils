//N2E2

const { spawn } = require("child_process")
const os = require("os")

function listContent() {

	const dir = os.homedir()
	const output = spawn("ls", [dir])

	output.stdout.on("data", (data) => {
		console.log(`content of directory ${data}`)
	});

	output.stderr.on("error", (data) => {
		console.error(`Error: ${data}`)
	});

	output.on("close", (code) => {
		console.log(`process finished with code ${code}`)
	})
}

module.exports = listContent;