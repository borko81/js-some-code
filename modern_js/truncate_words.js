let words = 'some new rods'
let vendors = ['Apple', 'Oracle', 'IBM']
let numbers = [10, 50, 6, 2, -1]


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...'
    } return str;
}


function foundBigget (arr ){
    let big = arr[0];
    let position = 0
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > big) {
            big = arr[i]
            position = i
        }
    }
    return [big, position]
}


console.log(truncate(words, 5))

console.log(vendors.map(x=>x.toUpperCase()).indexOf('ORACLE'));

console.log(Math.min.apply(Math, numbers))
console.log(Math.max(...numbers));
console.log(...foundBigget(numbers))

// Convert two dimention to one
let checkvendors = []
checkvendors[0] = [1, 'One']
checkvendors[1] = [2, 'Two']
console.log(checkvendors);
console.log( checkvendors.concat.apply([], checkvendors) )

// Delete from array, try first to delete ORACLE, next change with ORAC

let el = vendors.map(x => x.toUpperCase()).indexOf('ORACLE')
vendors.splice(el, 1, 'ORAC')
console.log(vendors);

// Replace element from array
let test = [11, 14, 12, 13, 14, 15]

function found(element, position, array) {
    if(element === 14) {
        array[position] = 'xx'
    }
}

console.log(test.filter(x => x >=14).join("-"))

test.forEach(found)
console.log(test);