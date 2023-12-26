/* synchronous */
function loginUser(cb){
    console.log("logged in");
}
function displayUser(){
    console.log("Hello Ankit");
}
loginUser();
displayUser();

/* callback */

function loginUser1(cb){
    console.log("logged in");
    cb();
}
function displayUser1(){
    console.log("Hello Ankit");
}
loginUser1(displayUser1);