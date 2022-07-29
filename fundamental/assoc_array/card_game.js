// WTF is this project?


function solve(persons) {
	let person_cards = {}

	const mapper_card = {
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'10': 10,
		'J': 11,
		'Q': 12,
		'K': 13,
		'A': 14
	}

	const mapper_power = {
		'S': 4,
		'H': 3,
		'D': 2,
		'C': 1
	}


	persons.forEach(p => {
		let [name, card] = p.split(": ")
		if (!person_cards[name]) {
			person_cards[name] = new Set()
		}
		for (let i of card.split(", ")) {
			person_cards[name].add(i)
		}
	})

	for (let i of Object.entries(person_cards)) {
		let person_total_sum = 0
		for (let count of i[1]) {
			let count_split = count.split("")
			let c = count_split.slice(0, count_split.length - 1).join("")
			let pow = count_split[count_split.length - 1]
			person_total_sum += Number(mapper_card[c]) * Number(mapper_power[pow])
		}
		console.log(i[0], person_total_sum)


	}
}


solve(
	[
		'Peter: 2C, 4H, 9H, AS, QS',
		'Tomas: 3H, 10S, JC, KD, 5S, 10S',
		'Andrea: QH, QC, QS, QD',
		'Tomas: 6H, 7S, KC, KD, 5S, 10C',
		'Andrea: QH, QC, JS, JD, JC',
		'Peter: JD, JD, JD, JD, JD, JD'
	]
)