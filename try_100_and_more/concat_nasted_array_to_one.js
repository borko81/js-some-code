function concat(...args) {
    return [].concat(...args)
}


const result = concat([1, 2, 3], [4, 5], [6, 7])
console.log(result)
