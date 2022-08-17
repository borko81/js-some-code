let text  = ' name'
console.log(text.length)
text = text.trim()
console.log(text[0].toUpperCase() + text.slice(1))

console.log(text.charAt(text.length - 1))

console.log(text.indexOf('n') >= 0 ? "Found": "Not found")

console.log(text.toUpperCase().startsWith('N'))

console.log(text.slice(-1))