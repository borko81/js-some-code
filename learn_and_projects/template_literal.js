const name = 'john'
const age = 41
const beautiful_name = name[0].toUpperCase() + name.slice(1)
console.log(`His age is ${age} and the name is ${beautiful_name}`)

let names = 'john bobo barry borko ben'.split(" ")
console.log(names.length)
names = names.concat('something')
names.push('lname')
console.log(names.reverse());

// copy without use deep
let l_one = ['one', 'two']
let l_two = [...l_one]
l_one.push('three')
console.log(l_one);
console.log(l_two);

