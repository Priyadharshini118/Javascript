
//Type 1
// let username;

// username=window.prompt("Enter your name");

// console.log(username);

//Type 2
//HTMl text box

let username;

document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myH1").textContent=`Hello ${username}`;
    console.log(username);
}