let arr = [51, 47, 32, 61, 21]
let rotate_index = 2

let new_arr = arr.slice(
		rotate_index % arr.length, arr.length) +
	',' + arr.slice(0, rotate_index % arr.length)

console.log(new_arr.split(",").join(" "))