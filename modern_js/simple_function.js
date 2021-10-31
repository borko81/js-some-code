function test(f, a, b) {
    return f(a, b);
}

function sumarize(a, b) {
    return a + b;
}



console.log(test(sumarize, 10, 20))

// Is this clousare
function outer(txt) {
    function inner(name) {
        return txt + ' ' + name
    }
    return inner
}

let greeting = outer("Hello")
let names = ["Boris", "Angel", "Ivan"]
names.forEach(x => {
    console.log(greeting(x))
})

// Counter
function makeCounter() {
    let count = 1;
    return () => count++
}

let f = makeCounter()
console.log(f())
console.log(f())