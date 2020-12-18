function add_zero(num) {
    //Add zero to number
    return (num < 10 ? '0' : '') + num;
}

function clock() {
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            console.log(`${add_zero(h)}:${add_zero(m)}`);
        }
    }
}


clock()