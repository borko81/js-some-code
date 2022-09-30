function heroes(array_with_data) {
	let result = array_with_data.reduce((acc, valus) => {
		let temp = valus.split(" / ")
		const [name, level, items] = temp
		acc.push({
			'name': name.trim(),
			'level': Number(level),
			'items': items
				.split(", ")
				.sort((x, y) => x.localeCompare(y))
				.join(", ")
		})
		return acc
	}, [])


	result.sort((x, y) => x.level - y.level)
		.forEach(x => {
			console.log(
				`Hero: ${x['name']}
level => ${x['level']}
items => ${x['items']} `
			)
		})

}

heroes(
	[
		"Isacc / 25 / GravityGun, Apple",
		"Derek / 12 / BarrelVest, DestructionSword",
		"Hes / 1 / Desolator, Sentinel, Antara"
	]
)