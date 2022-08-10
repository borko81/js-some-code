function solve(args) {
	let money = Number(args[0])
	let type_of_seads = args[1].toLowerCase()
	let peoples = Number(args[2])

	let type_tickets = {
		'vip': 499.99,
		'normal': 249.99
	}

	function monet_to_4() {
		money = money - money * 0.75
		return money
	}

	function monet_to_9() {
		money = money - money * 0.6
		return money
	}

	function monet_to_24() {
		money = money - money * 0.5
		return money
	}

	function monet_to_49() {
		money = money - money * 0.4
		return money
	}

	function monet_belogn_50() {
		money = money - money * 0.25
		return money
	}


	function calculate_how_much_money_left() {
		if (peoples <= 4) {
			return monet_to_4()
		} else if (peoples >= 5 && peoples <= 9) {
			return monet_to_9()
		} else if (peoples >= 10 && peoples <= 24) {
			return monet_to_24()
		} else if (peoples >= 25 && peoples <= 49) {
			return monet_to_49()
		} else if (peoples >= 50) {
			return monet_belogn_50()
		}
	}

	let left_money_left = calculate_how_much_money_left()

	let expect_monet = (left_money_left - type_tickets[type_of_seads] * peoples).toFixed(2)

	if (expect_monet >= 0) {
		console.log(`Yes! You have ${expect_monet} leva left.`)
	} else {
		expect_monet = (expect_monet * -1).toFixed(2)
		console.log(`Not enough money! You need ${expect_monet} leva.`)
	}
}


//solve([1000, 'normal', 1])
// solve([30000, 'vip', 49])
solve([50000, 'Normal', 200])

let a = -12498.01
console.log(a * -1)