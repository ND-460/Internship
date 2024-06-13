const http = require('http');
const port = 3000;
const server = http.createServer((req,res) =>{
    console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(req.url == '/')
        {
            res.end('<h1>Hello! This is Neel!</h1><i>Welcome to the world!</i>');
        }
        else if(req.url =="/home")
            {
                res.end('<h1>Welcome to Home Page!</h1>');
            }
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})