function solve(input) {
    let neededMoney = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;

    let belong = 0;
    let what = '';

    while (true) {
        if (index % 2 == 0) {
            what = input[index];
        } else {
            let temp = Number(input[index]);
            if (what === 'spend') {
                belong += 1;
                if (belong == 5) {
                    console.log("You can't save the money.");
                    console.log(`${Math.trunc(index / 2)}`);
                    break;
                }
                money -= temp;
                if (money < 0) {
                    money = 0;
                }
            } else {
                money += temp;
                if (money >= neededMoney) {
                    console.log(`You saved the money for ${Math.trunc(index / 2)} days.`);
                    break;
                }
            }
        }
        index += 1;
    }
}



solve(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])