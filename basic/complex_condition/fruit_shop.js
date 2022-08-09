function solve(args) {
	let [simple, day, q] = args
	simple = simple.toLowerCase()
	day = day.toLowerCase()
	q = Number(q)

	const delnik = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
	const weekend = ['saturday', 'sunday']

	let delnik_price = {
		'banana': 2.5,
		'apple': 1.2,
		'orange': 0.85,
		'grapefruit': 1.45,
		'kiwi': 2.7,
		'pineapple': 5.5,
		'grapes': 3.85
	}
	let weekend_price = {
		'banana': 2.7,
		'apple': 1.25,
		'orange': 0.9,
		'grapefruit': 1.6,
		'kiwi': 3,
		'pineapple': 5.6,
		'grapes': 4.2
	}

	if (delnik.includes(day)) {
		if (simple in delnik_price) {
			console.log((delnik_price[simple] * q).toFixed(2))
		} else {
			console.log('error')
		}
	} else if (weekend.includes(day)) {
		if (simple in weekend_price) {
			console.log((weekend_price[simple] * q).toFixed(2))
		} else {
			console.log('error')
		}
	} else {
		console.log('error')
	}

}

solve(['tomato', 'Monday', 2.5])