function solve(...args) {
	let [count, type, day_of_week ] = args 
	
	let data = {
		Students: {
			Friday: 8.45,
			Saturday: 9.8,
			Sunday: 10.46
		},
		Business: {
			Friday: 10.9,
			Saturday: 15.6,
			Sunday: 16
		},
		Regular: {
			Friday: 15,
			Saturday: 20,
			Sunday: 22.5
		}
	}
	let total = data[type][day_of_week] * count

	if (type == 'Students' && count >= 30) {
		total = total - total * 0.15
	} else if (type == 'Business' && count == 100) {
		total = total - total * 0.1
	} else if (type == 'Regular' && (count >= 10 && count <= 20)) {
		total = total - total * 0.2
	}

	console.log(total.toFixed(2))

}


solve(40,
"Regular",
"Saturday")