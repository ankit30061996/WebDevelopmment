console.log("Asynchronous Code");

setTimeout(function(){
    console.log("Waiting");
},3000);
setTimeout(()=>{
    console.log("Arrow function waiting");
},5000);

for(let a=0; a<5; a++){
    console.log(a);
}