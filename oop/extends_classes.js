class PowerArray extends Array {
    isEmpty() {
        return this.length === 0
    }
}

let arr = new PowerArray(1, 2, 5, 10)
console.log(arr.isEmpty())


class Article {
    constructor(title, data) {
        this.title = title
        this.data = data
    }
    static compare(a, b) {
        return a.data - b.data
    }
}


let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];


console.log(articles.sort(Article.compare))

// Mixins
let Mixin = {
    sayHi() {
        return `Hello ${this.name}`
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, Mixin)
let people = new User("Borko")
console.log(people.sayHi())