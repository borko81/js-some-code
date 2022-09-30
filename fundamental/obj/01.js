function employees_old_style(array) {
	let result = {}

	array.forEach(x => {
		if (!(x in result)) {
			result[x] = x.length
		}
	})

	function show_result(data) {
		for (const [key, value] of Object.entries(data)) {
			console.log(`Name: ${key} -- Personal Number: ${value}`)
		}
	}

	show_result(result)

}

function employees(array) {
	let result = array.reduce((acc, value) => {
		acc[value] = value.length
		return acc
	}, {})

	Object.entries(result).forEach(x => {
		console.log(`Name: ${x[0]} -- Personal Number: ${x[1]}`)
	})

}

employees(
	[
		'Silas Butler',
		'Adnaan Buckley',
		'Juan Peterson',
		'Brendan Villarreal'
	]
)