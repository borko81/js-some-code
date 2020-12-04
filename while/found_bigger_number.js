function solve(input) {
    let temp = Number(input[0]);
    let index = 1;

    while (index < input.length) {
        if (Number(input[index]) > temp) {
            temp = input[index];
        }
        index++;
    }
    console.log(temp);
}



solve(["45",
"-20",
"7",
"99",
"Stop"])