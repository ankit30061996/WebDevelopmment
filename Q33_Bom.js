const x = window.innerHeight;
const y = window.innerWidth;
console.log(x,y);
const z = window.location.href;
console.log(z);
const a = window.location.hostname;
console.log(a);
const b = window.location.pathname;
console.log(b);

function deleteData(){
    const g=confirm("Are you sure?");
    if(g){console.log("Ok deleting")}
    else{
        console.log("delete cancel");
    }
}