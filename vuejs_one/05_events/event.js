let app = new Vue({
    el: '#root',
    data: {
        show: true
    },
    methods: {
        toggleShow: function() {
            this.show = !this.show
            this.$refs.showToggle.innerText = this.show ? "Hide Text" : "Show Text"
        }, 
    }
})
