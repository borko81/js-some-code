function solve(array) {

    products_result = {};

    while (array.length) {
        const read_line = array.shift();
        const f_letter = read_line[0];
        if (!products_result[f_letter]) {
            products_result[f_letter] = []
        }
        products_result[f_letter].push(read_line)
    }

    return Object.keys(products_result)
        .sort()
        .forEach(function (a, b) {
            console.log(`${a}`)
            const sort_product = products_result[a].sort()
            for (let i = 0; i < sort_product.length; i++) {
                console.log(`  ${products_result[a][i]}`);
            }
        })
}


solve(
    ['Banana : 2',
        "Rubic's Cube : 5",
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10']

);