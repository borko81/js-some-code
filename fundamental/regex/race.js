function race_solve(...array) {
	let participants = array.shift().split(", ")

	let search_for_name = /[a-zA-Z]+/g
	let search_distance = /[0-9]+/g
	let result = {}
	let counter_how_much_posiiton = 0
	for (let n of participants) {
		result[n] = 0
	}

	for (let command of array) {
		if (command !== 'end of race') {
			let name_search = command.match(search_for_name)
			if (name_search) {
				let name = name_search.join("")

				if (participants.includes(name)) {
					let distance = command.match(search_distance).join("")
					distance = distance.split("")
						.map(x => Number(x))
						.reduce((x, y) => x + y, 0)
					result[name] += distance
				}
			}
		}
	}
	let sorted_result = Object.entries(result).sort((x, y) => y[1] - x[1])

	for (let i = 0; i < 3; i++) {
		let extention = {
			1: 'st',
			2: 'nd',
			3: 'rd'
		}
		console.log(`${i + 1}${extention[i + 1]} ${sorted_result[i][0]}`)
	}
}


race_solve(
	"George, Peter, Bill, Tom",
	"G4e@55or%6g6!68e!!@",
	"R1@!3a$y4456@",
	"B5@i@#123ll",
	"G@e54o$r6ge#",
	"7P%et^#e5346r",
	"T$o553m&6",
	"end of race"

)