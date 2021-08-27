let map = new Map();

map.set('1', 'str1')
map.set(true, 'bool1')

// for (let i of map.keys()) {
//     console.log(map.get(i));
// }

let recipe = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onio', 50]
])

// recipe.forEach((key, value) => {
//     console.log(`${key} has value ${value}`);
// })

// console.log(recipe.get('cucumber'));

let obj = {
    name: "John",
    age: 30
  };

  console.log(obj['name']);

let new_map = new Map(Object.entries(obj))

console.log(new_map);
