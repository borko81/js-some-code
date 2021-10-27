function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Borko')
user.isAdmin = true;
console.log(user.name, user.isAdmin)
