function solve(...input) {
    let type_pr = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let income = 0;

    switch (type_pr) {
        case "Premiere":
            income += row * column * 12;
            break;
        case "Normal":
            income += row * column * 7.5;
            break;
        case "Discount":
            income += row * column * 5;
            break;
        default:
            income = 0;
    }
    console.log(income.toFixed(2) + " lv.");

}

solve("Discount",
"12",
"30")("Discount",
"12",
"30")