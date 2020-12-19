let book = {
	"main title": "Javascript book",
	"sub title": "The book",
	"author": {
		"firstname": "Borko",
		"lastname": "Stoilov"
	},
}

book.edition = 7;

book["main title"] = book["main title"].toUpperCase()


function showInfo(book) {
	for (let name in book) {
		console.log(`${name}: ${JSON.stringify(book[name])}`)
	}
}

//Inherit object
let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2
let q = Object.create(p);
q.z = 3;
//Assign z to q, it change value of q, not propert from o!
q.x = 11;
// console.log(o.x)
// console.log(q.x)

//Property Access Error
if (book) {
	if (book.author) {
		surname = book.author.lastname
	}
}

// delete book['sub title']
// console.log(book)

//Testing Property
// console.log("x" in o) //true
// console.log(p.hasOwnProperty("x")) //return false for inheritanse object

//console.log(p.propertyIsEnumerable("x"))

//Extended Objects
let target = { x: 1}, sourse = { y: 2, z: 3}
// for (let key of Object.keys(sourse)) {
// 	target[key] = sourse[key]
// }
// In ES6

//console.log({...target, ...sourse})

function merge(target, ...sourses) {
	for (let sourse of sourses) {
		for (let key of Object.keys(sourse)) {
			if (!(key in target)) {
				target[key] = sourse[key]
			}
		}
	}
	return target;
}


// console.log(merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}))
// // VS
// console.log(Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}))


//Serializing Object
let for_test = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(for_test);
console.log(s) //{"x":1,"y":{"z":[false,null,""]}}
console.log(JSON.parse(s))

//Shortend declare in ES6
let x = 1, y = 2;
let oo = {x, y}
console.log(oo)

















