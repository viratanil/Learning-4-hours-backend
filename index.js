// console.log('Virt Anil');  

// const cat = require('cat-me')
// console.log(cat()); 

const http = require('http')

const server = http.createServer((req,res) => {
    res.end('Virat Anil')
})

server.listen(3001)
