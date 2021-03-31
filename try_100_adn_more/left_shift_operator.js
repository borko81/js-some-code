function shiftToLeft(a, b) {
    let result = a << b;
    console.log(result);
}


function solve(a, b) {
    console.log(a * Math.pow(2, b));
}

shiftToLeft(5, 2) //➞ 20
solve(5, 2)