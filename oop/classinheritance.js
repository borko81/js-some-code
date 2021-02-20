class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi(message) {
        console.log(`${this.name} say ${message}`);
    }
}


class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    collectSalary() {
        console.log(`User ${this.name} has salary ${this.salary}`);
    }
}


person = new Employee("Borko", 1500);
person.sayHi("Hello");
person.collectSalary();