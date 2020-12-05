function solve(...args) {
    let degree = Number(args[0]);
    let time_of_a_day = args[1];

    let outfit = '';
    let shoes = '';

    if (time_of_a_day === 'Morning') {
        if (10 <= degree && degree <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (18 < degree && degree <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degree > 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (time_of_a_day === "Afternoon") {
        if (10 <= degree && degree <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (18 < degree && degree <= 24) {
            outfit = "T-Shirt";
            shoes = "Moccasins";
        } else if (degree > 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (time_of_a_day === "Evening") {
        if (10 <= degree && degree <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (18 < degree && degree <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degree > 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}."`);
}


solve("22",
    "Afternoon")

solve("28",
    "Evening")