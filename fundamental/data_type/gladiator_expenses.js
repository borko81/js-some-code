function solve(...args) {
	let lost_fight = args[0]
	let helmet_price = args[1]
	let sword_price = args[2]
	let shield_price = args[3]
	let armor_price = args[4]

	let cost = 0
	let shield_broken = 0

	for (let i = 1; i <= lost_fight; i++) {
		if ((i % 2 == 0) && (i % 6)) {
			cost += helmet_price
		} else if ((i % 3 == 0) && (i % 6)) {
			cost += sword_price
		} else if (i % 6 == 0) {
			cost += (sword_price + helmet_price + shield_price)
			shield_broken += 1
			if (shield_broken % 2 == 0) {
				cost += armor_price
			}
		}
	}
	return `Gladiator expenses: ${cost.toFixed(2)} aureus`
}

// 1 2 3 4 5 6 7

console.log(solve(23,
	12.50,
	21.50,
	40,
	200))