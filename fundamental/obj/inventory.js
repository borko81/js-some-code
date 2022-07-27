function inventory(data) {

	result = []

	for (let d of data) {

		let [name, level, items] = temporary
		let temporary = d.split(" / ")

		obj = {}
		obj['Hero'] = name
		obj['level'] = Number(level)
		obj['items'] = items.split(", ").sort((x, y) => x.localeCompare(y))
		result.push(obj)
	}

	result = result.sort((a, b) => {
		return a['level'] - b['level']
	})

	result.forEach(x => {
		console.log(`Hero: ${x['Hero']}
level => ${x['level']}
items => ${x['items'].join(", ")}`)
	})
}

inventory(
	[
		"Isacc / 25 / Apple, GravityGun",
		"Hes / 1 / Desolator, Sentinel, Antara",
		"Derek / 12 / BarrelVest, DestructionSword"
	]
)