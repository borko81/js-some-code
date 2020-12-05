function solve(...args) {
    //Hard code begin param
    let flower = {"Roses": 5, "Dahlias": 3.8, "Tulips": 2.8, "Narcissus": 3, "Gladiolus": 2.5};
    
    let dicount = {
        "Roses": {"quant": 80, "disc": 0.1},
        "Dahlias": {"quant": 90, "disc": 0.15},
        "Tulips": {"quant": 80, "disc": 0.15},
        "Narcissus": {"quant": 120, "disc": 0.15},
        "Gladiolus": {"quant": 80, "disc": 0.20}
    };

    let total = 0;

    //Input from args
    let [flower_type, quantity_flower, budget] = args;
    quantity_flower = Number(quantity_flower)
    budget = Number(budget);

    //Logic
    total = flower[flower_type] * quantity_flower;

    if (flower_type === "Roses" || flower_type === "Dahlias" || flower_type === "Tulips") {
        if (quantity_flower > dicount[flower_type]["quant"]) {
            total -= total * dicount[flower_type]["disc"];
        }
    } else if (flower_type === "Narcissus" || flower_type === "Gladiolus") {
        if (quantity_flower < dicount[flower_type]["quant"]) {
            total += total * dicount[flower_type]["disc"];
        }
    }

    if (total <= budget) {
        console.log(`Hey, you have a great garden with ${quantity_flower} ${flower_type} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}



solve("Tulips",
"88",
"260")