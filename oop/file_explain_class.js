function PersonOld(name) {
    this.name = name
}

PersonOld.prototype.getName = function () {
    return this.name
}

let b = new PersonOld("Borko")


class Person {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    set name(value) {
        value = value.trim()
        if (value === '') {
            throw "Not allowed empty string!"
        }
        this._name = value
    }
}

let new_b = new Person("Borko")
console.log(new_b.name);
new_b.name = 'borko'
console.log(new_b.name);

let meeting = {
    attendees: [],
    add(attend) {
        console.log(`${attend} join to the meeting!`)
        this.attendees.push(attend)
        return this
    },
    get latest() {
        let count = this.attendees.length
        return count == 0 ? undefinded : this.attendees[count - 1]
    }
}

meeting.add("First").add("Second").add("Last")
console.log(meeting.latest);