const { lemonchiffon } = require("color-name");

let user = {
    name: 'Borko',
    age: 40,
    'is Admin': true,
};

let isAdmin = 'is Admin';

function makeUser(name, age) {
    return {
        name,
        age,
        sayHi() {
            console.log(`Hello ${this.name}`);
        }
    }
}

let new_user = makeUser('First', 10);

// if ('name' in new_user) {
//     console.log(new_user['name']);
// }

// for (let key in new_user) {
//     console.log(`${key} ${new_user[key]}`);
// }

new_user.sayHi()
