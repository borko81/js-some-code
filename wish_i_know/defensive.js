const addNameToArray = (name, anmeArray) => {
	if (name.length) {
		anmeArray.push(name);
	}
	return anmeArray;
}

let a = ['some']
addNameToArray('borko', a)

setTimeout(() => {
	console.log(a)
}, 2000)