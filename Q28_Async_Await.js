function login(username, password){
    return new Promise((resolve, reject) => {
        console.log("Login is working");
        if(username=='Ankit' && password=='Ankit@123'){
            resolve(username);
        }
        else{
            reject('Username and password is not matched');
        }
    })
}

function displayData(username){
    return new Promise((resolve, reject) => {
        console.log('Displaying Data');
        resolve("hello"+username);
    })
}

async function doThis(){
    try{
   const data = await login('Ankit','Ankit@123');
   console.log(data);
   const res = await displayData(data);
   console.log(res);
}
catch(err){
    console.log(err);
}
}
doThis();