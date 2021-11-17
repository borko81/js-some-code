function double(x: number): number {
    return 2 * x;
}

class Greeter {
    greeting: string;

    constructor (message: string) {
        this.greeting = message
    }
    greet(): string {
        return this.greeting
    }
}

let greeter: Greeter= new Greeter("Hello world")
console.log(greeter.greet())