function solve(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let l = Number(input[2]);
    let index = 3;
    let kubiq = w * h * l;


    while (index < input.length) {

        let temp = (input[index]);

        if (temp == 'Done') {
            break;
        }

        if (kubiq < Number(input[index])) {
            console.log(`End: need more ${ Number(input[index]) - kubiq}`);
            kubiq -= Number(input[index]);
            break;
        } else {
            kubiq -= Number(input[index]);
        }

        index++;
    }

    console.log(input[index], kubiq);
    if (kubiq > 0) {
        console.log(`Left ${kubiq} more`);
    }
}


solve(["10",
"1",
"2",
"4",
"6",
"Done"])