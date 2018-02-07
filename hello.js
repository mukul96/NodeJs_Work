

//var a=require('./data')

//function sayHello(name) {
  //  console.log("hello "+name);
//}

//sayHello("students");
//console.log(window);
//console.log(document)
//console.log(process);
//console.log(global);
//console.log(global.process==process)// it will give false value due to the inter scope of javascript
var data=require('./data')

setInterval(function () {
    console.log(data.a)
},200);
//console.log(k);