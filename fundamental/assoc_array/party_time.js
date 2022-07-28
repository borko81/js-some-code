function party(array) {

	let party_list = new Set()
	let coming_to_party = new Set()

	while (array.length > 0) {
		let user = array.shift()
		if (user == 'PARTY') {
			break
		} else {
			party_list.add(user)
		}
	}

	while (array.length > 0) {
		let user = array.shift()
		if (party_list.has(user)) {
			coming_to_party.add(user)
		}
	}

	let answer = [...party_list].filter(e => !coming_to_party.has(e))
		.sort((x, y) => x.localeCompare(y))
	console.log(answer.length)
	answer.forEach(x => {
		console.log(x)
	})

}


party(
	['7IK9Yo0h',
		'9NoBUajQ',
		'Ce8vwPmE',
		'SVQXQCbc',
		'tSzE5t0p',
		'PARTY',
		'9NoBUajQ',
		'Ce8vwPmE',
		'SVQXQCbc'
	]

)