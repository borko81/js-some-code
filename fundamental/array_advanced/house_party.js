function house_party(array) {
	let result = []
	while (array.length > 0) {
		let command = array.shift().split(" ")
		let name = command[0]

		if (command.length == 3) {
			if (result.includes(name)) {
				console.log(`${name} is already in the list!`)
			} else {
				result.push(name)
			}
		} else {
			if (result.includes(name)) {
				result = result.filter(x => x !== name)
			} else {
				console.log(`${name} is not in the list!`)
			}
		}
	}
	console.log(result.join("\n"))
}

house_party(
	['Tom is going!',
		'Annie is going!',
		'Tom is going!',
		'Garry is going!',
		'Jerry is going!'
	]
)