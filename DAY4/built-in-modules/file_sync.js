const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync("abc1.txt");
console.log(first.toString());
writeFileSync("write.txt","sdassfasfasfsf\n",{flag:'a'});