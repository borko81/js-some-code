function solve(args) {
	let month = args[0].toLowerCase()
	let nights = Number(args[1])

	let price_from_months = {
		'may': {
			'Apartment': 65,
			'Studio': 50
		},
		'june': {
			'Apartment': 68.7,
			'Studio': 75.2
		},
		'july': {
			'Apartment': 77,
			'Studio': 76
		},
		'august': {
			'Apartment': 77,
			'Studio': 76
		},
		'september': {
			'Apartment': 68.7,
			'Studio': 75.2
		},
		'october': {
			'Apartment': 65,
			'Studio': 50
		}
	}


	let price = price_from_months[month]

	if (nights > 14) {
		price['Apartment'] *= 0.9
	}

	if ((nights > 7 && nights <= 14) && (month == 'may' || month == 'october')) {

		price['Studio'] *= 0.95

	} else if ((nights > 14) && (month == 'may' || month == 'october')) {

		price['Studio'] *= 0.7

	} else if ((nights > 14) && (month == 'june' || month == 'september')) {

		price['Studio'] *= 0.8

	}

	for (const [k, v] of Object.entries(price)) {
		console.log(`${k}: ${(v * nights).toFixed(2)} lv.`)
	}
}


solve(['June', 14])
console.log('------------')
solve(['May', 15])
console.log('------------')
solve(['August', 20])