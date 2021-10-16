/*
    :click.stop prevent to add parent param in messages, if not
    use .stop, when click on middle for example in messages will
    add middle and outer one by one.
*/

let app = new Vue({
    el: '#root',
    data: {
        messages: []
    },
    template: `
        <div v-on:click.stop="messages.push('Outer')" class="container">
            <h4>-Outer-</h4>
            <div v-on:click.stop="messages.push('Middle')">
                <h4>-Middle-</h4>
                <div v-on:click.stop="messages.push('Bottom')">
                <h4>-Bottom-</h4>
                </div>
            </div>
        <div>

        <hr>
        
        <div>
            Last Clicked
            <ol>
                <li v-for="message in messages" style="color:red">{{ message }}</li>
            </ol>
            <input type="button" v-on:click="messages = []" value="Clear" />
        </div>
    `
})