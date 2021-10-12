let app = new Vue({
    el: '#root',
    data: {
        yes: true,
        no: false,
        buttonPositive: 'Hide',
        buttonNegative: 'Show',
        items: ['first', 'two', '3'],
        books: [
            {
                title: 'Entertaining Kids Book',
                price: 4.99,
                id: 0,
                genres: ['kids', 'fiction']
            },
            {
                title: 'Teen Drama',
                price: 5.99,
                id: 1,
                genres: ['teen', 'fiction']
            },
            {
                title: 'Boring Facts',
                price: 6.99,
                id: 2,
                genres: ['adult', 'non-fiction']
            },
            {
                title: 'Overly Complex Story',
                price: 7.99,
                id: 3,
                genres: ['adult', 'science fiction', 'fiction']
            }
        ]
    },
    methods: {
        toggleYes() {
            this.yes = !this.yes;
            this.$refs.btnToggle.innerText = this.yes ? 'Hide' : 'Show';
        }
    },
    computed: {
        myItems() {
            let rev_item = this.items.map(x => x.toUpperCase())
            return rev_item
        }
    }
})