"use strict";
const route=require('express').Router();
let students=[
    {
        name:'Akash',
        age:15

    },
    {
        name:'Nimit',
        age:18
    },
    {
        name:'Hardik',
        age:44
    },
]

route.get('/student',function(req,res){
    res.send(students)
})
route.get('/student/:id',function (req,res) {
    res.send(students[(req.params.id) -1] )
})
route.post('/new',function (req,res) {
    students.push({
        name:req.params.name,
        age:req.params.age
    })
})
module.exports=route;
