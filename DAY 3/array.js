let myObj = {name:"adad"};
let arr = ["savaj",myObj];
console.log("array>>>",arr[1].name);
let arr1 = [...arr];//spread operator
arr1[0] = "dadd";
let arr2 = [...arr1,1,2,3,4];
// let foundItem = arr2.every((item)=>item % 2 == 0);
//let foundItem = arr2.find((item)=>item % 2 == 0);
//let foundItem = arr2.findIndex((item)=>item % 2 == 0);
// let foundItem = arr2.some((item)=>item % 2 == 0);
// let foundItem = arr2.filter((item)=>item % 2 == 0);

let arrofobjs = [{name: "scdscsdc",asdsad:"asdsad"},{name: "scdscs",asdsad:"asdsad"},{name: "sdfsfsa",asdsad:"asdsad"}];
let arrobj = arrofobjs.filter((item,index) => item.name == "sdfsfsa");
// arr2 = arr2.concat(arr1);
let abc = [1,23,4,5,6];
let pushed = arr1.push(11);
let joined = arr1.join("");
let popped = arr2.pop();
let reduceditem = abc.reduce((acc,cur) => acc +cur)
let mapped = abc.map((item,index) return index>2)
console.log(arr,arr1,arr2,arrobj,pushed,popped,joined,reduceditem);