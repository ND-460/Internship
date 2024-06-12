let title = document.getElementById("title");
let content = document.getElementById("content");
let submit = document.getElementById("btn");
let out = document.getElementById("res");
submit.addEventListener("click",onSubmit);
// let arr = ;
let x = [];
let y;
function onSubmit()
{
    var item = localStorage.setItem(title.value,content.value);
    x.push(title.value);
    title.value = content.value = "";
}
for(let i = 0;i < x.length;i++)
    {
        out.innerHTML += `<div class = "out-part"><h1>${x[i].value}</h1><p>${localStorage.getItem(x[i].value)}</p></div>`
    }