function solve(numb, ...opr) {
    let number = Number(numb)
    let arr = opr
    while (arr.length > 0) {
        let temp = arr.shift()
        if (temp == 'chop') {
            number /= 2
            console.log(number);
        } else if (temp == 'dice') {
            number = Math.sqrt(number)
            console.log(number);
        } else if (temp == 'spice') {
            number += 1
            console.log(number)
        } else if (temp == 'bake') {
            number *= 3
            console.log(number)
        }
    }
}



function solve2(...args) {
    let n = Number(args.shift())
    const actions = {
        chop: x => n = x / 2,
        dice: x => n = Math.sqrt(x),
        splice: x => n = x + 1
    }
    args.forEach(x => console.log(action[x](n)))
}

solve2('9', 'dice', 'spice', 'chop', 'bake');
