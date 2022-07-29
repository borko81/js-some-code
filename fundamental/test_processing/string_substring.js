function string_substring(...args) {
	let what_search = args[0]
	let string = args[1].split(" ")
	let found = false

	for (let s of string) {
		if (s.toLowerCase() == what_search) {
			found = true
		}
	}
	console.log(found ? what_search : `${what_search} not found`)
}

string_substring(
	'python',
	'JavaScript is the best programming language'
)