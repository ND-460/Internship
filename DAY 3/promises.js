function myPromise()
{
    return new Promise((resolve,reject) =>{
    setTimeout(() => 
        {
            let condition = Math.random() > 0.5;
    if(condition)
        {
            resolve("Dataa fetched");
        }
    else
    {
        reject("Failed to fetch Data");
    }
        },2000);
});
}
let elem = document.getElementById("btn1");
document.getElementById("btn1").addEventListener("click",async() => {
    displayOutput("Loading...");
    elem.style.display = "none";
    await myPromise().then((res) => {
        displayOutput(`Success: ${res}`)
    }).catch((err) => {displayOutput(`Failure: ${err}`)});
    elem.style.display = "block";
});
function displayOutput(message)
{
    document.getElementById("output").innerHTML += `<p>${message}</p>`;
}