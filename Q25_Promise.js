console.log("Promise and Fetch Program");
let myPromise=new Promise((resolve,reject)=>{
    let x=5;
    if(x==1){
        resolve('Ok Done');
    }
    else{
        reject('Sorry Failed');
    }
})
myPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})