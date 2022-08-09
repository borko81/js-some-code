function solve(args) {
	let name = args[0].toLowerCase()
	let money = Number(args[1])

	if (name == 'sofia') {
		if (money >= 0 && money <= 500) {
			console.log((money * 0.05).toFixed(2))
		} else if (money > 500 && money <= 1000) {
			console.log((money * 0.07).toFixed(2))
		} else if (money > 1000 && money <= 10000) {
			console.log((money * 0.08).toFixed(2))
		} else if (money > 10000) {
			console.log((money * 0.12).toFixed(2))
		} else {
			console.log('error')
		}
	} else if (name == 'varna') {
		if (money >= 0 && money <= 500) {
			console.log((money * 0.045).toFixed(2))
		} else if (money > 500 && money <= 1000) {
			console.log((money * 0.075).toFixed(2))
		} else if (money > 1000 && money <= 10000) {
			console.log((money * 0.1).toFixed(2))
		} else if (money > 10000) {
			console.log((money * 0.13).toFixed(2))
		} else {
			console.log('error')
		}
	} else if (name == 'plovdiv') {
		if (money >= 0 && money <= 500) {
			console.log((money * 0.055).toFixed(2))
		} else if (money > 500 && money <= 1000) {
			console.log((money * 0.08).toFixed(2))
		} else if (money > 1000 && money <= 10000) {
			console.log((money * 0.12).toFixed(2))
		} else if (money > 10000) {
			console.log((money * 0.145).toFixed(2))
		} else {
			console.log('error')
		}
	} else {
		console.log('error')
	}

}

solve(['Kaspichan', -50])