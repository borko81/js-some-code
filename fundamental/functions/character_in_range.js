function character_in_range(a, b) {
	let ascii_a = a.charCodeAt(0)
	let ascii_b = b.charCodeAt(0)

	let result = []

	while (ascii_a < ascii_b) {
		result.push(ascii_a)
		ascii_a++
	}
	return result.map(x => String.fromCharCode(x)).join(" ")
}

console.log(character_in_range('#', ':'))