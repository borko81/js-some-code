/*
Using deep property in watch, to monitoring object
immediate use to watch obj param with instance load
*/

let app = new Vue({
    el: '#root',
    data: {
        books: {
            title: 'borko',
            publisher: 'Author',
            year: 2021
        }
    },
    watch: {
        books: {
            handler: function(event) {
                if(event.title === 'borko') {
                    alert("Success")
                }
            },
            deep: true,
            immediate: true
        }
    }
})