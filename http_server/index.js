// By using express we dont need all the other module like fs,url etc

// const fs = require('fs');
// const url = require('url');


const http = require('http');
const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.get('/about' , (req,res) => {
    res.send("Welcome to about page");
})

app.listen(port = 4000 , () => console.log(`Server running on port ${port}`));

//using the express module we can reduce the code size 

// const myServer = http.createServer((req,res) => {
//         if (req.url === '/favicon.ico'){
//                 res.end();
//                 return;
//             }
//             const log = `${Date.now()}:new request received\n`;
//             const myUrl = url.parse(req.url,true);
//             console.log(myUrl);
//             fs.appendFile('log.txt', log, (err,data) => {
//                     switch(req.url){
//                             case '/':
//                 res.end("Welcome to My Server");
//                 break;
//             case '/about':
//                 res.end("About Page");
//                 const username = myUrl.query.username;
//                 res.end(`Welcome ${username}`);
//                 break;
//             default:
//                 res.end("404 Not Found");
//         }
//     })


// })

// these are not required insted use the above to call the express server
// const myServer = http.createServer(app);
// myServer.listen(port=4000,() => {
//     console.log(`Server is running ${port}`);
// })