function collect_resourse(array) {
	let resourse = {}

	for (let i = 1; i < array.length; i += 2) {
		if (!resourse[array[i - 1]]) {
			resourse[array[i - 1]] = 0
		}
		resourse[array[i - 1]] += Number(array[i])
	}

	Object.entries(resourse).forEach(x => {
		console.log(`${x[0]} -> ${x[1]}`)
	})
}

collect_resourse(
	[
		'gold',
		'155',
		'silver',
		'10',
		'copper',
		'17',
		'gold',
		'15'
	]
)