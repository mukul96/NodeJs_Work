const fs=require('fs')
const path=require('path')
const inputFile=path.join(__dirname,'input');
const outputFile=path.join(__dirname,'output');
function getFizzBuzzforNum(num) {
    var res='';
    num=parseInt(num);
    if(num%3==0){
        res+='fizz';
    }
    else if(num%5==0){
        res+='buzz'
    }
    else{
        res+='FizzBuzz';
    }
    return res;
}
 function resultReducer(accum,currVal) {
     return accum+'\n'+ currVal;
 }
fs.readFile(inputFile,function (err,data) {
    //console.log(data.toString());
    "use strict"
    let fileData=data.toString();
    let fileDataValues=fileData.split(/\r?\n/);
    let fizzBuzzValues=fileDataValues.map(getFizzBuzzforNum)
   // console.log(fizzBuzzValues);
    let resString=fizzBuzzValues.reduce(resultReducer);
    fs.writeFile(outputFile,resString,function (err) {
        if(err) throw err;
        console.log('All done');
    })
})
