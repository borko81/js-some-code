function compare_element(arr_one, arr_two) {
    return arr_one.filter(x => arr_two.includes(x)).join("\n")
}

console.log(compare_element(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
));