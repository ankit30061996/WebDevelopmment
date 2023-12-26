/* async-await in JavaScript */
function login(username,password){
return new Promise((resolve, reject) => {
   console.log('login is working');
   if(username=='Ankit' && password=='123456'){
    resolve(username);
   }
   else {
    reject('username and password is not matched');
   }
})
}

function displayData(username){
    return new Promise((resolve, reject)=>{
        console.log('displaying data');
        resolve("Hello"+username);
    })
}
/*
login('Ankit','123456').then((data)=>{
    console.log(data);
    displayData(data).then((res)=>{
        console.log(res);
    })
})
.catch((error)=>{
    console.log(error)
})
*/
async function doThis(){
    try{
     const data = await login('Ankit','12345');
     console.log(data);
     const res = await displayData(data);
     console.log(res);
}
catch(error){
    console.log(error);
}}
doThis();