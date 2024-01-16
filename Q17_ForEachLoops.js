const number=[23,21,45,32,49];
number.forEach(function(value,index,array){
    console.log(value,index,array);
})
number.forEach((value,index,array)=>{
    console.log(value,index,array);
})
number.forEach((value)=>{
    console.log(value)
})