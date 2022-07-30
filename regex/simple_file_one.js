let tag = "What you do want to find?"
let regex = new RegExp(`<${tag}>`)

let str = 'We will, we rock you'

console.log(str.match(/we/ig))

let match = "JavaScript".match(/Java/)

if (!match) {
	console.log("Error")
} else {
	console.log(match.index)
}

console.log('We will, we will'.replace(/we/ig, "<b>$&</b>"))

let str_two = "I need to learn something"
console.log(/NEED/i.test(str_two))

let phone_number = "+7(903)-123-45-67";
console.log(phone_number.match(/\d/g).join(""))
console.log(phone_number.match(/\d{3}-\d{2}/)[0])
console.log(phone_number.match(/\D/g))

let css = 'Is there CSS4'
console.log(css.match(/\w{3}\d/)[0])

let regexp = /CS.4/
console.log('CSS4'.match(regexp))
console.log('1 - 5'.match(/\d\s-\s\d/))

let str1 = "Marry had a little lamb"
console.log(/^Marry/.test(str1) == true)
console.log(/lamb$/.test(str1))
let goodInput = "12:34"
let time_regex = /^\d{2}:\d{2}/
console.log(goodInput.match(time_regex))

let language = "Hello JavaScript and Java"
console.log(language.match(/\bJava\b/g))

// Escape special character
console.log("Chapter 5.1".match(/\d.\d/))
console.log('/'.match(/\//))

// Sets and ranges [...]
console.log("Mop top".match(/[tm]op/gi))
console.log("Voila".match(/V[oi].*/))
console.log("The number is 12345".match(/[3-8]+/))

//Quantifiers +...
console.log("I'm 41 years old".match(/\b\d{2}\b/)[0])
console.log("+7(903)-123-45-67".match(/\d+/g))
console.log("Should i write color or colour?".match(/colou?r/g))
console.log("100 10 1".match(/\d0+/g))
console.log("0 1 12.345 7890".match(/(\d+\.\d+)/g))
console.log("<body>...</body>".match(/<[a-z]+>([\.\w]+)<\/[a-z]+>/))

// Greedy and lazy quantifiers
console.log('a "witch" and her "broom" is one'.match(/".+?"/g))
// Alternative
console.log('a "witch" and her "broom" is one'.match(/"[^"]+"/g))
// take only 1
console.log("123 456".match(/\d+?/))

// Capture group
console.log("Gogogo now!".match(/(go)+/gi))
console.log("site.com my.site.com".match(/\b(\w+)\.(\w{2,3})\b/g))

let dateRegex = /(?<year>[0-9]{4})-(?<moth>[0-9]{2})-(?<day>\d{2})/
let data_str = "2022-07-30"
console.log(data_str.match(dateRegex).groups)