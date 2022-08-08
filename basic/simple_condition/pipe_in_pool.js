function solve(args) {
	let args2 = args.map(x => Number(x))
	let [obem, p1, p2, h] = args2

	let calculate = (p1 + p2) * h
	let in_percent = Math.trunc((calculate / obem) * 100)
	let p1_work = Math.trunc((p1 / (p1 + p2)) * 100)
	let p2_work = Math.trunc((p2 / (p1 + p2)) * 100)

	if (calculate <= obem) {
		console.log(`The pool is ${in_percent}% full. Pipe 1: ${p1_work}%. Pipe 2: ${p2_work}%.`)
	} else {
		console.log(`For ${h} hours the pool overflows with ${calculate - obem} liters.`)
	}

}

solve([1000, 100, 120, 3])