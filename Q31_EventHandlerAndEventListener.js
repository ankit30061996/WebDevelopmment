//Event Listening:- It will handle all event.
document.querySelector('#Refresh').addEventListener('click',demo); 
document.querySelector('#Refresh').addEventListener('click',demo2); 


//  Event Handeling:- It will handle only one event.
//document.querySelector("#Refresh").onclick = demo;
//document.querySelector("#Refresh").onclick = demo2;

function demo(){
    console.log("Event1")
}
function demo2(){
    console.log("Event2")
}
