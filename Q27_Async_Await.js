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

login('Ankit','Ankit@123').then((data)=>{
    console.log(data);
    displayData(data).then((res)=>{
        console.log(res);
    })
})
.catch((err)=>{
    console.log(err);
})