let arr=[1,2,3,4,5,6];
console.log(arr, typeof arr);
console.log(arr.length);

for(let index=0; index<arr.length; index++){
    const element=arr[index];
    console.log(element);
}

let arrNew=arr.map((e)=>{
    return e**2;
})
console.log(arrNew);

const greaterThanSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven))

const red=(a,b)=>{
    return a*b;
}

console.log(arr.reduce(red))