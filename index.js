const http = require("http");
const server = http.createServer();

server.listen('3008','localhost',(err)=>
{
    if(!err)
    {
        console.log("server is running on port 3008");
        console.log("press CTRL+C to disconnect from server");
        console.log("use http://localhost:3008/ to browse to your server");
    }
})