function bombs(a, b) {
	let field = a.map(x => Number(x))
	let [bomb_posiiton, bomb_power] = b

	while (field.includes(bomb_posiiton)) {
		let bomb_index = field.indexOf(bomb_posiiton)

		field = field.slice(0, bomb_index - bomb_power)
			.concat(field.slice(bomb_index + bomb_power + 1, field.length))


	}
	return field.reduce((acc, value) => acc + value, 0)

}


console.log(
	bombs(
		[1, 2, 2, 4, 2, 2, 2, 9],
		[4, 2]
	)
)