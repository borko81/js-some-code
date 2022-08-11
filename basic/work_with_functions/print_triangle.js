function solve(end, start = 1) {

	function header() {
		for (let i = 1; i <= end; i++) {
			let line = '';
			for (let k = 1; k <= i; k++) {
				line += k + " ";
			}
			console.log(line)
		}
	}

	function footer() {
		for (let i = end; i >= 1; i--) {
			let line = '';
			for (let k = 1; k < i; k++) {
				line += k + " "
			}
			console.log(line)
		}
	}

	header()
	footer()
}

solve(4)