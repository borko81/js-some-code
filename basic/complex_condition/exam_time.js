function solve(args) {
	let params = args.map(x => Number(x))
	let [exam_h, exam_m, income_h, income_m] = params

	let exam_to_minute = exam_h * 60 + exam_m
	let income_to_minute = income_h * 60 + income_m

	let validate_time = income_to_minute - exam_to_minute


	if (validate_time > 0) {
		let result = Math.abs(validate_time)
		let h = Math.trunc(result / 60)
		let m = result % 60

		if (h > 0) {
			m = m <= 9 ? m + '0' : m
			console.log(`Late
${h}:${m} hours after the start`)
		} else {
			console.log(`Late
${m} minutes after the start`)
		}
	} else if (validate_time == 0) {
		console.log(`On time`)
	} else if (validate_time < 0 && Math.abs(validate_time) <= 30) {
		console.log(`On time
${Math.abs(validate_time)} minutes before the start`)
	} else if (validate_time < 0 && Math.abs(validate_time) > 30) {
		let result = Math.abs(validate_time)
		let h = Math.trunc(result / 60)
		let m = result % 60

		if (h > 0) {
			m = m <= 9 ? m + '0' : m
			console.log(`Early 
${h}:${m} hours before the start`)
		} else {
			console.log(`Early
${m} minutes before the start`)
		}

	}

}

// solve([11, 30, 8, 12])
// solve([9, 30, 9, 50])
// solve([16, '00', 15, '00'])
// solve([9, '00', 10, 30])
// solve([14, '00', 13, 55])
// solve([10, '00', 10, '00'])
// solve([11, 30, 10, 55])
// solve([11, 30, 12, 29])
// solve([9, '00', 8, 30])
// solve([11, 30, 8, 12])
console.log(61 / 60)