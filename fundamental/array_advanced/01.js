function train(array) {
	let wagons = array[0].split(" ").map(x => Number(x))
	let capacity = Number(array[1])

	array.slice(2).forEach(x => {
		if (x.startsWith('Add')) {
			wagons.push(x.split(" ")[1])
		} else {
			x = Number(x)
			for (let i = 0; i < wagons.length; i++) {
				let temp_person = wagons[i] + x
				if (temp_person <= capacity) {
					wagons[i] += x
					break
				}
			}
		}

	})
	return wagons.join(" ")
}

console.log(
	train(
		['32 54 21 12 4 0 23',
			'75',
			'Add 10',
			'Add 0',
			'30',
			'10',
			'75'
		]
	)
)