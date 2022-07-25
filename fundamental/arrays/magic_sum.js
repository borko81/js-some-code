function find_magic_sum(array, number) {
	for (let i = 0; i < array.length; i++) {
		for (let k = i + 1; k < array.length; k++) {
			if ((array[i] + array[k]) == number) {
				console.log(array[i], array[k])
			}
		}
	}
}


find_magic_sum([14, 20, 60, 13, 7, 19, 8],
	27)