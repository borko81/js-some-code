function doubleChar(letter) {
    let result = letter.split('').map(x => x + x).join("")
    console.log(result);
}

doubleChar("String") //➞ "SSttrriinngg"

doubleChar("Hello World!") //➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") //➞ "11223344!!__  "