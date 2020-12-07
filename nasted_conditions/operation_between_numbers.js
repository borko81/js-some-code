function solve(...input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let r;

    switch (operator) {
        case "+":
            r = N1 + N2;
            if (r % 2 == 0) {
                console.log(`${N1} ${operator} ${N2} = ${N1 + N2} – even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 + N2} – odd`);
            }
            break;
        case "-":
            r = N1 - N2;
            if (r % 2 == 0) {
                console.log(`${N1} ${operator} ${N2} = ${N1 - N2} – even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 - N2} – odd`);
            }
            break;
        case "*":
            r = N1 * N2;
            if (r % 2 == 0) {
                console.log(`${N1} ${operator} ${N2} = ${N1 * N2} – even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 * N2} – odd`);
            }
            break;
        case "%":
            if (N2 === 0 || N1 === 0) {
                console.log('Cannot divide by zero');
                break;
            } else {
                r = N1 * N2;
                if (r % 2 == 0) {
                    console.log(`${N1} ${operator} ${N2} = ${N1 % N2} – even`);
                } else {
                    console.log(`${N1} ${operator} ${N2} = ${N1 % N2} – odd`);
                }
                break;
            }
        case "/":
            if (N2 === 0 || N1 === 0) {
                console.log('Cannot divide by zero');
                break;
            } else {
                r = (N1 / N2).toFixed(2);
                if (r % 2 == 0) {
                    console.log(`${N1} ${operator} ${N2} = ${N1 / N2} – even`);
                } else {
                    console.log(`${N1} ${operator} ${N2} = ${N1 / N2} – odd`);
                }
                break;
            }
    }
}



solve("11",
    "2",
    "/")