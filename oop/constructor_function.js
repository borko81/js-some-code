let Person = function (name, age) {
    this.name = name;
    this.year = age;
}

Person.prototype.YEAR = new Date().getFullYear()
Person.prototype.calculate_age = function () {
    return (this.YEAR - this.year);
}

let borko = new Person("Borko", 1981)
let uncknown_person = new Person("Jonh", 2000)

console.log(borko.name)
console.log(borko.calculate_age())
