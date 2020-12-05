function solve(...arg) {
    //Param from input
    let budget = Number(arg[0]);
    let season = arg[1];
    let people = Number(arg[2]);

    //Hardcode param
    let searson_price = {
        "Spring": 3000,
        "Summer": 4200,
        "Autumn": 4200,
        "Winter": 2600,
    }

    let discount = 0;
    let discount_even = 0;
    let total = 0;

    if (people <= 6) {
        discount = 0.1;
    } else if (7 <= people && people <= 11) {
        discount = 0.15;
    } else if (people >= 12) {
        discount = 0.25;
    }

    if (people % 2 === 0 && season !== "Autumn") {
        discount_even = 0.05;
    }

    total = searson_price[season];
    total -= total * discount;
    total -= total * discount_even;

    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
}

//Solve
solve("2000",
    "Winter",
    "13")