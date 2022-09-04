function getElement(section) {
    const element = document.querySelector(section)
    if (element) {
        return element
    }
    throw new Error(`please check the element you want`)
}

function Counter(element, value) {
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
};

Counter.prototype.increase_value = function () {
    this.valueDom.textContent = ++this.value
}

Counter.prototype.decrease_value = function () {
    this.valueDom.textContent = --this.value
}

Counter.prototype.reset_value = function () {
    this.value = 0
    this.valueDom.textContent = this.value
}

let firstCounter = new Counter(getElement('.first_count'), 100);
let secondCounter = new Counter(getElement('.second_count'), 0);

