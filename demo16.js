function demo(){
    const x=1;

    return new Promise((resolve, reject) => {
        if(x==2){
        resolve("ok done");}
        else {
        reject("fail");}
    })
}

demo().then(function(resolve){
    console.log(resolve);
}).catch(function(error){
    console.log(error);
});