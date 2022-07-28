function lot(array) {
	let car_in_the_park = {}
	for (let car of array) {
		let [comamnd, number] = car.split(", ")
		if (comamnd == 'IN') {
			car_in_the_park[number] = 'in'
		} else if (comamnd == 'OUT' && car_in_the_park[number]) {
			delete car_in_the_park[number]
		}
	}
	if (Object.keys(car_in_the_park).length == 0) {
		console.log('Parking Lot is Empty')
	} else {
		Object.keys(car_in_the_park).sort().map(x => {
			console.log(x)
		})
	}

}

lot(
	['IN, CA2844AA',
		'IN, CA1234TA',
		'OUT, CA2844AA',
		'OUT, CA1234TA'
	]
)