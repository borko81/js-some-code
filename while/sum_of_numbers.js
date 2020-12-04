function solve(input){
    let search_number = Number(input[0]);
    let index = 1;
    let sum = 0;

    while(index <= input.length) {
        if (sum == search_number) {
            break;
        }
        sum += Number(input[index]);
        index++;
    }

    if (sum === search_number) {
        console.log(sum);
    } else {
        console.log(`Sorry not found sum equal to ${search_number}`);
    }

}


solve((["100",
"10",
"20",
"30",
"40"]))