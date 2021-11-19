let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello ${this.firstName}`)
    }
}

let f = (() => user.sayHi())
f()

function func(phrase) {
    console.log(`${phrase} ${this.firstName}`);
}

let funcUser = func.bind(user)
funcUser("hello")

let s = user.sayHi.bind(user)
s()

let user2 = {
    first: "Test",
    say(phrase) {
        console.log(`${this.first} say ${phrase}`);
    }
}
let u = user2.say.bind(user2)
u()
