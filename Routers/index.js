const express =require('express')
const app=express()
const students=require('./routes/students')
const teacher=require('./routes/teacher')

app.use(students);

app.get('/',function (req,res) {
    console.log('')
    res.send('the main entry function');
})
app.listen(8000,function () {
    console.log('the url has ended');
})