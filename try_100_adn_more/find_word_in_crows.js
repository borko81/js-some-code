class Solve {
    constructor(words) {
        this.words = words
    }

    findwords() {
        let result = '';
        for (let w of this.words) {
            if (w === w.toLowerCase()) {
                result += w;
            }
        }
        return result;
    }
}


w1 = new Solve("bEEFGBuFBRrHgUHlNFYaYr")

console.log(w1.findwords());