//Validate character is lower or upper case
let char = 'l'

if (char == char.toLowerCase()) {
	console.log("Lower Case")
} else {
	console.log("Upper case")
}

// Reverse string
function reversed_char(...args) {
	let returns = []
	while (args.length > 0) {
		let end_char = args.pop()
		returns.push(end_char)
	}
	console.log(
		returns.join(" "))
}

reversed_char('A', 'B', 'C')