function bomber(array, bombs) {
	let [bomb, power] = [...bombs]

	while (array.includes(bomb)) {
		let bomb_position = array.indexOf(bomb)
		let temprary = array.slice(0, bomb_position - power) +
			',' + array.slice(bomb_position + power + 1)
		array = temprary.split(",").map(x => Number(x))
	}

	console.log(array
		.map(x => Number(x))
		.reduce((x, y) => x + y))
}

bomber(
	[1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
	[2, 1])