let random=Math.random();
let a=prompt("Enter First Number");
let b=prompt("Enter Second Number");
let c=prompt("Enter Operations");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    console.log(`The rsult is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else{
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}