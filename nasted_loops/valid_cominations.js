function solve(...input) {
    let num = Number(input[0]);
    let count = 0;

    for (let i = 0; i <= num; i++) {
        for (let y = 0; y <= num; y++) {
            for (let z = 0; z <= num; z++) {
                if ((i + y + z) == num) {
                    count++;
                    break
                }
            }
        }
    }

    console.log(count);
}


let arr = ['25', '20', '5']

arr.forEach(x => solve(x))