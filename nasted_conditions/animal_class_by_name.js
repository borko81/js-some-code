let animal_type = {
    'mammal': ['dog'],
    'reptile': ['crocodile', 'tortoise', 'snake']
};

// Retrn keys from dictionary
let names = Object.keys(animal_type);

let name_search = 'dog';


function solve(animal) {
    //Default value
    let result = 'Not found';

    for (let n of names) {
        //Get curent list with name's
        let target = animal_type[n];

        for (let inside_name of target) {
            if (inside_name == name_search) {
                result = `${name_search} is type ${n}`;
            }
        }
    }
    return result
}

console.log(solve(name_search));

