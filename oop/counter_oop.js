function getElement(section) {
    const element = document.querySelector(section)
    if (element) {
        return element
    }
    throw new Error(`please check the element you want`)
}

class Counter {
    constructor(element, value) {
        this.counter = element
        this.value = value
        this.btnDecrease = element.querySelector('.decrease')
        this.btnIncrease = element.querySelector('.increase')
        this.btnRest = element.querySelector('.reset')
        this.valueDom = element.querySelector('.value')
        this.valueDom.textContent = this.value

        this.btnIncrease.addEventListener('click', this.increase_value.bind(this))
        this.btnDecrease.addEventListener('click', this.decrease_value.bind(this))
        this.btnRest.addEventListener('click', this.reset_value.bind(this))
    }
    increase_value() {
        this.valueDom.textContent = ++this.value
    }
    decrease_value() {
        this.valueDom.textContent = --this.value
    }
    reset_value() {
        this.value = 0
        this.valueDom.textContent = this.value
    }
};




let firstCounter = new Counter(getElement('.first_count'), 100);
let secondCounter = new Counter(getElement('.second_count'), 0);

