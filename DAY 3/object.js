let name = document.getElementById("name");
      let mob = document.getElementById("mobile");
      let email = document.getElementById("email");
      let submit = document.getElementById("submit");
      let tbody = document.getElementById("tbody");
      submit.addEventListener("click", onSubmit);
    function onSubmit()
    {

    }
    let myObj = {name:"vulcan",phone: "123345435353", nestobj : {key1: "value1"}, array : [1,2,3,4,5], fun: objFun};
    // Object.freeze(myObj);
    myObj.phone = "213111311";
    
    console.log(">>>>>>",myObj,myObj.name,myObj["phone"],myObj.nestobj.key1,myObj.array[3]);
    // let myObj2 = myObj;
    // myObj2.name = "afaf";
    // myObj.nestobj.key1 = "asdasd";
    function objFun()
    {
        console.log("function called");
        return true;
    }
    console.log(">>function>>",myObj.fun());
    //spread operator
    let myObj2 = {...myObj,address: "dsdsfdsf"};
    myObj2.name = "123";
    myObj.nestobj.key1 = "sacsd";
    console.log(">>>>>>",myObj,myObj2);
    console.log(">>>>>>",Object.values(myObj),Object.keys(myObj),Object.entries(myObj));