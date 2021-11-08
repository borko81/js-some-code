function pow1(x, n) {
    if (n === 1){
        return x;
    } else {
        return x * pow(x, n - 1)
    }
}

function pow(x, n) {
    return (n === 1) ? x : (x * pow(x, n - 1));
}


function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n -1)
    }
}

console.log(sumTo(10));