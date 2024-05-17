var fs=require('fs');
fs.readFile("readMe.txt","utf8",(err,data)=>{
    if(err)
        console.log("error");
    else{
        fs.writeFile("writeME.txt",data,(err)=>{
            if(err)
                console.log("error in writing data");
        })
    }
})
