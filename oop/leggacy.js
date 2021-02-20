function Person(firstName, lastName) {
    this.first = firstName;
    this.last = lastName

    Object.defineProperty(this, 'fullname', {
        enumerable: true,
        get: function() {
            return `${this.first} - ${this.last}`;
        },
        set: function(value) {
            [this.first, this.last] = value.split(' ');
        }
    });
}

Person.prototype.write = function(message) {
    console.log(`Person wrote a ${message}`);
}


function newOperator(constructor, ...params) {
    const result = Object.create(Person.prototype);
    constructor.apply(result, params)
    return result;
}

const myPerson = new Person("Some", "Name")
myPerson.fullname = "John Doe";
console.log(myPerson.fullname);

for (let key in Person) {
    console.log(key)
}
myPerson.write('message')

const check_operator = newOperator(Person, 'Bombina', 'bobi')
console.log(check_operator.fullname);