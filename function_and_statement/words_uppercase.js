function solve(str) {
    // let word = str.match(/\w+/g)
    let word = str.split(/[,\s+.?]/g)
    return word.filter(x => x.length > 0).map(x => x.trim().toUpperCase())
}


console.log(solve('Hi, how are you?'));
console.log(solve('hello'));