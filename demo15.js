/* callback done */
let myPromise= new Promise(function(resolve, reject){
    let x=1;
    if(x==2){
        resolve('ok done');
    }
    else{
        reject('sorry failed');
    }
})
myPromise.then(function(resolve){
    console.log(resolve)
}).catch(function(error){
    console.log(error)
})