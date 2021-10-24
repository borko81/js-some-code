Vue.component('Example', {
    props: ['text', 'age'],
    template: `
        <div>
            <h1>{{text}} <span>{{age}}</span></h1>
        </div>
    `
})

Vue.component('Search', {
    template: `
        <div>
            <label>Search</label>
            <input type="text" v-on:keyup.enter.esc="$emit('input', $event.target.value)" />
        </div>
    `
})

let app = new Vue({
    el: '#root',
    data: {
        title: 'Compose example'
    }
})