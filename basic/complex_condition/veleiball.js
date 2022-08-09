function solve(args) {
	let year_type = args[0].toLowerCase()
	let holliday = Number(args[1])
	let go_to_village = Number(args[2])

	const total_weekend = 48;
	const game_play_in_sofia = (total_weekend - go_to_village) * 0.75
	const game_play_of_holliday = holliday * (2 / 3)

	let result = go_to_village + game_play_of_holliday + game_play_in_sofia

	if (year_type == 'leap') {
		result += result * 0.15
	}

	console.log(Math.floor(result))

}

solve(['leap', 5, 2])