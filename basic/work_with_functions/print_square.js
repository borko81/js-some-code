function solve(row) {

	function header_and_footer() {
		console.log('-'.repeat(row * 2))
	}

	function body() {
		let line = '-'

		for (let i = 1; i < row; i++) {
			line += '\\/'
		}

		line += '-'

		console.log(line)
	}


	header_and_footer()
	for (let i = 1; i <= row - 2; i++) {
		body()
	}
	header_and_footer()

}

solve(4)