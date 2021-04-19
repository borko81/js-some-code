function main(x) {

	function upper_x() {
		return x * x;
	}

	function decrease_x() {
		return x / 2;
	}

	if (x > 10) {
		return upper_x();
	} else {
		return decrease_x();
	}
}

console.log(main(20))