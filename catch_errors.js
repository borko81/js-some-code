function divide_me(...args) {
    let [a, b] = args
    if (b == 0) {
        throw new SyntaxError("Can't divide by zero")
    }
    console.log(a / b)
}

try {
    divide_me(10, 0)
} catch(err) {
    console.log("Error" + ' ' + err.message)
}

let json = '{ "bad": "json" }';

try {
    let user = JSON.parse(json)
    console.log(user)
} catch(err) {
    console.log(err.name)
    console.log(err.message)
}