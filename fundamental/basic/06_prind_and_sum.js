function solve(numbers) {
    const [first, last] = numbers.map(x => Number(x))
    
    let list_with_number = []
    for (let i = first; i <= last; i++ ){
        list_with_number.push(i)
    }

    // not need, only for charming
    let sum = list_with_number.reduce((acc, num) => acc + num, 0)

    return `${list_with_number.join(" ")}\nSum: ${sum}`

}

console.log(solve([5 ,10]))
console.log(solve([0 ,26]))