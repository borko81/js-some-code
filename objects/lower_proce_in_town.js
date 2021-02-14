function solve(array) {
    let result = {};

    // While has line, read them
    while (array.length) {
        let check = array.shift();
        let [town, product, price] = check.split(' | ');

        // If not product in result obj add to him
        if (!result[product]) {
            result[product] = { price: Number(price), town }
        }
        else if (result[product]) {
            let temp = Number(result[product]['price']);
            // If product already exists but new price if more offer change them
            if (price < temp) {
                result[product]['price'] = price;
                result[product]['town'] = town;
            }
        }
    }
    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value['price']} (${value['town']})`);
    }
}



solve(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 14',
        'New York | Burger | 10']

);