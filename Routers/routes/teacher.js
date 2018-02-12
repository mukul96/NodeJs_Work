"use strict";
const route=require('express').Router()
let teachers=[
    {
        name:'bhaskar',
        age:15

    },
    {
        name:'Nimit',
        age:18
    },
    {
        name:'Vasudha',
        age:44
    },

]




route.get('/teachers',function(req,res){
    res.send(teachers)
})

module.exports=route;
