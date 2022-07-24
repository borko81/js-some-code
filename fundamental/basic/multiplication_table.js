function solve(n) {
	let result = []
	for (let i=1; i<=10; i++) {
		result.push(`${n} x ${i} = ${n * i}`)
	}
	result.forEach(x => {
		console.log(x)
	})
}

solve(5)