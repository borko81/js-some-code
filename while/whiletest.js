function solve(input) {
    let index = 0;

    while (true) {
        if (input[index] === 'stop') {
            break;
        }
        console.log(input[index]);
        index++;
    }
}


solve(["one", "two", "three", "stop"]);