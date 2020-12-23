//es5 function
function MyFunc1() {
	console.log("es5 function")
}

//Arrow function
const MyFunc = () => {
	console.log("Arrow function")
}

//Object's

const personObj = {
	name: 'Borko',
	age: 39,
	sayHi: function () {
		console.log(`Hi ${this.name}`)
	}
}

//Add prototype
const borko1 = Object.create(personObj)
borko1.work = 'Some work'
borko1.wathWork = function () {
	console.log(`Person ${this.name} work in ${this.work}`)
}

borko1.wathWork()


//Class base es6
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHi() {
		console.log(`Hi ${this.name}`)	
	}
}

//Extends Person functionality add second class Worker extends Person
class Worker extends Person {
	constructor(name, age, work) {
		super(name, age)
		this.work = work
	}
	wathWork() {
		console.log(`Person ${this.name} work in ${this.work}`)
	}
}

const borko2 = new Worker("Boris", 39, 'Some work')



