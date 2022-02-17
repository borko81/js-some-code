let simple = `some \\text`
let msg = 'Muliline \n\
string'

let msg_two = ['This text', 'can', 'read'].join("\n")
let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

let { title, excerpt, body, tags } = post

let postHTML = `<article>
<header><h1>${title}</h1></header>
<footer><h1>${tags}</h1></footer>
</article>`

function fn(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}

function sum(...args) {
    let total = 0
    for (const i of args) {
        total += i
    }
    return total
}


function sum_two(...args) {
    // sum only number
    return args.filter(e => typeof e === 'number').reduce(function (prev, acc) {
        return prev + acc
    })
}

console.log(sum_two(1, 2, 'A'));