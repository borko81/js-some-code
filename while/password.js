function solve(input) {
    let name = input[0];
    let password = input[1];
    let index = 3;
    let found = false;

    while (index <= input.length) {
        let data = input[index];
        if (data == password) {
            found = true;
            break;
        }
        index++;
    }

    if (found){
        console.log(`${name} is ok`);
    } else {
        console.log(`${name} not ok`);
    }
    
}


solve((["Nakov",
"1234",
"Pass",
"1324",
"1234"]))