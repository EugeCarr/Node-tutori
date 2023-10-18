const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', ()=> {
	console.log('data received')
})


customEmitter.on('response', (name, id)=>{
	console.log(`Different listener: Data Received from ${name} with id: ${id}`)
})
customEmitter.emit('response', "eugene", 25)

const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
	res.end('Welcome')
})

server.listen(5000)