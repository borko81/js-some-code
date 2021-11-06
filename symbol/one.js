let id = Symbol('id')

let user = {"user": "Some name"}

console.log(user['user'] ? user['user'] : "None")


let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

userAdmin.admin()

function sayHi() {
    console.log(sayHi.name)
}

function makeCounter() {

  let count = 1;
  function c() {
    return count++;
  };

  return c;
}

let b = makeCounter()
for (let i=1; i<=10; i++) {
    let check = b()
    if (check === 4) {
        break
    }
    console.log(check)
}
