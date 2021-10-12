let app = new Vue({
    el: '#root',
    data: {
        bookNameForTemplate: 'Getting to Know Vue.js',
        bookNameForMethod: 'Getting to Know Vue.js',
        bookNameForComputed: 'Getting to Know Vue.js',
        publisher: 'Apress',
        kilo: 0,
        meter: 0
    },
    methods: {
        getTitle: function () {
            console.log(this.bookNameForMethod)
            return `${this.bookNameForMethod} by ${this.publisher}`
        }
    },
    computed: {
        getComputed: function () {
            console.log(this.bookNameForComputed)
            return `${this.bookNameForComputed} by ${this.publisher}`;
        }
    },
    watch: {
        kilo: function (val) {
            this.kilo = val
            this.meter = val * 1000
        }, 
        meter: function (val) {
            this.meter = val
            this.kilo = val / 1000
        }
    }
})