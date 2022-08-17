const data = [{
	name: "Some name",
	age: 10
}, {
	name: "Second name",
	age: 11
}, {
	name: "Last name",
	age: 12
}, ]

function showAge(r) {
	console.log(r.age)
}

function showName(r) {
	console.log(r.name.toUpperCase())
}

// data.forEach(showName)
// data.forEach(showAge)

data.map(x => x.age += 10)

const only_age = data.map(x => console.log(x.age))
const filter_people_by_age = data.filter(x => x.age > 21)
const result = filter_people_by_age.map(x => `<h3>${x.name}</h3>`)

const total_ages = data.reduce((acc, current) => acc + current.age, 0)
console.log(`Total ${total_ages}`)

// console.log(data.find(x => x.age > 10))

// document.body.innerHTML = result.join("")