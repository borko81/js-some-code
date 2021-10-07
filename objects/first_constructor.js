function Person(fname, lname) {
    if(!new.target) {
        return new Person(fname, lname)
    }
    return {
        fname: fname,
        lname: lname
    }
}

const behavior = {
    getFullName() {
        return this.fname + ' ' + this.lname
    }
}

p = Person('first', 'last')
p.fullname = behavior.getFullName
console.log(p.fullname())
