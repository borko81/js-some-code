function addUp(number) {
    total = 0;
    while (number >= 0 ){
        let temp = number;
        number -= 1
        total += temp
    }
    console.log(total);
}


function solve(number) {
    let result = (number * (number + 1) / 2);
    console.log(result);
}

addUp(4)
solve(4)