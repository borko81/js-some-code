let name = "some name"
let hours = 'machine hours'
let prefix = 'machine'

let machine = {
    [name]: 'server',
    [hours]: 10000
};

console.log(machine['some name']);
console.log(machine['machine hours'])

let check = {
    [prefix + ' name']: 'server'
}

console.log(check['machine name']);

let server = {
    name: 'Server',
    param: null,
    restart() {
        console.log(`The ${this.name} is restarting`);
    },
    stop: function() {
        if (this.param == 'stop') {
            console.log('Server already stoped');
        } else {
            this.param = 'stop'
            console.log(`The server ${this.name} is shut down`);
        }
    },
    start: function() {
        console.log(`The server ${this.name} is starting`);
    }
}
server['restart']()
