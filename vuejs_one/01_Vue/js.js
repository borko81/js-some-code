let app = new Vue({
    el: '#root',
    data: {
        propertyName: 'Therion',
        url: 'https://google.bg',
        someHTML: "<h1>This is a text in h1 tag</h1>"
    },
    methods: {
        myFunc() {
            this.propertyName = this.propertyName.toUpperCase();
        }
    }
})
