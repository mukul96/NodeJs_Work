const express=require('express')
const  app=express();

app.get('/',function (req,res) {
    res.send("in the making ");

})



app.listen(8000,function () {
    console.log("the server is at the port 8000");
})