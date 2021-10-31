const a = 'first'
const b = 'last'
let mass = ['One', "two9", "open"]

function sortString(str1, str2) {
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase()
    if (s1 > s2) {
        return 1
    } else if (s2 > s1) {
        return -1
    } else {
        return 0
    }
}

console.log(sortString(a, b));
mass.sort(sortString)
console.log(mass.join(", "))


let M = []
M['one'] = 1
M['two'] = 2

for (let i in M) {
    console.log(i, M[i]);
}