const http = require('http');
const PORT = process.env.PORT ||  5000;

const app = require('./app')

const server = http.createServer(app)

server.listen(PORT, (req, res) => {
    console.log(`server listening on ${PORT}`)
})
