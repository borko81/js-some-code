let sum = (a, b) => {
    let result = a + b;
    return result
};
let double = a => a * 2;
let sayHi = () => console.log("Say hello")

let age = 17
let welcome = age >= 18 ?
    () => "Enter" :
    () => "Too young"


console.log(sum(1, 100))
console.log(double(100))
sayHi()
console.log(welcome(age))

// Comparsion
let result = 5 >= 5;
console.log(result)

let characters = 'abAB1'
characters.split("").forEach(x => {
    console.log(x.charCodeAt())
})
console.log('' == false)
console.log(null.charCodeAt())

