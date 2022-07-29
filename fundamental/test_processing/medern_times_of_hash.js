function modern_times(string) {
	let hash_found = string.split(" ").filter(x => x.startsWith('#') && x.length > 1)

	hash_found.forEach(x => {
		console.log(x.substring(1))
	})
}

modern_times(
	'Nowadays everyone uses # to tag a #special word in #socialMedia')