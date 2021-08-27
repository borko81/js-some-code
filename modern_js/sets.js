let set = new Set();
let borko = {name: 'Borko'}
let new_choice = {name: 'Test'}

set.add(borko)
set.add(new_choice)

set.forEach((value) => {
    console.log(value['name']);
})