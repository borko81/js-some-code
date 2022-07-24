function solve(arr){
	let password = arr.pop()
	let tries = 0
	for(let x of arr) {
		if(tries >= 4) {
			console.log('Blocked')
			return
		}
		const rev_x = x.split("").reverse().join("")
		if(rev_x === password) {
			console.log('Success')
		} else {
			console.log('Incorect password')
		
		}
		tries += 1

	}
}

solve(['Acer','34', '455', '345', 'login','go','let me in','recA'])