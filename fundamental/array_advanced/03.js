function house_party(array) {
	let data = []
	while (array.length > 0) {

		let temp = array.shift()

		let splitted_temp = temp.split(" ")
		let name = splitted_temp[0]

		if (splitted_temp.length == 3) {
			if (data.includes(name)) {
				console.log(`${name} is already in the list!`)
			} else {
				data.push(name)
			}
		} else {
			if (data.includes(name)) {
				data.pop(data.indexOf(name))
			} else {
				console.log(`${name} is not in the list!`)
			}
		}
	}
	console.log(data.join('\n'))
}


house_party(
	['Tom is going!',
		'Annie is going!',
		'Tom is going!',
		'Garry is going!',
		'Jerry is going!'
	]
)