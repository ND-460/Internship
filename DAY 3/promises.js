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
document.getElementById("btn1").addEventListener("click",() => {
    displayOutput("Loading...");
    myPromise().then((res) => {
        displayOutput(`Success: ${res}`)
    }).catch((err) => {displayOutput(`Failure: ${err}`)});
});
function displayOutput(message)
{
    document.getElementById("output").innerHTML += `<p>${message}</p>`;
}