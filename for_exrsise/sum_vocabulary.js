obj = {
    "a": 1,
    "e": 2,
    "i": 3,
    "o": 4,
    "u": 5,
}

function solve(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        let temp = obj[input[i]];
        if (temp) {
            total += temp;
        }
    }
    console.log(total);
}


solve("beer")

