function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function (message) {
    console.log(`${this.name} say ${message}`);
}

function Employee(name, salary) {
    Person.call(this, name);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.collectSalary = function () {
    console.log(`User ${this.name} has salary ${this.salary}`);
}

person = new Employee("Borko", 1500);
person.sayHi("Hello");
person.collectSalary();