 function changeColor(){
    console.log("button clicked");
    const e = document.querySelectorAll('.submit');
    e[0].style.backgroundColor="blue";
    e[0].style.color="white";
    e[0].innerHTML="Button Clicked";
}
function demo(){
    document.querySelector('#heading').style.color="blue";
}
