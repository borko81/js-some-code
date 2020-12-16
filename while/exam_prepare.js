function solve(items){
    let count_to_discount = items[0];
    let counter = 0;
    let index = 1;
    let unfinish = true;

    let scores = [];
    let lecture = '';

    while (items[index] !== 'Enough') {
        if (index % 2 == 1) {
            lecture = items[index]
        } else {
            let temp = Number(items[index]);
            scores.push(temp)
            if (temp <= 4) {
                counter += 1;
            }
            if (counter == count_to_discount) {
                unfinish = false;
                console.log(`You need a break, ${counter} poor grades.`);
                break
            }
        }
        index++;
    }
    if (unfinish){
        console.log(`Average score: ${scores.reduce((a, b) => a + b, 0) / scores.length}`);
        console.log(`Number of problems: ${(index - 1) / 2}`);
        console.log(`Last problem: ${lecture}`);
    }
}


solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])