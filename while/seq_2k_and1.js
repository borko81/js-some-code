function solve(input) {
    let number = Number(input[0]);
    let begin = 1;

    while(begin <= number) {
        console.log(begin);
        begin = begin * 2 + 1;
    }
}


solve(["31"])