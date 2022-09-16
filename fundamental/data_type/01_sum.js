const input_parameters = [245678, 97561, 543]

function solve(n) {
    let spllitet_numbers = String(n).split("").map(x => Number(x))
    .reduce((acc, result) => acc+result, 0)
    return Number(spllitet_numbers)
}


function solve_two(n){
    let temp = 0
    while (n > 0) {
        temp += n % 10
        n = Math.trunc(n / 10)
    }
    return temp
}


input_parameters.forEach(x => {
    console.log((solve_two(x)));
})


