function train(values) {
	let trains = values.shift().split(" ").map(x => Number(x))
	let capacity = values.shift()

	values.forEach(x => {
		let [command, value] = x.split(" ")
		if (command == 'Add') {
			trains.push(value)
		} else {
			for (let i = 0; i < trains.length; i++) {
				if (trains[i] + Number(command) <= capacity) {
					trains[i] += Number(command)
					break
				}
			}
		}
	})
	console.log(trains.join(" "))

}

train(['32 54 21 12 4 0 23',
	'75',
	'Add 10',
	'Add 0',
	'30',
	'10',
	'75'
])