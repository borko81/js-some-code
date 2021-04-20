let person = {
	first_name: 'Borko',
	last_name: 'Somebody',
	fullname: function () {
		return this.first_name + ' ' + this.last_name
	}
	
}

person.last_name = 'St'

let p = person.fullname();

// Using call
let per = {
	full_name: function () {
		return `${this.first} ${this.last}; `
	}
}

let p1 = [
	{
		first: 'Borko',
		last: 'Doe',
		age: 39
	},
	{
		first: 'Bobo',
		last: 'cocolino',

	}
]

p1.map(x => console.log(per.full_name.call(x)))