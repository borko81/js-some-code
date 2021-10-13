let app = new Vue({
    el: '#root',
    data: {
        show: false,
        num1 : 100,
        num2 : 200,
        result : '',
        mystile: {
            backgroundColor: "red",
            width: "100px",
            height: "100px"
        }
    },
    methods: {
        displayme: function (event) {
            console.log(event)
            this.show = true
            return this.result = this.num1 + this.num2
        },
        buttonClick: function () {
            this.num1 = this.num1 + 1
            return this.num1
        }
    },
    watch: {
        num1 : function(val) {
            if(this.num1 > 110) {
                this.num1 = 100
            }
        }
    }
})