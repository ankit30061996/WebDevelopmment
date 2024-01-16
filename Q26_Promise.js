const demo=()=>{
    const x=0;
    return new Promise((resolve,reject)=>{
        if(x==1){
            resolve('Ok Done');
        }
        else {
            reject('Sorry Failed');
        }
    })
}
demo().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});