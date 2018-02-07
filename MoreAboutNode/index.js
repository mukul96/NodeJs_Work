const path=require('path')
console.log(__dirname);

console.log(path.join(__dirname,'..'));
console.log(path.join(__dirname,'/public'))

const fs=require('fs')
fs.readdir(__dirname,function (err,files) {
    if(err) throw err
    console.log(files);
})