/*
Write a function which receives 3 parameters.
Each parameter is a single character. Combine all the characters
into one string and print it on the console.
*/

function solve(...arr) {
	return arr.join("")
}

console.log(solve('a', 'b', 'c'))