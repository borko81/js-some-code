function solve(...args) {
	let [start, end] = args

	let array = []
	while (start <= end) {
		array.push(start)
		start+=1
	}
	return `${array.join(" ")}
Sum: ${array.reduce((x, count) => x + count)} 
	`
}


