const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('T61(Math object).html')

const server = http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent)
})

server.listen(800,'127.0.0.1', ()=>{
    console.log('listening on port 800')
})

// 127.0.0.1:800 to open the server on chrome