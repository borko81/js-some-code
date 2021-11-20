let solve = {
    firstParam: 0,
    sum(...args) {
        for (let arg of args) {
            this.firstParam += arg
        }
        return this.firstParam
    }
}

let s = solve
s.firstParam = 10
console.log(s.sum(1,2,3,4,5))

function mySum(param, ...args){
    args.forEach(x => param += x)
    return param
}

console.log(mySum(10, 1,2,3,4,5))

function showName() {
    console.log(arguments.length)
}

showName("First", "Second")

//Spread
const arr1 = [3, 5, 1, 10]
const arr2 = [30, 5, 1, 10]
console.log(Math.max(...arr1, ...arr2, 45))

//String to arrat
let str = "some name"
console.log([...str].filter(x => x.trim()).join("-"))