const Route1 = {template: `
    <div>
        This is text for route 1
    </div>
`}
const Route2 = {template: `
    <div>
        This is text for route 2
    </div>
`}


const routes = [
    {path: '/route1', component: Route1},
    {path: '/route2', component: Route2}
]

const router = new VueRouter({
    routes
})

let app = new Vue({
    el: '#root',
    data: {

    },
    router
})