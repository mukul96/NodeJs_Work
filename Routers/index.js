const express =require('express')
const app=express()
const students=require('./routes/students')
const teacher=require('./routes/teacher')
const bp=require('body-parser')
app.use(students);
app.use(bp.json)
app.use(bp.urlencoded ({extended:true} ))
app.get('/',function (req,res) {
    console.log('')
    res.send('the main entry function');
})
app.listen(8000,function () {
    console.log('the url has ended');
})