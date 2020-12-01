let point = "2703";

function solve(somenumber) {
    let bonus = 0;
    somenumber = Number(somenumber);

    if (somenumber <= 100) {
        bonus += 5;

    } else if (somenumber > 0 && somenumber <= 100) {
        bonus += somenumber * 0.20;

    } else if (somenumber >= 1000) {
        bonus += somenumber * 0.10;
    }

    if (somenumber % 2 == 0) {
        bonus += 1;
    } else if (somenumber % 10 == 5) {
        bonus += 2;
    }
    return bonus;
}

let b = solve(point);
console.log(b);
console.log(Number(point) + b);