

//var k='some data value';



var obj={
    a:10
}
setTimeout(function () {
    obj.a=11;
},1000)
console.log("data is being read");
module.exports=obj;
