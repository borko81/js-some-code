/*
const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7
*/


function makePlusFunction(baseNum) {
    function inside(num) {
        return baseNum + num
    }
    return inside
}


const plusFive = makePlusFunction(5)
console.log(plusFive(2))
