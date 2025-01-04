console.log("Piya");
document.getElementById("myH1").innerHTML="hello";
// v32 for each
let numbers = [1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(display);

function double(element,index,array)
{
    array[index] = element*2;
}
function display(element){
    console.log(element);
}

let fruit = ["apple","orange","banana"];
//fruit.sort().reverse();
//fruit.forEach(upperCase);
fruit.forEach(capitalize);
fruit.forEach(display);
// for(let i of fruit)
// {
//     console.log(i);
// }
function upperCase(element,index,array){
    array[index]=element.toUpperCase();
}
function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
