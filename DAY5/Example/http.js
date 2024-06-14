require('dotenv').config();
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(req.url == '/')
        {
            res.end('<h1>You are on the root page</h1>');
        }
        else if(req.url =="/home")
            {
                res.end('<h1>You are on the home page</h1>');
            }
         else if(req.url =="/info")
                {
                    res.end('You are on the info page</h1>');
                }
        else{
            res.end("<h1>No page found</h1>");
        }
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})