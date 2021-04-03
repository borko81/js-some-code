function checkTitle2(letter) {
    let result = [];
    for (word of letter.split(" ")) {
        if (word[0] === word[0].toUpperCase()) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    console.log(result.every(v => v === true));
}

function checkTitle(letter) {
    let result = letter.split(" ").map(i => i[0] === i[0].toUpperCase())
    console.log(result.every(x => x === true));
}


checkTitle("A Mind Boggling Achievement") //➞ true

checkTitle("A Simple Java Script Program!")// ➞ true

checkTitle("Water is transparent")// ➞ false