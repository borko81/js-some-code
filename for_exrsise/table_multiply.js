function factoriel(num) {
    num = Number(num);
    let result = num;
    if (num == 1 || num == 0) {
        return 1
    }
    while (num > 1) {
        num--;
        result *= num
    }
    return result
}

function solve(number) {
    number = Number(number);
    for (let i=1; i<=10; i++) {
        let result = i * number;
        let fact = factoriel(result)
        console.log(`${i} * ${number} = ${result} : Factoriel is ${fact}`);
    }
}

solve(9)