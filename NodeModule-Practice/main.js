const http = require('http')
const PORT = 5555
const server =  http.createServer((req, res) => {
   if (req.url === '/') {
       res.end('<h1> Welcome to Home Page</h1>')
   }
})
server. listen(PORT, ()=>{
    console.log('Server started!')
})