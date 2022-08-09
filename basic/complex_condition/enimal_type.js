function solve(args) {
	let animal_type = args[0];

	switch (animal_type) {
		case 'crocodile':
		case 'tortoise':
		case 'snake':
			console.log('reptile')
			break;
		case 'dog':
			console.log('mammal')
			break;
		default:
			console.log('unknown')
	}
}

solve(['elephant'])