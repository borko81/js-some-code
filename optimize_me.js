/* Using loop to break nasted cickles */

function show_me_break() {
    loop_one: for (let i = 0; i <= 10; i ++) {
        for (let j = 0; j <= 10; j++) {
            if (j == 5) {
                break loop_one;
            } else {
                console.log(`For row ${i} value is ${j}`)
            }
        }
    }
}

/* Pre Compute */

function madagascar (name) {
    const light = ['Luke', 'Obi-Wan', 'Yoda'];
    const dark = ['Vader', 'Palpatine'];

    return  light.includes(name) ? "light" : dark.includes(name) ? 'dark' : 'WTF';
}

/* Order code */
const cents = [2305, 4150, 5725, 2544, 1900];

function convertNum (nums) {
    return nums.map(el => el / 100).reduce((x, y) => x + y, 0)
}
//Better
function convertNum2(nums) {
    return nums.reduce((x, y) => x + y, 0) / 100;
}


