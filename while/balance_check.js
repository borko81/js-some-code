function solve(input) {
    let balance = 0;
    let index = 0;

    while (input[index] != "NoMoreMoney") {
        
        let temp = Number(input[index]);
        if (temp <= 0) {
            console.log("Not allowed negativ integer!");
        } else {
            balance += temp;
            console.log(`Balance increase with ${temp} now it is ${balance.toFixed(2)}`);
        }
        index++;
    }
}


solve(["5.51",
"69.42",
"100",
"NoMoreMoney"])