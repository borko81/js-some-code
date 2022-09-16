function reversed_chars(array) {
    let temp = []

    while (array.length > 0) {
        
        const last_element = array.pop()
        temp.push(last_element)
    }

    return temp.join("")
}


console.log(reversed_chars(['A', 'B', 'C']))