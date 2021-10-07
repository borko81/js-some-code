let ranks = ['A', 'B', 'C'];

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// for (let i=0; i<ranks.length; i++) {
//     console.log(ranks[i])
// }


// ranks.forEach(x => {
//     console.log(x)
// })

let bigCities = [];

// cities.forEach(x => {
//     if (x.population > 3000000) {
//         bigCities.push(x)
//     }
// })

// console.log(bigCities)

cities
    .filter(c => c.population > 3000000)
    .sort((x, y) => x.population - y.population)
    .map(c => console.log(`${c.name} ${c.population}`))
