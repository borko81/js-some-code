function solve(array) {
	let arr = [...array]
	for (let i in arr) {
		i = parseInt(i)
		if (arr[i] % 2 == 0) {
			arr[i] = arr[i] + i
		} else {
			arr[i] = arr[i] - i
		}
	}
	return `${arr}
${array.reduce((x, y) => x + y)}
${arr.reduce((x, y) => x + y)}`
}

console.log(solve([5, 15, 23, 56, 35]))