var express=require('express')
var app=express()

function m1(req,res,next) {
    console.log("Middleware 1");
    next();
}
function m2(req,res,next) {
    console.log("Middleware 2");
    next();
}
function m3(req,res) {
    console.log("Middleware 3");
    //res.end();
}

app.use(m1);
app.use(m2);


app.get('/',function (req,res,next) {
    console.log("in the main get function");
    res.send("in the making ");
    next()

})

app.use(m3);

app.listen(8000,function () {
    console.log("the server is at the port 8000");
})