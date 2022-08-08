function solve(args) {
	let price = 0;
	let km = Number(args[0])

	if (km < 20) {
		if (args[1] == 'day') {
			price = (km * 0.79) + 0.7
		} else {
			price = (km * 0.9) + 0.7
		}
	} else if (km >= 20 && km < 100) {
		price = km * 0.09
	} else {
		price = km * 0.06
	}
	console.log(price.toFixed(2))
}

solve([25, 'day'])