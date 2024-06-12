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
console.log(arr,arr1,arr2,arrobj);