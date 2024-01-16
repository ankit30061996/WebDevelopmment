console.log("Callback");

function loginUser(cb){
    console.log("Logged In");
    cb();
}

function displayUser(){
    console.log("Hello Ankit");
}

loginUser(displayUser);