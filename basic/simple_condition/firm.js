function solve(args) {
	let H = Number(args[0])
	let D = Number(args[1])
	let E = Number(args[2])

	let work_time = Math.trunc(D * (8 + 2)) * E
	let work_time_without_staj = work_time - (work_time * 0.1)

	let result = work_time_without_staj - H

	if (result >= 0) {
		console.log(`Yes!${result} hours left.`)
	} else {
		console.log(`Not enough time!${Math.abs(result)} hours needed.`)
	}
}


solve([99, 3, 1])