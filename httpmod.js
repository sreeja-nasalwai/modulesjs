const http=require('http');
const fs=require('fs');
// http.createServer((req,res)=>{
//     console.log(req.url);
//     res.writeHead(200,{'content-type':'text'})
//     res.write("Hello world ,I am sreeja!");
//     res.end();
// }).listen(3001);
var students=[
    {"id":"1","name":"sreeja","branch":"cse"},
    {"id":"2","name":"sahithi","branch":"cse"},
]
let server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
        res.write("Hello world!program");
        res.end();
    }
    else if(req.url==='/students'){
        res.write(JSON.stringify(students));
        res.end();
    }
    else if(req.url==='/index1.html'){
        fs.readFile("index1.html","utf-8",(err,data)=>
        {
            res.write(data);
            res.end();
        })
    }
    else{
        res.write("no resource");
        res.end();
    }
})
server.listen(4000);