function checkTotalTime(arg1, arg2, arg3) {
    let first = Number(arg1);
    let second = Number(arg2);
    let last = Number(arg3);

    let total = first + second + last
    return total
}


function solve(arg1, arg2, arg3) {
    let total = checkTotalTime(arg1, arg2, arg3);

    let m = Math.trunc(total / 60);
    let s = total % 60;
    
    if (s < 10) {
        return `${m}:0${s}`
    } else {
        return `${m}:${s}`
    }
}

//170 / 60 = 2.83
console.log(solve("60", "60", "7"));