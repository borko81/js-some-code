function solve(...arr) {
	let search = arr[0].split(", ")
	let words = arr[1].split(" ")

	for (let s of search) {
		for (let i = 0; i < words.length; i++) {
			if (words[i].length == s.length && words[i] == '*'.repeat(s.length)) {
				words[i] = s
			}
		}
	}

	console.log(words.join(" "))
}

solve('great',
	'softuni is ***** place for learning new programming languages')