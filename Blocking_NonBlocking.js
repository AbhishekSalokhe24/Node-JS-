const fs = require("fs");

// ------------Blocking code 

console.log("first");

let data = fs.readFileSync("./test.txt","utf-8");
console.log(data);

console.log("second");

console.log("\n")
// ---------------Non-Blocking code 

console.log("first");

fs.readFile("./test.txt","utf-8",(err,result)=>{
    if(err) console.log("some error");
    else console.log(result);
});

console.log("second");



// const os = require("os");

// // to check total cores in CPU
// console.log(os.cpus().length);

