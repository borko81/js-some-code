function get_sign(n) {

	let number = Number(n)

	function show_sign(number) {
		let ext = number > 0 ?
			`${number} is positive` :
			number === 0 ? `${number} is zero` :
			`${number} is negative`
		console.log('The number ' + ext)
	}

	return show_sign(number)
}


get_sign(2)
get_sign(-5)
get_sign(0)