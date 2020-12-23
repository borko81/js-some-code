const someClosure = () => {
	let privateMessage = 'this is a private';

	return {
		//geter
		accessmessage: () => console.log(privateMessage),
		//setter
		changemessage: (value) => privateMessage = value
	}
}

const test = someClosure()
test.changemessage('Borko')
test.accessmessage()

//increment value
const addNumbers = (value) => {
	return (nextvalue) => {
		return value + nextvalue;
	}
}

const num = addNumbers(10)
console.log(num(10))

