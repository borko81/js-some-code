// prototype property
function Account(name, amount) {
    this.name = name
    this.amount = amount
}

Account.prototype.deposit = function (income) {
    this.amount += income
}

Account.prototype.show_info = function () {
    return `${this.name} has ${this.amount} amount`
}

const borko = new Account('Borko', 100)
borko.deposit(100)
console.log(borko.show_info())
console.log(Account.prototype);

// class way
class Account2 {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }
    deposit(income) {
        this.amount += income
    }
    draw_info() {
        return `${this.name} has ${this.amount} amount`
    }
}

const new_name = new Account2('Bobo', 100)
new_name.deposit(100)
console.log(new_name.draw_info());

// call method
const some_data = {
    name: 'Some Name',
    age: 41
}

function ShowData(city_name) {
    return `${this.name} is ${this.age} years old and leave is ${city_name}`
}

console.log(ShowData.call(some_data, 'Velingrad'))

// apply method different with call is that apply need argument to be in list
console.log(ShowData.apply(some_data, ['Velingrad']))

// bind method: use when whant to call it later
const personality_info = ShowData.bind(some_data, 'Velingrad')
console.log(`This is from bind method: ${personality_info()}`)

const total = {
    count: 0,
    increment: function() {
        this.count++
    }
}
