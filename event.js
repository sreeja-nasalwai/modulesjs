const events=require('events');
var myEmit=new events.EventEmitter();
myEmit.on("some",()=>{
    console.log(" event");
})
myEmit.emit("some","Welcome");