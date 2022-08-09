function solve(param) {
	let name = param[0].toLowerCase();
	const FRUIT = "banana, apple, kiwi, cherry, lemon, grapes".split(", ")
	const VEGETABLE = 'tomato, cucumber, pepper, carrot'.split(", ")

	if (FRUIT.includes(name)) {
		console.log('fruit')
	} else if (VEGETABLE.includes(name)) {
		console.log('vegetable')
	} else {
		console.log('unknown')
	}
}

solve(['tomato'])