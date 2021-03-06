const http = require('http');
const app = require('./app')
const server = http.createServer(app);

const {API_PORT}  = process.env
const port = process.env.PORT || API_PORT

// Server Listen
server.listen(port, () => {
    console.log('Server run on port', port)
})