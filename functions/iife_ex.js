(
    function() {
        const num1 = 10;
        const num2 = 20;
        const num3 = num1 + num2
        console.log(`${num1} + ${num2} = ${num3}`)
    }
)();

(
    function() {
        const num1 = 100;
        const num2 = 20;
        const num3 = num1 + num2
        console.log(`${num1} + ${num2} = ${num3}`)
    }
)();

const result = (
    function(num1, num2) {
        const num3 = num1 + num2
        console.log(`${num1} + ${num2} = ${num3}`)
        return `[+] ${num3}`
    }
)

console.log(result(100, 101));