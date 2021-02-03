function solve(arrays) {
    const result = {};

    for (let line of arrays) {
        let [name, population] = line.split(' <-> ')

        if (result[name] !== undefined) {
            result[name] += Number(population)
        } else {
            result[name] = Number(population);
        }
    }

    for (let name of Object.keys(result)) {
        console.log(`${name}: ${result[name]}`);
    }
}


solve(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
);

solve(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']

)