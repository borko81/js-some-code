function repeat(word) {
    return '*'.repeat(word.length)
}

function solve(text, word) {
    let current = text.includes(word);
    while (current) {
        text = text.replace(word, repeat(word))
        current = text.includes(word);
    }
    console.log(text);
}



solve("A small sentence with some words small", "small")