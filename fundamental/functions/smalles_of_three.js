function found_smallest_of_three(...args) {
	let [first, second, third] = args
	if (first < second && first < third) {
		return first
	} else if (second < first && second < third) {
		return second
	} else if (third < first && third < second) {
		return third
	}
}

let result = found_smallest_of_three(600, 342, 123)
console.log(result)