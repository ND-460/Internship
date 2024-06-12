localStorage.setItem("key 1","value 1");
let localItem = localStorage.getItem("key 1");
let arr = [1,2,3,4];
let obj = {name: "hello",said: "123213"};
// localStorage.setItem("key 3",obj);
let item = localStorage.setItem("key 2",JSON.stringify([1,2,3,4,5]));
console.log(JSON.parse(item));
// let item = localStorage.getItem("key 3");
// console.log(item);