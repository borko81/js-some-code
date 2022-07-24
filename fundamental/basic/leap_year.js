function solve(year) {
	if (year % 400 == 0) {
		return "Leap"
	} else if((year % 4 == 0) && (year % 100)){
		return "Leap"
	} else {
		return "Not Leap"
	}
}

const years = [1984, 2003, 4]

years.forEach(x => {
	console.log(x + ":" + solve(x))
})
