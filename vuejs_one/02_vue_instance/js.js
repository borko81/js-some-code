let app = new Vue({
    el: '#root',
    data: {
        yes: true,
        no: false,
        buttonPositive: 'Hide',
        buttonNegative: 'Show',
        items: ['first', 'two', '3']
    },
    methods: {
        toggleYes() {
            this.yes = ! this.yes;
            this.$refs.btnToggle.innerText = this.yes?'Hide':'Show';
        }
    },
    computed: {
        myItems() {
            let rev_item = this.items.map(x=>x.toUpperCase())
            return rev_item
        }
    }
})