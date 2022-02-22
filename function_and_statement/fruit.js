function solve(name, weigth, price) {
    let prie_for_gram = price / 1000
    let needed_money = weigth * prie_for_gram
    return `I need \$${needed_money.toFixed(2)} to buy ${(weigth / 1000).toFixed(2)} kilograms ${name}.`
}


const result = solve('apple', 1563, 2.35)
console.log(result);