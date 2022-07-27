function solve(employees) {
	const obj = employees.reduce((x, y) => {
		x[y] = y.length
		return x
	}, {})
	for (let [key, value] of Object.entries(obj)) {
		console.log(`${key} ${value}`)
	}
}

solve(
	[
		'Silas Butler',
		'Adnaan Buckley',
		'Juan Peterson',
		'Brendan Villarreal'
	]
)