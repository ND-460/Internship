const fs = require("fs");
path1 = "file1.txt";
path2 = "file2.txt";
path3 = "file3.txt";
let a = 10;
let b = 20;

fs.writeFile('file1.txt',"Hello World",() => 
    {
        console.log("Written to file1");
    })
    console.log(a+b);
    console.log("finish reading file");