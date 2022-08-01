let user = {
	name: "Borko"
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

console.log(JSON.stringify(descriptor))

Object.defineProperty(user, "age", {
	value: 41
});

console.log(user)