function findHighest(array) {
    if (array.length === 1) {
        return array[0]
    }
    let f = array[0]
    let l = array[array.length - 1]
    return findHighest(f < l ? array.slice(1) : array.slice(0, -1))
}

console.log(findHighest([100, 3, 5, 6, 99, 12, 2])) //➞ 99
console.log(findHighest([0, 12, 4, 87]));
