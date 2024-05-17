var express=require('express');
var fs=require('fs');
var app=express();
app.get('/',(req,res)=>{
    res.send("Home Page");
});
app.get('/index1',(req,res)=>{
    res.sendFile('C://Users//CVR//Desktop//5j2//nodejs//index1.html');
})
app.get('/index',(req,res)=>{
    fs.readFile("./index1.html","utf-8",(err,data)=>{
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.send(data);
        }
    })
});
app.get('/contact',(req,res)=>{
    res.send("contact page")
});
app.get('/js',(req,res)=>{
    res.json([
        {"id":"13","branch":"cse","name":"sreeja"}
    ])
})
const students1 = [{"id":"12","name":"sreja"},
    {"id":"22","name":"bhoomi"}
];
// function middleware(req,res,next){
//     next();
// }
app.get('/students1',(req,res)=>{
    res.send(students1);
})
app.get('/students1/:id',(req,res)=>{
    const studid=req.params.id;
    const value=students1.find(student=>student.id===studid);
    res.send(value);
})
app.use(express.json());
app.post('/students1',(req,res)=>{
    const student={
        "id":"15",
        "name":"spoo",
    }
    students1.push(student);
    res.status(200).json(student);
})
app.put('/students1/:id',(req,res)=>{
    const student={
    
        "name":"spoo1",
    }
    students1.push(student);
    res.status(200).json(student);
})
app.delete('/students1/:id',(req,res)=>{
    const studid=req.params.id;
    const index=students1.findIndex(student=>student.id===studid)
    const delstudent=students1.splice(index,1)[0];
    res.json(delstudent)
})
app.get('/city',(req,res)=>{
    fs.readFile("./cities.json","utf-8",(err,data)=>{
         //do this and also use body parser
    })
})
app.listen(4323);