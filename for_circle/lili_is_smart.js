function solve(...arg) {
    [age, landry, price_toys] = arg;
    total_money = 0;
    total_toys = 0;
    let money_and_money_from_toys = 0;

    let temp = 0;
    for (let i = 1; i <= age; i++) {
        //Take money, each odd increase money with 10 to last take and decrease with 1
        if (i % 2 == 0) {
            temp += 10;
            total_money = total_money + temp - 1;
        //Take tois convert to money
        } else if (i % 2 == 1) {
            total_toys += 1;
        }
    }

    //Convert toys quantity to money
    total_toys = total_toys * price_toys;

    //sum money from gift with money from convert gift
    money_and_money_from_toys = total_toys + total_money;

    if (money_and_money_from_toys >= landry) {
        return `Yes! ${money_and_money_from_toys - landry}`;
    } else {
        return `No! ${landry - money_and_money_from_toys}`;
    }
}


console.log(solve("10", "170", "6"))
console.log(solve("21", "1570.98", "3"))