function add_or_substract(numbers) {
    let original_sum = numbers.reduce((a, b) => a + b, 0)

    let result = []

    for (let i in numbers.map(x=>Number(x))) {
        let check = Number(numbers[i])
        // WTF
        i = Number(i)

        if (check % 2 !== 0) {
            result.push(check - i)
        } else {
            result.push(check + i)
        }
    }
    let modify_sum = result.reduce((x,y) => x + y, 0)
    return `[${result}]` + '\n' + original_sum + '\n' + modify_sum
}

function solve_two(numbers) {
    let original_sum = numbers.reduce((a, b) => a + b, 0)
    let modify_num =  numbers.map((x, i) => x % 2 === 0 ? x + i : x - i)
    return `[${modify_num}]\n${original_sum}\n${modify_num.reduce((a, b) => a + b, 0)}`
}

console.log(solve_two([5, 15, 23, 56, 35]))