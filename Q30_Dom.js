function mouseDownEvent(){
document.querySelector('#box').style.backgroundColor="green";
}

function onMouseUpEvent(){
    setTimeout(() => {
        document.querySelector('#box').style.backgroundColor="yellow"; 
    }, 2000);
    
}
function clickEvent(){
    setTimeout(() => {
        document.querySelector('#box').style.backgroundColor="blue"; 
    }, 5000);
}
function demo(){
    let a = document.querySelector('#FirstName');
    console.log(a.value);
    a.value = a.value.toUpperCase();
}
function getData(){
    console.log("Get Data")
}