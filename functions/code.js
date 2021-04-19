function distance(x1, x2, y1, y2) {
	let x = x2 - x1;
	let y = y2 - y1;
	return Math.sqrt(x*x + y*y)
}

console.log(distance(1,3, 2, 5))

function recursive(num) {
	// Use recursive function
	if (num <= 1) {
		return 1
	} else {
		return num * recursive(num - 1)
	}
}

console.log(recursive(5))

// Function expresion
const f = function fact(x) {
	if(x <= 1) {
		return 1;
	} else {
		return x * fact(x - 1);
	}
}

console.log(f(5))

console.log([3,2,1].sort((a,b) => a - b))

// Arrow function
// May omit return!
const sum = (a, b) => a + b;
console.log(sum(1, 3))

// constant function
const myf = () => 42;
console.log(myf())

